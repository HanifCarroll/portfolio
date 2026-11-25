import { describe, expect, mock, spyOn, test } from "bun:test";
import { parse } from "parse5";
import { onRequestPost } from "../../functions/api/contact";
import { CONTACT_COPY, CONTACT_EMAIL, HONEYPOT_FIELD } from "./contact";
import { EMPTY_CONTACT_VALUES, renderContactFallback, submittedValues } from "./contact-fallback";

// Reads the rendered page back with a real HTML parser, so the tests see what a browser sees.
type Node = {
  nodeName: string;
  tagName?: string;
  value?: string;
  attrs?: { name: string; value: string }[];
  childNodes?: Node[];
};

const walk = (node: Node, visit: (node: Node) => void) => {
  visit(node);
  for (const child of node.childNodes ?? []) walk(child, visit);
};

const elements = (html: string, tag: string) => {
  const found: Node[] = [];
  walk(parse(html) as unknown as Node, (node) => {
    if (node.tagName === tag) found.push(node);
  });
  return found;
};

const attr = (node: Node, name: string) => node.attrs?.find((a) => a.name === name)?.value;
const textOf = (node: Node) => {
  let out = "";
  walk(node, (child) => {
    if (child.nodeName === "#text") out += child.value ?? "";
  });
  return out;
};

const control = (html: string, name: string) =>
  [...elements(html, "input"), ...elements(html, "textarea")].find(
    (node) => attr(node, "name") === name,
  );

const valueOf = (html: string, name: string) => {
  const node = control(html, name)!;
  return node.tagName === "textarea" ? textOf(node) : attr(node, "value");
};

const hostile = `He said "hi" <b>&amp;</b> & </textarea><script>alert(1)</script> 'quoted'`;

const values = {
  name: `Ana "A" <Pérez> & Co`,
  email: `ana@example.com"><script>`,
  business: `</textarea><img src=x onerror=alert(1)>`,
  message: `\nFirst line\n${hostile}\nLast line`,
  source: `/blog/"<x>&/`,
};

const post = (fields: Record<string, string>) => {
  const body = new FormData();
  for (const [name, value] of Object.entries(fields)) body.set(name, value);
  return new Request("https://www.hanifcarroll.com/api/contact", { method: "POST", body });
};

describe("renderContactFallback", () => {
  test("refills every field exactly, escaping quotes, angle brackets, ampersands, and </textarea>", () => {
    const html = renderContactFallback({ status: 502, values });

    expect(valueOf(html, "name")).toBe(values.name);
    expect(valueOf(html, "email")).toBe(values.email);
    expect(valueOf(html, "business")).toBe(values.business);
    expect(valueOf(html, "message")).toBe(values.message);
    expect(valueOf(html, "source")).toBe(values.source);

    expect(elements(html, "script")).toHaveLength(0);
    expect(elements(html, "img")).toHaveLength(0);
    expect(elements(html, "b")).toHaveLength(0);
    expect(elements(html, "textarea")).toHaveLength(1);
    expect(html).not.toContain("</textarea><");
    expect(html).toContain("&lt;/textarea&gt;");
  });

  test("posts the same fields back to the function", () => {
    const html = renderContactFallback({ status: 400, values: EMPTY_CONTACT_VALUES });
    const [form] = elements(html, "form");
    expect(attr(form!, "method")).toBe("post");
    expect(attr(form!, "action")).toBe("/api/contact");

    const names = [...elements(html, "input"), ...elements(html, "textarea")].map((node) =>
      attr(node, "name"),
    );
    expect(names.sort()).toEqual(
      ["business", "email", HONEYPOT_FIELD, "message", "name", "source"].sort(),
    );

    const labels = elements(html, "label").map(textOf);
    expect(labels).toEqual([
      "Your name",
      "Your email",
      "Business name or website (optional)",
      "What’s the problem?",
      "Leave this field empty",
    ]);
    expect(attr(control(html, HONEYPOT_FIELD)!, "value")).toBe("");
    expect(attr(control(html, "source")!, "type")).toBe("hidden");
  });

  test("the 400 page puts each error beside its field", () => {
    const html = renderContactFallback({
      status: 400,
      values: { ...EMPTY_CONTACT_VALUES, name: "Ana" },
      errors: { email: CONTACT_COPY.errors.email, message: CONTACT_COPY.errors.message },
    });
    const email = control(html, "email")!;
    expect(attr(email, "aria-invalid")).toBe("true");
    expect(attr(email, "aria-describedby")).toBe("contact-email-error");
    const errors = elements(html, "p").filter((node) => attr(node, "class") === "error");
    expect(errors.map((node) => [attr(node, "id"), textOf(node)])).toEqual([
      ["contact-email-error", CONTACT_COPY.errors.email],
      ["contact-message-error", CONTACT_COPY.errors.message],
    ]);
    expect(attr(control(html, "name")!, "aria-invalid")).toBeUndefined();
    expect(html).not.toContain(CONTACT_COPY.failure);
  });

  test("the 502 page shows the failure above the form and keeps the email fallback", () => {
    const html = renderContactFallback({ status: 502, values });
    expect(html.indexOf(CONTACT_COPY.failure)).toBeGreaterThan(-1);
    expect(html.indexOf(CONTACT_COPY.failure)).toBeLessThan(html.indexOf("<form"));
    expect(
      elements(html, "a").some((node) => attr(node, "href") === `mailto:${CONTACT_EMAIL}`),
    ).toBe(true);
    expect(html).toContain('<meta name="robots" content="noindex">');
  });
});

describe("submittedValues", () => {
  test("never reads the honeypot", () => {
    const fields = new FormData();
    fields.set(HONEYPOT_FIELD, "spam-marker");
    expect(Object.values(submittedValues(fields))).not.toContain("spam-marker");
  });
});

describe("POST /api/contact without JavaScript", () => {
  test("a missing field returns 400 with the form refilled and the error beside it", async () => {
    const fetch = mock(async () => Response.json({ ok: true }));
    const response = await onRequestPost({
      request: post({
        name: values.name,
        email: "",
        business: values.business,
        message: values.message,
      }),
      env: { MAILER: { fetch } },
    });

    expect(response.status).toBe(400);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(response.headers.get("Location")).toBeNull();
    const html = await response.text();
    expect(valueOf(html, "name")).toBe(values.name);
    expect(valueOf(html, "business")).toBe(values.business);
    expect(valueOf(html, "message")).toBe(values.message);
    expect(html).toContain(CONTACT_COPY.errors.email);
    expect(fetch).not.toHaveBeenCalled();
  });

  test("a failed send returns 502 with the form refilled, ready to send again", async () => {
    const log = spyOn(console, "error").mockImplementation(() => {});
    const response = await onRequestPost({
      request: post({ ...values, email: "ana@example.com" }),
      env: {},
    });

    expect(response.status).toBe(502);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    const html = await response.text();
    expect(html).toContain(CONTACT_COPY.failure);
    expect(valueOf(html, "message")).toBe(values.message);
    expect(valueOf(html, "email")).toBe("ana@example.com");
    expect(valueOf(html, "source")).toBe(values.source);
    log.mockRestore();
  });

  test("a filled honeypot still gets the normal 303 and its value is never echoed", async () => {
    const response = await onRequestPost({
      request: post({ name: "", email: "", message: "", [HONEYPOT_FIELD]: "spam-marker" }),
      env: {},
    });
    expect(response.status).toBe(303);
    expect(response.headers.get("Location")).toBe("https://www.hanifcarroll.com/contact/sent/");
    expect(await response.text()).not.toContain("spam-marker");
  });

  test("an unreadable body returns an empty form with the errors", async () => {
    const response = await onRequestPost({
      request: new Request("https://www.hanifcarroll.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data; boundary=x" },
        body: "not multipart",
      }),
      env: {},
    });
    expect(response.status).toBe(400);
    const html = await response.text();
    expect(valueOf(html, "name")).toBe("");
    expect(valueOf(html, "message")).toBe("");
    expect(html).toContain(CONTACT_COPY.errors.name);
  });
});
