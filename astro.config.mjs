import { copyFile, mkdir, writeFile } from "node:fs/promises";
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
  "/contact/sent/",
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
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      filter: (page) => !excludedSitemapPaths.some((path) => page.endsWith(path)),
    }),
    {
      name: "i18n-page-inventory",
      hooks: {
        "astro:build:done": async ({ pages }) => {
          const cache = new URL(".astro/", import.meta.url);
          await mkdir(cache, { recursive: true });
          await writeFile(new URL("i18n-pages.json", cache), JSON.stringify(pages.map(({ pathname }) => pathname)));
        },
      },
    },
    {
      name: "spanish-pages-404",
      hooks: {
        // Cloudflare Pages serves the nearest 404.html with status 404 for an unknown URL.
        "astro:build:done": ({ dir }) =>
          copyFile(new URL("es/404/index.html", dir), new URL("es/404.html", dir)),
      },
    },
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
