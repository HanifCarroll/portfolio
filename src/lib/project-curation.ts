// Every project keeps its direct route at /projects/[slug]/. These collections
// control discovery on the projects archive so client product work and
// independent product engineering do not compete for the same meaning.
export const PROJECT_ARCHIVE_GROUPS = [
  {
    id: "client-product-work",
    label: "Client work",
    description:
      "Selected engagements spanning operational discovery, production AI, launch, and ongoing engineering.",
    slugs: ["desarmadero-la-torre", "genrupt", "palabruno", "mucho-hangouts"],
  },
  {
    id: "scoping-diagnostic-work",
    label: "Scoping & diagnostic work",
    description: "Focused builds and assessments that make the next business decision concrete.",
    slugs: ["casa-elaria", "online-store-conversion-review"],
  },
  {
    id: "additional-client-work",
    label: "Additional client work",
    description: "Websites designed and delivered directly for clients.",
    slugs: ["maximo-interiorismo", "redwriter-comics"],
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
