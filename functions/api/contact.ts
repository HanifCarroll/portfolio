// Cloudflare Pages Function for the /contact/ form. It sends one plain-text email through Resend.
// The page's script posts with `Accept: application/json` and gets JSON back. Without JavaScript the
// browser posts the form itself, and gets a 303 to /contact/sent/ or a small HTML page.
import {
  CONTACT_COPY,
  sendContactEmail,
  validateContact,
  type ContactEnv,
  type ContactErrors,
} from "../../src/lib/contact";

interface PagesContext {
  request: Request;
  env: ContactEnv;
}

const SENT_PATH = "/contact/sent/";

const wantsJson = (request: Request) =>
  (request.headers.get("Accept") ?? "").includes("application/json");

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ??
      character,
  );

/** A small page for visitors without JavaScript, when the form can't send. */
const htmlPage = (heading: string, lines: string[], status: number) =>
  new Response(
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(heading)} | Hanif Carroll</title>
<style>
body { margin: 0; padding: 3rem 1.5rem; color: #282828; background: #fff; font: 1.125rem/1.55 "Helvetica Neue", Helvetica, Arial, sans-serif; }
main { max-width: 36rem; }
h1 { margin: 0 0 1.5rem; font: 400 clamp(2.25rem, 6vw, 3.5rem)/1 "EB Garamond", Georgia, serif; letter-spacing: -0.04em; }
p { margin: 0 0 1rem; }
a { color: #282828; text-decoration: underline 2px #725a00; text-underline-offset: 0.18em; }
a:focus-visible { outline: 2px solid #282828; outline-offset: 2px; }
</style>
</head>
<body>
<main>
<h1>${escapeHtml(heading)}</h1>
${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("\n")}
<p><a href="/contact/">Back to the form</a></p>
</main>
</body>
</html>`,
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    },
  );

const invalid = (request: Request, errors: ContactErrors) =>
  wantsJson(request)
    ? json({ ok: false, errors }, 400)
    : htmlPage("Please check the form", Object.values(errors), 400);

const failed = (request: Request) =>
  wantsJson(request)
    ? json({ ok: false, error: CONTACT_COPY.failure }, 502)
    : htmlPage("Your message didn’t send", [CONTACT_COPY.failure], 502);

const sent = (request: Request) =>
  wantsJson(request)
    ? json({ ok: true }, 200)
    : new Response(null, {
        status: 303,
        headers: { Location: new URL(SENT_PATH, request.url).toString() },
      });

export const onRequestPost = async ({ request, env }: PagesContext) => {
  let fields: FormData;
  try {
    fields = await request.formData();
  } catch {
    return invalid(request, {
      name: CONTACT_COPY.errors.name,
      email: CONTACT_COPY.errors.email,
      message: CONTACT_COPY.errors.message,
    });
  }

  const result = validateContact(fields);
  if (!result.ok) return invalid(request, result.errors);
  // A filled honeypot looks like a normal success and sends nothing.
  if (result.spam) return sent(request);

  const delivery = await sendContactEmail(result.value, env);
  if (!delivery.ok) {
    // Status only: never the key or the visitor's message.
    console.error(`contact form: delivery failed (${delivery.status})`);
    return failed(request);
  }

  return sent(request);
};
