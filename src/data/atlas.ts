// Sections mostly answer one question: where does this component live? Tests and guardrails split the repo for size.
export const atlasSections = [
  {
    id: "code",
    title: "In your app’s code",
    description: "Libraries and patterns inside the software you ship.",
  },
  {
    id: "ai",
    title: "In your AI features",
    description: "Components for products that call language models.",
  },
  {
    id: "tests",
    title: "Tests",
    description: "Checks that show the software does what it should.",
  },
  {
    id: "guardrails",
    title: "Guardrails",
    description: "Checks and tools in your repo that keep bad code from getting in.",
  },
  {
    id: "production",
    title: "In production",
    description: "What runs and measures your app once people use it.",
  },
  {
    id: "agent",
    title: "Around the agent",
    description: "The context, tools and limits you give a coding agent.",
  },
] as const;

// A second way in, by the problem the reader has. Slugs are checked against the collection at build time.
export const atlasProblems = [
  {
    id: "works",
    title: "Know it works",
    entries: [
      "property-based-testing",
      "browser-testing",
      "fuzzer",
      "visual-regression",
      "formal-specs",
    ],
  },
  {
    id: "quality",
    title: "Keep bad code out",
    entries: [
      "architecture-checks",
      "git-hooks-and-ci",
      "ai-code-review",
      "secret-scanning",
      "cleanup-scanners",
    ],
  },
  {
    id: "data",
    title: "Keep data correct",
    entries: ["schema-validation", "database-migrations", "typed-errors", "state-machines"],
  },
  {
    id: "release",
    title: "Ship safely",
    entries: ["feature-flags", "canaries", "git-hooks-and-ci", "infrastructure-from-code"],
  },
  {
    id: "observe",
    title: "See what’s happening",
    entries: ["telemetry", "canaries", "llm-tracing", "product-analytics"],
  },
  {
    id: "ai",
    title: "Make AI features reliable",
    entries: ["llm-evals", "llm-tracing", "document-parsing", "agent-security-scanner"],
  },
  {
    id: "agents",
    title: "Give agents context and limits",
    entries: ["agent-instructions-file", "agent-skills", "specs-and-plans", "agent-sandbox"],
  },
  {
    id: "assistants",
    title: "Let AI assistants use your product",
    entries: ["mcp-server", "authentication", "agent-security-scanner"],
  },
  { id: "charge", title: "Charge for it", entries: ["payments", "background-jobs", "transactional-email"] },
] as const;

/** Tool names are the bold labels in an entry's popular choices list. */
export const atlasTools = (body = "", heading = "## Popular choices") =>
  [
    ...(body.split(heading)[1]?.split("\n## ")[0] ?? "").matchAll(
      /^- \*\*(.+?)\*\*/gm,
    ),
  ].map((match) => match[1]);
