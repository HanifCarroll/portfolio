import { Resend } from "resend";
import { NewsletterIssue } from "../../src/emails/NewsletterIssue";
import { newsletterConfig, requireNewsletterEnv } from "../../src/lib/newsletter/config";
import { readNewsletterIssue } from "./packet.mjs";

const issuePath = process.argv[2];
const approvalIndex = process.argv.indexOf("--approved-digest");
const approvedDigest = approvalIndex >= 0 ? process.argv[approvalIndex + 1] : undefined;

if (!issuePath || !approvedDigest) {
  throw new Error(
    "Usage: bun run newsletter:draft <issue.md> --approved-digest sha256:<approved issue digest>",
  );
}

const issue = await readNewsletterIssue(issuePath);
if (issue.approvedDigest !== issue.issueDigest) {
  throw new Error(
    `Issue is not approved at its current digest: recorded ${issue.approvedDigest}, calculated ${issue.issueDigest}`,
  );
}
if (approvedDigest !== issue.issueDigest)
  throw new Error(`Approval digest does not match the issue: expected ${issue.issueDigest}`);

const broadcastName = issue.title;
if (broadcastName.length > 70) {
  throw new Error(
    `Resend broadcast names are limited to 70 characters; the issue title has ${broadcastName.length}`,
  );
}

const resend = new Resend(requireNewsletterEnv("RESEND_API_KEY"));
const { data, error } = await resend.broadcasts.create({
  segmentId: requireNewsletterEnv("RESEND_SEGMENT_ID"),
  from: newsletterConfig.from,
  replyTo: newsletterConfig.replyTo,
  name: broadcastName,
  subject: issue.subject,
  react: <NewsletterIssue title={issue.title} preview={issue.preview} blocks={issue.blocks} />,
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
      issueDigest: issue.issueDigest,
      bodyDigest: issue.bodyDigest,
    },
    null,
    2,
  ),
);
