import { getCollection } from 'astro:content';
import { atlasProblems, atlasSections, atlasTools } from '../data/atlas';
import { atlasProblemsEs, atlasSectionsEs } from '../data/atlas.es';
import { deferredAtlasCopy } from '../data/atlas-deferred.es';
import { getDictionary, localizedPath, type Locale } from '../i18n';

export const getAtlasSections = (locale: Locale) => atlasSections.map((section) => (
	locale === 'es' ? { ...section, ...atlasSectionsEs[section.id] } : section
));

export async function getAtlasCatalog(locale: Locale) {
	const { nav, locale: language } = getDictionary(locale);
	const collection = await getCollection('atlas');
	const byId = new Map(collection.map((entry) => [entry.id, entry]));
	const entries = collection.filter(({ id }) => !id.startsWith('es/')).map((original) => {
		const id = original.id;
		const spanish = locale === 'es' ? byId.get(`es/${id}`) : undefined;
		const entry = spanish ?? original;
		const href = localizedPath(`/atlas/${id}/`, locale);
		const fallback = locale === 'es' && !spanish;
		const copy = fallback ? deferredAtlasCopy[id] : entry.data;
		if (!copy?.title.trim() || !copy.summary.trim() || fallback !== (locale === 'es' && !href.startsWith('/es/')) || entry.data.section !== original.data.section) {
			throw new Error(`Atlas copy, section, or deferral is out of sync for ${id}`);
		}
		return {
			id, entry, href,
			title: copy.title,
			linkTitle: copy.title + (fallback ? nav.englishFallback : ''),
			summary: copy.summary,
			tools: spanish
				? atlasTools(spanish.body, '## Opciones populares').map((tool) => tool
					.replace(/\[([^\]]+)\]\([^)]+\)/g, (_, label: string) => label.replace(nav.englishFallback, ''))
					.replace(/`/g, ''))
				: atlasTools(original.body),
			hreflang: fallback ? 'en' as const : undefined,
		};
	}).sort((a, b) => a.title.localeCompare(b.title, locale === 'es' ? language.format : undefined));
	const catalog = new Map(entries.map((entry) => [entry.id, entry]));
	const problems = atlasProblems.map((problem) => ({
		title: locale === 'es' ? atlasProblemsEs[problem.id] : problem.title,
		entries: problem.entries.map((id) => {
			const item = catalog.get(id);
			if (!item) throw new Error(`Unknown Build Atlas entry in atlasProblems: ${id}`);
			return item;
		}),
	}));
	return {
		sections: getAtlasSections(locale).map((section) => ({
			...section,
			entries: entries.filter(({ entry }) => entry.data.section === section.id),
		})),
		problems,
	};
}

export type AtlasTopic = Awaited<ReturnType<typeof getAtlasCatalog>>['sections'][number]['entries'][number];

export async function getAtlasStaticPaths(locale: Locale) {
	const { sections } = await getAtlasCatalog(locale);
	const entries = sections.flatMap(({ entries }) => entries);
	return entries.flatMap((topic, index) => topic.hreflang ? [] : [{
		params: { slug: topic.id },
		props: { topic, prev: entries[index - 1], next: entries[index + 1] },
	}]);
}
