import { describe, expect, mock, spyOn, test } from "bun:test";
import worker, { MAILER_LIMITS, errorCode, type EmailMessageBuilder, type Env } from "./index";

const vars = {
  CONTACT_FROM_ADDRESS: "website@mail.hanifcarroll.com",
  CONTACT_FROM_NAME: "Hanif Carroll website",
  CONTACT_TO: "hanif@hanifcarroll.com",
};

const stubEnv = (send: (builder: EmailMessageBuilder) => Promise<{ messageId: string }>) => {
  const fn = mock(send);
  const env: Env = { ...vars, EMAIL: { send: fn } };
  return { env, send: fn };
};

const okEnv = () => stubEnv(async () => ({ messageId: "m1" }));

const valid = {
  subject: "Website message from Ana",
  text: "Name: Ana\nEmail: ana@example.com\n\nMessage:\nOur quotes take a day.",
  replyTo: "ana@example.com",
};

const request = (
  body: unknown,
  { method = "POST", path = "/send", type = "application/json" } = {},
) => {
  const init: RequestInit = { method, headers: { "Content-Type": type } };
  if (method !== "GET" && method !== "HEAD") init.body = JSON.stringify(body);
  return new Request(`https://mailer${path}`, init);
};

describe("contact mailer", () => {
  test("sends with the sender and recipient from its vars", async () => {
    const { env, send } = okEnv();
    const response = await worker.fetch(request(valid), env);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0]![0]).toEqual({
      to: "hanif@hanifcarroll.com",
      from: { email: "website@mail.hanifcarroll.com", name: "Hanif Carroll website" },
      subject: valid.subject,
      text: valid.text,
      replyTo: valid.replyTo,
    });
  });

  test("ignores a sender, recipient, or extra fields in the request", async () => {
    const { env, send } = okEnv();
    await worker.fetch(
      request({
        ...valid,
        to: "attacker@example.com",
        from: "ceo@example.com",
        cc: "x@example.com",
        bcc: "y@example.com",
        headers: { "X-Evil": "1" },
      }),
      env,
    );
    const sent = send.mock.calls[0]![0];
    expect(sent.to).toBe(vars.CONTACT_TO);
    expect(sent.from).toEqual({ email: vars.CONTACT_FROM_ADDRESS, name: vars.CONTACT_FROM_NAME });
    expect(Object.keys(sent).sort()).toEqual(["from", "replyTo", "subject", "text", "to"]);
  });

  test("rejects other paths and methods", async () => {
    const { env, send } = okEnv();
    expect((await worker.fetch(request(valid, { path: "/" }), env)).status).toBe(404);
    expect((await worker.fetch(request(valid, { path: "/send/extra" }), env)).status).toBe(404);
    const get = await worker.fetch(request(null, { method: "GET" }), env);
    expect(get.status).toBe(405);
    expect(get.headers.get("Allow")).toBe("POST");
    expect((await worker.fetch(request(valid, { method: "PUT" }), env)).status).toBe(405);
    expect(send).not.toHaveBeenCalled();
  });

  test("rejects a body that isn't a JSON object", async () => {
    const { env, send } = okEnv();
    const form = await worker.fetch(
      request(valid, { type: "application/x-www-form-urlencoded" }),
      env,
    );
    expect(form.status).toBe(415);

    const broken = new Request("https://mailer/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{not json",
    });
    expect(await (await worker.fetch(broken, env)).json()).toEqual({
      ok: false,
      code: "E_BAD_JSON",
    });
    expect((await worker.fetch(request([valid]), env)).status).toBe(400);
    expect((await worker.fetch(request("text"), env)).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  test.each([
    ["a missing subject", { subject: undefined }, "E_BAD_SUBJECT"],
    ["a subject with a line break", { subject: "Hi\r\nBcc: x@example.com" }, "E_BAD_SUBJECT"],
    ["a subject over the cap", { subject: "s".repeat(MAILER_LIMITS.subject + 1) }, "E_BAD_SUBJECT"],
    [
      "a reply-to with a line break",
      { replyTo: "ana@example.com\nBcc: x@example.com" },
      "E_BAD_REPLY_TO",
    ],
    ["two reply-to addresses", { replyTo: "a@example.com, b@example.com" }, "E_BAD_REPLY_TO"],
    ["a reply-to that isn't an address", { replyTo: "ana" }, "E_BAD_REPLY_TO"],
    ["a reply-to over the cap", { replyTo: `${"a".repeat(250)}@example.com` }, "E_BAD_REPLY_TO"],
    ["a non-string reply-to", { replyTo: ["ana@example.com"] }, "E_BAD_REPLY_TO"],
    ["an empty text", { text: "  " }, "E_BAD_TEXT"],
    ["a text over 8,000 characters", { text: "t".repeat(MAILER_LIMITS.text + 1) }, "E_BAD_TEXT"],
  ])("rejects %s", async (_label, override, code) => {
    const { env, send } = okEnv();
    const response = await worker.fetch(request({ ...valid, ...override }), env);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ ok: false, code });
    expect(send).not.toHaveBeenCalled();
  });

  test("accepts a text of exactly 8,000 characters", async () => {
    const { env } = okEnv();
    const response = await worker.fetch(
      request({ ...valid, text: "t".repeat(MAILER_LIMITS.text) }),
      env,
    );
    expect(response.status).toBe(200);
  });

  test("maps a send error to 502 with its E_ code and logs only the code", async () => {
    const log = spyOn(console, "error").mockImplementation(() => {});
    const { env } = stubEnv(async () => {
      throw Object.assign(new Error(`could not send to ${valid.replyTo}: ${valid.subject}`), {
        code: "E_SENDER_NOT_VERIFIED",
      });
    });

    const response = await worker.fetch(request(valid), env);
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, code: "E_SENDER_NOT_VERIFIED" });

    const logged = log.mock.calls.flat().join(" ");
    expect(logged).toContain("E_SENDER_NOT_VERIFIED");
    expect(logged).not.toContain(valid.replyTo);
    expect(logged).not.toContain(valid.subject);
    expect(logged).not.toContain("Our quotes take a day.");
    log.mockRestore();
  });

  test("uses E_UNKNOWN when the error has no E_ code", async () => {
    const log = spyOn(console, "error").mockImplementation(() => {});
    const { env } = stubEnv(async () => {
      throw new Error("boom");
    });
    const response = await worker.fetch(request(valid), env);
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, code: "E_UNKNOWN" });
    log.mockRestore();
  });

  test("errorCode reads only E_ codes", () => {
    expect(errorCode({ code: "E_RATE_LIMIT_EXCEEDED" })).toBe("E_RATE_LIMIT_EXCEEDED");
    expect(errorCode({ code: "ana@example.com" })).toBe("E_UNKNOWN");
    expect(errorCode("E_STRING")).toBe("E_UNKNOWN");
    expect(errorCode(null)).toBe("E_UNKNOWN");
  });
});
