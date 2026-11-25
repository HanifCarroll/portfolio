// portfolio-contact-mailer: sends the contact form's email through Cloudflare Email Sending.
// Only the portfolio Pages Function calls it, through the MAILER service binding. The sender and
// recipient always come from this Worker's own vars; a request supplies only subject, text, and
// replyTo. It logs error codes only, never the body, the visitor's address, or the subject.

// These mirror the `SendEmail` and `EmailMessageBuilder` types in @cloudflare/workers-types,
// kept local so the file type-checks without that package.
export interface EmailAddress {
  email: string;
  name: string;
}

export interface EmailMessageBuilder {
  to: string | EmailAddress | (string | EmailAddress)[];
  from: string | EmailAddress;
  subject: string;
  text?: string;
  replyTo?: string | EmailAddress;
}

export interface SendEmail {
  send(builder: EmailMessageBuilder): Promise<{ messageId: string }>;
}

export interface Env {
  EMAIL: SendEmail;
  CONTACT_FROM_ADDRESS: string;
  CONTACT_FROM_NAME: string;
  CONTACT_TO: string;
}

export const MAILER_LIMITS = {
  subject: 300,
  replyTo: 254,
  text: 8000,
} as const;

const EMAIL_PATTERN = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/;
const LINE_BREAK = /[\r\n\u2028\u2029]/;
const CODE_PATTERN = /^E_[A-Z0-9_]{1,60}$/;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const singleLine = (value: unknown, max: number): value is string =>
  typeof value === "string" &&
  value.trim() !== "" &&
  value.length <= max &&
  !LINE_BREAK.test(value);

/** The `E_*` code a send error carries, when it has one. */
export const errorCode = (error: unknown) => {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? (error as { code: unknown }).code
      : undefined;
  return typeof code === "string" && CODE_PATTERN.test(code) ? code : "E_UNKNOWN";
};

export async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname !== "/send") return json({ ok: false, code: "E_NOT_FOUND" }, 404);
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, code: "E_METHOD_NOT_ALLOWED" }), {
      status: 405,
      headers: { "Content-Type": "application/json; charset=utf-8", Allow: "POST" },
    });
  }
  if (!(request.headers.get("Content-Type") ?? "").toLowerCase().startsWith("application/json")) {
    return json({ ok: false, code: "E_UNSUPPORTED_MEDIA_TYPE" }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, code: "E_BAD_JSON" }, 400);
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return json({ ok: false, code: "E_BAD_JSON" }, 400);
  }

  // Anything else in the body (to, from, cc, headers) is ignored on purpose.
  const { subject, text, replyTo } = body as Record<string, unknown>;
  if (!singleLine(subject, MAILER_LIMITS.subject))
    return json({ ok: false, code: "E_BAD_SUBJECT" }, 400);
  if (!singleLine(replyTo, MAILER_LIMITS.replyTo) || !EMAIL_PATTERN.test(replyTo)) {
    return json({ ok: false, code: "E_BAD_REPLY_TO" }, 400);
  }
  if (typeof text !== "string" || text.trim() === "" || text.length > MAILER_LIMITS.text) {
    return json({ ok: false, code: "E_BAD_TEXT" }, 400);
  }

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { email: env.CONTACT_FROM_ADDRESS, name: env.CONTACT_FROM_NAME },
      subject,
      text,
      replyTo,
    });
    return json({ ok: true }, 200);
  } catch (error) {
    const code = errorCode(error);
    console.error(`contact mailer: send failed (${code})`);
    return json({ ok: false, code }, 502);
  }
}

export default {
  fetch: (request: Request, env: Env) => handleRequest(request, env),
};
