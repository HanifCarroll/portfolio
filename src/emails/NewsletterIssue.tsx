import * as React from "react";
import { Heading, Link, Text } from "@react-email/components";
import { PublicationLayout } from "./PublicationLayout";

interface NewsletterIssueProps {
  title: string;
  preview: string;
  paragraphs: string[];
}

export function NewsletterIssue({ title, preview, paragraphs }: NewsletterIssueProps) {
  return (
    <PublicationLayout
      preview={preview}
      footer={
        <Text style={unsubscribe}>
          Don’t want these notes?{" "}
          <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}" style={link}>
            Unsubscribe
          </Link>
          .
        </Text>
      }
    >
      <Heading style={heading}>{title}</Heading>
      {paragraphs.map((paragraph, index) => (
        <Text key={index} style={copy}>
          {paragraph}
        </Text>
      ))}
    </PublicationLayout>
  );
}

NewsletterIssue.PreviewProps = {
  title: "Reliable AI Workflows Are Learned Through Failure",
  preview: "The failures that reveal what a reliable agent workflow actually needs.",
  paragraphs: [
    "I let an AI video workflow keep producing work before I had decided whether the first result was worth repeating.",
    "It started with a twenty-one-minute recording I wanted to turn into short clips. The tools could identify possible moments, add captions, and prepare files for different platforms, so the process kept moving.",
    "By the time I stopped it, it had produced five captioned videos and twenty sets of files for different platforms. There was plenty of finished-looking work to review and no agreed example to judge it against.",
    "Nothing had been published. The files were preserved and held. But the workflow had already spent time multiplying an idea that I hadn’t accepted yet.",
    "The failure was in the order of decisions.",
    "The workflow should have stopped after one complete video. I needed to decide whether the story worked, whether the pacing felt right, whether the captions were readable, and whether the overall treatment was worth repeating.",
    "The replacement procedure is much simpler: produce one complete recording and recommend a small set of self-contained stories, then choose the story and name one pilot.",
    "A process can become too rigid when it tries to anticipate every exception. It needs a stopping condition at the point where judgment matters.",
    "When an AI-assisted process disappoints you, don’t change the prompt, or do you change the procedure around it?",
  ],
};

export default NewsletterIssue;

const heading = {
  margin: "0 0 28px",
  fontFamily: "Georgia, serif",
  fontSize: "34px",
  fontWeight: "400",
  lineHeight: "1.12",
  letterSpacing: "-0.5px",
};
const copy = {
  margin: "0 0 20px",
  fontFamily: "Georgia, serif",
  fontSize: "17px",
  lineHeight: "1.72",
};
const unsubscribe = { margin: "18px 0 0", color: "#667180", fontSize: "12px", lineHeight: "1.6" };
const link = { color: "#485463", textDecoration: "underline" };
