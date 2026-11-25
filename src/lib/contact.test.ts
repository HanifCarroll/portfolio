import { describe, expect, mock, test } from "bun:test";
import { getDictionary } from "../i18n";
import {
  MAILER_SEND_URL,
  buildContactEmail,
  sendContactEmail,
  stripLineBreaks,
  validateContact,
  type ContactMessage,
} from "./contact";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "./contact-fields";

const { contact: CONTACT_COPY } = getDictionary("en");

const form = (fields: Record<string, string>) => {
  const data = new FormData();
  for (const [name, value] of Object.entries(fields)) data.set(name, value);
  return data;
};

const valid = {
  name: "Ana Pérez",
  email: "ana@example.com",
  business: "Pérez Plumbing",
  message: "Quotes take us a full day to write by hand.",
};

const message: ContactMessage = { ...valid, source: "/blog/some-post/" };

describe("validateContact", () => {
  test("accepts a complete message and trims every field", () => {
    const result = validateContact(
      form({
        name: "  Ana Pérez ",
        email: " ana@example.com ",
        business: " Pérez Plumbing ",
        message: "\n Quotes take us a full day to write by hand. \n",
        source: " /blog/some-post/ ",
      }),
    );
    expect(result).toEqual({ ok: true, spam: false, value: message });
  });

  test("treats the business as optional", () => {
    const result = validateContact(form({ ...valid, business: "" }));
    expect(result.ok).toBe(true);
  });

  test("requires the name, a valid email, and the message", () => {
    const result = validateContact(form({ name: " ", email: "not-an-email", message: "  " }));
    expect(result).toEqual({
      ok: false,
      errors: {
        name: CONTACT_COPY.errors.name,
        email: CONTACT_COPY.errors.email,
        message: CONTACT_COPY.errors.message,
      },
    });
  });

  test("rejects a missing email with the email error", () => {
    const result = validateContact(form({ name: "Ana", message: "Hi" }));
    expect(result).toEqual({ ok: false, errors: { email: CONTACT_COPY.errors.email } });
  });

  test("caps the name and business at 200 characters and the message at 5,000", () => {
    expect(validateContact(form({ ...valid, name: "a".repeat(200) })).ok).toBe(true);
    expect(validateContact(form({ ...valid, business: "b".repeat(200) })).ok).toBe(true);
    expect(validateContact(form({ ...valid, message: "m".repeat(5000) })).ok).toBe(true);

    const result = validateContact(
      form({
        ...valid,
        name: "a".repeat(CONTACT_LIMITS.name + 1),
        business: "b".repeat(CONTACT_LIMITS.business + 1),
        message: "m".repeat(CONTACT_LIMITS.message + 1),
      }),
    );
    expect(result).toEqual({
      ok: false,
      errors: {
        name: CONTACT_COPY.errors.nameTooLong,
        business: CONTACT_COPY.errors.businessTooLong,
        message: CONTACT_COPY.errors.messageTooLong,
      },
    });
  });

  test("flags a filled honeypot as spam, even when the rest is empty", () => {
    const result = validateContact(form({ [HONEYPOT_FIELD]: "https://spam.example" }));
    expect(result.ok && result.spam).toBe(true);
  });

  test("an empty honeypot is a real visitor", () => {
    const result = validateContact(form({ ...valid, [HONEYPOT_FIELD]: "" }));
    expect(result.ok && !result.spam).toBe(true);
  });
});

describe("stripLineBreaks", () => {
  test("puts header values on one line", () => {
    expect(stripLineBreaks("Ana\r\nBcc: someone@example.com")).toBe("Ana Bcc: someone@example.com");
    expect(stripLineBreaks("a\nb\rc\u2028d")).toBe("a b c d");
  });
});

describe("buildContactEmail", () => {
  test("builds the subject, reply-to, and a body listing every field", () => {
    expect(buildContactEmail(message)).toEqual({
      subject: "Website message from Ana Pérez",
      replyTo: "ana@example.com",
      text: [
        "Name: Ana Pérez",
        "Email: ana@example.com",
        "Business: Pérez Plumbing",
        "Came from: /blog/some-post/",
        "",
        "Message:",
        "Quotes take us a full day to write by hand.",
      ].join("\n"),
    });
  });

  test("never names a sender or recipient: the mailer sets both", () => {
    const email = buildContactEmail(message) as unknown as Record<string, unknown>;
    expect(Object.keys(email).sort()).toEqual(["replyTo", "subject", "text"]);
  });

  test("strips line breaks from the subject and reply-to", () => {
    const email = buildContactEmail({
      ...message,
      name: "Ana\r\nBcc: x@example.com",
      email: "ana@example.com\nBcc: y",
    });
    expect(email.subject).toBe("Website message from Ana Bcc: x@example.com");
    expect(email.replyTo).toBe("ana@example.com Bcc: y");
  });

  test("leaves out the source line when the form doesn't know it", () => {
    const email = buildContactEmail({ ...message, business: "", source: "" });
    expect(email.text).toContain("Business: Not given");
    expect(email.text).not.toContain("Came from");
  });

  test("the longest valid message fits the mailer's 8,000-character cap", () => {
    const email = buildContactEmail({
      name: "a".repeat(CONTACT_LIMITS.name),
      email: `${"e".repeat(240)}@example.com`,
      business: "b".repeat(CONTACT_LIMITS.business),
      message: "m".repeat(CONTACT_LIMITS.message),
      source: "/".repeat(CONTACT_LIMITS.source),
    });
    expect(email.text.length).toBeLessThanOrEqual(8000);
    expect(email.subject.length).toBeLessThanOrEqual(300);
  });
});

const mailer = (response: () => Response | Promise<Response>) => {
  const fetch = mock(async (_input: string, _init?: RequestInit) => response());
  return { binding: { fetch }, fetch };
};

describe("sendContactEmail", () => {
  test("posts one JSON email to the mailer binding", async () => {
    const { binding, fetch } = mailer(() => Response.json({ ok: true }));
    const result = await sendContactEmail(message, { MAILER: binding });

    expect(result).toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledTimes(1);
    const [url, init] = fetch.mock.calls[0]!;
    expect(url).toBe(MAILER_SEND_URL);
    expect(init?.method).toBe("POST");
    expect(init?.headers).toEqual({ "Content-Type": "application/json" });
    expect(JSON.parse(init?.body as string)).toEqual(buildContactEmail(message));
  });

  test("fails without calling anything when the binding is missing", async () => {
    expect(await sendContactEmail(message, {})).toEqual({ ok: false, status: "missing-binding" });
  });

  test("reports the mailer's status and E_ code when it refuses", async () => {
    const { binding } = mailer(() =>
      Response.json({ ok: false, code: "E_SENDER_NOT_VERIFIED" }, { status: 502 }),
    );
    expect(await sendContactEmail(message, { MAILER: binding })).toEqual({
      ok: false,
      status: 502,
      code: "E_SENDER_NOT_VERIFIED",
    });
  });

  test("treats any non-200 answer as a failure and drops codes that aren't E_ codes", async () => {
    const { binding } = mailer(() => Response.json({ code: "ana@example.com" }, { status: 201 }));
    expect(await sendContactEmail(message, { MAILER: binding })).toEqual({
      ok: false,
      status: 201,
    });
  });

  test("reports a binding that throws", async () => {
    const { binding } = mailer(() => {
      throw new Error("offline");
    });
    expect(await sendContactEmail(message, { MAILER: binding })).toEqual({
      ok: false,
      status: "network",
    });
  });
});
