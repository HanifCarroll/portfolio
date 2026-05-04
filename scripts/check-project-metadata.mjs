import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const projectsDir = join(root, 'src/lib/projects');
const caseStudiesDir = join(root, 'src/content/case-studies');
const srcDir = join(root, 'src');

const localProjectFiles = readdirSync(projectsDir)
	.filter((file) => file.endsWith('.json'))
	.sort();

const errors = [];

const toAssetPath = (value) => {
	if (typeof value !== 'string') return undefined;
	if (value.startsWith('@src/')) return join(srcDir, value.slice('@src/'.length));
	if (value.startsWith('/')) return join(root, 'public', value);
	return undefined;
};

for (const file of localProjectFiles) {
	const filePath = join(projectsDir, file);
	const raw = readFileSync(filePath, 'utf8');
	const project = JSON.parse(raw);
	const slug = basename(file, extname(file));

	if (project.slug !== slug) {
		errors.push(`${file}: slug "${project.slug}" does not match filename "${slug}".`);
	}

	const caseStudyPath = join(caseStudiesDir, `${slug}.mdx`);
	if (!existsSync(caseStudyPath)) {
		errors.push(`${file}: missing case study at src/content/case-studies/${slug}.mdx.`);
	}

	for (const [key, value] of Object.entries(project.images ?? {})) {
		const assetPath = toAssetPath(value);
		if (!assetPath) continue;
		if (!existsSync(assetPath)) {
			errors.push(`${file}: images.${key} points to missing asset "${value}".`);
		}
	}

	for (const urlField of ['liveUrl', 'repository']) {
		const url = project[urlField];
		if (!url) continue;
		try {
			new URL(url);
		} catch {
			errors.push(`${file}: ${urlField} is not a valid URL.`);
		}
	}
}

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Validated ${localProjectFiles.length} project metadata files.`);
