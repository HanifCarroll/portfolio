import type { Config } from "@netlify/functions";
import { Resend } from "resend";
import { newsletterConfig, requireNewsletterEnv } from "../../src/lib/newsletter/config";
import { readSubscriptionToken } from "../../src/lib/newsletter/token";

function redirect(result: "confirmed" | "invalid" | "error") {
  const url = new URL("/newsletter/", newsletterConfig.siteUrl);
  url.searchParams.set("subscription", result);
  return Response.redirect(url, 302);
}

export default async function handler(request: Request) {
  if (request.method !== "GET") return new Response("Method not allowed.", { status: 405 });
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return redirect("invalid");

  const payload = readSubscriptionToken(token, requireNewsletterEnv("NEWSLETTER_TOKEN_SECRET"));
  if (!payload) return redirect("invalid");

  const resend = new Resend(requireNewsletterEnv("RESEND_API_KEY"));
  const segmentId = requireNewsletterEnv("RESEND_SEGMENT_ID");
  const topicId = requireNewsletterEnv("RESEND_TOPIC_ID");
  const lookup = await resend.contacts.get({ email: payload.email });
  let contactId = lookup.data?.id;
  let contactError = lookup.error;
  let isNewContact = false;

  if (!contactId && contactError?.name === "not_found") {
    const created = await resend.contacts.create({
      email: payload.email,
      unsubscribed: false,
      segments: [{ id: segmentId }],
      topics: [{ id: topicId, subscription: "opt_in" }],
    });
    contactId = created.data?.id;
    contactError = created.error;
    isNewContact = Boolean(contactId);
  } else if (contactId) {
    const updates = await Promise.all([
      resend.contacts.update({ email: payload.email, unsubscribed: false }),
      resend.contacts.segments.add({ email: payload.email, segmentId }),
      resend.contacts.topics.update({
        email: payload.email,
        topics: [{ id: topicId, subscription: "opt_in" }],
      }),
    ]);
    contactError = updates.find((result) => result.error)?.error ?? null;
  }

  if (contactError || !contactId) {
    console.error("newsletter contact creation failed", {
      name: contactError?.name,
      message: contactError?.message,
    });
    return redirect("error");
  }

  if (isNewContact) {
    const { error: eventError } = await resend.events.send({
      event: newsletterConfig.welcomeEvent,
      contactId,
    });
    if (eventError)
      console.error("newsletter welcome event failed", {
        name: eventError.name,
        message: eventError.message,
      });
  }

  return redirect("confirmed");
}

export const config: Config = {
  path: "/api/newsletter/confirm",
  rateLimit: { windowLimit: 20, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
