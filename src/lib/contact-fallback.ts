// The page the contact Pages Function answers with when a visitor without JavaScript posts the
// form and it can't go through (a field error or a failed send). It shows the form again, filled
// with what they typed, so they can fix it or send it again from here. It is a self-contained HTML
// page: the static /contact/ page can't be refilled without a script.
import { EMAIL, EMAIL_URL } from "../consts";
import { getDictionary, type Locale } from "../i18n";
import { contactAction, type ContactErrors, type ContactField } from "./contact";
import { CONTACT_FIELDS, CONTACT_LIMITS, HONEYPOT_FIELD } from "./contact-fields";

export type ContactFormValues = Record<ContactField | "source", string>;

export const EMPTY_CONTACT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  business: "",
  message: "",
  source: "",
};

// Values are echoed back so nothing is lost, but never an unbounded amount of it.
const ECHO_LIMITS: Record<keyof ContactFormValues, number> = {
  name: CONTACT_LIMITS.name * 4,
  email: CONTACT_LIMITS.email * 4,
  business: CONTACT_LIMITS.business * 4,
  message: CONTACT_LIMITS.message * 4,
  source: CONTACT_LIMITS.source,
};

export const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ??
      character,
  );

/** What the visitor submitted, as typed. The honeypot is never read here. */
export function submittedValues(fields: { get(name: string): unknown }): ContactFormValues {
  const read = (name: keyof ContactFormValues) => {
    const value = fields.get(name);
    return typeof value === "string" ? value.slice(0, ECHO_LIMITS[name]) : "";
  };
  return {
    name: read("name"),
    email: read("email"),
    business: read("business"),
    message: read("message"),
    source: read("source"),
  };
}

const errorLine = (name: ContactField, errors: ContactErrors) =>
  errors[name] ? `<p class="error" id="contact-${name}-error">${escapeHtml(errors[name])}</p>` : "";

const describedBy = (name: ContactField, errors: ContactErrors) =>
  errors[name] ? ` aria-invalid="true" aria-describedby="contact-${name}-error"` : "";

const STYLE = `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 3rem 1.5rem 5rem; color: #282828; background: #fff; font: 1.125rem/1.55 "Helvetica Neue", Helvetica, Arial, sans-serif; }
main { max-width: 36rem; }
h1 { margin: 0 0 1.5rem; font: 400 clamp(2.25rem, 9vw, 3.5rem)/1 "EB Garamond", Georgia, serif; letter-spacing: -0.04em; }
p { margin: 0 0 1rem; }
.alert { font-weight: 500; }
form { display: grid; gap: 1.75rem; margin-top: 2.5rem; }
label { display: block; font-size: 1rem; font-weight: 500; line-height: 1.3; }
input, textarea { display: block; width: 100%; margin-top: 0.5rem; padding: 0.75rem 1rem; border: 1px solid #504945; border-radius: 0.5rem; background: #fff; color: #282828; font: inherit; line-height: 1.5; }
textarea { min-height: 12rem; resize: vertical; }
input:focus, textarea:focus { border-color: #282828; }
[aria-invalid="true"] { border-color: #282828; border-width: 2px; }
.error { margin: 0.5rem 0 0; font-size: 1rem; font-weight: 500; line-height: 1.4; }
.trap { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
button { min-height: 3.25rem; width: 100%; padding: 0.75rem 1.625rem; border: 0; border-radius: 0.5rem; background: #282828; color: #fff; font: inherit; font-size: 1rem; font-weight: 500; line-height: 1.2; cursor: pointer; }
button:hover, button:focus-visible { background: #504945; }
@media (min-width: 40rem) { button { width: auto; } }
a { color: #282828; text-decoration: underline 2px #725a00; text-underline-offset: 0.18em; }
a:hover, a:focus-visible { text-decoration-color: #f8d651; }
:is(a, button, input, textarea):focus-visible { outline: 2px solid #282828; outline-offset: 2px; }
.more { margin-top: 2.5rem; font-size: 1rem; color: #504945; }
`;

export interface FallbackPage {
  status: 400 | 502;
  values: ContactFormValues;
  errors?: ContactErrors;
  locale: Locale;
}

// The newline after <textarea> is dropped by the HTML parser, so a message that starts with a line
// break keeps it.
/** The 400 page (errors beside their fields) or the 502 page (the failure above the form). */
export function renderContactFallback({
  status,
  values,
  errors = {},
  locale,
}: FallbackPage): string {
  const { contact } = getDictionary(locale);
  const heading = status === 400 ? contact.invalidHeading : contact.failedHeading;
  const alert =
    status === 502 ? `<p class="alert" role="alert">${escapeHtml(contact.failure)}</p>` : "";

  const inputs = CONTACT_FIELDS.map(
    ({ name, type, autocomplete, required }) => `<div>
<label for="contact-${name}">${escapeHtml(contact.fields[name])}</label>
<input id="contact-${name}" name="${name}" type="${type}" autocomplete="${autocomplete}"${required ? " required" : ""} maxlength="${CONTACT_LIMITS[name]}" value="${escapeHtml(values[name])}"${describedBy(name, errors)}>
${errorLine(name, errors)}
</div>`,
  ).join("\n");

  return `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(heading)} | Hanif Carroll</title>
<style>${STYLE}</style>
</head>
<body>
<main>
<h1>${escapeHtml(heading)}</h1>
${alert}
<form method="post" action="${contactAction(locale)}"${locale === "es" ? " novalidate" : ""}>
${inputs}
<div>
<label for="contact-message">${escapeHtml(contact.fields.message)}</label>
<textarea id="contact-message" name="message" rows="7" required maxlength="${CONTACT_LIMITS.message}"${describedBy("message", errors)}>
${escapeHtml(values.message)}</textarea>
${errorLine("message", errors)}
</div>
<div class="trap" aria-hidden="true">
<label for="contact-${HONEYPOT_FIELD}">${escapeHtml(contact.honeypot)}</label>
<input id="contact-${HONEYPOT_FIELD}" type="text" name="${HONEYPOT_FIELD}" tabindex="-1" autocomplete="off" value="">
</div>
<input type="hidden" name="source" value="${escapeHtml(values.source)}">
<div><button type="submit">${escapeHtml(contact.submit)}</button></div>
</form>
<p class="more">${escapeHtml(contact.directEmail)} <a href="${EMAIL_URL}">${EMAIL}</a>.</p>
</main>
</body>
</html>`;
}
