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
