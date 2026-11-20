import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks.ts";
import { DELISTED_PROJECT_SLUGS } from "./src/lib/project-curation.ts";

const isDev = process.env.NODE_ENV === "development";
const siteDomain = isDev ? "localhost" : "hanifcarroll.com";
const excludedSitemapPaths = [
  "/now/",
  ...DELISTED_PROJECT_SLUGS.map((slug) => `/projects/${slug}/`),
];

// Keep published fragment URLs when a Markdown heading is rewritten.
function preserveHeadingIds() {
  return (tree) => {
    visit(tree, "heading", (heading) => {
      const marker = heading.children.at(-1);
      if (marker?.type !== "html") return;
      const id = /^<!-- heading-id: ([\w-]+) -->$/.exec(marker.value)?.[1];
      if (!id) return;
      heading.children.pop();
      const last = heading.children.at(-1);
      if (last?.type === "text") last.value = last.value.trimEnd();
      heading.data ??= {};
      heading.data.hProperties ??= {};
      heading.data.hProperties.id = id;
    });
  };
}

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
      remarkPlugins: [preserveHeadingIds],
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
