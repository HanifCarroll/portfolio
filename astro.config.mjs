import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks.ts";
import { DELISTED_PROJECT_SLUGS } from "./src/lib/project-curation.ts";

const isDev = process.env.NODE_ENV === "development";
const siteDomain = isDev ? "localhost" : "hanifcarroll.com";
const excludedSitemapPaths = [
  "/now/",
  ...DELISTED_PROJECT_SLUGS.map((slug) => `/projects/${slug}/`),
];

// https://astro.build/config
export default defineConfig({
  site: "https://www.hanifcarroll.com",
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !excludedSitemapPaths.some((path) => page.endsWith(path)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
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
