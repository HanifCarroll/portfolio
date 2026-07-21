import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";

const REQUIRED_KEYS = [
  "schema_version", "content_item_id", "asset_id", "asset_digest", "publication_id",
  "slug", "title", "description", "subject", "preview", "published_at", "issue_number",
  "tags", "cover_image", "cover_alt", "body_markdown", "package_digest",
];

export function sha256(value) {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

export function verifyRelease(release) {
  if (JSON.stringify(Object.keys(release)) !== JSON.stringify(REQUIRED_KEYS))
    throw new Error("Newsletter release fields do not match newsletter-release-v1.");
  if (release.schema_version !== "newsletter-release-v1") throw new Error("Unsupported newsletter release schema.");
  if (release.slug !== basename(release.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(release.slug))
    throw new Error("Newsletter release slug is invalid.");
  if (sha256(release.body_markdown) !== release.asset_digest) throw new Error("Newsletter asset digest differs.");
  const { package_digest: expected, ...content } = release;
  if (sha256(JSON.stringify(content)) !== expected) throw new Error("Newsletter package digest differs.");
  return release;
}

export async function readRelease(path) {
  return verifyRelease(JSON.parse(await readFile(resolve(path), "utf8")));
}

export function emailBlocks(body) {
  return body.split(/\n\n+/).map((chunk) => chunk.trim()).filter(Boolean).map((chunk) => {
    const heading = chunk.match(/^### ([^\n]+)$/);
    if (heading) return { type: "heading", text: heading[1] };
    const figure = chunk.match(/<figure[^>]*>[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[^>]*\/>[\s\S]*?<figcaption>([\s\S]*?)<\/figcaption>[\s\S]*?<\/figure>/);
    if (figure) {
      const src = figure[1].startsWith("/") ? `https://www.hanifcarroll.com${figure[1]}` : figure[1];
      return { type: "image", src, alt: figure[2], caption: figure[3].trim() };
    }
    if (chunk.startsWith("#") || chunk.startsWith("<figure")) throw new Error(`Malformed newsletter block: ${chunk.split("\n", 1)[0]}`);
    return { type: "paragraph", text: chunk.replace(/\n/g, " ") };
  });
}

function yamlString(value) {
  return JSON.stringify(value);
}

export function contentMarkdown(release) {
  const tags = release.tags.map((tag) => `  - ${yamlString(tag)}`).join("\n");
  return `---\ntitle: ${yamlString(release.title)}\ndescription: ${yamlString(release.description)}\nsubject: ${yamlString(release.subject)}\npreview: ${yamlString(release.preview)}\npubDate: ${release.published_at}\nissueNumber: ${release.issue_number}\ncoverImage: ${yamlString(release.cover_image)}\ncoverAlt: ${yamlString(release.cover_alt)}\ntags:\n${tags}\nsourcePackageDigest: ${yamlString(release.package_digest)}\n---\n\n${release.body_markdown}`;
}

export async function importRelease(path, root = resolve("src/content/newsletter")) {
  const release = await readRelease(path);
  const output = resolve(root, `${release.slug}.md`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, contentMarkdown(release), "utf8");
  return { release, output };
}
