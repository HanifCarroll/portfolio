#!/usr/bin/env node

import { spawn } from "node:child_process";
import {
  access,
  copyFile,
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import {
  describeValidation,
  fileLabel,
  generateProject,
  generatedPathFor,
  generatedVideosDir,
  generationSkill,
  generationSkillRevision,
  hyperframesVersion,
  listManifestSlugs,
  loadManifest,
  publicOutputFiles,
  publicVideosDir,
  repoRoot,
  sourceDigest,
  templateVersion,
  totalDuration,
  validateManifest,
} from "./project-video-lib.mjs";

const hyperframesCli = join(repoRoot, "node_modules/hyperframes/dist/cli.js");
const projectMetadataDir = join(repoRoot, "src/lib/projects");
const commands = new Set(["list", "validate", "generate", "qa", "render", "all"]);

function printUsage() {
  console.log(`Project video pipeline

Usage:
  bun run videos:list
  bun run videos:validate -- [slug ...]
  bun run videos:generate -- [slug ...]
  bun run videos:qa -- [slug ...]
  bun run videos:render -- [slug ...] --approve-visuals [--quality high]
  bun run videos:all -- [slug ...] --approve-visuals [--quality high]

With no slugs, every manifest is processed. The all command validates,
generates, runs HyperFrames QA, renders, derives preview/poster assets, verifies
the media, and synchronizes project metadata.`);
}

function parseArguments(argv) {
  const args = [...argv];
  const command = args.shift() || "validate";
  const options = { quality: "high", snapshots: true, visualsApproved: false };
  const slugs = [];
  while (args.length > 0) {
    const value = args.shift();
    if (value === "--quality") {
      options.quality = args.shift();
    } else if (value === "--no-snapshots") {
      options.snapshots = false;
    } else if (value === "--approve-visuals") {
      options.visualsApproved = true;
    } else if (value === "--help" || value === "-h") {
      options.help = true;
    } else if (value.startsWith("--")) {
      throw new Error(`Unknown option: ${value}`);
    } else {
      slugs.push(value);
    }
  }
  if (!commands.has(command)) throw new Error(`Unknown command: ${command}`);
  if (!new Set(["draft", "standard", "high"]).has(options.quality)) {
    throw new Error(`Unknown render quality: ${options.quality}`);
  }
  if (new Set(["render", "all"]).has(command) && !options.visualsApproved) {
    throw new Error(
      `${command} requires --approve-visuals after the generated snapshots or Studio composition have been reviewed.`,
    );
  }
  if (new Set(["render", "all"]).has(command) && !options.snapshots) {
    throw new Error(`${command} cannot be combined with --no-snapshots.`);
  }
  return { command, options, slugs };
}

async function run(program, args, { capture = false, cwd = repoRoot } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(program, args, {
      cwd,
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
      stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    });
    let stdout = "";
    let stderr = "";
    if (capture) {
      child.stdout.setEncoding("utf8");
      child.stderr.setEncoding("utf8");
      child.stdout.on("data", (chunk) => {
        stdout += chunk;
      });
      child.stderr.on("data", (chunk) => {
        stderr += chunk;
      });
    }
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      const detail = capture ? `\n${stdout}${stderr}`.trimEnd() : "";
      reject(
        new Error(
          `${fileLabel(program)} ${args.join(" ")} failed ${signal ? `with ${signal}` : `with exit ${code}`}.${detail}`,
        ),
      );
    });
  });
}

function runHyperframes(args, options) {
  return run(process.execPath, [hyperframesCli, ...args], options);
}

function parseJsonOutput(output, label) {
  try {
    return JSON.parse(output);
  } catch (error) {
    throw new Error(`${label} did not return valid JSON: ${error.message}`);
  }
}

async function selectedSlugs(requested) {
  const available = await listManifestSlugs();
  if (requested.length === 0) return available;
  const availableSet = new Set(available);
  const missing = requested.filter((slug) => !availableSet.has(slug));
  if (missing.length > 0) throw new Error(`No video manifest found for: ${missing.join(", ")}`);
  return [...new Set(requested)];
}

async function validateProjects(slugs) {
  let errorCount = 0;
  let warningCount = 0;
  for (const slug of slugs) {
    const manifest = await loadManifest(slug);
    const result = validateManifest(manifest, { expectedSlug: slug });
    errorCount += result.errors.length;
    warningCount += result.warnings.length;
    for (const line of describeValidation(result)) console.log(line);
  }
  if (errorCount > 0) throw new Error(`${errorCount} manifest validation error(s).`);
  console.log(`Validated ${slugs.length} video manifest(s) with ${warningCount} warning(s).`);
}

async function verifyGenerationSkillRevision() {
  const { stdout } = await runHyperframes(["skills", "check", "--json"], {
    capture: true,
  });
  const result = parseJsonOutput(stdout, "HyperFrames skill check");
  const installed = result.skills?.find((skill) => skill.name === generationSkill);
  if (!installed?.installedHash) {
    throw new Error(
      `HyperFrames skill ${generationSkill} is not installed. Install the pinned skill set before generating videos.`,
    );
  }
  if (installed.installedHash !== generationSkillRevision) {
    throw new Error(
      `HyperFrames skill ${generationSkill} is ${installed.installedHash}; expected ${generationSkillRevision}. Review the skill change, then intentionally update generationSkillRevision and the template-system documentation before regenerating videos.`,
    );
  }
}

async function generateProjects(slugs) {
  for (const slug of slugs) {
    const result = await generateProject(slug);
    console.log(`Generated ${slug}: ${result.scenes.length} scenes, ${result.duration}s.`);
  }
}

function snapshotTimes(manifest) {
  let cursor = 0;
  return manifest.scenes.map((scene) => {
    const time = cursor + Math.min(Math.max(scene.duration * 0.48, 1.1), scene.duration - 0.25);
    cursor += scene.duration;
    return Number(time.toFixed(3));
  });
}

function reviewTimes(manifest) {
  const times = [...snapshotTimes(manifest)];
  let cursor = 0;
  for (const scene of manifest.scenes.slice(0, -1)) {
    cursor += scene.duration;
    times.push(Number((cursor + 0.25).toFixed(3)));
  }
  return times.sort((left, right) => left - right);
}

async function qaProject(slug, { snapshots = true } = {}) {
  const projectDir = generatedPathFor(slug);
  const manifest = await loadManifest(slug);
  const lint = parseJsonOutput(
    (await runHyperframes(["lint", projectDir, "--json"], { capture: true })).stdout,
    `${slug} lint`,
  );
  const runtime = parseJsonOutput(
    (await runHyperframes(["validate", projectDir, "--json"], { capture: true })).stdout,
    `${slug} validate`,
  );
  const inspectionDir = join(generatedVideosDir, `.inspect-${slug}-${process.pid}`);
  await rm(inspectionDir, { recursive: true, force: true });
  let inspect;
  try {
    await cp(projectDir, inspectionDir, { recursive: true });
    await copyFile(join(inspectionDir, "inspection.entry"), join(inspectionDir, "index.html"));
    inspect = parseJsonOutput(
      (
        await runHyperframes(
          ["inspect", inspectionDir, "--json", "--at", snapshotTimes(manifest).join(",")],
          { capture: true },
        )
      ).stdout,
      `${slug} inspect`,
    );
  } finally {
    await rm(inspectionDir, { recursive: true, force: true });
  }
  const report = {
    slug,
    checkedAt: new Date().toISOString(),
    hyperframesVersion,
    lint,
    runtime,
    inspect,
    snapshots: [],
  };
  const reportPath = join(projectDir, "qa-report.json");
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  const failures = [];
  if (lint.errorCount > 0 || lint.warningCount > 0) {
    failures.push(`lint returned ${lint.errorCount} error(s) and ${lint.warningCount} warning(s)`);
  }
  if ((runtime.errors?.length ?? 0) > 0 || (runtime.warnings?.length ?? 0) > 0) {
    failures.push(
      `runtime validation returned ${runtime.errors?.length ?? 0} error(s) and ${runtime.warnings?.length ?? 0} warning(s)`,
    );
  }
  if ((runtime.contrastFailures ?? 0) > 0) {
    failures.push(`contrast audit returned ${runtime.contrastFailures} failure(s)`);
  }
  if (inspect.errorCount > 0 || inspect.warningCount > 0) {
    failures.push(
      `layout inspection returned ${inspect.errorCount} error(s) and ${inspect.warningCount} warning(s)`,
    );
  }
  if (failures.length > 0) {
    throw new Error(`${slug} QA failed: ${failures.join("; ")}. See ${fileLabel(reportPath)}.`);
  }
  if (snapshots) {
    const snapshotsDir = join(projectDir, "snapshots");
    await rm(snapshotsDir, { recursive: true, force: true });
    await runHyperframes([
      "snapshot",
      projectDir,
      "--output",
      snapshotsDir,
      "--at",
      reviewTimes(manifest).join(","),
      "--no-end",
    ]);
  }
  report.snapshots = snapshots ? reviewTimes(manifest) : [];
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(
    snapshots
      ? `Automated QA passed for ${slug}; review the saved snapshots before rendering.`
      : `Automated QA passed for ${slug}; visual approval is still required.`,
  );
  return report;
}

async function qaProjects(slugs, options) {
  for (const slug of slugs) await qaProject(slug, options);
}

function frameRate(value) {
  const [numerator, denominator = "1"] = String(value).split("/").map(Number);
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) {
    return Number.NaN;
  }
  return numerator / denominator;
}

async function probeVideo(path) {
  const { stdout } = await run(
    "ffprobe",
    [
      "-v",
      "error",
      "-show_entries",
      "stream=codec_type,codec_name,pix_fmt,width,height,avg_frame_rate",
      "-show_entries",
      "format=duration,size",
      "-of",
      "json",
      path,
    ],
    { capture: true },
  );
  const data = parseJsonOutput(stdout, fileLabel(path));
  const stream = data.streams?.find((item) => item.codec_type === "video");
  return {
    width: Number(stream?.width),
    height: Number(stream?.height),
    fps: frameRate(stream?.avg_frame_rate),
    duration: Number(data.format?.duration),
    bytes: Number(data.format?.size),
    codec: stream?.codec_name,
    pixelFormat: stream?.pix_fmt,
    audioTracks: data.streams?.filter((item) => item.codec_type === "audio").length ?? 0,
  };
}

function assertVideo(label, actual, expectedDuration) {
  const problems = [];
  if (!Number.isFinite(actual.width) || !Number.isFinite(actual.height)) {
    problems.push("missing dimensions");
  } else if (actual.width !== 1920 || actual.height !== 1080) {
    problems.push(`${actual.width}x${actual.height}`);
  }
  if (!Number.isFinite(actual.fps)) problems.push("missing frame rate");
  else if (Math.abs(actual.fps - 30) > 0.01) problems.push(`${actual.fps}fps`);
  if (!Number.isFinite(actual.duration)) problems.push("missing duration");
  else if (Math.abs(actual.duration - expectedDuration) > 0.12) {
    problems.push(`${actual.duration}s instead of ${expectedDuration}s`);
  }
  if (!Number.isFinite(actual.bytes)) problems.push("missing file size");
  else if (actual.bytes < 10_000) problems.push(`${actual.bytes} bytes`);
  if (actual.codec !== "h264") problems.push(`${actual.codec ?? "missing"} codec`);
  if (actual.pixelFormat !== "yuv420p")
    problems.push(`${actual.pixelFormat ?? "missing"} pixel format`);
  if (actual.audioTracks !== 0) problems.push(`${actual.audioTracks} audio track(s)`);
  if (problems.length > 0)
    throw new Error(`${label} media verification failed: ${problems.join(", ")}.`);
}

async function deriveAssets(manifest, outputs) {
  const previewDuration = Math.min(12, totalDuration(manifest));
  await run("ffmpeg", [
    "-loglevel",
    "error",
    "-nostdin",
    "-y",
    "-i",
    outputs.overview,
    "-t",
    String(previewDuration),
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "20",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    outputs.preview,
  ]);
  await run("ffmpeg", [
    "-loglevel",
    "error",
    "-nostdin",
    "-y",
    "-i",
    outputs.overview,
    "-ss",
    String(manifest.posterAt),
    "-frames:v",
    "1",
    "-update",
    "1",
    outputs.poster,
  ]);
  const { default: sharp } = await import("sharp");
  for (const [width, path] of [
    [480, outputs.poster480],
    [960, outputs.poster960],
    [1440, outputs.poster1440],
  ]) {
    await sharp(outputs.poster).resize({ width }).webp({ quality: 84 }).toFile(path);
  }
  return previewDuration;
}

async function prepareProjectMetadata(manifest) {
  const path = join(projectMetadataDir, `${manifest.slug}.json`);
  const project = JSON.parse(await readFile(path, "utf8"));
  const duration = `${Math.round(totalDuration(manifest))} seconds`;
  project.videos = {
    overview: {
      src: `/videos/projects/${manifest.slug}/overview.mp4`,
      poster: `/videos/projects/${manifest.slug}/poster.png`,
      duration,
      label: "Project overview",
    },
    preview: {
      src: `/videos/projects/${manifest.slug}/preview.mp4`,
      poster: `/videos/projects/${manifest.slug}/poster.png`,
      duration: `${Math.round(Math.min(12, totalDuration(manifest)))} seconds`,
      label: "Preview",
    },
  };
  const temporaryPath = `${path}.video-${process.pid}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(project, null, 2)}\n`);
  return { path, temporaryPath };
}

async function currentCommit() {
  const { stdout } = await run("git", ["rev-parse", "HEAD"], { capture: true });
  return stdout.trim();
}

async function currentWorktreeIsDirty() {
  const { stdout } = await run("git", ["status", "--porcelain"], { capture: true });
  return stdout.trim() !== "";
}

async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function promoteRelease(slug, stagingDir, metadata) {
  const finalDir = publicOutputFiles(slug).dir;
  const backupDir = join(publicVideosDir, `.${slug}-previous-${process.pid}`);
  const hadPreviousRelease = await pathExists(finalDir);
  let installedNewRelease = false;
  await rm(backupDir, { recursive: true, force: true });
  if (hadPreviousRelease) await rename(finalDir, backupDir);
  try {
    await rename(stagingDir, finalDir);
    installedNewRelease = true;
    await rename(metadata.temporaryPath, metadata.path);
  } catch (error) {
    if (installedNewRelease) await rm(finalDir, { recursive: true, force: true });
    if (hadPreviousRelease) await rename(backupDir, finalDir);
    await rm(metadata.temporaryPath, { force: true });
    throw error;
  }
  await rm(backupDir, { recursive: true, force: true });
}

async function renderProject(slug, { quality, provenance }) {
  const manifest = await loadManifest(slug);
  await mkdir(publicVideosDir, { recursive: true });
  const stagingDir = await mkdtemp(join(publicVideosDir, `.${slug}-release-`));
  const outputs = publicOutputFiles(slug, { dir: stagingDir });
  let metadata;
  try {
    await runHyperframes([
      "render",
      generatedPathFor(slug),
      "--quality",
      quality,
      "--strict",
      "--quiet",
      "--skill",
      generationSkill,
      "--output",
      outputs.overview,
    ]);
    const previewDuration = await deriveAssets(manifest, outputs);
    const overviewProbe = await probeVideo(outputs.overview);
    const previewProbe = await probeVideo(outputs.preview);
    assertVideo(`${slug} overview`, overviewProbe, totalDuration(manifest));
    assertVideo(`${slug} preview`, previewProbe, previewDuration);
    const { default: sharp } = await import("sharp");
    const posterMetadata = await sharp(outputs.poster).metadata();
    if (posterMetadata.width !== 1920 || posterMetadata.height !== 1080) {
      throw new Error(
        `${slug} poster is ${posterMetadata.width}x${posterMetadata.height}, expected 1920x1080.`,
      );
    }
    for (const [path, width, height] of [
      [outputs.poster480, 480, 270],
      [outputs.poster960, 960, 540],
      [outputs.poster1440, 1440, 810],
    ]) {
      const metadata = await sharp(path).metadata();
      if (metadata.width !== width || metadata.height !== height || metadata.format !== "webp") {
        throw new Error(
          `${fileLabel(path)} is ${metadata.width}x${metadata.height} ${metadata.format}, expected ${width}x${height} webp.`,
        );
      }
    }
    const generation = {
      slug,
      renderedAt: new Date().toISOString(),
      sourceCommit: provenance.sourceCommit,
      sourceDirty: provenance.sourceDirty,
      sourceDigest: provenance.sourceDigests.get(slug),
      model: manifest.generation.model,
      templateVersion,
      hyperframesVersion,
      skill: generationSkill,
      skillRevision: generationSkillRevision,
      quality,
      duration: totalDuration(manifest),
      overview: overviewProbe,
      preview: previewProbe,
      posterAt: manifest.posterAt,
    };
    await writeFile(outputs.generation, `${JSON.stringify(generation, null, 2)}\n`);
    metadata = await prepareProjectMetadata(manifest);
    await promoteRelease(slug, stagingDir, metadata);
    console.log(
      `Rendered, verified, and promoted ${slug}: ${generation.duration}s at ${quality} quality.`,
    );
  } finally {
    await rm(stagingDir, { recursive: true, force: true });
    if (metadata?.temporaryPath) await rm(metadata.temporaryPath, { force: true });
  }
}

async function renderProjects(slugs, options) {
  const provenance = {
    sourceCommit: await currentCommit(),
    sourceDirty: await currentWorktreeIsDirty(),
    sourceDigests: new Map(),
  };
  for (const slug of slugs) provenance.sourceDigests.set(slug, await sourceDigest(slug));
  for (const slug of slugs) await renderProject(slug, { ...options, provenance });
}

async function main() {
  const parsed = parseArguments(process.argv.slice(2));
  if (parsed.options.help) {
    printUsage();
    return;
  }
  const slugs = await selectedSlugs(parsed.slugs);
  if (parsed.command === "list") {
    for (const slug of slugs) {
      const manifest = await loadManifest(slug);
      console.log(`${slug}\t${manifest.family}\t${manifest.timing}\t${totalDuration(manifest)}s`);
    }
    return;
  }
  await access(hyperframesCli);
  await validateProjects(slugs);
  if (parsed.command === "validate") return;
  await verifyGenerationSkillRevision();
  await generateProjects(slugs);
  if (parsed.command === "generate") return;
  await qaProjects(slugs, parsed.options);
  if (parsed.command === "qa") return;
  await renderProjects(slugs, parsed.options);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
