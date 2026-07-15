import { render } from "@react-email/render";
import { ConfirmSubscription } from "../../src/emails/ConfirmSubscription";
import { NewsletterIssue } from "../../src/emails/NewsletterIssue";
import { Welcome } from "../../src/emails/Welcome";
import { readNewsletterPacket } from "./packet.mjs";

const packetPath = process.argv[2];
if (!packetPath) throw new Error("Usage: bun run newsletter:verify <packet.md>");

const packet = await readNewsletterPacket(packetPath);
const outputs = await Promise.all([
  render(
    <ConfirmSubscription confirmationUrl="https://www.hanifcarroll.com/api/newsletter/confirm?token=test" />,
  ),
  render(<Welcome />),
  render(
    <NewsletterIssue
      title={packet.title}
      preview={packet.preview}
      paragraphs={packet.paragraphs}
    />,
  ),
]);

for (const [index, html] of outputs.entries()) {
  if (!html.startsWith("<!DOCTYPE html") || html.length < 1_000)
    throw new Error(`Email ${index + 1} did not render as a complete HTML document.`);
}

console.log(
  JSON.stringify(
    {
      templatesRendered: outputs.length,
      issuePackageDigest: packet.issuePackageDigest,
      bodyDigest: packet.bodyDigest,
      issueParagraphs: packet.paragraphs.length,
    },
    null,
    2,
  ),
);
