import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

const isDev = process.env.NODE_ENV === 'development';
const siteDomain = isDev ? 'localhost' : 'hanifcarroll.com';

// https://astro.build/config
export default defineConfig({
  site: 'https://hanifcarroll.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: siteDomain
    }]]
  }
});
