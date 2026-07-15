import { Resend } from "resend";
import { NewsletterIssue } from "../../src/emails/NewsletterIssue";
import { newsletterConfig, requireNewsletterEnv } from "../../src/lib/newsletter/config";
import { readNewsletterPacket } from "./packet.mjs";

const packetPath = process.argv[2];
const approvalIndex = process.argv.indexOf("--approved-digest");
const approvedDigest = approvalIndex >= 0 ? process.argv[approvalIndex + 1] : undefined;

if (!packetPath || !approvedDigest) {
  throw new Error(
    "Usage: bun run newsletter:draft <packet.md> --approved-digest sha256:<approved issue package digest>",
  );
}

const packet = await readNewsletterPacket(packetPath);
if (approvedDigest !== packet.issuePackageDigest) {
  throw new Error(
    `Approval digest does not match the packet: expected ${packet.issuePackageDigest}`,
  );
}

const resend = new Resend(requireNewsletterEnv("RESEND_API_KEY"));
const { data, error } = await resend.broadcasts.create({
  segmentId: requireNewsletterEnv("RESEND_SEGMENT_ID"),
  from: newsletterConfig.from,
  replyTo: newsletterConfig.replyTo,
  name: `${packet.title} · ${packet.issuePackageDigest.slice(0, 19)}`,
  subject: packet.subject,
  react: (
    <NewsletterIssue title={packet.title} preview={packet.preview} paragraphs={packet.paragraphs} />
  ),
  send: false,
});

if (error || !data)
  throw new Error(
    `Resend could not create the broadcast draft: ${error?.message ?? "unknown error"}`,
  );
console.log(
  JSON.stringify(
    {
      broadcastId: data.id,
      send: false,
      issuePackageDigest: packet.issuePackageDigest,
      bodyDigest: packet.bodyDigest,
    },
    null,
    2,
  ),
);
