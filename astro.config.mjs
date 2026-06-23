import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

const isDev = process.env.NODE_ENV === 'development';
const siteDomain = isDev ? 'localhost' : 'hanifcarroll.com';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.hanifcarroll.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.endsWith('/automation-ai-agents/') && !page.endsWith('/launch/')
		}),
		tailwind()
	],
	markdown: {
		processor: unified({
			rehypePlugins: [
				[
					autoNewTabExternalLinks,
					{
						domain: siteDomain
					}
				]
			]
		})
	}
});
