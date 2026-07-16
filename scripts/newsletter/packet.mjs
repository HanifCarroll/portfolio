import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

function field(source, label) {
  const match = source.match(new RegExp(`^- ${label}: (.+)$`, "m"));
  if (!match) throw new Error(`Newsletter packet is missing: ${label}`);
  return match[1].replace(/^`|`$/g, "");
}

const HEADING_PATTERN = /^### ([^\n]+)$/;
const IMAGE_PATTERN = /^!\[([^\]]+)\]\((https:\/\/[^\s)]+)(?: "([^"]+)")?\)$/;

export function parseNewsletterBody(body) {
  return body
    .split(/\n\n+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const heading = chunk.match(HEADING_PATTERN);
      if (heading) return { type: "heading", text: heading[1] };

      const image = chunk.match(IMAGE_PATTERN);
      if (image) {
        return {
          type: "image",
          src: image[2],
          alt: image[1],
          ...(image[3] ? { caption: image[3] } : {}),
        };
      }

      if (chunk.startsWith("#") || chunk.startsWith("![")) {
        throw new Error(`Malformed newsletter content block: ${chunk.split("\n", 1)[0]}`);
      }

      return { type: "paragraph", text: chunk.replace(/\n/g, " ") };
    });
}

export function calculateNewsletterIssueDigest({ title, subject, preview, body }) {
  const canonicalIssue = JSON.stringify({ body, preview, subject, title });
  return `sha256:${createHash("sha256").update(canonicalIssue).digest("hex")}`;
}

export async function readNewsletterIssue(path) {
  const source = await readFile(path, "utf8");
  const title = source.match(/^# (.+)$/m)?.[1];
  const body = source.match(
    /## Final Body\n\n([\s\S]*?)\n\n## (?:Visual Assets|Continue The Thread)/,
  )?.[1];
  if (!title || !body)
    throw new Error("Newsletter packet must contain a title and an exact Final Body section.");

  const subject = field(source, "Selected subject");
  const preview = field(source, "Preview text");
  const bodyDigest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
  const issueDigest = calculateNewsletterIssueDigest({ title, subject, preview, body });

  return {
    title,
    subject,
    preview,
    issueDigest,
    approvedDigest: field(source, "approved_digest"),
    bodyDigest,
    blocks: parseNewsletterBody(body),
  };
}
