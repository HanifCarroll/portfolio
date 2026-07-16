import * as React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";
import { newsletterConfig } from "../lib/newsletter/config";

const publicationMarkUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/static/a-working-theory-mark-96.png"
    : `${newsletterConfig.siteUrl}/brand/a-working-theory-mark-96.png`;

interface PublicationLayoutProps {
  preview: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function PublicationLayout({ preview, children, footer }: PublicationLayoutProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.masthead}>
            <Row>
              <Column style={styles.titleColumn}>
                <Text style={styles.name}>A Working Theory</Text>
              </Column>
              <Column style={styles.logoColumn}>
                <Img
                  src={publicationMarkUrl}
                  alt="A Working Theory"
                  width="26"
                  height="26"
                  style={styles.logo}
                />
              </Column>
              <Column />
            </Row>
            <Text style={styles.byline}>by Hanif Carroll</Text>
          </Section>
          <Hr style={styles.accent} />
          {children}
          <Hr style={styles.rule} />
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Field notes on AI, judgment, and better ways of working.
            </Text>
            <Text style={styles.footerText}>
              <Link href="https://www.hanifcarroll.com/newsletter/" style={styles.link}>
                A Working Theory
              </Link>
              {" · "}
              <Link href="mailto:hanif@hanifcarroll.com" style={styles.link}>
                Reply to Hanif
              </Link>
            </Text>
            {footer}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: "0",
    backgroundColor: "#f4f1ea",
    color: "#152235",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    maxWidth: "620px",
    margin: "0 auto",
    padding: "40px 28px",
    backgroundColor: "#fdfdfb",
  },
  masthead: { paddingBottom: "18px" },
  titleColumn: { width: "190px", verticalAlign: "bottom" },
  logoColumn: { width: "38px", paddingLeft: "6px", verticalAlign: "bottom" },
  logo: { display: "block", margin: "0" },
  name: {
    margin: "0",
    fontSize: "23px",
    fontWeight: "500",
    letterSpacing: "-0.45px",
    lineHeight: "1",
  },
  byline: { margin: "5px 0 0", color: "#485463", fontSize: "13px" },
  accent: { width: "48px", margin: "0 0 34px", border: "0", borderTop: "4px solid #f8d651" },
  rule: { margin: "38px 0 24px", border: "0", borderTop: "1px solid #d7dce2" },
  footer: { paddingBottom: "12px" },
  footerText: { margin: "7px 0", color: "#667180", fontSize: "12px", lineHeight: "1.6" },
  link: { color: "#152235", textDecoration: "underline" },
} satisfies Record<string, React.CSSProperties>;
