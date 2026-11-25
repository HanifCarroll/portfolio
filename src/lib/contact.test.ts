import { describe, expect, mock, test } from "bun:test";
import {
  CONTACT_COPY,
  CONTACT_LIMITS,
  DEFAULT_CONTACT_FROM,
  DEFAULT_CONTACT_TO,
  HONEYPOT_FIELD,
  RESEND_EMAILS_URL,
  buildContactEmail,
  sendContactEmail,
  stripLineBreaks,
  validateContact,
  type ContactMessage,
} from "./contact";

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
  test("uses the default addresses and lists every field", () => {
    expect(buildContactEmail(message, {})).toEqual({
      from: DEFAULT_CONTACT_FROM,
      to: [DEFAULT_CONTACT_TO],
      reply_to: "ana@example.com",
      subject: "Website message from Ana Pérez",
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

  test("reads the addresses from the environment", () => {
    const email = buildContactEmail(message, {
      CONTACT_TO: "inbox@example.com",
      CONTACT_FROM: "Site <site@example.com>",
    });
    expect(email.to).toEqual(["inbox@example.com"]);
    expect(email.from).toBe("Site <site@example.com>");
  });

  test("strips line breaks from the subject and reply-to", () => {
    const email = buildContactEmail(
      { ...message, name: "Ana\r\nBcc: x@example.com", email: "ana@example.com\nBcc: y" },
      {},
    );
    expect(email.subject).toBe("Website message from Ana Bcc: x@example.com");
    expect(email.reply_to).toBe("ana@example.com Bcc: y");
  });

  test("leaves out the source line when the form doesn't know it", () => {
    const email = buildContactEmail({ ...message, business: "", source: "" }, {});
    expect(email.text).toContain("Business: Not given");
    expect(email.text).not.toContain("Came from");
  });
});

describe("sendContactEmail", () => {
  test("posts one JSON email to Resend with the key as a bearer token", async () => {
    const fetcher = mock(async () => new Response("{}", { status: 200 }));
    const result = await sendContactEmail(
      message,
      { RESEND_API_KEY: "re_test" },
      fetcher as unknown as typeof fetch,
    );

    expect(result).toEqual({ ok: true });
    expect(fetcher).toHaveBeenCalledTimes(1);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(RESEND_EMAILS_URL);
    expect(init.method).toBe("POST");
    expect(init.headers).toEqual({
      Authorization: "Bearer re_test",
      "Content-Type": "application/json",
    });
    expect(JSON.parse(init.body as string)).toEqual(buildContactEmail(message, {}));
  });

  test("doesn't call Resend without a key", async () => {
    const fetcher = mock(async () => new Response("{}"));
    const result = await sendContactEmail(message, {}, fetcher as unknown as typeof fetch);
    expect(result).toEqual({ ok: false, status: "missing-key" });
    expect(fetcher).not.toHaveBeenCalled();
  });

  test("reports Resend's status when it refuses", async () => {
    const fetcher = mock(async () => new Response("{}", { status: 422 }));
    const result = await sendContactEmail(
      message,
      { RESEND_API_KEY: "re_test" },
      fetcher as unknown as typeof fetch,
    );
    expect(result).toEqual({ ok: false, status: 422 });
  });

  test("reports a network failure", async () => {
    const fetcher = mock(async () => {
      throw new Error("offline");
    });
    const result = await sendContactEmail(
      message,
      { RESEND_API_KEY: "re_test" },
      fetcher as unknown as typeof fetch,
    );
    expect(result).toEqual({ ok: false, status: "network" });
  });
});
