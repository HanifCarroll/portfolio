import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks.ts";
import { DELISTED_CASE_STUDY_SLUGS } from "./src/lib/project-curation.ts";

const isDev = process.env.NODE_ENV === "development";
const siteDomain = isDev ? "localhost" : "hanifcarroll.com";
const excludedSitemapPaths = [
  "/newsletter/archive-preview/",
  "/now/",
  ...DELISTED_CASE_STUDY_SLUGS.map((slug) => `/case-studies/${slug}/`),
];

// https://astro.build/config
export default defineConfig({
  site: "https://www.hanifcarroll.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !excludedSitemapPaths.some((path) => page.endsWith(path)),
    }),
    tailwind(),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          autoNewTabExternalLinks,
          {
            domain: siteDomain,
          },
        ],
      ],
    }),
  },
});
