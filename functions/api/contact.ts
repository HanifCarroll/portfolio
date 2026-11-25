// Cloudflare Pages Function for the /contact/ form. It hands one plain-text email to the
// portfolio-contact-mailer Worker through the `MAILER` service binding.
// The page's script posts with `Accept: application/json` and gets JSON back. Without JavaScript the
// browser posts the form itself, and gets a 303 to /contact/sent/ or a page that shows the form again,
// filled with what the visitor typed.
import {
  CONTACT_COPY,
  sendContactEmail,
  validateContact,
  type ContactEnv,
  type ContactErrors,
} from "../../src/lib/contact";
import {
  EMPTY_CONTACT_VALUES,
  renderContactFallback,
  submittedValues,
  type ContactFormValues,
  type FallbackPage,
} from "../../src/lib/contact-fallback";

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

/** The page for visitors without JavaScript: the form again, filled with what they typed. */
const fallbackPage = (page: FallbackPage) =>
  new Response(renderContactFallback(page), {
    status: page.status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });

const invalid = (request: Request, errors: ContactErrors, values: ContactFormValues) =>
  wantsJson(request)
    ? json({ ok: false, errors }, 400)
    : fallbackPage({ status: 400, values, errors });

const failed = (request: Request, values: ContactFormValues) =>
  wantsJson(request)
    ? json({ ok: false, error: CONTACT_COPY.failure }, 502)
    : fallbackPage({ status: 502, values });

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
    // Nothing to refill: an empty form with the errors.
    return invalid(
      request,
      {
        name: CONTACT_COPY.errors.name,
        email: CONTACT_COPY.errors.email,
        message: CONTACT_COPY.errors.message,
      },
      EMPTY_CONTACT_VALUES,
    );
  }

  const result = validateContact(fields);
  if (!result.ok) return invalid(request, result.errors, submittedValues(fields));
  // A filled honeypot looks like a normal success and sends nothing.
  if (result.spam) return sent(request);

  const delivery = await sendContactEmail(result.value, env);
  if (!delivery.ok) {
    // Status only: never the key or the visitor's message.
    const detail = delivery.code ? `${delivery.status} ${delivery.code}` : `${delivery.status}`;
    console.error(`contact form: delivery failed (${detail})`);
    return failed(request, submittedValues(fields));
  }

  return sent(request);
};
