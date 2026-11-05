// Sections mostly answer one question: where does this component live? Tests and guardrails split the repo for size.
export const atlasSections = [
	{ id: 'code', title: 'In your app’s code', description: 'Libraries and patterns inside the software you ship.' },
	{ id: 'ai', title: 'In your AI features', description: 'Components for products that call language models.' },
	{ id: 'tests', title: 'Tests', description: 'Checks that show the software does what it should.' },
	{ id: 'guardrails', title: 'Guardrails', description: 'Checks and tools in your repo that keep bad code from getting in.' },
	{ id: 'production', title: 'In production', description: 'What runs and measures your app once people use it.' },
	{ id: 'agent', title: 'Around the agent', description: 'The context, tools and limits you give a coding agent.' },
] as const;

// A second way in, by the problem the reader has. Slugs are checked against the collection at build time.
export const atlasProblems = [
	{ title: 'Know it works', entries: ['property-based-testing', 'browser-testing', 'fuzzer', 'visual-regression'] },
	{ title: 'Keep bad code out', entries: ['architecture-checks', 'git-hooks-and-ci', 'ai-code-review', 'cleanup-scanners'] },
	{ title: 'Keep data correct', entries: ['schema-validation', 'typed-errors', 'state-machines'] },
	{ title: 'Ship safely', entries: ['feature-flags', 'git-hooks-and-ci', 'infrastructure-from-code', 'accessibility-checker'] },
	{ title: 'See what’s happening', entries: ['telemetry', 'llm-tracing', 'product-analytics'] },
	{ title: 'Make AI features reliable', entries: ['llm-evals', 'llm-tracing', 'document-parsing', 'agent-security-scanner'] },
	{ title: 'Give agents context and limits', entries: ['agent-instructions-file', 'agent-skills', 'specs-and-plans', 'agent-sandbox'] },
];

/** Tool names are the bold labels in an entry's "Popular choices" list. */
export const atlasTools = (body = '') =>
	[...(body.split('## Popular choices')[1]?.split('\n## ')[0] ?? '').matchAll(/^- \*\*(.+?)\*\*/gm)].map((match) => match[1]);
