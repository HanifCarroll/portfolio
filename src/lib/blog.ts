import { getCollection } from 'astro:content';
import { localizedPath, type Locale } from '../i18n';

export async function getPublishedBlogPosts() {
	return (await getCollection('blog', ({ id, data }) => !data.hidden && !id.startsWith('es/')))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getBlogCatalog(locale: Locale) {
	const posts = await getPublishedBlogPosts();
	const spanish = locale === 'es' ? await getCollection('blog', ({ id, data }) => !data.hidden && id.startsWith('es/')) : [];
	const byId = new Map(spanish.map((post) => [post.id.slice(3), post]));
	return posts.map((original) => {
		const slug = original.id;
		const entry = byId.get(slug) ?? original;
		const href = localizedPath(`/blog/${slug}/`, locale);
		const fallback = locale === 'es' && entry === original;
		if (fallback !== (locale === 'es' && !href.startsWith('/es/'))) {
			throw new Error(`Spanish blog route is out of sync for ${slug}`);
		}
		const { title, description } = entry.data;
		return { slug, entry, href, fallback, title, description };
	});
}

export async function getBlogStaticPaths(locale: Locale) {
	return (await getBlogCatalog(locale)).filter(({ fallback }) => !fallback)
		.map(({ slug, entry }) => ({ params: { slug }, props: { entry, slug } }));
}
