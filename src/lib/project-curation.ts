export const HOMEPAGE_CASE_STUDY_SLUGS = ['palabruno', 'genrupt', 'mucho-hangouts'] as const;

export const CLIENT_PROJECT_ORDER = [
	'palabruno',
	'genrupt',
	'mucho-hangouts',
	'casa-elaria',
	'desarmadero-latorre',
	'maximo-interiorismo',
	'redwriter-comics'
] as const;

export const EXPERIMENT_PROJECT_ORDER = ['apartment-finder', 'ba-eventos', 'language-exchange', 'vox-prismatic'] as const;

export const PROJECT_OUTCOME_HIGHLIGHTS: Record<string, string> = {
	palabruno:
		'Palabruno moved from rough founder idea to launch with iOS, Android, web payments, teacher workflows, store assets, and clearer positioning.',
	genrupt:
		'Genrupt moved from fragile AI generation toward a commercial Amazon seller workflow platform with safer billing and async operations.',
	'mucho-hangouts': 'The live social events product became more reliable while the team kept shipping with clearer technical patterns.',
	'casa-elaria': 'The fake-door storefront tested buyer intent before inventory spend.',
	'desarmadero-latorre': 'The business gained a 24/7 inventory channel and fewer repetitive stock calls.',
	'maximo-interiorismo': 'The designer gained a cleaner public home for high-value project conversations.',
	'redwriter-comics': 'The artist gained a professional portfolio hub for editors and commissions.',
	'apartment-finder': 'A noisy apartment search became an evidence-backed AI workflow with measured fixture performance.',
	'ba-eventos': 'Fragmented local event data became a live, grounded AI discovery product.'
};
