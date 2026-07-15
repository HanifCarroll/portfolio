import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

function field(source, label) {
  const match = source.match(new RegExp(`^- ${label}: (.+)$`, "m"));
  if (!match) throw new Error(`Newsletter packet is missing: ${label}`);
  return match[1].replace(/^`|`$/g, "");
}

export async function readNewsletterPacket(path) {
  const source = await readFile(path, "utf8");
  const title = source.match(/^# (.+)$/m)?.[1];
  const body = source.match(/## Final Body\n\n([\s\S]*?)\n\n## Continue The Thread/)?.[1];
  if (!title || !body)
    throw new Error("Newsletter packet must contain a title and an exact Final Body section.");

  const calculatedBodyDigest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
  const recordedBodyDigest = field(source, "final_body_digest");
  if (calculatedBodyDigest !== recordedBodyDigest) {
    throw new Error(
      `Final body digest mismatch: packet records ${recordedBodyDigest}, calculated ${calculatedBodyDigest}`,
    );
  }

  return {
    title,
    subject: field(source, "Selected subject"),
    preview: field(source, "Preview text"),
    issuePackageDigest: field(source, "issue_package_digest"),
    bodyDigest: calculatedBodyDigest,
    paragraphs: body
      .split(/\n\n+/)
      .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
      .filter(Boolean),
  };
}
