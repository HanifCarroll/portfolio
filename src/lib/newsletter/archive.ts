export interface NewsletterArchiveIssue {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  issueNumber: number;
  tags: string[];
  coverImage?: string;
  coverAlt?: string;
  isSample?: boolean;
}

export const sampleNewsletterIssues: NewsletterArchiveIssue[] = [
  {
    slug: "the-approval-step-that-belonged-earlier",
    title: "The approval step that belonged earlier",
    description:
      "A field note about finding the human decision that should control repeated production.",
    pubDate: new Date("2026-07-22T12:00:00Z"),
    issueNumber: 2,
    tags: ["Judgment", "Workflow design"],
    isSample: true,
  },
  {
    slug: "what-an-agent-should-be-allowed-to-forget",
    title: "What an agent should be allowed to forget",
    description:
      "Why reliable context is often a question of exclusion, ownership, and deliberate expiry.",
    pubDate: new Date("2026-07-29T12:00:00Z"),
    issueNumber: 3,
    tags: ["Context", "Agents"],
    isSample: true,
  },
  {
    slug: "when-more-context-makes-the-workflow-worse",
    title: "When more context makes the workflow worse",
    description:
      "The point where extra material stops helping and starts hiding the decision the system needs to make.",
    pubDate: new Date("2026-08-05T12:00:00Z"),
    issueNumber: 4,
    tags: ["Context", "Quality"],
    isSample: true,
  },
  {
    slug: "a-small-evaluation-is-better-than-a-vague-standard",
    title: "A small evaluation is better than a vague standard",
    description:
      "Turning one important quality judgment into something a workflow can test before it scales.",
    pubDate: new Date("2026-08-12T12:00:00Z"),
    issueNumber: 5,
    tags: ["Evaluation", "Quality"],
    isSample: true,
  },
  {
    slug: "the-work-that-should-stay-manual",
    title: "The work that should stay manual",
    description:
      "A practical boundary for keeping judgment visible without making every step depend on a person.",
    pubDate: new Date("2026-08-19T12:00:00Z"),
    issueNumber: 6,
    tags: ["Judgment", "Automation"],
    isSample: true,
  },
];
