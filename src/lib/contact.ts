// The contact form's rules, shared by the /contact/ page script and the Pages Function
// in functions/api/contact.ts. Keep it free of browser and Cloudflare globals.

export const CONTACT_EMAIL = "hanif@hanifcarroll.com";
export const DEFAULT_CONTACT_TO = CONTACT_EMAIL;
export const DEFAULT_CONTACT_FROM = "Hanif Carroll website <hanif@newsletter.hanifcarroll.com>";
export const RESEND_EMAILS_URL = "https://api.resend.com/emails";

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

export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

export interface ResendEmail {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
}

export function buildContactEmail(message: ContactMessage, env: ContactEnv): ResendEmail {
  const lines = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Business: ${message.business || "Not given"}`,
  ];
  if (message.source) lines.push(`Came from: ${message.source}`);
  lines.push("", "Message:", message.message);

  return {
    from: stripLineBreaks(env.CONTACT_FROM?.trim() || DEFAULT_CONTACT_FROM),
    to: [stripLineBreaks(env.CONTACT_TO?.trim() || DEFAULT_CONTACT_TO)],
    reply_to: stripLineBreaks(message.email),
    subject: `Website message from ${stripLineBreaks(message.name)}`,
    text: lines.join("\n"),
  };
}

export type SendResult = { ok: true } | { ok: false; status: number | "missing-key" | "network" };

/** Sends one plain-text email through Resend. Never logs or returns the key or the message. */
export async function sendContactEmail(
  message: ContactMessage,
  env: ContactEnv,
  fetcher: typeof fetch = fetch,
): Promise<SendResult> {
  const key = env.RESEND_API_KEY?.trim();
  if (!key) return { ok: false, status: "missing-key" };

  try {
    const response = await fetcher(RESEND_EMAILS_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(buildContactEmail(message, env)),
    });
    return response.ok ? { ok: true } : { ok: false, status: response.status };
  } catch {
    return { ok: false, status: "network" };
  }
}
