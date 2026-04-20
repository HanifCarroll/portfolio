import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const files = {
	header: readFileSync(join(root, 'src/layouts/components/Header.astro'), 'utf8'),
	home: readFileSync(join(root, 'src/pages/index.astro'), 'utf8'),
	services: readFileSync(join(root, 'src/pages/launch.astro'), 'utf8')
};

const expectations = [
	{
		file: 'header',
		text: 'Technical Product Partner',
		reason: 'header tagline should avoid commodity AI positioning'
	},
	{
		file: 'home',
		text: 'Hanif Carroll | Technical Product Partner',
		reason: 'homepage title should match the new portfolio positioning'
	},
	{
		file: 'home',
		text: 'founder-led teams turn vague product ideas and manual workflows',
		reason: 'homepage hero should name both buyer pains clearly'
	},
	{
		file: 'home',
		text: 'Choose Your Path',
		reason: 'homepage hero should route visitors before forcing a booking decision'
	},
	{
		file: 'home',
		text: 'I need to launch a product',
		reason: 'homepage should include a product-launch path'
	},
	{
		file: 'home',
		text: 'I need to fix a workflow',
		reason: 'homepage should include a workflow path'
	},
	{
		file: 'home',
		text: 'Workflow Audit & AI Systems',
		reason: 'homepage offer should make the paid audit concrete'
	},
	{
		file: 'services',
		text: 'MVP Launches &amp; Workflow Audits',
		reason: 'services metadata/title should describe the decision page'
	},
	{
		file: 'services',
		text: 'Start with the right first system.',
		reason: 'services hero should not simply repeat the homepage headline'
	},
	{
		file: 'services',
		text: "id='paths'",
		reason: 'services page should expose a direct anchor for offer comparison'
	},
	{
		file: 'services',
		text: 'Workflow map',
		reason: 'Workflow Audit deliverables should be tangible'
	},
	{
		file: 'services',
		text: 'What if AI is not the right fix?',
		reason: 'FAQ should handle AI-fit skepticism'
	},
	{
		file: 'services',
		text: 'How do you handle sensitive business context?',
		reason: 'FAQ should address trust and data access'
	}
];

const failures = expectations.filter(({ file, text }) => !files[file].includes(text));

if (failures.length > 0) {
	for (const failure of failures) {
		console.error(`Missing in ${failure.file}: ${failure.text}`);
		console.error(`  ${failure.reason}`);
	}
	process.exit(1);
}

console.log(`Portfolio copy checks passed: ${expectations.length} expectations`);
