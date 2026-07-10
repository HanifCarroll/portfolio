import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import {
  generateProject,
  generatedVideosDir,
  listManifestSlugs,
  loadManifest,
  projectVideosDir,
  repoRoot,
  resolveManifestAsset,
  totalDuration,
  validateManifest,
} from "./project-video-lib.mjs";

test("every portfolio project has a valid video manifest", async () => {
  const slugs = await listManifestSlugs();
  const projectSlugs = (await readdir(join(repoRoot, "src/lib/projects")))
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""))
    .sort();
  assert.deepEqual(slugs, projectSlugs);
  for (const slug of slugs) {
    const manifest = await loadManifest(slug);
    const result = validateManifest(manifest, { expectedSlug: slug });
    assert.deepEqual(result.errors, [], `${slug}:\n${result.errors.join("\n")}`);
  }
});

test("generator creates a thin root and one modular composition per scene", async (context) => {
  const outputDir = join(generatedVideosDir, ".test-acquire");
  context.after(() => rm(outputDir, { recursive: true, force: true }));
  const generated = await generateProject("acquire", { outputDir });
  const index = await readFile(join(outputDir, "index.html"), "utf8");
  const inspection = await readFile(join(outputDir, "inspection.entry"), "utf8");
  const compositionFiles = await readdir(join(outputDir, "compositions"));
  const rootHtmlFiles = (await readdir(outputDir)).filter((file) => file.endsWith(".html"));
  const compositionSource = (
    await Promise.all(
      compositionFiles.map((file) => readFile(join(outputDir, "compositions", file), "utf8")),
    )
  ).join("\n");
  assert.equal(compositionFiles.length, generated.manifest.scenes.length);
  assert.deepEqual(rootHtmlFiles, ["index.html"]);
  assert.match(index, /data-composition-id="portfolio-acquire"/);
  assert.match(index, new RegExp(`data-duration="${totalDuration(generated.manifest)}"`));
  assert.equal(
    (index.match(/data-composition-src=/g) ?? []).length,
    generated.manifest.scenes.length,
  );
  assert.doesNotMatch(index, /https?:\/\//);
  assert.doesNotMatch(index, /data-layout-allow-(?:overlap|overflow)/);
  assert.doesNotMatch(inspection, /tl\.(?:to|fromTo)\("#slot-/);
  assert.match(compositionSource, /@font-face/);
  assert.match(compositionSource, /assets\/fonts\//);
  assert.ok(compositionSource.split("\n").length < 300);
  assert.doesNotMatch(
    `${index}\n${compositionSource}`,
    /fetch\(|Date\.now|performance\.now|Math\.random/,
  );
});

test("validator rejects non-explicit contracts", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.family = "guessed-family";
  manifest.scenes[0].asset = "../../../etc/passwd";
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("unknown family")));
  assert.ok(result.errors.some((message) => message.includes("asset must stay under")));
});

test("schema validation rejects injection, unknown fields, and malformed scenes without throwing", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.unexpected = true;
  manifest.scenes[0].asset = "assets/redacted/acquire-pursuits.png";
  manifest.scenes[0].assetAlt = "Safe proof";
  manifest.scenes[0].assetFit = 'cover; background-image: url("https://example.com")';
  manifest.scenes[1].duration = "7.8";
  manifest.scenes[2] = null;
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("additional properties")));
  assert.ok(result.errors.some((message) => message.includes("assetFit")));
  assert.ok(result.errors.some((message) => message.includes("duration")));
  assert.ok(result.errors.some((message) => message.includes("scenes[2] must be an object")));
});

test("a missing manifest slug returns validation errors instead of throwing during path checks", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  delete manifest.slug;
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(
    result.errors.some((message) => message.includes("must have required property 'slug'")),
  );
});

test("unknown and prototype-like primary fonts are rejected by the manifest contract", async () => {
  for (const font of ["Not A Bundled Font, sans-serif", "__proto__, sans-serif"]) {
    const manifest = structuredClone(await loadManifest("acquire"));
    manifest.theme.fontDisplay = font;
    const result = validateManifest(manifest, { expectedSlug: "acquire" });
    assert.ok(result.errors.some((message) => message.includes("bundled font family")));
  }
});

test("font stacks reject host-dependent named fallbacks", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.theme.fontBody = "Inter, Helvetica Neue, sans-serif";
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("only generic fallbacks")));
});

test("poster timestamps must use settled scene frames", async () => {
  const manifest = structuredClone(await loadManifest("client-feedback"));
  manifest.posterAt =
    manifest.scenes.slice(0, 3).reduce((total, scene) => total + scene.duration, 0) + 0.25;
  const result = validateManifest(manifest, { expectedSlug: "client-feedback" });
  assert.ok(result.errors.some((message) => message.includes("posterAt must use a settled frame")));
});

test("generated families, motifs, motions, and end assets are executable semantics", async (context) => {
  const outputDir = join(generatedVideosDir, ".test-redwriter");
  context.after(() => rm(outputDir, { recursive: true, force: true }));
  await generateProject("redwriter-comics", { outputDir });
  const firstScene = await readFile(
    join(outputDir, "compositions/01-scattered-artwork.html"),
    "utf8",
  );
  const endScene = await readFile(join(outputDir, "compositions/04-end.html"), "utf8");
  assert.match(firstScene, /family-visual-showcase/);
  assert.match(firstScene, /motif-gallery/);
  assert.match(firstScene, /x: -12, y: 5, scale: 1\.025/);
  assert.match(endScene, /end-lockup has-media/);
  assert.match(endScene, /class="end-media"/);
  assert.match(endScene, /Redwriter Comics logo/);
});

test("generator refuses to remove an output directory outside its managed root", async () => {
  await assert.rejects(
    () => generateProject("acquire", { outputDir: join(process.cwd(), "should-not-be-removed") }),
    /generated output must be a child/,
  );
});

test("asset containment follows symlinks instead of trusting lexical paths", async (context) => {
  const link = join(projectVideosDir, "acquire/assets/.external-asset-link");
  context.after(() => rm(link, { force: true }));
  await symlink("/etc/hosts", link);
  assert.throws(
    () => resolveManifestAsset("acquire", "assets/.external-asset-link"),
    /asset must stay under/,
  );
});

test("a stale generation lock is reclaimed safely", async (context) => {
  const outputDir = join(generatedVideosDir, ".test-stale-acquire");
  const lockPath = join(generatedVideosDir, "..test-stale-acquire-generation.lock");
  context.after(() =>
    Promise.all([rm(outputDir, { recursive: true, force: true }), rm(lockPath, { force: true })]),
  );
  await mkdir(generatedVideosDir, { recursive: true });
  await writeFile(
    lockPath,
    `${JSON.stringify({ pid: 999_999_999, startedAt: "2000-01-01T00:00:00.000Z" })}\n`,
  );
  await generateProject("acquire", { outputDir });
  assert.equal((await readdir(join(outputDir, "compositions"))).length, 6);
});
