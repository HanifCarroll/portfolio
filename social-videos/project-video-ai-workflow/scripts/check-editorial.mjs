import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const plan = JSON.parse(await readFile(join(projectDir, "editorial.json"), "utf8"));
const allowedRoles = new Set(["primary", "supporting", "orientation", "status"]);
const fontContract = [
  {
    family: "Portfolio Inter",
    file: "assets/fonts/inter-latin-400-normal.woff2",
  },
  {
    family: "Portfolio Inter",
    file: "assets/fonts/inter-latin-700-normal.woff2",
  },
  {
    family: "Portfolio EB Garamond",
    file: "assets/fonts/eb-garamond-latin-700-normal.woff2",
  },
  {
    family: "Portfolio IBM Plex Mono",
    file: "assets/fonts/ibm-plex-mono-latin-700-normal.woff2",
  },
];
const failures = [];
const round = (value) => Number(value.toFixed(3));

function words(value) {
  return String(value).match(/[\p{L}\p{N}]+(?:[.'’-][\p{L}\p{N}]+)*/gu) ?? [];
}

function visibleWords(source) {
  const template = source.match(/<template>([\s\S]*?)<\/template>/i)?.[1] ?? source;
  return words(
    template
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );
}

function openingTag(source, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return source.match(new RegExp(`<[^>]+\\bid="${escapedId}"[^>]*>`, "i"))?.[0];
}

function numberAttribute(tag, attribute) {
  if (!tag) return Number.NaN;
  return Number(tag.match(new RegExp(`\\b${attribute}="([\\d.]+)"`, "i"))?.[1]);
}

function sameNumber(actual, expected) {
  return Number.isFinite(actual) && Math.abs(actual - expected) < 0.0005;
}

const index = await readFile(join(projectDir, "index.html"), "utf8");
for (const font of fontContract) {
  let bytes;
  try {
    bytes = await readFile(join(projectDir, font.file));
  } catch {
    failures.push(`font contract is missing ${font.file}`);
  }
  if (bytes?.length === 0) failures.push(`font contract has an empty file: ${font.file}`);
  if (!index.includes(`font-family: "${font.family}"`)) {
    failures.push(`index.html has no @font-face for ${font.family}`);
  }
  if (!index.includes(`url("./${font.file}")`)) {
    failures.push(`index.html does not load ${font.file}`);
  }
}
const rootDuration = numberAttribute(openingTag(index, "root"), "data-duration");
const plannedDuration = round(plan.scenes.reduce((total, scene) => total + scene.duration, 0));
if (!sameNumber(rootDuration, plannedDuration)) {
  failures.push(`root duration ${rootDuration}s does not match editorial plan ${plannedDuration}s`);
}

const metrics = [];
let sceneStart = 0;
for (const scene of plan.scenes) {
  const sceneFindings = [];
  const fail = (message) => {
    const finding = `${scene.id}: ${message}`;
    sceneFindings.push(finding);
    failures.push(finding);
  };
  const source = await readFile(join(projectDir, scene.file), "utf8");
  for (const hostFamily of ['"Inter"', '"EB Garamond"', '"IBM Plex Mono"']) {
    if (source.includes(hostFamily)) {
      fail(`${scene.file} uses unbundled host font ${hostFamily}`);
    }
  }
  const compositionDuration = numberAttribute(openingTag(source, "root"), "data-duration");
  if (!sameNumber(compositionDuration, scene.duration)) {
    fail(`composition is ${compositionDuration}s; plan is ${scene.duration}s`);
  }
  if (typeof scene.intent !== "string" || scene.intent.trim() === "") {
    fail("intent must be a non-empty string");
  }

  const hostTag = openingTag(index, `el-${scene.id}`);
  const hostStart = numberAttribute(hostTag, "data-start");
  const hostDuration = numberAttribute(hostTag, "data-duration");
  if (!hostTag) {
    fail("scene host is missing from index.html");
  } else {
    if (!sameNumber(hostStart, sceneStart)) {
      fail(`host starts at ${hostStart}s; expected ${sceneStart}s`);
    }
    if (!sameNumber(hostDuration, scene.duration)) {
      fail(`host duration is ${hostDuration}s; expected ${scene.duration}s`);
    }
  }

  if (!Number.isFinite(scene.readingWindowEnd) || scene.readingWindowEnd <= 0) {
    fail("readingWindowEnd must be a positive scene-local timestamp");
  } else if (scene.readingWindowEnd > scene.duration) {
    fail(`readingWindowEnd ${scene.readingWindowEnd}s exceeds scene duration ${scene.duration}s`);
  }
  if (scene.final) {
    if (scene.outgoingTransitionId !== undefined) {
      fail("final scene cannot declare an outgoing transition");
    }
    if (!sameNumber(scene.readingWindowEnd, scene.duration)) {
      fail("final scene readingWindowEnd must equal its duration");
    }
  } else if (typeof scene.outgoingTransitionId !== "string") {
    fail("non-final scene must declare outgoingTransitionId");
  } else {
    const transitionTag = openingTag(index, scene.outgoingTransitionId);
    const transitionStart = numberAttribute(transitionTag, "data-start");
    if (!transitionTag) {
      fail(`outgoing transition #${scene.outgoingTransitionId} is missing from index.html`);
    } else {
      const transitionStartInScene = round(transitionStart - sceneStart);
      if (!sameNumber(transitionStartInScene, scene.readingWindowEnd)) {
        fail(
          `readingWindowEnd ${scene.readingWindowEnd}s does not match ${scene.outgoingTransitionId} start ${transitionStartInScene}s`,
        );
      }
    }
  }

  if (!Array.isArray(scene.textElements) || scene.textElements.length === 0) {
    fail("textElements must declare every viewer-facing text element");
  }
  const textTimingStartReads = source.match(/\.dataset\.textStart\b/g)?.length ?? 0;
  const textTimingDurationReads = source.match(/\.dataset\.textDuration\b/g)?.length ?? 0;
  if (textTimingStartReads < (scene.textElements?.length ?? 0)) {
    fail("each text entrance must read its data-text-start value in the GSAP timeline");
  }
  if (textTimingDurationReads < (scene.textElements?.length ?? 0)) {
    fail("each text entrance must read its data-text-duration value in the GSAP timeline");
  }
  const declaredSelectors = new Set();
  const textElements = (Array.isArray(scene.textElements) ? scene.textElements : []).map(
    (element, index) => {
      const label = `textElements[${index}]`;
      let elementTag;
      if (typeof element.selector !== "string" || !/^#[a-z][\w:-]*$/i.test(element.selector)) {
        fail(`${label}.selector must be a unique ID selector`);
      } else if (declaredSelectors.has(element.selector)) {
        fail(`${label}.selector duplicates ${element.selector}`);
      } else {
        declaredSelectors.add(element.selector);
        elementTag = openingTag(source, element.selector.slice(1));
        if (!elementTag) {
          fail(`${label}.selector ${element.selector} is missing from ${scene.file}`);
        }
      }
      if (!allowedRoles.has(element.role)) {
        fail(`${label}.role must be primary, supporting, orientation, or status`);
      }
      if (typeof element.text !== "string" || element.text.trim() === "") {
        fail(`${label}.text must be a non-empty string`);
      }
      if (
        !element.entrance ||
        !Number.isFinite(element.entrance.start) ||
        element.entrance.start < 0 ||
        !Number.isFinite(element.entrance.duration) ||
        element.entrance.duration < 0
      ) {
        fail(`${label}.entrance requires non-negative start and duration values`);
      }
      const sourceEntrance = {
        start: numberAttribute(elementTag, "data-text-start"),
        duration: numberAttribute(elementTag, "data-text-duration"),
      };
      if (!sameNumber(sourceEntrance.start, element.entrance?.start)) {
        fail(
          `${label}.entrance.start ${element.entrance?.start}s does not match ${element.selector} data-text-start ${sourceEntrance.start}s`,
        );
      }
      if (!sameNumber(sourceEntrance.duration, element.entrance?.duration)) {
        fail(
          `${label}.entrance.duration ${element.entrance?.duration}s does not match ${element.selector} data-text-duration ${sourceEntrance.duration}s`,
        );
      }
      return {
        selector: element.selector,
        role: element.role,
        text: element.text,
        wordCount: words(element.text).length,
        entrance:
          Number.isFinite(sourceEntrance.start) && Number.isFinite(sourceEntrance.duration)
            ? sourceEntrance
            : element.entrance,
      };
    },
  );

  const declaredWords = textElements.flatMap((element) => words(element.text));
  const renderedWords = visibleWords(source);
  if (JSON.stringify(renderedWords) !== JSON.stringify(declaredWords)) {
    fail(`rendered viewer text differs from editorial.json (${renderedWords.join(" ") || "none"})`);
  }

  const textSettledAt = round(
    Math.max(
      0,
      ...textElements.map(({ entrance }) =>
        Number.isFinite(entrance?.start) && Number.isFinite(entrance?.duration)
          ? entrance.start + entrance.duration
          : 0,
      ),
    ),
  );
  const usableSettledHold = round(scene.readingWindowEnd - textSettledAt);
  const requiredReadingTime = round(declaredWords.length / (plan.readingRateWpm / 60));
  const readingMargin = round(usableSettledHold - requiredReadingTime);
  const minimumMargin = scene.final
    ? plan.finalMinimumSafetyMarginSeconds
    : plan.minimumSafetyMarginSeconds;
  if (usableSettledHold < plan.minimumSettledHoldSeconds) {
    fail(`${usableSettledHold}s settled hold is below ${plan.minimumSettledHoldSeconds}s`);
  }
  if (readingMargin < minimumMargin) {
    fail(`${readingMargin}s reading margin is below ${minimumMargin}s`);
  }
  metrics.push({
    scene: scene.id,
    intent: scene.intent,
    textElements,
    wordCount: declaredWords.length,
    sceneStart: round(sceneStart),
    duration: scene.duration,
    textSettledAt,
    readingWindowEnd: scene.readingWindowEnd,
    usableSettledHold,
    requiredReadingTime,
    readingMargin,
    minimumSettledHold: plan.minimumSettledHoldSeconds,
    minimumReadingMargin: minimumMargin,
    passed: sceneFindings.length === 0,
    findings: sceneFindings,
  });
  sceneStart = round(sceneStart + scene.duration);
}

console.table(
  metrics.map(
    ({ scene, wordCount, textSettledAt, readingWindowEnd, usableSettledHold, readingMargin }) => ({
      scene,
      words: wordCount,
      textSettledAt,
      readingWindowEnd,
      usableSettledHold,
      readingMargin,
    }),
  ),
);
await writeFile(
  join(projectDir, "editorial-report.json"),
  `${JSON.stringify(
    {
      videoId: "project-video-ai-workflow",
      standardVersion: plan.standardVersion,
      editorialProfile: plan.profile,
      tokenizerVersion: plan.tokenizerVersion,
      wordsPerMinute: plan.readingRateWpm,
      minimumSettledHoldSeconds: plan.minimumSettledHoldSeconds,
      minimumSafetyMarginSeconds: plan.minimumSafetyMarginSeconds,
      finalMinimumSafetyMarginSeconds: plan.finalMinimumSafetyMarginSeconds,
      duration: plannedDuration,
      passed: failures.length === 0,
      findings: failures,
      scenes: metrics,
    },
    null,
    2,
  )}\n`,
);
if (failures.length > 0) {
  for (const failure of failures) console.error(`ERROR ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Editorial QA passed for ${plan.scenes.length} scenes using ${plan.profile}.`);
}
