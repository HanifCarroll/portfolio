export const HONEYPOT_FIELD = "contact_url";

export const CONTACT_LIMITS = {
  name: 200,
  email: 254,
  business: 200,
  message: 5000,
  source: 500,
} as const;

export const CONTACT_FIELDS = [
  { name: "name", type: "text", autocomplete: "name", required: true },
  { name: "email", type: "email", autocomplete: "email", required: true },
  { name: "business", type: "text", autocomplete: "organization", required: false },
] as const;
