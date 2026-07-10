import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import {
  analyzeEditorialScene,
  createEditorialReport,
  editorialStandardVersion,
  editorialTokenizerVersion,
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
  const generationPlan = JSON.parse(
    await readFile(join(outputDir, "generation-plan.json"), "utf8"),
  );
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
  assert.equal(generationPlan.editorialProfile, "silent-proof-v1");
  assert.equal(generationPlan.editorialStandardVersion, "silent-designed-video-v1");
  assert.equal(generationPlan.editorialTokenizerVersion, "whitespace-v1");
  assert.equal(generationPlan.editorialReport.passed, true);
  assert.deepEqual(generationPlan.editorialReport.findings, []);
  assert.equal(generationPlan.scenes.length, generated.manifest.scenes.length);
  assert.ok(
    generationPlan.scenes.every(
      (scene) =>
        typeof scene.editorial.intent === "string" &&
        scene.editorial.textElements.every(
          (element) =>
            typeof element.text === "string" &&
            ["primary", "supporting", "orientation", "status"].includes(element.role),
        ) &&
        Number.isFinite(scene.editorial.viewerFacingWordCount) &&
        Number.isFinite(scene.editorial.textSettledAt) &&
        Number.isFinite(scene.editorial.readingWindowEnd) &&
        Number.isFinite(scene.editorial.usableSettledHold) &&
        Number.isFinite(scene.editorial.requiredReadingTime) &&
        Number.isFinite(scene.editorial.readingMargin) &&
        scene.editorial.passed === true,
    ),
  );
  assert.equal(generationPlan.scenes[0].editorial.readingWindowEnd, 7.8);
  assert.equal(
    generationPlan.scenes[0].editorial.readingWindowEndBasis,
    "outgoing-transition-start",
  );
  assert.equal(generationPlan.scenes.at(-1).editorial.readingWindowEndBasis, "scene-end");
});

test("editorial analysis counts every rendered manifest word and the label cascade", () => {
  const result = analyzeEditorialScene({
    kind: "workflow",
    intent: "Explain the review step.",
    textRoles: { headline: "primary" },
    headline: "Four words live here",
    duration: 8,
    assetText: [{ role: "orientation", text: "Proof image" }],
    labels: [{ role: "orientation", title: "Step one", body: "Review source" }],
    stat: { role: "status", value: "12", label: "verified records" },
  });
  assert.equal(result.intent, "Explain the review step.");
  assert.equal(result.viewerFacingWordCount, 13);
  assert.deepEqual(
    result.textElements.map(({ path, role, wordCount }) => ({ path, role, wordCount })),
    [
      { path: "headline", role: "primary", wordCount: 4 },
      { path: "assetText[0]", role: "orientation", wordCount: 2 },
      { path: "labels[0].title", role: "orientation", wordCount: 2 },
      { path: "labels[0].body", role: "orientation", wordCount: 2 },
      { path: "stat.value", role: "status", wordCount: 1 },
      { path: "stat.label", role: "status", wordCount: 2 },
    ],
  );
  assert.equal(result.textSettledAt, 1.16);
  assert.equal(result.readingWindowEnd, 8);
  assert.equal(result.readingWindowEndBasis, "outgoing-transition-start");
  assert.equal(result.usableSettledHold, 6.84);
  assert.equal(result.requiredReadingTime, 5.571);
  assert.equal(result.readingMargin, 1.269);
  assert.equal(result.passed, true);
});

test("canonical editorial reports include intent, roles, reading-window boundaries, and findings", async () => {
  const report = createEditorialReport(await loadManifest("redwriter-comics"));
  assert.equal(report.editorialProfile, "silent-proof-v1");
  assert.equal(report.editorialStandardVersion, "silent-designed-video-v1");
  assert.equal(report.editorialTokenizerVersion, "whitespace-v1");
  assert.equal(report.passed, true);
  assert.deepEqual(report.findings, []);
  const first = report.scenes[0];
  assert.equal(first.intent, "Artwork was scattered. Editors needed one review path.");
  assert.equal(first.readingWindowEnd, 4.5);
  assert.equal(first.readingWindowEndBasis, "outgoing-transition-start");
  assert.deepEqual(
    first.textElements.map(({ path, role }) => ({ path, role })),
    [{ path: "headline", role: "primary" }],
  );
  const end = report.scenes.at(-1);
  assert.equal(end.readingWindowEnd, 5);
  assert.equal(end.readingWindowEndBasis, "scene-end");
  assert.deepEqual(
    end.textElements.map(({ path, role }) => ({ path, role })),
    [
      { path: "eyebrow", role: "orientation" },
      { path: "headline", role: "primary" },
      { path: "assetText[0]", role: "orientation" },
    ],
  );
});

test("whitespace-v1 drops punctuation-only tokens without splitting meaningful tokens", () => {
  assert.equal(editorialStandardVersion, "silent-designed-video-v1");
  assert.equal(editorialTokenizerVersion, "whitespace-v1");
  const result = analyzeEditorialScene({
    kind: "result",
    intent: "Test the pinned tokenizer.",
    textRoles: { headline: "primary" },
    headline: "One\twell-tested\nresult. — ...",
    duration: 5,
  });
  assert.equal(result.viewerFacingWordCount, 3);
});

test("validator rejects copy that cannot be read after its entrance settles", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.scenes[0].headline = Array.from({ length: 25 }, (_, index) => `word${index}`).join(" ");
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("reading margin")));
});

test("optional copy and its role metadata must be added or removed together", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.scenes[0].body = "Necessary supporting context.";
  manifest.scenes[0].textRoles.body = "supporting";
  const valid = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.deepEqual(valid.errors, []);

  delete manifest.scenes[0].body;
  const invalid = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(invalid.errors.some((message) => message.includes("no matching rendered body")));
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

test("generated HTML renders only explicit manifest copy", async (context) => {
  const outputDir = join(generatedVideosDir, ".test-explicit-copy");
  context.after(() => rm(outputDir, { recursive: true, force: true }));
  await generateProject("acquire", { outputDir });
  const compositionFiles = await readdir(join(outputDir, "compositions"));
  const source = (
    await Promise.all(
      compositionFiles.map((file) => readFile(join(outputDir, "compositions", file), "utf8")),
    )
  ).join("\n");
  assert.doesNotMatch(source, /System proof|Product journey|Visual showcase/);
  assert.doesNotMatch(source, /Input<\/span>|Review<\/span>|Result<\/span>/);
  assert.doesNotMatch(source, /Opportunities were spread across too many tools/);
  assert.doesNotMatch(source, /The solution/);
  assert.doesNotMatch(source, />0[1-6]</);
  assert.match(source, /data-text-role="primary"/);
  assert.match(source, /data-text-role="orientation"/);
  assert.equal((source.match(/>Acquire<\/span>/g) ?? []).length, 1);
});

test("source-backed stats keep their canonical status role through HTML and reporting", async (context) => {
  const outputDir = join(generatedVideosDir, ".test-status-role");
  context.after(() => rm(outputDir, { recursive: true, force: true }));
  await generateProject("health-ai-search-audit", { outputDir });
  const source = await readFile(join(outputDir, "compositions/03-search-coverage.html"), "utf8");
  const plan = JSON.parse(await readFile(join(outputDir, "generation-plan.json"), "utf8"));
  assert.match(source, /<strong data-text-role="status">74<\/strong>/);
  assert.match(source, /<span data-text-role="status">search situations<\/span>/);
  assert.deepEqual(
    plan.scenes[2].editorial.textElements.map(({ path, role }) => ({ path, role })),
    [
      { path: "headline", role: "primary" },
      { path: "stat.value", role: "status" },
      { path: "stat.label", role: "status" },
    ],
  );
});

test("labels require a semantic role", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.scenes[0].labels = [{ title: "Source", body: "Public record" }];
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("role")));
});

test("only canonical roles are accepted and the headline remains the sole primary block", async () => {
  const manifest = structuredClone(await loadManifest("acquire"));
  manifest.scenes[0].textRoles.headline = "evidence";
  manifest.scenes[0].labels = [{ role: "primary", title: "Second", body: "Primary block" }];
  const result = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(result.errors.some((message) => message.includes("textRoles/headline")));
  assert.ok(
    result.errors.some((message) => message.includes("textRoles.headline must be primary")),
  );

  manifest.scenes[0].textRoles.headline = "primary";
  const duplicatePrimary = validateManifest(manifest, { expectedSlug: "acquire" });
  assert.ok(duplicatePrimary.errors.some((message) => message.includes("primary text blocks")));
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
