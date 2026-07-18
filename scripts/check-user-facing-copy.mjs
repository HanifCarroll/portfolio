import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";

const root = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(root, "dist");
const blockedWord = /\bproof\b/i;
const ignoredElements = new Set(["script", "style", "template", "noscript"]);
const visibleAttributes = new Set([
  "alt",
  "aria-description",
  "aria-label",
  "placeholder",
  "title",
  "value",
]);
const violations = [];

const htmlFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  });

const inspect = (node, file, ignored = false) => {
  const nextIgnored = ignored || ignoredElements.has(node.tagName);

  if (!nextIgnored && node.nodeName === "#text" && blockedWord.test(node.value)) {
    violations.push(`${file}: visible text`);
  }

  if (!nextIgnored && Array.isArray(node.attrs)) {
    for (const attribute of node.attrs) {
      const isVisible = visibleAttributes.has(attribute.name);
      const isMetaContent = node.tagName === "meta" && attribute.name === "content";
      if ((isVisible || isMetaContent) && blockedWord.test(attribute.value)) {
        violations.push(`${file}: ${node.tagName}[${attribute.name}]`);
      }
    }
  }

  for (const child of node.childNodes ?? []) inspect(child, file, nextIgnored);
};

const files = htmlFiles(distDir);
for (const filePath of files) {
  inspect(parse(readFileSync(filePath, "utf8")), relative(root, filePath));
}

if (violations.length > 0) {
  console.error(`Found prohibited visitor-facing language:\n${violations.join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${files.length} rendered pages for prohibited visitor-facing language.`);
