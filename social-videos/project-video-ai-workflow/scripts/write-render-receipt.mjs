import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const outputPath = join(
  projectDir,
  "../../public/videos/social/project-video-ai-workflow-linkedin.mp4",
);
const plan = JSON.parse(await readFile(join(projectDir, "editorial.json"), "utf8"));
const editorialReportPath = join(projectDir, "editorial-report.json");
const editorialReport = JSON.parse(await readFile(editorialReportPath, "utf8"));
if (!editorialReport.passed) {
  throw new Error("editorial-report.json has not passed; run npm run check before rendering");
}
if (
  editorialReport.standardVersion !== plan.standardVersion ||
  editorialReport.editorialProfile !== plan.profile ||
  editorialReport.tokenizerVersion !== plan.tokenizerVersion
) {
  throw new Error("editorial-report.json does not match the current editorial contract");
}

const clipFiles = (await readdir(join(projectDir, "assets/clips")))
  .filter((file) => file.endsWith(".mp4"))
  .sort()
  .map((file) => `assets/clips/${file}`);
const fontFiles = (await readdir(join(projectDir, "assets/fonts")))
  .sort()
  .map((file) => `assets/fonts/${file}`);
const sourceFiles = [
  "index.html",
  "index.motion.json",
  "frame.md",
  "STORYBOARD.md",
  ".hyperframes/expanded-prompt.md",
  "editorial.json",
  "hyperframes.json",
  "package.json",
  "assets/runtime/gsap.min.js",
  "scripts/check-editorial.mjs",
  "scripts/write-render-receipt.mjs",
  ...plan.scenes.flatMap((scene) => [scene.file, scene.file.replace(/\.html$/, ".motion.json")]),
  ...clipFiles,
  ...fontFiles,
].sort();

async function digestFile(path) {
  return createHash("sha256")
    .update(await readFile(path))
    .digest("hex");
}

const sourceHasher = createHash("sha256");
for (const file of sourceFiles) {
  sourceHasher.update(file);
  sourceHasher.update("\0");
  sourceHasher.update(await readFile(join(projectDir, file)));
  sourceHasher.update("\0");
}
const sourceDigest = sourceHasher.digest("hex");
const outputDigest = await digestFile(outputPath);
const revision = { sourceDigest, outputDigest };
const receiptPath = join(projectDir, "render-receipt.json");
let previousReceipt;
try {
  previousReceipt = JSON.parse(await readFile(receiptPath, "utf8"));
} catch {
  previousReceipt = undefined;
}
const receiptUpdatedAt = new Date().toISOString();
const renderedAt =
  previousReceipt?.sourceDigest === sourceDigest && previousReceipt?.outputDigest === outputDigest
    ? previousReceipt.renderedAt
    : receiptUpdatedAt;

function pendingReview() {
  return {
    status: "pending",
    reviewer: null,
    reviewedAt: null,
    revision,
  };
}

function normalizeReview(name, value) {
  if (value === undefined || value?.status === "pending") return pendingReview();
  if (!value || !new Set(["passed", "failed"]).has(value.status)) {
    throw new Error(`${name}.status must be pending, passed, or failed`);
  }
  if (typeof value.reviewer !== "string" || value.reviewer.trim() === "") {
    throw new Error(`${name}.reviewer is required for ${value.status} evidence`);
  }
  if (typeof value.reviewedAt !== "string" || Number.isNaN(Date.parse(value.reviewedAt))) {
    throw new Error(`${name}.reviewedAt must be an ISO date-time`);
  }
  if (
    value.revision?.sourceDigest !== sourceDigest ||
    value.revision?.outputDigest !== outputDigest
  ) {
    throw new Error(`${name}.revision does not match the current source and output digests`);
  }
  return {
    status: value.status,
    reviewer: value.reviewer.trim(),
    reviewedAt: new Date(value.reviewedAt).toISOString(),
    revision,
  };
}

const reviewFlag = process.argv.indexOf("--review-file");
let reviewEvidence;
let reviewEvidencePath;
if (reviewFlag >= 0) {
  const suppliedPath = process.argv[reviewFlag + 1];
  if (!suppliedPath || suppliedPath.startsWith("--")) {
    throw new Error("--review-file requires a JSON path");
  }
  reviewEvidencePath = isAbsolute(suppliedPath) ? suppliedPath : resolve(projectDir, suppliedPath);
  reviewEvidence = JSON.parse(await readFile(reviewEvidencePath, "utf8"));
}

const { stdout } = await run("ffprobe", [
  "-v",
  "error",
  "-show_entries",
  "stream=codec_type,codec_name,pix_fmt,width,height,avg_frame_rate",
  "-show_entries",
  "format=duration,size",
  "-of",
  "json",
  outputPath,
]);
const probe = JSON.parse(stdout);
const video = probe.streams.find((stream) => stream.codec_type === "video");
const audioTracks = probe.streams.filter((stream) => stream.codec_type === "audio").length;
const receipt = {
  schemaVersion: 2,
  videoId: "project-video-ai-workflow",
  renderedAt,
  receiptUpdatedAt,
  outputPath: relative(projectDir, outputPath),
  outputDigest,
  sourceDigest,
  sourceFiles,
  renderer: "hyperframes",
  rendererVersion: "0.7.46",
  editorialStandardVersion: plan.standardVersion,
  editorialProfile: plan.profile,
  tokenizerVersion: plan.tokenizerVersion,
  editorialReport: "editorial-report.json",
  editorialReportDigest: await digestFile(editorialReportPath),
  review: {
    agentSnapshotReview: normalizeReview(
      "agentSnapshotReview",
      reviewEvidence?.agentSnapshotReview,
    ),
    humanPublicationReview: normalizeReview(
      "humanPublicationReview",
      reviewEvidence?.humanPublicationReview,
    ),
    evidenceFile: reviewEvidencePath ? relative(projectDir, reviewEvidencePath) : null,
    evidenceDigest: reviewEvidencePath ? await digestFile(reviewEvidencePath) : null,
  },
  media: {
    codec: video.codec_name,
    pixelFormat: video.pix_fmt,
    width: video.width,
    height: video.height,
    frameRate: video.avg_frame_rate,
    duration: Number(probe.format.duration),
    bytes: Number(probe.format.size),
    audioTracks,
  },
};

await writeFile(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`Wrote render-receipt.json for ${receipt.outputDigest.slice(0, 12)}.`);
