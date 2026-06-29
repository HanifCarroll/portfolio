export const HOMEPAGE_CASE_STUDY_SLUGS = ['acquire', 'desarmadero-operations-prototype', 'genrupt', 'palabruno'] as const;

export const CLIENT_PROJECT_ORDER = [
	'palabruno',
	'casamo',
	'genrupt',
	'desarmadero-operations-prototype',
	'mucho-hangouts',
	'casa-elaria',
	'desarmadero-latorre',
	'maximo-interiorismo',
	'redwriter-comics'
] as const;

export const EXPERIMENT_PROJECT_ORDER = [
	'acquire',
	'job-application-assistant',
	'linkedin-tools',
	'codex-telegram-bridge',
	'agent-recall',
	'client-feedback',
	'apartment-finder',
	'ba-eventos',
	'language-exchange',
	'vox-prismatic'
] as const;

export const PROJECT_OUTCOME_HIGHLIGHTS: Record<string, string> = {
	acquire:
		'Acquire turns sourcing, review, application prep, outreach, and submission into one local-first operating system with approval gates.',
	'job-application-assistant':
		'Job Application Assistant keeps the job snapshot, selected proof, Codex draft, cover-letter PDF, and application ledger in one local workflow.',
	'linkedin-tools':
		'LinkedIn Tools puts networking, outreach, comment extraction, and opportunity research behind controller-owned state and guarded send actions.',
	'codex-telegram-bridge':
		'Codex Telegram Bridge lets me reply to Codex from Telegram or Discord while local state owns presence, routing, approvals, and delivery.',
	'agent-recall': 'Agent Recall makes prior agent work searchable with SQLite FTS5, source receipts, memory records, and freshness checks.',
	'client-feedback':
		'Client Feedback turns WhatsApp chats, voice notes, Gmail threads, and attachments into local evidence packets with manifests and hashes.',
	palabruno:
		'Palabruno moved from rough founder idea to launch with iOS, Android, web payments, teacher workflows, store assets, and clearer positioning.',
	genrupt:
		'Genrupt moved from fragile AI generation toward a commercial Amazon seller workflow platform with safer billing and async operations.',
	casamo:
		'Casamo helps remote workers turn a noisy stay search into a bookable shortlist backed by photos, amenities, reviews, and host questions.',
	'desarmadero-operations-prototype':
		'One discovery call became a clickable yard-operations prototype, PRD, spec, live demo, and clearer scope conversation.',
	'mucho-hangouts': 'The live social events product became more reliable while the team kept shipping with clearer technical patterns.',
	'casa-elaria': 'The fake-door storefront tested buyer intent before inventory spend.',
	'desarmadero-latorre': 'The business gained a 24/7 inventory channel and fewer repetitive stock calls.',
	'maximo-interiorismo': 'The designer gained a cleaner public home for high-value project conversations.',
	'redwriter-comics': 'The artist gained a professional portfolio hub for editors and commissions.',
	'apartment-finder': 'A noisy apartment search became an evidence-backed AI workflow with measured fixture performance.',
	'ba-eventos': 'Fragmented local event data became a live, grounded AI discovery product.'
};
