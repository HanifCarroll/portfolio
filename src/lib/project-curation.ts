// These groups control archive discovery without changing any direct routes.
export const PROJECT_ARCHIVE_GROUPS = [
  {
    id: "small-business-work",
    label: "Small-business work",
    description: "Websites, stores, and operations tools for small businesses.",
    slugs: [
      "desarmadero-la-torre",
      "online-store-conversion-review",
      "sales-funnel-solo-coach",
      "casa-elaria",
      "maximo-interiorismo",
      "redwriter-comics",
    ],
  },
  {
    id: "client-product-work",
    label: "Startup and product work",
    description: "Apps built with founders, from launch to ongoing engineering.",
    slugs: ["genrupt", "palabruno", "mucho-hangouts"],
  },
  {
    id: "products-experiments",
    label: "Products & experiments",
    description:
      "Independent products and prototypes built to test an idea through working software.",
    slugs: [
      "casamo",
      "ba-eventos",
      "neden",
      "switchboard",
      "process-scribe",
      "tidal-spa-concierge",
      "riowell",
      "product-usage-scoring-routing",
      "vox-prismatic",
      "agent-recall",
      "codex-telegram-bridge",
      "acquire",
      "apartment-finder",
      "one-tuesday",
      "language-exchange",
    ],
  },
] as const;

export const DELISTED_PROJECT_SLUGS = ["linkedin-tools", "job-application-assistant"] as const;

// The detailed prototype is reached from the combined client story rather than
// appearing as a second client on the archive.
export const NESTED_PROJECT_SLUGS = ["desarmadero-operations-prototype"] as const;
