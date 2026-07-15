import * as React from "react";
import { Heading, Text } from "@react-email/components";
import { PublicationLayout } from "./PublicationLayout";

export function Welcome() {
  return (
    <PublicationLayout preview="You’re subscribed to A Working Theory.">
      <Heading style={heading}>You’re on the list.</Heading>
      <Text style={copy}>Thanks for subscribing to A Working Theory.</Text>
      <Text style={copy}>
        I’ll send field notes on AI, judgment, and better ways of working when there’s something
        worth sharing. You can reply to any issue and it will come directly to me.
      </Text>
      <Text style={signoff}>Hanif</Text>
    </PublicationLayout>
  );
}

export default Welcome;

const heading = {
  margin: "0 0 18px",
  fontFamily: "Georgia, serif",
  fontSize: "32px",
  fontWeight: "400",
  lineHeight: "1.15",
};
const copy = { margin: "0 0 18px", fontSize: "16px", lineHeight: "1.65" };
const signoff = { margin: "28px 0 0", fontSize: "16px", fontWeight: "700" };
