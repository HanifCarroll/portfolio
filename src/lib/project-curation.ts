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
      "genrupt",
      "palabruno",
      "mucho-hangouts",
      "desarmadero-la-torre",
      "desarmadero-operations-prototype",
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
      "Independent products and experiments that show AI systems, evidence-driven building, and workflow tooling outside client work.",
    slugs: [
      "ba-eventos",
      "casamo",
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

export type ProjectArchiveLabel =
  | "Client project"
  | "Product"
  | "Tool"
  | "Demonstration";

const PROJECT_ARCHIVE_LABELS: Record<string, ProjectArchiveLabel> = {
  genrupt: "Client project",
  palabruno: "Client project",
  "mucho-hangouts": "Client project",
  "desarmadero-la-torre": "Client project",
  "desarmadero-operations-prototype": "Client project",
  "online-store-conversion-review": "Client project",
  "health-ai-search-audit": "Client project",
  "casa-elaria": "Client project",
  "maximo-interiorismo": "Client project",
  "redwriter-comics": "Client project",
  "ba-eventos": "Product",
  casamo: "Product",
  "language-exchange": "Product",
  "apartment-finder": "Product",
  "vox-prismatic": "Product",
  "agent-recall": "Tool",
  "codex-telegram-bridge": "Tool",
  acquire: "Tool",
  "linkedin-tools": "Tool",
  "job-application-assistant": "Tool",
  "product-usage-scoring-routing": "Demonstration",
  "one-tuesday": "Demonstration",
  riowell: "Demonstration",
};

export const getProjectArchiveLabel = (slug: string): ProjectArchiveLabel => {
  const label = PROJECT_ARCHIVE_LABELS[slug];
  if (!label) throw new Error(`Missing archive label for project "${slug}".`);
  return label;
};

export const DELISTED_PROJECT_SLUGS = [] as const;
