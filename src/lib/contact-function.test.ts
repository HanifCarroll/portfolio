import { afterEach, describe, expect, mock, spyOn, test } from "bun:test";
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

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

const stubFetch = (status: number) => {
  const fetcher = mock(async () => new Response("{}", { status }));
  globalThis.fetch = fetcher as unknown as typeof fetch;
  return fetcher;
};

describe("POST /api/contact", () => {
  test("sends and answers JSON for the page script", async () => {
    const fetcher = stubFetch(200);
    const response = await onRequestPost({ request: post(valid), env: { RESEND_API_KEY: "re_x" } });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  test("redirects a form post without JavaScript to the sent page", async () => {
    stubFetch(200);
    const response = await onRequestPost({
      request: post(valid, false),
      env: { RESEND_API_KEY: "re_x" },
    });
    expect(response.status).toBe(303);
    expect(response.headers.get("Location")).toBe("https://www.hanifcarroll.com/contact/sent/");
  });

  test("answers a filled honeypot like a success and sends nothing", async () => {
    const fetcher = stubFetch(200);
    const response = await onRequestPost({
      request: post({ ...valid, [HONEYPOT_FIELD]: "x" }),
      env: { RESEND_API_KEY: "re_x" },
    });
    expect(response.status).toBe(200);
    expect(fetcher).not.toHaveBeenCalled();
  });

  test("rejects missing fields with a 400 and field errors", async () => {
    const fetcher = stubFetch(200);
    const response = await onRequestPost({
      request: post({ name: "", email: "", message: "" }),
      env: { RESEND_API_KEY: "re_x" },
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
    expect(fetcher).not.toHaveBeenCalled();
  });

  test("answers 502 and logs only the status when the key is missing or Resend fails", async () => {
    const log = spyOn(console, "error").mockImplementation(() => {});
    stubFetch(500);

    const missing = await onRequestPost({ request: post(valid), env: {} });
    expect(missing.status).toBe(502);
    expect(await missing.json()).toEqual({ ok: false, error: CONTACT_COPY.failure });

    const refused = await onRequestPost({
      request: post(valid, false),
      env: { RESEND_API_KEY: "re_secret" },
    });
    expect(refused.status).toBe(502);
    expect(refused.headers.get("Content-Type")).toContain("text/html");
    expect(await refused.text()).toContain("Your message didn’t send.");

    const logged = log.mock.calls.flat().join(" ");
    expect(logged).toContain("500");
    expect(logged).not.toContain("re_secret");
    expect(logged).not.toContain(valid.message);
    log.mockRestore();
  });
});
