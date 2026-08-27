// Every project keeps its direct route at /projects/[slug]/. These collections
// control discovery on the projects archive so client product work and
// independent product engineering do not compete for the same meaning.
export const PROJECT_ARCHIVE_GROUPS = [
  {
    id: "client-product-work",
    label: "Client product work",
    description:
      "Client engagements where I owned product decisions, implementation, and handoff — from a founder's idea to billing, reliability, and launch.",
    slugs: [
      "palabruno",
      "genrupt",
      "desarmadero-operations-prototype",
      "mucho-hangouts",
      "desarmadero-la-torre",
      "online-store-conversion-review",
      "health-ai-search-audit",
      "casa-elaria",
      "maximo-interiorismo",
      "redwriter-comics",
    ],
  },
  {
    id: "products-experiments",
    label: "Products & experiments",
    description:
      "Independent products and prototypes built to test an idea through working software.",
    slugs: [
      "tranquility-spa-concierge",
      "casamo",
      "ba-eventos",
      "riowell",
      "product-usage-scoring-routing",
      "vox-prismatic",
      "agent-recall",
      "codex-telegram-bridge",
      "acquire",
      "linkedin-tools",
      "apartment-finder",
      "job-application-assistant",
      "one-tuesday",
      "language-exchange",
    ],
  },
] as const;

export const DELISTED_PROJECT_SLUGS = [] as const;
