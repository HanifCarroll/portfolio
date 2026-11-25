// The contact form's rules, shared by the /contact/ page script and the Pages Function
// in functions/api/contact.ts. Keep it free of browser and Cloudflare globals. The mailer Worker
// (workers/contact-mailer/) re-checks what it receives on its own.

export const CONTACT_EMAIL = "hanif@hanifcarroll.com";
/** The portfolio-contact-mailer Worker, reached through the Pages service binding `MAILER`. */
export const MAILER_SEND_URL = "https://mailer/send";

/** The hidden field real visitors leave empty. */
export const HONEYPOT_FIELD = "contact_url";

export const CONTACT_LIMITS = {
  name: 200,
  email: 254,
  business: 200,
  message: 5000,
  source: 500,
} as const;

export const CONTACT_COPY = {
  errors: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please describe the problem.",
    nameTooLong: `Please keep your name under ${CONTACT_LIMITS.name} characters.`,
    businessTooLong: `Please keep the business name or website under ${CONTACT_LIMITS.business} characters.`,
    messageTooLong: `Please keep the message under ${CONTACT_LIMITS.message.toLocaleString("en-US")} characters.`,
  },
  successHeading: "Message sent",
  successBody: "Thanks. I got your message, and I’ll reply by email.",
  failure: `Your message didn’t send. Please try again, or email me at ${CONTACT_EMAIL}.`,
} as const;

export type ContactField = "name" | "email" | "business" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;

export interface ContactMessage {
  name: string;
  email: string;
  business: string;
  message: string;
  /** The page on this site the visitor came from, when the form knows it. */
  source: string;
}

export type ContactValidation =
  | { ok: true; spam: boolean; value: ContactMessage }
  | { ok: false; errors: ContactErrors };

/** Anything that can be read like FormData: FormData, URLSearchParams, or a plain lookup. */
export interface FieldSource {
  get(name: string): unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (fields: FieldSource, name: string) => {
  const value = fields.get(name);
  return typeof value === "string" ? value.trim() : "";
};

/** Header values (subject, reply-to) must stay on one line. */
export const stripLineBreaks = (value: string) =>
  value
    .replace(/[\r\n\u2028\u2029]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

export function validateContact(fields: FieldSource): ContactValidation {
  const value: ContactMessage = {
    name: text(fields, "name"),
    email: text(fields, "email"),
    business: text(fields, "business"),
    message: text(fields, "message"),
    source: stripLineBreaks(text(fields, "source")).slice(0, CONTACT_LIMITS.source),
  };

  if (text(fields, HONEYPOT_FIELD) !== "") return { ok: true, spam: true, value };

  const errors: ContactErrors = {};
  if (!value.name) errors.name = CONTACT_COPY.errors.name;
  else if (value.name.length > CONTACT_LIMITS.name) errors.name = CONTACT_COPY.errors.nameTooLong;

  if (value.email.length > CONTACT_LIMITS.email || !EMAIL_PATTERN.test(value.email)) {
    errors.email = CONTACT_COPY.errors.email;
  }

  if (value.business.length > CONTACT_LIMITS.business) {
    errors.business = CONTACT_COPY.errors.businessTooLong;
  }

  if (!value.message) errors.message = CONTACT_COPY.errors.message;
  else if (value.message.length > CONTACT_LIMITS.message) {
    errors.message = CONTACT_COPY.errors.messageTooLong;
  }

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, spam: false, value };
}

/** The service binding to the mailer Worker. Only `fetch` is used. */
export interface MailerBinding {
  fetch(input: string, init?: RequestInit): Promise<Response>;
}

export interface ContactEnv {
  MAILER?: MailerBinding;
}

/** What the mailer accepts. The Worker sets the sender and recipient from its own vars. */
export interface MailerRequest {
  subject: string;
  text: string;
  replyTo: string;
}

export function buildContactEmail(message: ContactMessage): MailerRequest {
  const lines = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Business: ${message.business || "Not given"}`,
  ];
  if (message.source) lines.push(`Came from: ${message.source}`);
  lines.push("", "Message:", message.message);

  return {
    subject: `Website message from ${stripLineBreaks(message.name)}`,
    text: lines.join("\n"),
    replyTo: stripLineBreaks(message.email),
  };
}

export type SendResult =
  | { ok: true }
  | { ok: false; status: number | "missing-binding" | "network"; code?: string };

const CODE_PATTERN = /^E_[A-Z0-9_]{1,60}$/;

/** Hands one email to the mailer Worker. Never logs or returns the visitor's message. */
export async function sendContactEmail(
  message: ContactMessage,
  env: ContactEnv,
): Promise<SendResult> {
  const mailer = env.MAILER;
  if (!mailer) return { ok: false, status: "missing-binding" };

  try {
    const response = await mailer.fetch(MAILER_SEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildContactEmail(message)),
    });
    if (response.status === 200) return { ok: true };

    const body = (await response.json().catch(() => ({}))) as { code?: unknown };
    const code =
      typeof body.code === "string" && CODE_PATTERN.test(body.code) ? body.code : undefined;
    return code
      ? { ok: false, status: response.status, code }
      : { ok: false, status: response.status };
  } catch {
    return { ok: false, status: "network" };
  }
}
