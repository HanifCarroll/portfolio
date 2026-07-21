import { render } from "@react-email/render";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { ConfirmSubscription } from "../../src/emails/ConfirmSubscription";
import { NewsletterIssue } from "../../src/emails/NewsletterIssue";
import type { NewsletterBlock } from "../../src/emails/NewsletterIssue";
import { Welcome } from "../../src/emails/Welcome";
import { emailBlocks, readRelease } from "./release.mjs";

const issuePath = process.argv[2];
if (!issuePath) throw new Error("Usage: bun run newsletter:verify <newsletter-release.json>");

const issue = await readRelease(issuePath);
const blocks = emailBlocks(issue.body_markdown) as NewsletterBlock[];
const outputs = await Promise.all([
  render(
    <ConfirmSubscription confirmationUrl="https://www.hanifcarroll.com/api/newsletter/confirm?token=test" />,
  ),
  render(<Welcome />),
  render(<NewsletterIssue title={issue.title} preview={issue.preview} blocks={blocks} />),
]);

for (const [index, html] of outputs.entries()) {
  if (!html.startsWith("<!DOCTYPE html") || html.length < 1_000)
    throw new Error(`Email ${index + 1} did not render as a complete HTML document.`);
}

console.log(
  JSON.stringify(
    {
      templatesRendered: outputs.length,
      packageDigest: issue.package_digest,
      assetDigest: issue.asset_digest,
      templateDigest: `sha256:${createHash("sha256").update(await readFile("src/emails/NewsletterIssue.tsx")).digest("hex")}`,
      htmlDigests: outputs.map((html) => `sha256:${createHash("sha256").update(html).digest("hex")}`),
      issueBlocks: blocks.length,
      issueHeadings: blocks.filter((block) => block.type === "heading").length,
      issueImages: blocks.filter((block) => block.type === "image").length,
    },
    null,
    2,
  ),
);
