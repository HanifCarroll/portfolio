export const atlasSections = [
	{ id: 'product', title: 'Product', description: 'Deciding what to build and learning whether it works for people.' },
	{ id: 'application', title: 'The application', description: 'Components inside the software you ship.' },
	{ id: 'testing', title: 'Testing', description: 'Checks that catch what the author, human or agent, didn’t think of.' },
	{ id: 'ai', title: 'AI in the system', description: 'Components for products that use LLMs and agents.' },
	{ id: 'agents', title: 'Building with agents', description: 'The repo, workflow and guardrails that keep coding agents productive and honest.' },
] as const;

/** Tool names are the bold labels in an entry's "Popular choices" list. */
export const atlasTools = (body = '') =>
	[...(body.split('## Popular choices')[1]?.split('\n## ')[0] ?? '').matchAll(/^- \*\*(.+?)\*\*/gm)].map((match) => match[1]);
