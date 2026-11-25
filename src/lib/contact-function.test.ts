import { describe, expect, mock, spyOn, test } from "bun:test";
import { CONTACT_COPY, HONEYPOT_FIELD } from "./contact";
import { onRequestPost } from "../../functions/api/contact";

const valid = {
  name: "Ana",
  email: "ana@example.com",
  business: "",
  message: "Our quotes take a day.",
};

const post = (fields: Record<string, string>, json = true) => {
  const body = new FormData();
  for (const [name, value] of Object.entries(fields)) body.set(name, value);
  return new Request("https://www.hanifcarroll.com/api/contact", {
    method: "POST",
    body,
    headers: json ? { Accept: "application/json" } : {},
  });
};

/** A stand-in for the MAILER service binding that answers with the given status and body. */
const stubMailer = (status: number, body: unknown = { ok: status === 200 }) => {
  const fetch = mock(async (_input: string, _init?: RequestInit) =>
    Response.json(body, { status }),
  );
  return { env: { MAILER: { fetch } }, fetch };
};

describe("POST /api/contact", () => {
  test("sends and answers JSON for the page script", async () => {
    const mailer = stubMailer(200);
    const response = await onRequestPost({ request: post(valid), env: mailer.env });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(mailer.fetch).toHaveBeenCalledTimes(1);
  });

  test("redirects a form post without JavaScript to the sent page", async () => {
    const response = await onRequestPost({ request: post(valid, false), env: stubMailer(200).env });
    expect(response.status).toBe(303);
    expect(response.headers.get("Location")).toBe("https://www.hanifcarroll.com/contact/sent/");
  });

  test("answers a filled honeypot like a success and sends nothing", async () => {
    const mailer = stubMailer(200);
    const response = await onRequestPost({
      request: post({ ...valid, [HONEYPOT_FIELD]: "x" }),
      env: mailer.env,
    });
    expect(response.status).toBe(200);
    expect(mailer.fetch).not.toHaveBeenCalled();
  });

  test("rejects missing fields with a 400 and field errors", async () => {
    const mailer = stubMailer(200);
    const response = await onRequestPost({
      request: post({ name: "", email: "", message: "" }),
      env: mailer.env,
    });
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      ok: false,
      errors: {
        name: CONTACT_COPY.errors.name,
        email: CONTACT_COPY.errors.email,
        message: CONTACT_COPY.errors.message,
      },
    });
    expect(mailer.fetch).not.toHaveBeenCalled();
  });

  test("answers 502 and logs only the status or code when the binding is missing or the mailer fails", async () => {
    const log = spyOn(console, "error").mockImplementation(() => {});

    const missing = await onRequestPost({ request: post(valid), env: {} });
    expect(missing.status).toBe(502);
    expect(await missing.json()).toEqual({ ok: false, error: CONTACT_COPY.failure });

    const refused = await onRequestPost({
      request: post(valid, false),
      env: stubMailer(502, { ok: false, code: "E_RATE_LIMIT_EXCEEDED" }).env,
    });
    expect(refused.status).toBe(502);
    expect(refused.headers.get("Content-Type")).toContain("text/html");
    expect(await refused.text()).toContain("Your message didn’t send.");

    const rejected = await onRequestPost({ request: post(valid), env: stubMailer(400).env });
    expect(rejected.status).toBe(502);

    const logged = log.mock.calls.flat().join(" ");
    expect(logged).toContain("missing-binding");
    expect(logged).toContain("502 E_RATE_LIMIT_EXCEEDED");
    expect(logged).toContain("(400)");
    expect(logged).not.toContain(valid.message);
    expect(logged).not.toContain(valid.email);
    log.mockRestore();
  });
});
