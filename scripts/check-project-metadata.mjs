import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const projectsDir = join(root, "src/lib/projects");
const caseStudiesDir = join(root, "src/content/case-studies");
const caseStudyPagesDir = join(root, "src/pages/projects");
const srcDir = join(root, "src");

const localProjectFiles = readdirSync(projectsDir)
  .filter((file) => file.endsWith(".json"))
  .sort();

const spanishCopy = JSON.parse(readFileSync(join(root, "src/lib/projects.es.json"), "utf8"));
const detailCopyFields = [
  "client",
  "service",
  "role",
  "heroAlt",
  "seoTitle",
  "seoDescription",
  "liveCtaLabel",
  "liveStatusLabel",
  "repositoryCtaLabel",
];
const errors = [];

const toAssetPath = (value) => {
  if (typeof value !== "string") return undefined;
  if (value.startsWith("@src/")) return join(srcDir, value.slice("@src/".length));
  if (value.startsWith("/")) return join(root, "public", value);
  return undefined;
};

for (const file of localProjectFiles) {
  const filePath = join(projectsDir, file);
  const raw = readFileSync(filePath, "utf8");
  const project = JSON.parse(raw);
  const slug = basename(file, extname(file));

  if (project.slug !== slug) {
    errors.push(`${file}: slug "${project.slug}" does not match filename "${slug}".`);
  }

  if (typeof project.description !== "string" || project.description.trim() === "") {
    errors.push(`${file}: description must be a non-empty string.`);
  }

  if (project.customPage !== undefined && typeof project.customPage !== "boolean") {
    errors.push(`${file}: customPage must be a boolean when provided.`);
  }

  const caseStudyPath = project.customPage
    ? join(caseStudyPagesDir, `${slug}.astro`)
    : join(caseStudiesDir, `${slug}.mdx`);
  if (!existsSync(caseStudyPath)) {
    const expectedPath = project.customPage
      ? `src/pages/projects/${slug}.astro`
      : `src/content/case-studies/${slug}.mdx`;
    errors.push(`${file}: missing case study at ${expectedPath}.`);
  }

  const spanishPage = project.customPage
    ? join(root, "src/pages/es/projects", `${slug}.astro`)
    : join(caseStudiesDir, "es", `${slug}.mdx`);
  const translation = spanishCopy[slug];
  const requiredCopy = existsSync(spanishPage)
    ? ["title", "description", ...detailCopyFields.filter((field) => Boolean(project[field]))]
    : ["title", "description"];
  for (const field of requiredCopy) {
    if (typeof translation?.[field] !== "string" || !translation[field].trim()) {
      errors.push(`${file}: missing Spanish ${field} in projects.es.json.`);
    }
  }
  for (const field of Object.keys(translation ?? {})) {
    if (field !== "title" && field !== "description" && !detailCopyFields.includes(field)) {
      errors.push(`${file}: unexpected field ${field} in projects.es.json.`);
    }
  }

  const framedImage = `@src/assets/img/projects/framed/${slug}.png`;
  if (project.images?.hero !== framedImage || project.images?.feature !== framedImage) {
    errors.push(`${file}: images.hero and images.feature must use "${framedImage}".`);
  }

  for (const [key, value] of Object.entries(project.images ?? {})) {
    const assetPath = toAssetPath(value);
    if (!assetPath) continue;
    if (!existsSync(assetPath)) {
      errors.push(`${file}: images.${key} points to missing asset "${value}".`);
    }
  }

  for (const urlField of ["liveUrl", "repository"]) {
    const url = project[urlField];
    if (!url) continue;
    try {
      new URL(url);
    } catch {
      errors.push(`${file}: ${urlField} is not a valid URL.`);
    }
  }

  for (const [index, link] of (project.relatedLinks ?? []).entries()) {
    if (typeof link?.href !== "string" || !link.href.startsWith("/")) {
      errors.push(`${file}: relatedLinks.${index}.href must be a root-relative path.`);
    }
    if (typeof link?.label !== "string" || link.label.trim() === "") {
      errors.push(`${file}: relatedLinks.${index}.label must be a non-empty string.`);
    }
  }
}

for (const slug of Object.keys(spanishCopy)) {
  if (!localProjectFiles.includes(`${slug}.json`))
    errors.push(`Orphan Spanish project metadata for ${slug}.`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${localProjectFiles.length} project metadata files.`);
