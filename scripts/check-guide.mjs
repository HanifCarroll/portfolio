// Checks the business tools guide: every problem points at real entries, every entry has a problem,
// and every entry has the sections and a short enough <title>.
import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { guideGroups, guideSections } from "../src/data/guide.ts";
import { deferredGuideCopy } from "../src/data/guide-deferred.es.ts";
import { guideProblems } from "../src/data/guide-problems.ts";

const root = fileURLToPath(new URL("..", import.meta.url));
const guideDir = join(root, "src/content/guide");
const errors = [];

const files = readdirSync(guideDir).filter((file) => file.endsWith(".md"));
const slugs = new Set(files.map((file) => basename(file, ".md")));
const groupIds = new Set(guideGroups.map(({ id }) => id));
const spanishDir = join(guideDir, "es");
const spanishFiles = readdirSync(spanishDir).filter((file) => file.endsWith(".md"));
const spanishSlugs = new Set(spanishFiles.map((file) => basename(file, ".md")));
const sections = Object.entries(guideSections);
const externalLinks = (raw) => [...raw.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]);
const charges = (raw, locale) => [...raw.matchAll(locale === "en"
  ? /\$(\d+(?:[.,]\d+)*)|(\d+)¢|(\d+(?:\.\d+)*)%/g
  : /USD\s+(\d+(?:[.,]\d+)*)|(\d+(?:,\d+)*)\s*%/g
)].map(([, dollars, centsOrPercent, enPercent]) => {
  if (dollars) return `USD ${locale === "en" ? +dollars.replaceAll(",", "") : +dollars.replaceAll(".", "").replace(",", ".")}`;
  if (locale === "en" && centsOrPercent) return `USD ${+centsOrPercent / 100}`;
  return `${+(enPercent ?? centsOrPercent).replace(",", ".")}%`;
});

for (const slug of slugs) {
  if (!spanishSlugs.has(slug) && (!deferredGuideCopy[slug]?.title.trim() || !deferredGuideCopy[slug]?.summary.trim()))
    errors.push(`${slug}: missing Spanish catalog copy for the English fallback.`);
}
for (const slug of Object.keys(deferredGuideCopy)) {
  if (!slugs.has(slug) || spanishSlugs.has(slug)) errors.push(`${slug}: stale Spanish fallback catalog copy.`);
}

for (const problem of guideProblems) {
  if (!problem.textEs?.trim()) errors.push(`Problem "${problem.text}": no Spanish translation.`);
  if (!groupIds.has(problem.group))
    errors.push(`Problem "${problem.text}": unknown group "${problem.group}".`);
  if (problem.entries.length === 0) errors.push(`Problem "${problem.text}": no entries.`);
  for (const slug of problem.entries) {
    if (!slugs.has(slug)) errors.push(`Problem "${problem.text}": unknown guide entry "${slug}".`);
  }
}

for (const file of files) {
  const slug = basename(file, ".md");
  const raw = readFileSync(join(guideDir, file), "utf8");
  if (!guideProblems.some((problem) => problem.entries.includes(slug))) {
    errors.push(`${file}: no problem in src/data/guide-problems.ts points to this entry.`);
  }
  for (const [id, section] of sections) {
    if (id !== "sources" && !raw.includes(`\n## ${section.en}\n`)) errors.push(`${file}: missing "${section.en}".`);
  }
  if (!raw.includes("](/contact/)"))
    errors.push(`${file}: "What I can help with" must link to /contact/.`);
  for (const heading of raw.match(/^#{1,4} .+$/gm) ?? []) {
    if (/\.\s*$/.test(heading)) errors.push(`${file}: heading ends with a period: ${heading}`);
  }
  const seoTitle = raw.match(/^seoTitle: "(.+)"$/m)?.[1] ?? "";
  if (`${seoTitle} | Hanif Carroll`.length > 60)
    errors.push(`${file}: seoTitle makes the <title> longer than 60 characters.`);
}

for (const file of spanishFiles) {
  const label = `es/${file}`;
  if (!slugs.has(basename(file, ".md"))) {
    errors.push(`${label}: no English entry.`);
    continue;
  }
  const raw = readFileSync(join(spanishDir, file), "utf8");
  const en = readFileSync(join(guideDir, file), "utf8");
  if (raw.match(/^group: .+$/m)?.[0] !== en.match(/^group: .+$/m)?.[0]) errors.push(`${label}: group differs from English.`);
  for (const [id, section] of sections) {
    if ((id !== "sources" || en.includes(`\n## ${section.en}\n`)) && !raw.includes(`\n## ${section.es} <!-- heading-id: ${id} -->\n`))
      errors.push(`${label}: missing "${section.es}" or its fragment ID.`);
  }
  if (!raw.includes("](/es/contact/)")) errors.push(`${label}: must link to /es/contact/.`);
  if (JSON.stringify(externalLinks(raw)) !== JSON.stringify(externalLinks(en))) errors.push(`${label}: external links differ from English.`);
  if (raw.includes("$") || JSON.stringify(charges(raw, "es")) !== JSON.stringify(charges(en, "en")))
    errors.push(`${label}: prices or percentages differ from English.`);
  const seoTitle = raw.match(/^seoTitle: "(.+)"$/m)?.[1] ?? "";
  if (!seoTitle || `${seoTitle} | Hanif Carroll`.length > 60) errors.push(`${label}: missing or too long seoTitle.`);
}

if (errors.length > 0) {
  console.error(`Guide check failed:\n${errors.join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${files.length} English guide entries, ${spanishFiles.length} Spanish entries, and ${guideProblems.length} problems in both languages.`);
