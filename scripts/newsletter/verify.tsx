import { render } from "@react-email/render";
import { ConfirmSubscription } from "../../src/emails/ConfirmSubscription";
import { NewsletterIssue } from "../../src/emails/NewsletterIssue";
import type { NewsletterBlock } from "../../src/emails/NewsletterIssue";
import { Welcome } from "../../src/emails/Welcome";
import { readNewsletterIssue } from "./packet.mjs";

const issuePath = process.argv[2];
if (!issuePath) throw new Error("Usage: bun run newsletter:verify <issue.md>");

const issue = await readNewsletterIssue(issuePath);
const blocks = issue.blocks as NewsletterBlock[];
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
      issueDigest: issue.issueDigest,
      approvedDigest: issue.approvedDigest,
      bodyDigest: issue.bodyDigest,
      issueBlocks: blocks.length,
      issueHeadings: blocks.filter((block) => block.type === "heading").length,
      issueImages: blocks.filter((block) => block.type === "image").length,
    },
    null,
    2,
  ),
);
