import { createHash } from "node:crypto";
import { existsSync, readFileSync, realpathSync } from "node:fs";
import {
  copyFile,
  mkdtemp,
  mkdir,
  open,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { basename, dirname, extname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

export const repoRoot = fileURLToPath(new URL("..", import.meta.url));
export const projectVideosDir = join(repoRoot, "project-videos");
export const generatedVideosDir = join(projectVideosDir, ".generated");
export const publicVideosDir = join(repoRoot, "public/videos/projects");
export const templateVersion = "2.0.0";
export const hyperframesVersion = "0.7.46";
export const generationModel = "gpt-5.6-sol";
export const editorialProfile = "silent-proof-v1";
export const editorialStandardVersion = "silent-designed-video-v1";
export const editorialTokenizerVersion = "whitespace-v1";
export const generationSkill = "general-video";
export const generationSkillRevision = "67f3dae100541eed";
export const transitionDuration = 0.5;
const generatedSentinel = ".project-video-generated";
const manifestSchemaPath = join(repoRoot, "docs/project-videos/video-manifest.schema.json");
const manifestSchema = JSON.parse(readFileSync(manifestSchemaPath, "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const validateSchema = ajv.compile(manifestSchema);
const gsapSourcePath = join(repoRoot, "node_modules/gsap/dist/gsap.min.js");
const fontRegistry = new Map([
  ["Archivo Black", { package: "archivo-black", weights: [400] }],
  ["EB Garamond", { package: "eb-garamond", weights: [400, 700, 800] }],
  ["IBM Plex Mono", { package: "ibm-plex-mono", weights: [400, 700] }],
  ["Inter", { package: "inter", weights: [400, 700, 900] }],
  ["JetBrains Mono", { package: "jetbrains-mono", weights: [400, 700] }],
  ["League Gothic", { package: "league-gothic", weights: [400] }],
  ["Montserrat", { package: "montserrat", weights: [400, 700, 900] }],
  ["Oswald", { package: "oswald", weights: [400, 700] }],
  ["Space Mono", { package: "space-mono", weights: [400, 700] }],
]);
const genericFontFamilies = new Set(["serif", "sans-serif", "monospace"]);

const allowedFamilies = new Set(["system-proof", "product-journey", "visual-showcase"]);
const allowedTimings = new Set(["standard", "short", "loop"]);
const allowedKinds = new Set([
  "problem",
  "context",
  "action",
  "workflow",
  "evidence",
  "report",
  "showcase",
  "result",
  "end",
]);
const allowedLayouts = new Set(["copy-left", "copy-right", "full", "stack", "rail", "report"]);
const allowedTransitions = new Set(["push-left", "push-up", "dissolve"]);
const allowedMotions = new Set(["assemble", "settle", "scroll", "drift"]);
const allowedTextRoles = new Set(["primary", "supporting", "orientation", "status"]);
const requiredThemeKeys = [
  "canvas",
  "surface",
  "ink",
  "muted",
  "border",
  "accent",
  "accentSoft",
  "accent2",
  "deep",
  "fontDisplay",
  "fontBody",
  "fontMono",
  "motif",
];
const timingRanges = {
  standard: [36, 60],
  short: [24, 40],
  loop: [14, 28],
};

const roundTime = (value) => Number(value.toFixed(3));

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const compactGeneratedHtml = (source) => `${source.replace(/\s*\n\s*/g, " ").trim()}\n`;

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const tokenizeViewerText = (value) =>
  String(value)
    .trim()
    .split(/\s+/u)
    .filter((token) => token !== "" && !/^\p{P}+$/u.test(token));

const countWords = (value) => tokenizeViewerText(value).length;

const editorialTiming = Object.freeze({
  wordsPerMinute: 140,
  normalTextSettledAt: 1.1,
  finalTextSettledAt: 0.5,
  labelStart: 0.74,
  labelDuration: 0.42,
  labelStagger: 0.09,
  minimumSettledHold: 2,
  requiredComprehensionMargin: 0.75,
  finalRequiredComprehensionMargin: 0.5,
});

function viewerTextElements(scene) {
  const elements = [];
  const add = (path, text, role) => {
    if (typeof text !== "string" || text.trim() === "") return;
    elements.push({ path, role: role ?? null, text, wordCount: countWords(text) });
  };
  add("eyebrow", scene?.eyebrow, scene?.textRoles?.eyebrow);
  add("headline", scene?.headline, scene?.textRoles?.headline);
  add("body", scene?.body, scene?.textRoles?.body);
  for (const [index, element] of (Array.isArray(scene?.assetText)
    ? scene.assetText
    : []
  ).entries()) {
    add(`assetText[${index}]`, element?.text, element?.role);
  }
  if (scene?.kind !== "end") {
    for (const [index, label] of (Array.isArray(scene?.labels) ? scene.labels : []).entries()) {
      add(`labels[${index}].title`, label?.title, label?.role);
      add(`labels[${index}].body`, label?.body, label?.role);
    }
    add("stat.value", scene?.stat?.value, scene?.stat?.role);
    add("stat.label", scene?.stat?.label, scene?.stat?.role);
  }
  return elements;
}

export function analyzeEditorialScene(
  scene,
  { isFinal = scene?.kind === "end", outgoingTransitionStart } = {},
) {
  const labelCount = isFinal || !Array.isArray(scene?.labels) ? 0 : scene.labels.length;
  const labelSettledAt =
    labelCount > 0
      ? editorialTiming.labelStart +
        editorialTiming.labelDuration +
        editorialTiming.labelStagger * (labelCount - 1)
      : 0;
  const textSettledAt = roundTime(
    Math.max(
      isFinal ? editorialTiming.finalTextSettledAt : editorialTiming.normalTextSettledAt,
      labelSettledAt,
    ),
  );
  const textElements = viewerTextElements(scene);
  const viewerFacingWordCount = textElements.reduce(
    (total, element) => total + element.wordCount,
    0,
  );
  const duration = Number.isFinite(scene?.duration) ? scene.duration : 0;
  const readingWindowEnd = roundTime(
    isFinal
      ? duration
      : Number.isFinite(outgoingTransitionStart)
        ? outgoingTransitionStart
        : duration,
  );
  const readingWindowEndBasis = isFinal ? "scene-end" : "outgoing-transition-start";
  const usableSettledHold = roundTime(Math.max(0, readingWindowEnd - textSettledAt));
  const requiredReadingTime = roundTime(
    viewerFacingWordCount / (editorialTiming.wordsPerMinute / 60),
  );
  const readingMargin = roundTime(usableSettledHold - requiredReadingTime);
  const requiredComprehensionMargin = isFinal
    ? editorialTiming.finalRequiredComprehensionMargin
    : editorialTiming.requiredComprehensionMargin;
  const findings = [];
  if (usableSettledHold < editorialTiming.minimumSettledHold) {
    findings.push(
      `${usableSettledHold}s settled hold is below ${editorialTiming.minimumSettledHold}s`,
    );
  }
  if (readingMargin < requiredComprehensionMargin) {
    findings.push(`${readingMargin}s reading margin is below ${requiredComprehensionMargin}s`);
  }
  return {
    intent: typeof scene?.intent === "string" ? scene.intent : null,
    textElements,
    viewerFacingWordCount,
    textSettledAt,
    readingWindowEnd,
    readingWindowEndBasis,
    usableSettledHold,
    requiredReadingTime,
    readingMargin,
    minimumSettledHold: editorialTiming.minimumSettledHold,
    requiredComprehensionMargin,
    wordsPerMinute: editorialTiming.wordsPerMinute,
    passed: findings.length === 0,
    findings,
  };
}

export function analyzeEditorialManifest(manifest) {
  const scenes = Array.isArray(manifest?.scenes) ? manifest.scenes : [];
  return scenes.map((scene, index) => {
    const isFinal = index === scenes.length - 1;
    return {
      id: typeof scene?.id === "string" ? scene.id : `scene-${index + 1}`,
      ...analyzeEditorialScene(scene, {
        isFinal,
        outgoingTransitionStart: isFinal ? undefined : scene?.duration,
      }),
    };
  });
}

export function createEditorialReport(manifest) {
  const scenes = analyzeEditorialManifest(manifest);
  const findings = scenes.flatMap((scene) =>
    scene.findings.map((finding) => `${scene.id}: ${finding}`),
  );
  return {
    editorialProfile: manifest?.editorialProfile ?? null,
    editorialStandardVersion,
    editorialTokenizerVersion,
    wordsPerMinute: editorialTiming.wordsPerMinute,
    minimumSettledHold: editorialTiming.minimumSettledHold,
    requiredComprehensionMargin: editorialTiming.requiredComprehensionMargin,
    finalRequiredComprehensionMargin: editorialTiming.finalRequiredComprehensionMargin,
    passed: findings.length === 0,
    findings,
    scenes,
  };
}

const isHex = (value) => /^#[0-9a-f]{6}$/i.test(value);

const withAlpha = (hex, alpha) => `${hex}${alpha}`;

const linearChannel = (channel) => {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const [red, green, blue] = hex
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16));
  return 0.2126 * linearChannel(red) + 0.7152 * linearChannel(green) + 0.0722 * linearChannel(blue);
};

const contrastRatio = (foreground, background) => {
  const light = Math.max(luminance(foreground), luminance(background));
  const dark = Math.min(luminance(foreground), luminance(background));
  return (light + 0.05) / (dark + 0.05);
};

const accessibleTextColor = (background, candidates) => {
  const unique = [...new Set([...candidates, "#000000", "#ffffff"])];
  return unique.find((candidate) => contrastRatio(candidate, background) >= 4.5) ?? unique.at(-1);
};

const isSafeCssPosition = (value) => /^[a-z0-9% ._-]+$/i.test(value);

const isSafeFontStack = (value) => /^[a-z0-9 ,.'"_-]+$/i.test(value);

const fontFamilyNames = (stack) =>
  stack.split(",").map((name) => name.trim().replace(/^(['"])(.*)\1$/, "$2"));

const primaryFontName = (stack) => fontFamilyNames(stack)[0];

const escapeCssString = (value) => String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"');

const isInside = (parent, child) => {
  const relativePath = relative(parent, child);
  return relativePath === "" || (!relativePath.startsWith(`..${sep}`) && relativePath !== "..");
};

const canonicalPath = (path) => (existsSync(path) ? realpathSync(path) : path);

function runtimeFontAssets(manifest) {
  const assets = [];
  const families = new Set(
    [manifest.theme.fontDisplay, manifest.theme.fontBody, manifest.theme.fontMono].map(
      primaryFontName,
    ),
  );
  for (const family of families) {
    const definition = fontRegistry.get(family);
    if (!definition) throw new Error(`${manifest.slug}: no bundled font registered for ${family}.`);
    for (const weight of definition.weights) {
      const filename = `${definition.package}-latin-${weight}-normal.woff2`;
      assets.push({
        family,
        weight,
        source: join(repoRoot, "node_modules/@fontsource", definition.package, "files", filename),
        target: `fonts/${filename}`,
      });
    }
  }
  return assets;
}

export const totalDuration = (manifest) => {
  if (
    !Array.isArray(manifest?.scenes) ||
    manifest.scenes.some((scene) => !Number.isFinite(scene?.duration))
  ) {
    return Number.NaN;
  }
  return roundTime(manifest.scenes.reduce((total, scene) => total + scene.duration, 0));
};

export const manifestPathFor = (slug) => join(projectVideosDir, slug, "video.json");

export const generatedPathFor = (slug) => join(generatedVideosDir, slug);

export const publicPathFor = (slug) => join(publicVideosDir, slug);

export async function listManifestSlugs() {
  const entries = await readdir(projectVideosDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .filter((slug) => existsSync(manifestPathFor(slug)))
    .sort();
}

export async function loadManifest(slug) {
  const path = manifestPathFor(slug);
  const source = await readFile(path, "utf8");
  return JSON.parse(source);
}

export function resolveManifestAsset(slug, asset) {
  if (typeof asset !== "string" || asset.trim() === "" || isAbsolute(asset)) {
    throw new Error(`${slug}: asset path must be a non-empty relative path: ${asset}`);
  }
  const resolved = resolve(projectVideosDir, slug, asset);
  const projectAssetRoot = join(projectVideosDir, slug, "assets");
  const sharedAssetRoot = join(repoRoot, "src/assets/img/projects");
  const canonicalRepoRoot = canonicalPath(repoRoot);
  const canonicalResolved = canonicalPath(resolved);
  const canonicalProjectAssetRoot = canonicalPath(projectAssetRoot);
  const canonicalSharedAssetRoot = canonicalPath(sharedAssetRoot);
  const sharedAssetName = basename(canonicalResolved);
  const isProjectAsset =
    isInside(canonicalRepoRoot, canonicalProjectAssetRoot) &&
    isInside(canonicalProjectAssetRoot, canonicalResolved);
  const isNamedSharedAsset =
    isInside(canonicalRepoRoot, canonicalSharedAssetRoot) &&
    isInside(canonicalSharedAssetRoot, canonicalResolved) &&
    (sharedAssetName.startsWith(`${slug}-`) || sharedAssetName.startsWith(`${slug}.`));
  if (!isProjectAsset && !isNamedSharedAsset) {
    throw new Error(
      `${slug}: asset must stay under project-videos/${slug}/assets or use a same-slug file under src/assets/img/projects: ${asset}`,
    );
  }
  return resolved;
}

export function validateManifest(manifest, { expectedSlug } = {}) {
  const errors = [];
  const warnings = [];
  const prefix = manifest?.slug || expectedSlug || "manifest";
  const pathSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(expectedSlug ?? "")
    ? expectedSlug
    : /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest?.slug ?? "")
      ? manifest.slug
      : undefined;
  const error = (message) => errors.push(`${prefix}: ${message}`);

  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    validateSchema(manifest);
    return {
      errors: (validateSchema.errors ?? []).map(
        (item) => `${prefix}: schema ${item.instancePath || "/"} ${item.message}.`,
      ),
      warnings,
    };
  }
  if (!validateSchema(manifest)) {
    for (const item of validateSchema.errors ?? []) {
      error(`schema ${item.instancePath || "/"} ${item.message}.`);
    }
  }
  if (manifest.version !== 2) error("version must be 2.");
  if (manifest.editorialProfile !== editorialProfile) {
    error(`editorialProfile must be ${editorialProfile}.`);
  }
  if (typeof manifest.slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest.slug)) {
    error("slug must be kebab-case.");
  }
  if (expectedSlug && manifest.slug !== expectedSlug) {
    error(`slug does not match its directory (${expectedSlug}).`);
  }
  for (const key of ["title", "viewer", "takeaway"]) {
    if (typeof manifest[key] !== "string" || manifest[key].trim() === "") {
      error(`${key} must be a non-empty string.`);
    }
  }
  if (!allowedFamilies.has(manifest.family)) error(`unknown family "${manifest.family}".`);
  if (!allowedTimings.has(manifest.timing)) error(`unknown timing "${manifest.timing}".`);

  if (!manifest.theme || typeof manifest.theme !== "object") {
    error("theme must be an object.");
  } else {
    for (const key of requiredThemeKeys) {
      if (typeof manifest.theme[key] !== "string" || manifest.theme[key].trim() === "") {
        error(`theme.${key} must be a non-empty string.`);
      }
    }
    for (const key of [
      "canvas",
      "surface",
      "ink",
      "muted",
      "border",
      "accent",
      "accentSoft",
      "accent2",
      "deep",
    ]) {
      if (manifest.theme?.[key] && !isHex(manifest.theme[key])) {
        error(`theme.${key} must be a six-digit hex color.`);
      }
    }
    for (const key of ["fontDisplay", "fontBody", "fontMono"]) {
      if (manifest.theme?.[key] && !isSafeFontStack(manifest.theme[key])) {
        error(`theme.${key} contains unsupported characters.`);
      } else if (manifest.theme?.[key] && !fontRegistry.has(primaryFontName(manifest.theme[key]))) {
        error(`theme.${key} must start with a bundled font family.`);
      } else if (manifest.theme?.[key]) {
        const nonGenericFallbacks = fontFamilyNames(manifest.theme[key])
          .slice(1)
          .filter((family) => !genericFontFamilies.has(family.toLowerCase()));
        if (nonGenericFallbacks.length > 0) {
          error(
            `theme.${key} may use only generic fallbacks after its bundled font; remove ${nonGenericFallbacks.join(", ")}.`,
          );
        }
      }
    }
  }

  if (!Array.isArray(manifest.scenes) || manifest.scenes.length < 4 || manifest.scenes.length > 6) {
    error("scenes must contain between 4 and 6 entries.");
  } else {
    const ids = new Set();
    manifest.scenes.forEach((scene, index) => {
      const label = `scenes[${index}]`;
      if (!scene || typeof scene !== "object") {
        error(`${label} must be an object.`);
        return;
      }
      if (typeof scene.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(scene.id)) {
        error(`${label}.id must be kebab-case.`);
      } else if (ids.has(scene.id)) {
        error(`${label}.id duplicates "${scene.id}".`);
      } else {
        ids.add(scene.id);
      }
      if (!allowedKinds.has(scene.kind)) error(`${label}.kind is invalid.`);
      if (!allowedLayouts.has(scene.layout)) error(`${label}.layout is invalid.`);
      if (!allowedTransitions.has(scene.transition)) error(`${label}.transition is invalid.`);
      if (!allowedMotions.has(scene.motion)) error(`${label}.motion is invalid.`);
      for (const key of ["intent", "headline"]) {
        if (typeof scene[key] !== "string" || scene[key].trim() === "") {
          error(`${label}.${key} must be a non-empty string.`);
        }
      }
      for (const key of ["eyebrow", "body"]) {
        if (
          scene[key] !== undefined &&
          (typeof scene[key] !== "string" || scene[key].trim() === "")
        ) {
          error(`${label}.${key} must be a non-empty string when present.`);
        }
      }
      if (
        !scene.textRoles ||
        typeof scene.textRoles !== "object" ||
        Array.isArray(scene.textRoles)
      ) {
        error(`${label}.textRoles must declare a role for every rendered copy field.`);
      } else {
        for (const key of ["eyebrow", "headline", "body"]) {
          const hasText = typeof scene[key] === "string" && scene[key].trim() !== "";
          const hasRole = scene.textRoles[key] !== undefined;
          if (hasText && !allowedTextRoles.has(scene.textRoles[key])) {
            error(`${label}.textRoles.${key} must use a canonical text role.`);
          } else if (!hasText && hasRole) {
            error(`${label}.textRoles.${key} has no matching rendered ${key}.`);
          }
        }
        if (scene.textRoles.headline !== "primary") {
          error(`${label}.textRoles.headline must be primary.`);
        }
      }
      if (
        typeof scene.duration !== "number" ||
        !Number.isFinite(scene.duration) ||
        scene.duration <= 0
      ) {
        error(`${label}.duration must be a positive number.`);
      } else if (scene.duration < 2.5) {
        error(`${label}.duration must be at least 2.5 seconds.`);
      }
      const editorial = analyzeEditorialScene(scene);
      if (editorial.usableSettledHold < editorial.minimumSettledHold) {
        error(
          `${label} has ${editorial.usableSettledHold}s of settled hold before its ${editorial.readingWindowEndBasis}; minimum is ${editorial.minimumSettledHold}s.`,
        );
      }
      if (editorial.readingMargin < editorial.requiredComprehensionMargin) {
        error(
          `${label} has a ${editorial.readingMargin}s reading margin at ${editorial.wordsPerMinute} WPM; minimum is ${editorial.requiredComprehensionMargin}s.`,
        );
      }
      if (scene.asset) {
        if (typeof scene.asset !== "string") {
          error(`${label}.asset must be a relative path.`);
        } else {
          try {
            if (!pathSlug) throw new Error(`${prefix}: cannot resolve assets until slug is valid.`);
            const assetPath = resolveManifestAsset(pathSlug, scene.asset);
            if (!existsSync(assetPath)) error(`${label}.asset does not exist: ${scene.asset}`);
          } catch (assetError) {
            error(assetError.message);
          }
        }
        if (scene.assetPosition && !isSafeCssPosition(scene.assetPosition)) {
          error(`${label}.assetPosition contains unsupported characters.`);
        }
        if (!new Set(["cover", "contain"]).has(scene.assetFit ?? "cover")) {
          error(`${label}.assetFit must be cover or contain.`);
        }
        if (typeof scene.assetAlt !== "string" || scene.assetAlt.trim() === "") {
          error(`${label}.assetAlt is required when asset is present.`);
        }
      }
      if (scene.assetText !== undefined) {
        if (!Array.isArray(scene.assetText) || scene.assetText.length === 0) {
          error(`${label}.assetText must contain at least one declared readable element.`);
        } else {
          for (const [elementIndex, element] of scene.assetText.entries()) {
            if (
              !element ||
              !allowedTextRoles.has(element.role) ||
              typeof element.text !== "string" ||
              element.text.trim() === ""
            ) {
              error(`${label}.assetText[${elementIndex}] requires a canonical role and text.`);
            }
          }
        }
      }
      if (scene.labels !== undefined) {
        if (!Array.isArray(scene.labels) || scene.labels.length > 4) {
          error(`${label}.labels must be an array with at most 4 entries.`);
        } else {
          for (const [labelIndex, item] of scene.labels.entries()) {
            if (
              !item ||
              !allowedTextRoles.has(item.role) ||
              typeof item.title !== "string" ||
              item.title.trim() === "" ||
              typeof item.body !== "string" ||
              item.body.trim() === ""
            ) {
              error(`${label}.labels[${labelIndex}] requires a canonical role, title, and body.`);
            }
          }
        }
      }
      if (
        scene.stat !== undefined &&
        (!scene.stat ||
          !allowedTextRoles.has(scene.stat.role) ||
          typeof scene.stat.value !== "string" ||
          scene.stat.value.trim() === "" ||
          typeof scene.stat.label !== "string" ||
          scene.stat.label.trim() === "")
      ) {
        error(`${label}.stat requires a canonical role, value, and label.`);
      }
      const primaryBlocks = [
        ...Object.values(scene.textRoles ?? {}),
        ...(Array.isArray(scene.labels) ? scene.labels.map((item) => item?.role) : []),
        scene.stat?.role,
        ...(Array.isArray(scene.assetText) ? scene.assetText.map((item) => item?.role) : []),
      ].filter((role) => role === "primary").length;
      if (primaryBlocks > 1) {
        error(`${label} has ${primaryBlocks} primary text blocks; maximum is 1.`);
      }
      if (scene.kind === "end" && (scene.labels !== undefined || scene.stat !== undefined)) {
        error(`${label} cannot declare labels or a stat because end scenes do not render them.`);
      }
    });

    const finalScene = manifest.scenes.at(-1);
    if (finalScene?.kind !== "end") error("the final scene must use kind=end.");
    if (finalScene?.duration < 3) error("the final scene must hold for at least 3 seconds.");
    if (manifest.scenes.slice(0, -1).some((scene) => scene?.kind === "end")) {
      error("only the final scene may use kind=end.");
    }
  }

  const computedDuration = totalDuration(manifest);
  const duration = Number.isFinite(computedDuration) ? computedDuration : 0;
  const range = timingRanges[manifest.timing];
  if (range && (duration < range[0] || duration > range[1])) {
    error(
      `${manifest.timing} duration ${duration}s must be between ${range[0]}s and ${range[1]}s.`,
    );
  }
  if (
    typeof manifest.posterAt !== "number" ||
    manifest.posterAt < 0 ||
    manifest.posterAt >= duration
  ) {
    error(`posterAt must be within the ${duration}s composition.`);
  } else if (Number.isFinite(duration)) {
    let cursor = 0;
    const posterScene = manifest.scenes.find((scene) => {
      const containsPoster =
        manifest.posterAt >= cursor && manifest.posterAt < cursor + scene.duration;
      if (!containsPoster) cursor += scene.duration;
      return containsPoster;
    });
    if (posterScene) {
      const offset = manifest.posterAt - cursor;
      const remaining = posterScene.duration - offset;
      if (offset < 1.2 || remaining < 0.5) {
        error(
          `posterAt must use a settled frame at least 1.2s after scene start and 0.5s before scene end (currently ${offset.toFixed(2)}s in and ${remaining.toFixed(2)}s remaining).`,
        );
      }
    }
  }
  if (
    !manifest.privacy ||
    !Array.isArray(manifest.privacy.hide) ||
    !Array.isArray(manifest.privacy.safe)
  ) {
    error("privacy requires hide and safe arrays.");
  }
  if (!Array.isArray(manifest.sources) || manifest.sources.length === 0) {
    error("sources must contain at least one source reference.");
  } else {
    for (const [index, source] of manifest.sources.entries()) {
      if (typeof source !== "string" || source.trim() === "") continue;
      if (isAbsolute(source)) {
        error(`sources[${index}] must be relative: ${source}`);
        continue;
      }
      if (!pathSlug) {
        error(`sources[${index}] cannot be resolved until slug is valid.`);
        continue;
      }
      const sourcePath = resolve(projectVideosDir, pathSlug, source);
      if (!isInside(repoRoot, sourcePath)) {
        error(`sources[${index}] escapes the repository: ${source}`);
      } else if (!existsSync(sourcePath)) {
        error(`sources[${index}] does not exist: ${source}`);
      } else if (!isInside(canonicalPath(repoRoot), canonicalPath(sourcePath))) {
        error(`sources[${index}] resolves outside the repository through a symlink: ${source}`);
      }
    }
  }
  if (!manifest.generation || typeof manifest.generation !== "object") {
    error("generation must be an object.");
  } else {
    if (manifest.generation.model !== generationModel) {
      error(`generation.model must be ${generationModel}.`);
    }
    if (manifest.generation.templateVersion !== templateVersion) {
      error(`generation.templateVersion must be ${templateVersion}.`);
    }
    if (manifest.generation.hyperframesVersion !== hyperframesVersion) {
      error(`generation.hyperframesVersion must be ${hyperframesVersion}.`);
    }
  }

  return { errors, warnings };
}

function renderLabels(labels = []) {
  if (labels.length === 0) return "";
  return `<div class="evidence-list" data-layout-allow-occlusion>${labels
    .map(
      (
        label,
        index,
      ) => `<article class="evidence-card evidence-card-${index + 1} evidence-card-${escapeHtml(label.role)}">
        <strong data-text-role="${escapeHtml(label.role)}">${escapeHtml(label.title)}</strong>
        <span data-text-role="${escapeHtml(label.role)}">${escapeHtml(label.body)}</span>
      </article>`,
    )
    .join("")}</div>`;
}

function renderStat(stat) {
  if (!stat) return "";
  return `<div class="stat-card">
    <strong data-text-role="${escapeHtml(stat.role)}">${escapeHtml(stat.value)}</strong>
    <span data-text-role="${escapeHtml(stat.role)}">${escapeHtml(stat.label)}</span>
  </div>`;
}

function renderProof(scene, assetTarget) {
  if (scene.kind === "end") return "";
  const labels = renderLabels(scene.labels);
  const stat = renderStat(scene.stat);
  if (!assetTarget) {
    return `<div class="proof proof-native">
      <div class="proof-native-bar"><span></span><span></span><span></span></div>
      <div class="native-grid">
        <div class="native-primary">
          <div class="native-rail"></div>
        </div>
        ${stat || `<div class="native-signal"><i></i><i></i><i></i><i></i></div>`}
      </div>
      ${labels}
    </div>`;
  }
  const fit = scene.assetFit || "cover";
  const position = scene.assetPosition || "center";
  return `<div class="proof proof-window">
    <div class="window-bar">
      <div class="window-dots"><i></i><i></i><i></i></div>
    </div>
    <div class="image-viewport">
      <img
        class="proof-image"
        data-layout-allow-overflow
        src="${escapeHtml(assetTarget)}"
        alt="${escapeHtml(scene.assetAlt)}"
        style="object-fit:${fit};object-position:${escapeHtml(position)}"
      />
    </div>
    ${stat}
    ${labels}
  </div>`;
}

function renderSceneHtml({ manifest, scene, compId, assetTarget, renderDuration, fontFaces }) {
  const theme = manifest.theme;
  const rootId = `${compId}-root`;
  const headlineSize = scene.headline.length > 58 ? 68 : scene.headline.length > 38 ? 80 : 94;
  const copyFirst = scene.layout !== "copy-right";
  const proof = renderProof(scene, assetTarget);
  const endScene = scene.kind === "end";
  const repeatCount = Math.max(0, Math.floor(renderDuration / 2.4) - 1);
  const motionDuration = Math.max(1, roundTime(scene.duration - 0.9));
  const fontDisplay = theme.fontDisplay;
  const fontBody = theme.fontBody;
  const fontMono = theme.fontMono;
  const canvasAlpha = withAlpha(theme.accent, "18");
  const borderAlpha = withAlpha(theme.border, "B8");
  const accentAlpha = withAlpha(theme.accent, "26");
  const deepAlpha = withAlpha(theme.deep, "E8");
  const accentOnCanvas = accessibleTextColor(theme.canvas, [theme.accent, theme.ink, theme.deep]);
  const accentOnSurface = accessibleTextColor(theme.surface, [theme.accent, theme.ink, theme.deep]);
  const inkOnCanvas = accessibleTextColor(theme.canvas, [theme.ink, theme.deep, theme.surface]);
  const inkOnSurface = accessibleTextColor(theme.surface, [theme.ink, theme.deep, theme.canvas]);
  const mutedOnCanvas = accessibleTextColor(theme.canvas, [theme.muted, theme.ink, theme.deep]);
  const mutedOnSurface = accessibleTextColor(theme.surface, [theme.muted, theme.ink, theme.deep]);
  const surfaceOnDeep = accessibleTextColor(theme.deep, [theme.surface, theme.accentSoft]);
  const layoutClass = `layout-${scene.layout}`;
  const familyClass = `family-${manifest.family}`;
  const motifClass = `motif-${theme.motif}`;
  const endClass = endScene ? " is-end" : "";
  const endAsset =
    endScene && assetTarget
      ? `<div class="end-media">
          <img
            class="proof-image"
            data-layout-allow-overflow
            src="${escapeHtml(assetTarget)}"
            alt="${escapeHtml(scene.assetAlt)}"
            style="object-fit:${scene.assetFit || "cover"};object-position:${escapeHtml(scene.assetPosition || "center")}" />
        </div>`
      : "";
  const proofMarkup = endScene
    ? `<div class="end-lockup${endAsset ? " has-media" : ""}">
        <div class="end-copy">
          ${scene.eyebrow ? `<span data-text-role="${escapeHtml(scene.textRoles.eyebrow)}">${escapeHtml(scene.eyebrow)}</span>` : ""}
          <strong data-text-role="${escapeHtml(scene.textRoles.headline)}">${escapeHtml(scene.headline)}</strong>
          ${scene.body ? `<p data-text-role="${escapeHtml(scene.textRoles.body)}">${escapeHtml(scene.body)}</p>` : ""}
          <i></i>
        </div>
        ${endAsset}
      </div>`
    : proof;
  const copyMarkup = endScene
    ? ""
    : `<div class="copy">
        ${scene.eyebrow ? `<p class="eyebrow" data-text-role="${escapeHtml(scene.textRoles.eyebrow)}">${escapeHtml(scene.eyebrow)}</p>` : ""}
        <h1 class="headline" data-text-role="${escapeHtml(scene.textRoles.headline)}">${escapeHtml(scene.headline)}</h1>
        <span class="copy-rule"></span>
        ${scene.body ? `<p class="body-copy" data-text-role="${escapeHtml(scene.textRoles.body)}">${escapeHtml(scene.body)}</p>` : ""}
      </div>`;

  const imageMotion =
    assetTarget && !endScene
      ? scene.motion === "scroll"
        ? `if (proofImage) tl.fromTo(proofImage, { y: 0, scale: 1.06 }, { y: -24, scale: 1.12, duration: ${motionDuration}, ease: "sine.inOut" }, 0.72);`
        : scene.motion === "drift"
          ? `if (proofImage) tl.fromTo(proofImage, { x: -12, y: 5, scale: 1.025 }, { x: 12, y: -5, scale: 1.045, duration: ${motionDuration}, ease: "sine.inOut" }, 0.72);`
          : scene.motion === "assemble"
            ? `if (proofImage) tl.fromTo(proofImage, { scale: 1.055 }, { scale: 1, duration: 0.9, ease: "power3.out" }, 0.52);`
            : `if (proofImage) tl.fromTo(proofImage, { scale: 1 }, { scale: 1.035, duration: ${motionDuration}, ease: "sine.inOut" }, 0.72);`
      : "";
  const copyStart = endScene ? 0.06 : 0.2;
  const copyDuration = endScene ? 0.38 : 0.7;
  const ruleStart = endScene ? 0.12 : 0.36;
  const ruleDuration = endScene ? 0.3 : 0.58;
  const proofStart = endScene ? 0.08 : 0.28;
  const proofDuration = endScene ? 0.42 : 0.82;

  return `<!doctype html>
<html lang="en">
  <head><meta charset="UTF-8" /></head>
  <body>
    <template>
      <style>
        ${fontFaces
          .map(
            ({ family, weight, target }) =>
              `@font-face { font-family: "${escapeCssString(family)}"; src: url("assets/${target}") format("woff2"); font-style: normal; font-weight: ${weight}; font-display: block; }`,
          )
          .join("\n        ")}
        * { box-sizing: border-box; }
        .scene-frame {
          position: absolute;
          inset: 0;
          width: 1920px;
          height: 1080px;
          overflow: hidden;
          color: ${inkOnCanvas};
          font-family: ${fontBody};
        }
        .family-product-journey .scene-fill {
          background-size: auto, 128px 128px, 128px 128px;
        }
        .family-visual-showcase .scene-fill {
          background-size: auto, 72px 72px, 72px 72px;
        }
        .scene-fill {
          position: absolute;
          inset: 0;
          background-color: ${theme.canvas};
          background-image:
            radial-gradient(circle at 76% 22%, ${accentAlpha} 0, ${theme.canvas}00 34%),
            linear-gradient(${borderAlpha} 2px, ${theme.canvas}00 2px),
            linear-gradient(90deg, ${borderAlpha} 2px, ${theme.canvas}00 2px);
          background-size: auto, 96px 96px, 96px 96px;
          background-position: center, -24px -24px, -24px -24px;
        }
        .edge-panel {
          position: absolute;
          width: 340px;
          height: 820px;
          border: 3px solid ${theme.border};
          background: ${theme.accentSoft};
          opacity: 0.7;
        }
        .edge-panel.left { left: -220px; top: 120px; transform: rotate(-7deg); }
        .edge-panel.right { right: -230px; top: 170px; transform: rotate(8deg); }
        .ambient-orb {
          position: absolute;
          right: 140px;
          top: 90px;
          width: 180px;
          height: 180px;
          border: 3px solid ${theme.accent};
          border-radius: 50%;
          opacity: 0.2;
        }
        .motif {
          position: absolute;
          right: -80px;
          bottom: 18px;
          width: 860px;
          height: 190px;
          opacity: 0.34;
          transform: rotate(-5deg);
        }
        .motif::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 5px solid ${canvasAlpha};
          background: repeating-linear-gradient(90deg, ${canvasAlpha} 0 18px, transparent 18px 62px);
        }
        .motif::after {
          content: "";
          position: absolute;
          right: 74px;
          top: -52px;
          width: 150px;
          height: 150px;
          border: 5px solid ${canvasAlpha};
          border-radius: 50%;
        }
        .motif-path {
          width: 720px;
          height: 150px;
          border-radius: 90px;
          transform: rotate(-3deg);
        }
        .motif-path::before {
          border-radius: 90px;
          background: repeating-radial-gradient(circle at 18% 50%, ${canvasAlpha} 0 11px, transparent 12px 58px);
        }
        .motif-path::after {
          right: 52px;
          top: 34px;
          width: 78px;
          height: 78px;
        }
        .motif-gallery {
          width: 690px;
          height: 260px;
          transform: perspective(700px) rotateY(-16deg) rotateZ(-4deg);
        }
        .motif-gallery::before {
          background: repeating-linear-gradient(90deg, ${canvasAlpha} 0 82px, transparent 82px 104px);
        }
        .motif-gallery::after {
          right: 42px;
          top: 42px;
          width: 170px;
          height: 170px;
          border-radius: 0;
        }
        .registration {
          position: absolute;
          width: 58px;
          height: 58px;
          color: ${accentOnCanvas};
          opacity: 0.85;
        }
        .registration.top { left: 42px; top: 42px; border-left: 3px solid; border-top: 3px solid; }
        .registration.bottom { right: 42px; bottom: 42px; border-right: 3px solid; border-bottom: 3px solid; }
        .scene-meta {
          position: absolute;
          z-index: 7;
          left: 96px;
          top: 60px;
          display: flex;
          align-items: center;
          gap: 18px;
          color: ${accentOnCanvas};
          font-family: ${fontMono};
          font-size: 19px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .scene-meta i { display: block; width: 72px; height: 3px; background: ${theme.accent}; }
        .scene-content {
          position: relative;
          z-index: 4;
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          align-items: center;
          width: 100%;
          height: 100%;
          gap: 64px;
          padding: 112px 96px 86px;
        }
        .layout-copy-right { grid-template-columns: minmax(0, 1.14fr) minmax(0, 0.86fr); }
        .layout-full, .layout-stack, .layout-rail, .layout-report { grid-template-columns: 0.78fr 1.22fr; }
        .family-product-journey .scene-content:not(.layout-copy-right) { grid-template-columns: minmax(0, 0.74fr) minmax(0, 1.26fr); }
        .family-product-journey .scene-content.layout-copy-right { grid-template-columns: minmax(0, 1.26fr) minmax(0, 0.74fr); }
        .family-visual-showcase .scene-content:not(.layout-copy-right) { grid-template-columns: minmax(0, 0.58fr) minmax(0, 1.42fr); gap: 44px; }
        .family-visual-showcase .scene-content.layout-copy-right { grid-template-columns: minmax(0, 1.42fr) minmax(0, 0.58fr); gap: 44px; }
        .copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
          min-width: 0;
          ${luminance(theme.canvas) < 0.12 ? `padding: 28px; border: 2px solid ${theme.border}; border-radius: 18px; background: ${theme.canvas};` : ""}
        }
        .layout-copy-right .copy { order: 2; }
        .layout-copy-right .proof, .layout-copy-right .end-lockup { order: 1; }
        .eyebrow {
          margin: 0;
          color: ${accentOnCanvas};
          font-family: ${fontMono};
          font-size: 21px;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }
        .headline {
          max-width: 780px;
          margin: 0;
          color: ${inkOnCanvas};
          font-family: ${fontDisplay};
          font-size: ${headlineSize}px;
          font-weight: 900;
          letter-spacing: -0.045em;
          line-height: 0.94;
        }
        .body-copy {
          max-width: 690px;
          margin: 0;
          color: ${mutedOnCanvas};
          font-size: 30px;
          font-weight: 700;
          line-height: 1.25;
        }
        .copy-rule { display: block; width: 100%; height: 4px; background: ${theme.accent}; transform-origin: left center; }
        .proof {
          position: relative;
          min-width: 0;
          height: 700px;
          border: 3px solid ${theme.border};
          border-radius: 26px;
          background: ${theme.surface};
          box-shadow: 0 34px 90px ${theme.deep}2E;
          overflow: hidden;
        }
        .layout-stack .proof { height: 640px; }
        .layout-stack .evidence-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .layout-rail .proof { height: 610px; }
        .layout-full .proof { height: 760px; }
        .layout-report .proof { height: 780px; }
        .family-product-journey .proof { border-radius: 36px; }
        .family-visual-showcase .proof { height: 790px; border-radius: 8px; }
        .family-visual-showcase .headline { font-size: ${Math.min(headlineSize, 78)}px; }
        .window-bar {
          display: flex;
          align-items: center;
          height: 62px;
          padding: 0 24px;
          border-bottom: 3px solid ${theme.border};
          color: ${mutedOnSurface};
          font-family: ${fontMono};
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .window-dots { display: flex; gap: 9px; }
        .window-dots i { width: 13px; height: 13px; border-radius: 50%; background: ${theme.border}; }
        .window-dots i:first-child { background: ${theme.accent2}; }
        .image-viewport { position: relative; height: calc(100% - 62px); overflow: hidden; background: ${theme.deep}; }
        .proof-image { display: block; width: 100%; height: 100%; }
        .evidence-list {
          position: absolute;
          right: 22px;
          bottom: 22px;
          left: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          z-index: 4;
        }
        .evidence-card {
          min-width: 0;
          padding: 15px 16px;
          border: 2px solid ${theme.border};
          border-radius: 14px;
          background: ${theme.surface}F2;
          box-shadow: 0 12px 32px ${theme.deep}24;
        }
        .evidence-card strong, .evidence-card span { display: block; }
        .evidence-card strong {
          color: ${accentOnSurface};
          font-family: ${fontMono};
          font-size: 15px;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .evidence-card span { margin-top: 6px; color: ${inkOnSurface}; font-size: 17px; font-weight: 700; line-height: 1.18; }
        .stat-card {
          position: absolute;
          right: 26px;
          top: 88px;
          z-index: 5;
          display: grid;
          gap: 4px;
          min-width: 180px;
          padding: 18px 20px;
          border: 3px solid ${theme.accent};
          border-radius: 16px;
          background: ${theme.surface};
          color: ${inkOnSurface};
        }
        .stat-card strong { font-family: ${fontDisplay}; font-size: 52px; line-height: 0.95; font-variant-numeric: tabular-nums; }
        .stat-card span { color: ${mutedOnSurface}; font-size: 16px; font-weight: 800; text-transform: uppercase; }
        .proof-native { padding: 26px; background: ${deepAlpha}; color: ${surfaceOnDeep}; }
        .proof-native-bar { display: flex; gap: 10px; padding-bottom: 22px; border-bottom: 2px solid ${theme.accent}; }
        .proof-native-bar span { display: block; width: 14px; height: 14px; border-radius: 50%; background: ${theme.accent}; }
        .proof-native-bar span:nth-child(2) { background: ${theme.accent2}; }
        .proof-native-bar span:nth-child(3) { background: ${theme.border}; }
        .native-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 26px; padding-top: 34px; }
        .native-primary { display: grid; align-content: center; gap: 18px; min-height: 310px; padding: 32px; border: 2px solid ${theme.accent}; background: ${theme.deep}; }
        .native-rail { display: block; width: 100%; height: 8px; background: ${theme.accent}; }
        .native-signal { display: flex; align-items: end; gap: 18px; min-height: 310px; padding: 30px; border: 2px solid ${theme.border}; }
        .native-signal i { flex: 1; background: ${theme.accent}; }
        .native-signal i:nth-child(1) { height: 34%; }
        .native-signal i:nth-child(2) { height: 66%; background: ${theme.accent2}; }
        .native-signal i:nth-child(3) { height: 48%; }
        .native-signal i:nth-child(4) { height: 88%; background: ${theme.surface}; }
        .end-lockup {
          display: grid;
          align-content: center;
          gap: 22px;
          min-height: 520px;
          padding: 58px;
          border: 3px solid ${theme.accent};
          background: ${theme.surface};
          box-shadow: 28px 28px 0 ${theme.accentSoft};
        }
        .end-copy { display: grid; align-content: center; gap: 22px; min-width: 0; }
        .end-copy p { margin: 0; color: ${mutedOnSurface}; font-size: 26px; font-weight: 700; line-height: 1.25; }
        .end-lockup.has-media { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); align-items: center; gap: 34px; }
        .end-media { height: 380px; overflow: hidden; border: 2px solid ${theme.border}; background: ${theme.deep}; }
        .end-media .proof-image { width: 100%; height: 100%; }
        .end-lockup span { color: ${accentOnSurface}; font-family: ${fontMono}; font-size: 20px; font-weight: 700; text-transform: uppercase; }
        .end-lockup strong { color: ${inkOnSurface}; font-family: ${fontDisplay}; font-size: 72px; line-height: 0.96; letter-spacing: -0.04em; }
        .end-lockup i { display: block; width: 70%; height: 6px; background: ${theme.accent}; }
        .is-end .headline { font-size: ${Math.min(100, headlineSize + 8)}px; }
        .is-end .scene-content { display: flex; align-items: center; justify-content: center; }
        .is-end .end-lockup { width: min(1500px, 100%); min-height: 620px; }
      </style>
      <div
        id="${rootId}"
        data-composition-id="${compId}"
        data-width="1920"
        data-height="1080"
        data-duration="${renderDuration}"
        style="position:absolute;inset:0;width:1920px;height:1080px;overflow:hidden"
      >
        <div class="scene-frame ${familyClass} ${layoutClass}${endClass}">
          <div class="scene-fill"></div>
          <div class="edge-panel left" data-layout-allow-overflow></div>
          <div class="edge-panel right" data-layout-allow-overflow></div>
          <div class="ambient-orb"></div>
          <div class="motif ${motifClass}" data-layout-ignore data-layout-allow-overflow></div>
          <div class="registration top"></div>
          <div class="registration bottom"></div>
          <div class="scene-meta"><i></i></div>
          <div class="scene-content ${layoutClass}">
            ${copyMarkup}
            ${proofMarkup}
          </div>
        </div>
      </div>
      <script>
        window.__timelines = window.__timelines || {};
        {
          const root = document.getElementById("${rootId}");
          const copy = root.querySelector(".copy");
          const rule = root.querySelector(".copy-rule");
          const proof = root.querySelector(".proof, .end-lockup");
          const cards = root.querySelectorAll(".evidence-card");
          const meta = root.querySelector(".scene-meta");
          const ambient = root.querySelector(".ambient-orb");
          const proofImage = root.querySelector(".proof-image");
          const tl = gsap.timeline({ paused: true });
          if (meta) tl.fromTo(meta, { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.36, ease: "expo.out" }, 0.14);
          if (copy) tl.fromTo(copy, { opacity: 0, x: ${copyFirst ? -72 : 72}, y: 16 }, { opacity: 1, x: 0, y: 0, duration: ${copyDuration}, ease: "power3.out" }, ${copyStart});
          if (rule) tl.fromTo(rule, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: ${ruleDuration}, ease: "power4.out" }, ${ruleStart});
          if (proof) tl.fromTo(proof, { opacity: 0, x: ${copyFirst ? 76 : -76}, scale: 0.965 }, { opacity: 1, x: 0, scale: 1, duration: ${proofDuration}, ease: "expo.out" }, ${proofStart});
          if (cards.length > 0) {
            tl.fromTo(cards, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.42, stagger: 0.09, ease: "back.out(1.2)" }, 0.74);
          }
          if (ambient) tl.fromTo(ambient, { opacity: 0.08, scale: 0.9 }, { opacity: 0.22, scale: 1.08, duration: 1.2, repeat: ${repeatCount}, yoyo: true, ease: "sine.inOut" }, 0.3);
          ${imageMotion}
          window.__timelines["${compId}"] = tl;
        }
      </script>
    </template>
  </body>
</html>
`;
}

function renderIndexHtml(manifest, scenes, { includeTransitions = true } = {}) {
  const duration = totalDuration(manifest);
  const rootId = `portfolio-${manifest.slug}`;
  const slots = scenes
    .map(
      ({ scene, compId, start, renderDuration }, index) => `<div
        id="slot-${compId}"
        data-composition-id="${compId}"
        data-composition-src="compositions/${String(index + 1).padStart(2, "0")}-${scene.id}.html"
        data-start="${start}"
        data-duration="${includeTransitions ? renderDuration : scene.duration}"
        data-track-index="${includeTransitions ? (index % 2) + 1 : 1}"
        data-width="1920"
        data-height="1080"
      ></div>`,
    )
    .join("\n      ");
  const transitions = includeTransitions
    ? scenes
        .slice(1)
        .map(({ scene, start, compId }, index) => {
          const oldId = `slot-${scenes[index].compId}`;
          const newId = `slot-${compId}`;
          if (scene.transition === "push-up") {
            return `tl.to("#${oldId}", { y: -1080, duration: ${transitionDuration}, ease: "power3.inOut" }, ${start});
      tl.fromTo("#${newId}", { y: 1080, opacity: 1 }, { y: 0, opacity: 1, duration: ${transitionDuration}, ease: "power3.inOut" }, ${start});`;
          }
          if (scene.transition === "dissolve") {
            return `tl.to("#${oldId}", { scale: 1.025, opacity: 0, duration: ${transitionDuration}, ease: "power2.inOut" }, ${start});
      tl.fromTo("#${newId}", { scale: 0.975, opacity: 0 }, { scale: 1, opacity: 1, duration: ${transitionDuration}, ease: "power2.inOut" }, ${start});`;
          }
          return `tl.to("#${oldId}", { x: -1920, duration: ${transitionDuration}, ease: "power3.inOut" }, ${start});
      tl.fromTo("#${newId}", { x: 1920, opacity: 1 }, { x: 0, opacity: 1, duration: ${transitionDuration}, ease: "power3.inOut" }, ${start});`;
        })
        .join("\n      ")
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>${escapeHtml(manifest.title)}</title>
    <script src="assets/gsap.min.js"></script>
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: ${manifest.theme.canvas}; }
      #root { position: relative; width: 1920px; height: 1080px; overflow: hidden; }
      #root > [data-composition-src] { position: absolute; inset: 0; width: 1920px; height: 1080px; overflow: hidden; }
    </style>
  </head>
  <body>
    <div
      id="root"
      data-composition-id="${rootId}"
      data-start="0"
      data-width="1920"
      data-height="1080"
      data-duration="${duration}"
      data-fps="30"
    >
      ${slots}
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      ${transitions}
      window.__timelines["${rootId}"] = tl;
    </script>
  </body>
</html>
`;
}

async function copySceneAssets(manifest, outputDir) {
  const assetsDir = join(outputDir, "assets");
  await mkdir(assetsDir, { recursive: true });
  const copied = new Map();
  let counter = 0;
  const targets = [];
  for (const scene of manifest.scenes) {
    if (!scene.asset) {
      targets.push(undefined);
      continue;
    }
    const source = resolveManifestAsset(manifest.slug, scene.asset);
    if (!copied.has(source)) {
      counter += 1;
      const extension = extname(source).toLowerCase() || ".png";
      const targetName = `asset-${String(counter).padStart(2, "0")}${extension}`;
      await copyFile(source, join(assetsDir, targetName));
      copied.set(source, targetName);
    }
    targets.push(`assets/${copied.get(source)}`);
  }
  return { targets, copiedAssets: [...copied.entries()] };
}

async function copyRuntimeAssets(manifest, outputDir) {
  const assetsDir = join(outputDir, "assets");
  await mkdir(join(assetsDir, "fonts"), { recursive: true });
  await copyFile(gsapSourcePath, join(assetsDir, "gsap.min.js"));
  const fontFaces = runtimeFontAssets(manifest);
  for (const face of fontFaces) {
    if (!existsSync(face.source)) {
      throw new Error(
        `${manifest.slug}: bundled font asset is missing: ${relative(repoRoot, face.source)}`,
      );
    }
    await copyFile(face.source, join(assetsDir, face.target));
  }
  return {
    fontFaces,
    copiedAssets: [
      { source: gsapSourcePath, target: "assets/gsap.min.js" },
      ...fontFaces.map((face) => ({ source: face.source, target: `assets/${face.target}` })),
    ],
  };
}

function managedGeneratedOutput(slug, outputDir) {
  const resolvedOutput = resolve(outputDir);
  if (resolvedOutput === generatedVideosDir || !isInside(generatedVideosDir, resolvedOutput)) {
    throw new Error(
      `${slug}: generated output must be a child of ${relative(repoRoot, generatedVideosDir)}.`,
    );
  }
  return resolvedOutput;
}

async function createGeneratedStaging(slug, outputDir) {
  await mkdir(generatedVideosDir, { recursive: true });
  const stagingDir = await mkdtemp(
    join(generatedVideosDir, `.${basename(outputDir)}-generation-${process.pid}-`),
  );
  await mkdir(join(stagingDir, "compositions"), { recursive: true });
  await writeFile(
    join(stagingDir, generatedSentinel),
    `${JSON.stringify({ slug, templateVersion, hyperframesVersion })}\n`,
  );
  return stagingDir;
}

async function verifyGeneratedStaging(stagingDir, expectedSceneCount) {
  for (const filename of [
    generatedSentinel,
    "index.html",
    "inspection.entry",
    "video.json",
    "generation-plan.json",
    "assets/gsap.min.js",
  ]) {
    if (!existsSync(join(stagingDir, filename))) {
      throw new Error(`Generated project is incomplete: missing ${filename}.`);
    }
  }
  const compositions = await readdir(join(stagingDir, "compositions"));
  if (compositions.length !== expectedSceneCount) {
    throw new Error(
      `Generated project has ${compositions.length} compositions; expected ${expectedSceneCount}.`,
    );
  }
}

async function promoteGeneratedStaging(stagingDir, outputDir) {
  const backupDir = join(
    generatedVideosDir,
    `.${basename(outputDir)}-previous-${process.pid}-${Date.now()}`,
  );
  const hadPrevious = existsSync(outputDir);
  if (hadPrevious) await rename(outputDir, backupDir);
  try {
    await rename(stagingDir, outputDir);
  } catch (error) {
    if (hadPrevious) await rename(backupDir, outputDir);
    throw error;
  }
  await rm(backupDir, { recursive: true, force: true });
}

function processIsRunning(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error.code !== "ESRCH";
  }
}

async function generationLockIsStale(lockPath) {
  try {
    const lockState = JSON.parse(await readFile(lockPath, "utf8"));
    return !processIsRunning(lockState.pid);
  } catch {
    const details = await stat(lockPath);
    return Date.now() - details.mtimeMs > 60_000;
  }
}

async function acquireGenerationLock(slug, lockPath) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    let lock;
    try {
      lock = await open(lockPath, "wx");
      await lock.writeFile(
        `${JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() })}\n`,
      );
      return lock;
    } catch (error) {
      if (lock) {
        await lock.close();
        await rm(lockPath, { force: true });
      }
      if (error.code !== "EEXIST") throw error;
      if (attempt === 0 && (await generationLockIsStale(lockPath))) {
        await rm(lockPath, { force: true });
        continue;
      }
      throw new Error(`${slug}: generation is already running for this output.`);
    }
  }
  throw new Error(`${slug}: could not acquire generation lock.`);
}

export async function generateProject(slug, { outputDir = generatedPathFor(slug) } = {}) {
  const manifest = await loadManifest(slug);
  const validation = validateManifest(manifest, { expectedSlug: slug });
  if (validation.errors.length > 0) {
    throw new Error(validation.errors.join("\n"));
  }
  outputDir = managedGeneratedOutput(slug, outputDir);
  const lockPath = join(generatedVideosDir, `.${basename(outputDir)}-generation.lock`);
  const lock = await acquireGenerationLock(slug, lockPath);
  let stagingDir;
  try {
    stagingDir = await createGeneratedStaging(slug, outputDir);
    const { targets, copiedAssets } = await copySceneAssets(manifest, stagingDir);
    const runtimeAssets = await copyRuntimeAssets(manifest, stagingDir);
    const editorialReport = createEditorialReport(manifest);
    let cursor = 0;
    const scenes = [];
    for (const [index, scene] of manifest.scenes.entries()) {
      const isLast = index === manifest.scenes.length - 1;
      const compId = `p${String(index + 1).padStart(2, "0")}-${slugify(scene.id)}`;
      const renderDuration = roundTime(scene.duration + (isLast ? 0 : transitionDuration));
      const start = roundTime(cursor);
      const sceneHtml = compactGeneratedHtml(
        renderSceneHtml({
          manifest,
          scene,
          compId,
          assetTarget: targets[index],
          renderDuration,
          fontFaces: runtimeAssets.fontFaces,
        }),
      );
      const filename = `${String(index + 1).padStart(2, "0")}-${scene.id}.html`;
      await writeFile(join(stagingDir, "compositions", filename), sceneHtml);
      scenes.push({ scene, compId, start, renderDuration, filename });
      cursor += scene.duration;
    }
    await writeFile(join(stagingDir, "index.html"), renderIndexHtml(manifest, scenes));
    await writeFile(
      join(stagingDir, "inspection.entry"),
      renderIndexHtml(manifest, scenes, { includeTransitions: false }),
    );
    await writeFile(join(stagingDir, "video.json"), `${JSON.stringify(manifest, null, 2)}\n`);
    await writeFile(
      join(stagingDir, "generation-plan.json"),
      `${JSON.stringify(
        {
          slug,
          title: manifest.title,
          family: manifest.family,
          timing: manifest.timing,
          editorialProfile: manifest.editorialProfile,
          editorialStandardVersion,
          editorialTokenizerVersion,
          editorialReport: {
            passed: editorialReport.passed,
            findings: editorialReport.findings,
          },
          duration: totalDuration(manifest),
          templateVersion,
          hyperframesVersion,
          generationSkill,
          generationSkillRevision,
          scenes: scenes.map(({ scene, compId, start, renderDuration, filename }, index) => ({
            id: scene.id,
            kind: scene.kind,
            compId,
            start,
            duration: scene.duration,
            renderDuration,
            filename,
            editorial: editorialReport.scenes[index],
          })),
          assets: copiedAssets
            .map(([source, target]) => ({
              source: relative(repoRoot, source),
              target: `assets/${target}`,
            }))
            .concat(
              runtimeAssets.copiedAssets.map(({ source, target }) => ({
                source: relative(repoRoot, source),
                target,
              })),
            ),
        },
        null,
        2,
      )}\n`,
    );
    await verifyGeneratedStaging(stagingDir, manifest.scenes.length);
    await promoteGeneratedStaging(stagingDir, outputDir);
    stagingDir = undefined;
    return { manifest, validation, outputDir, scenes, duration: totalDuration(manifest) };
  } finally {
    if (stagingDir) await rm(stagingDir, { recursive: true, force: true });
    await lock.close();
    await rm(lockPath, { force: true });
  }
}

export async function sourceDigest(slug) {
  const manifest = await loadManifest(slug);
  const projectMetadataPath = join(repoRoot, "src/lib/projects", `${slug}.json`);
  const inputPaths = [
    manifestPathFor(slug),
    projectMetadataPath,
    fileURLToPath(import.meta.url),
    join(repoRoot, "scripts/project-videos.mjs"),
    manifestSchemaPath,
    join(repoRoot, "package.json"),
    join(repoRoot, "bun.lock"),
    join(projectVideosDir, "frame.md"),
    join(projectVideosDir, ".hyperframes/expanded-prompt.md"),
    gsapSourcePath,
    ...runtimeFontAssets(manifest).map((asset) => asset.source),
    ...manifest.sources.map((source) => resolve(projectVideosDir, slug, source)),
    ...manifest.scenes
      .filter((scene) => scene.asset)
      .map((scene) => resolveManifestAsset(slug, scene.asset)),
  ];
  const hash = createHash("sha256");
  for (const path of [...new Set(inputPaths)].sort()) {
    hash.update(relative(repoRoot, path));
    hash.update("\0");
    if (path === projectMetadataPath) {
      const project = JSON.parse(await readFile(path, "utf8"));
      delete project.videos;
      hash.update(JSON.stringify(project));
    } else {
      hash.update(await readFile(path));
    }
    hash.update("\0");
  }
  return hash.digest("hex");
}

export function publicOutputFiles(slug, { dir = publicPathFor(slug) } = {}) {
  return {
    dir,
    overview: join(dir, "overview.mp4"),
    preview: join(dir, "preview.mp4"),
    poster: join(dir, "poster.png"),
    poster480: join(dir, "poster-480.webp"),
    poster960: join(dir, "poster-960.webp"),
    poster1440: join(dir, "poster-1440.webp"),
    generation: join(dir, "generation.json"),
  };
}

export function describeValidation(result) {
  return [
    ...result.errors.map((message) => `ERROR ${message}`),
    ...result.warnings.map((message) => `WARN ${message}`),
  ];
}

export function fileLabel(path) {
  return relative(repoRoot, path) || basename(path);
}

export async function ensureParent(path) {
  await mkdir(dirname(path), { recursive: true });
}
