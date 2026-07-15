import * as React from "react";
import { Button, Heading, Text } from "@react-email/components";
import { PublicationLayout } from "./PublicationLayout";

export function ConfirmSubscription({ confirmationUrl }: { confirmationUrl: string }) {
  return (
    <PublicationLayout preview="Confirm your subscription to A Working Theory.">
      <Heading style={heading}>Confirm your subscription</Heading>
      <Text style={copy}>
        You asked to receive A Working Theory. Confirm your email address and I’ll add you to the
        list.
      </Text>
      <Button href={confirmationUrl} style={button}>
        Confirm subscription
      </Button>
      <Text style={note}>
        This link expires in 24 hours. If you didn’t request it, you can ignore this email.
      </Text>
    </PublicationLayout>
  );
}

const heading = {
  margin: "0 0 18px",
  fontFamily: "Georgia, serif",
  fontSize: "32px",
  fontWeight: "400",
  lineHeight: "1.15",
};
const copy = { margin: "0 0 24px", fontSize: "16px", lineHeight: "1.65" };
const button = {
  display: "inline-block",
  borderRadius: "4px",
  padding: "13px 20px",
  backgroundColor: "#10253f",
  color: "#f5f8fc",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
};
const note = { margin: "24px 0 0", color: "#667180", fontSize: "12px", lineHeight: "1.6" };
