const DEFAULT_SITE_URL = "https://www.hanifcarroll.com";

export const newsletterConfig = {
  publicationName: "A Working Theory",
  publicationDescriptor: "Field notes on AI, judgment, and better ways of working.",
  siteUrl: process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  from: process.env.NEWSLETTER_FROM ?? "A Working Theory <hanif@newsletter.hanifcarroll.com>",
  replyTo: process.env.NEWSLETTER_REPLY_TO ?? "hanif@hanifcarroll.com",
  welcomeEvent: process.env.RESEND_WELCOME_EVENT ?? "awt_subscribed",
};

export function requireNewsletterEnv(
  name: "RESEND_API_KEY" | "RESEND_SEGMENT_ID" | "RESEND_TOPIC_ID" | "NEWSLETTER_TOKEN_SECRET",
) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}
