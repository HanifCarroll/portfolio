import { render } from "@react-email/render";
import { Resend } from "resend";
import { Welcome } from "../../src/emails/Welcome";
import { newsletterConfig, requireNewsletterEnv } from "../../src/lib/newsletter/config";

const resend = new Resend(requireNewsletterEnv("RESEND_API_KEY"));

function unwrapList<T>(
  response: { data: unknown; error: { message: string } | null },
  label: string,
): T[] {
  if (response.error) throw new Error(`${label}: ${response.error.message}`);
  const value = response.data as { data?: T[] } | null;
  return value?.data ?? [];
}

const segmentName = "A Working Theory";
const topicName = "A Working Theory issues";
const eventName = newsletterConfig.welcomeEvent;
const templateName = "A Working Theory welcome";
const automationName = "A Working Theory welcome";

const segments = unwrapList<{ id: string; name: string }>(
  await resend.segments.list(),
  "Could not list segments",
);
let segment = segments.find((item) => item.name === segmentName);
if (!segment) {
  const result = await resend.segments.create({ name: segmentName });
  if (result.error || !result.data)
    throw new Error(`Could not create segment: ${result.error?.message ?? "unknown error"}`);
  segment = { id: result.data.id, name: segmentName };
}

const topics = unwrapList<{ id: string; name: string }>(
  await resend.topics.list(),
  "Could not list topics",
);
let topic = topics.find((item) => item.name === topicName);
if (!topic) {
  const result = await resend.topics.create({
    name: topicName,
    description: "Newsletter issues from A Working Theory by Hanif Carroll.",
    defaultSubscription: "opt_out",
  });
  if (result.error || !result.data)
    throw new Error(`Could not create topic: ${result.error?.message ?? "unknown error"}`);
  topic = { id: result.data.id, name: topicName };
}

const events = unwrapList<{ id: string; name: string }>(
  await resend.events.list(),
  "Could not list events",
);
if (!events.some((item) => item.name === eventName)) {
  const result = await resend.events.create({ name: eventName });
  if (result.error) throw new Error(`Could not create event: ${result.error.message}`);
}

const templates = unwrapList<{ id: string; name: string; status: string }>(
  await resend.templates.list(),
  "Could not list templates",
);
let template = templates.find((item) => item.name === templateName);
if (!template) {
  const html = await render(<Welcome />);
  const result = await resend.templates
    .create({
      name: templateName,
      alias: "awt-welcome",
      from: newsletterConfig.from,
      replyTo: newsletterConfig.replyTo,
      subject: "Welcome to A Working Theory",
      html,
    })
    .publish();
  if (result.error || !result.data)
    throw new Error(
      `Could not create and publish template: ${result.error?.message ?? "unknown error"}`,
    );
  template = { id: result.data.id, name: templateName, status: "published" };
} else if (template.status !== "published") {
  const result = await resend.templates.publish(template.id);
  if (result.error) throw new Error(`Could not publish welcome template: ${result.error.message}`);
}

const automations = unwrapList<{ id: string; name: string }>(
  await resend.automations.list(),
  "Could not list automations",
);
let automation = automations.find((item) => item.name === automationName);
if (!automation) {
  const result = await resend.automations.create({
    name: automationName,
    status: "enabled",
    steps: [
      { key: "subscription-confirmed", type: "trigger", config: { eventName } },
      {
        key: "send-welcome",
        type: "send_email",
        config: {
          template: { id: template.id },
          from: newsletterConfig.from,
          replyTo: newsletterConfig.replyTo,
        },
      },
    ],
    connections: [{ from: "subscription-confirmed", to: "send-welcome" }],
  });
  if (result.error || !result.data)
    throw new Error(
      `Could not create welcome automation: ${result.error?.message ?? "unknown error"}`,
    );
  automation = { id: result.data.id, name: automationName };
}

console.log(
  JSON.stringify(
    {
      segmentId: segment.id,
      topicId: topic.id,
      welcomeEvent: eventName,
      welcomeTemplateId: template.id,
      welcomeAutomationId: automation.id,
      next: "Set RESEND_SEGMENT_ID and RESEND_TOPIC_ID in Netlify. No broadcast was created or sent.",
    },
    null,
    2,
  ),
);
