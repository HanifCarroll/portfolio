// Checks the business tools guide: every problem points at real entries, every entry has a problem,
// and every entry has the sections and a short enough <title>.
import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { guideGroups } from "../src/data/guide.ts";
import { guideProblems } from "../src/data/guide-problems.ts";

const root = fileURLToPath(new URL("..", import.meta.url));
const guideDir = join(root, "src/content/guide");
const errors = [];

const files = readdirSync(guideDir).filter((file) => file.endsWith(".md"));
const slugs = new Set(files.map((file) => basename(file, ".md")));
const groupIds = new Set(guideGroups.map(({ id }) => id));
const requiredSections = [
  "## What it is",
  "## When you need it",
  "## Popular choices",
  "## What to watch for",
  "## What I can help with",
];

for (const problem of guideProblems) {
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
  for (const section of requiredSections) {
    if (!raw.includes(`\n${section}\n`)) errors.push(`${file}: missing "${section}".`);
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

if (errors.length > 0) {
  console.error(`Guide check failed:\n${errors.join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${files.length} guide entries and ${guideProblems.length} problems.`);
