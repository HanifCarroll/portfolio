import type { Config } from "@netlify/functions";
import { createElement } from "react";
import { Resend } from "resend";
import { ConfirmSubscription } from "../../src/emails/ConfirmSubscription";
import { newsletterConfig, requireNewsletterEnv } from "../../src/lib/newsletter/config";
import { createSubscriptionToken } from "../../src/lib/newsletter/token";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request: Request) {
  if (request.method !== "POST")
    return Response.json({ error: "Method not allowed." }, { status: 405 });

  const origin = request.headers.get("origin");
  if (
    origin &&
    origin !== new URL(newsletterConfig.siteUrl).origin &&
    !/^https?:\/\/localhost(?::\d+)?$/.test(origin)
  ) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let input: { email?: unknown; company?: unknown };
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof input.company === "string" && input.company.length > 0)
    return Response.json({ ok: true });
  if (
    typeof input.email !== "string" ||
    input.email.length > 254 ||
    !EMAIL_PATTERN.test(input.email)
  ) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const email = input.email.trim().toLowerCase();
  const token = createSubscriptionToken(email, requireNewsletterEnv("NEWSLETTER_TOKEN_SECRET"));
  const confirmationUrl = new URL("/api/newsletter/confirm", newsletterConfig.siteUrl);
  confirmationUrl.searchParams.set("token", token);

  const resend = new Resend(requireNewsletterEnv("RESEND_API_KEY"));
  const { error } = await resend.emails.send(
    {
      from: newsletterConfig.from,
      to: email,
      replyTo: newsletterConfig.replyTo,
      subject: "Confirm your subscription to A Working Theory",
      react: createElement(ConfirmSubscription, { confirmationUrl: confirmationUrl.toString() }),
    },
    { idempotencyKey: `awt-confirm-${Buffer.from(email).toString("base64url").slice(0, 48)}` },
  );

  if (error) {
    console.error("newsletter confirmation send failed", {
      name: error.name,
      message: error.message,
    });
    return Response.json(
      { error: "Confirmation email could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

export const config: Config = {
  path: "/api/newsletter/subscribe",
  rateLimit: { windowLimit: 5, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
