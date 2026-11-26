import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parse } from "parse5";
import { atlasProblems, atlasSections } from "../src/data/atlas.ts";
import { collectionRoutes, dictionaries, englishPath, localizedPath } from "../src/i18n/index.ts";
import { getPublicNotes } from "../src/lib/notes.ts";

const errors = [];
const files = (dir) =>
  readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map(({ parentPath, name }) => join(parentPath, name));

function checkKeys(en, es, path = "dictionary") {
  for (const key of new Set([...Object.keys(en), ...Object.keys(es)])) {
    const label = `${path}.${key}`;
    const a = en[key];
    const b = es[key];
    if (a && b && typeof a === "object" && typeof b === "object") checkKeys(a, b, label);
    else if (typeof a !== "string" || !a.trim() || typeof b !== "string" || !b.trim()) {
      errors.push(`${label} needs a nonempty string in both locales`);
    }
  }
}
checkKeys(dictionaries.en, dictionaries.es);

let entryCount = 0;
for (const name of Object.keys(collectionRoutes)) {
  const base = `src/content/${name}/`;
  const entries = new Set(
    files(base)
      .filter((file) => /\.mdx?$/.test(file))
      .map((file) => file.slice(base.length)),
  );
  for (const file of entries) {
    if (file.startsWith("es/")) {
      if (!entries.has(file.slice(3))) errors.push(`${base}${file} has no English entry`);
      continue;
    }
    entryCount++;
    if (!entries.has(`es/${file}`)) errors.push(`${base}${file} has no Spanish entry`);
  }
}

for (const file of files("src/content").filter((file) => /^src\/content\/[^/]+\.md$/.test(file))) {
  const counterpart = file.replace("src/content/", "src/content/es/");
  if (!existsSync(counterpart)) errors.push(`Missing ${counterpart}`);
}

const pageInventory = ".astro/i18n-pages.json";
if (!existsSync(pageInventory) || !existsSync("dist/index.html")) {
  console.error("Build the site before running check:i18n.");
  process.exit(1);
}

const pages = new Map();
for (const pathname of JSON.parse(readFileSync(pageInventory, "utf8"))) {
  const route = `/${pathname}`.replace(/^\/+/, "/").replace(/\/?$/, "/");
  // Astro's directory build emits top-level error pages as status-code.html.
  const output = /^\/(404|500)\/$/.test(route) ? `${route.slice(1, -1)}.html` : `${route.slice(1)}index.html`;
  const file = join("dist", output);
  if (existsSync(join("public", output))) errors.push(`${route} is shadowed by public/${output}`);
  if (!existsSync(file)) {
    errors.push(`${route} has no generated HTML at ${file}`);
    continue;
  }
  pages.set(route, file);
}

function elements(node, test) {
  return [
    ...(test(node) ? [node] : []),
    ...(node.childNodes ?? []).flatMap((child) => elements(child, test)),
  ];
}
const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;
const meta = (doc, name, value) =>
  attr(
    elements(doc, (node) => node.tagName === "meta" && attr(node, name) === value)[0],
    "content",
  );
const title = (doc) => elements(doc, (node) => node.tagName === "title")[0]?.childNodes[0]?.value;
const headingIds = (doc) =>
  elements(doc, (node) => /^h[1-6]$/.test(node.tagName) && attr(node, "id")).map((node) =>
    attr(node, "id"),
  );
const origin = "https://www.hanifcarroll.com";
let pairs = 0;
for (const [route, file] of pages) {
  if (route.startsWith("/es/")) {
    if (!pages.has(route.slice(3))) errors.push(`${route} has no English page`);
    continue;
  }
  const esRoute = `/es${route}`;
  const esFile = pages.get(esRoute);
  if (!esFile) {
    errors.push(`${route} has no Spanish page`);
    continue;
  }
  const expected = { en: `${origin}${route}`, es: `${origin}${esRoute}`, "x-default": `${origin}${route}` };
  const enDoc = parse(readFileSync(file, "utf8"));
  const esDoc = parse(readFileSync(esFile, "utf8"));
  for (const [doc, path, lang] of [
    [enDoc, route, "en"],
    [esDoc, esRoute, "es"],
  ]) {
    const [html] = elements(doc, (node) => node.tagName === "html");
    if (attr(html, "lang") !== lang) errors.push(`${path} needs html lang="${lang}"`);
    if (meta(doc, "property", "og:locale") !== dictionaries[lang].locale.openGraph)
      errors.push(`${path} has the wrong og:locale`);
    const alternates = elements(
      doc,
      (node) =>
        node.tagName === "link" && attr(node, "rel") === "alternate" && attr(node, "hreflang"),
    );
    if (
      alternates.length !== Object.keys(expected).length ||
      Object.entries(expected).some(
        ([key, href]) =>
          !alternates.some((link) => attr(link, "hreflang") === key && attr(link, "href") === href),
      )
    ) {
      errors.push(`${path} has incorrect hreflang alternates`);
    }
    const other = lang === "es" ? "en" : "es";
    const switches = elements(
      doc,
      (node) =>
        node.tagName === "a" && attr(node, "lang") === other && attr(node, "hreflang") === other,
    );
    if (
      switches.length === 0 ||
      switches.some(
        (link) =>
          attr(link, "aria-current") || attr(link, "href") !== (lang === "es" ? route : esRoute),
      )
    ) {
      errors.push(`${path} needs a language link to its counterpart`);
    }
  }
  pairs++;
  const description = meta(esDoc, "name", "description");
  if (
    !title(esDoc) ||
    title(esDoc) === title(enDoc) ||
    !description ||
    description === meta(enDoc, "name", "description")
  ) {
    errors.push(`${esRoute} needs its own title and description`);
  }
  const spanishIds = new Set(headingIds(esDoc));
  for (const id of headingIds(enDoc)) {
    if (!spanishIds.has(id)) errors.push(`${esRoute} is missing heading id #${id}`);
  }
}
for (const locale of ["en", "es"]) {
  const route = locale === "es" ? "/es/notes/" : "/notes/";
  try {
    const notes = getPublicNotes(locale);
    const doc = parse(readFileSync(pages.get(route), "utf8"));
    const text = (node) => node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join("");
    const [menu] = elements(doc, (node) => attr(node, "class") === "hc-notes-mobile-toc");
    const sectionTitles = menu ? elements(menu, (node) => node.tagName === "summary").map((node) => text(node).trim()) : [];
    const entries = menu ? elements(menu, (node) => node.tagName === "a").map((node) => [attr(node, "href"), text(node).trim()]) : [];
    if (JSON.stringify(sectionTitles) !== JSON.stringify(notes.map(({ title }) => title)) ||
        JSON.stringify(entries) !== JSON.stringify(notes.flatMap(({ entries }) => entries.map(({ id, title }) => [`#${id}`, title])))) {
      errors.push(`${route} has incorrect mobile contents titles or links`);
    }
  } catch (error) {
    errors.push(`${route}: ${error.message}`);
  }
}
// The same catalog drives Atlas links in the index, both menus, and article pagination.
const atlasEntryPath = /^\/(?:es\/)?atlas\/[^/]+\/$/;
const atlasLinks = (node) => elements(node, (el) => el.tagName === "a" && atlasEntryPath.test(attr(el, "href")));
const atlasProseLinks = (node) => elements(node, (el) => attr(el, "class")?.split(/\s+/).includes("atlas-prose"))
  .flatMap((prose) => elements(prose, (el) => el.tagName === "a" && attr(el, "href")));
const atlasText = (node) => node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(atlasText).join("");
const hrefs = (links) => links.map((link) => attr(link, "href"));
const sameList = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const atlasPaths = [...pages.keys()].filter((path) => path.startsWith("/atlas/") && atlasEntryPath.test(path));
const atlasDocument = (path) => parse(readFileSync(pages.get(path), "utf8"));

for (const locale of ["en", "es"]) {
  const indexPath = localizedPath("/atlas/", locale);
  if (!pages.has(indexPath)) continue;
  const index = atlasDocument(indexPath);
  const articles = atlasPaths.map((path) => localizedPath(path, locale));
  const localArticles = articles.filter((path) => locale === "en" || path.startsWith("/es/"));
  const entries = atlasSections.flatMap(({ id }) => elements(index, (el) => el.tagName === "section" && attr(el, "id") === id).flatMap(atlasLinks));
  const order = hrefs(entries);
  const { atlas, nav } = dictionaries[locale];
  if (!sameList([...order].sort(), [...articles].sort())) errors.push(`${indexPath} has incorrect catalog entries`);
  const problemLinks = elements(index, (el) => attr(el, "aria-labelledby") === "problems-title").flatMap(atlasLinks);
  if (!sameList(hrefs(problemLinks), atlasProblems.flatMap(({ entries }) => entries.map((id) => localizedPath(`/atlas/${id}/`, locale))))) {
    errors.push(`${indexPath} has incorrect problem links`);
  }
  function verifyLinks(links, page) {
    for (const link of links) {
      const path = attr(link, "href");
      const fallback = locale === "es" && path.startsWith("/atlas/");
      if (!pages.has(path) || localizedPath(path, locale) !== path ||
          attr(link, "hreflang") !== (fallback ? "en" : undefined) ||
          atlasText(link).includes(nav.englishFallback) !== fallback) {
        errors.push(`${page} has an incorrect Atlas destination or fallback label: ${path}`);
      }
    }
  }
  verifyLinks([...entries, ...problemLinks], indexPath);
  for (const page of [indexPath, ...localArticles]) {
    if (!pages.has(page)) continue;
    const doc = page === indexPath ? index : atlasDocument(page);
    const menus = elements(doc, (el) => attr(el, "data-atlas-nav-root") !== undefined);
    if (menus.length !== 2) errors.push(`${page} needs a desktop and mobile Atlas menu`);
    for (const menu of menus) {
      const links = atlasLinks(menu);
      const current = links.filter((link) => attr(link, "aria-current") === "page");
      const [input] = elements(menu, (el) => el.tagName === "input");
      if (!sameList(hrefs(links), order) || !sameList(hrefs(current), page === indexPath ? [] : [page]) ||
          attr(input, "placeholder") !== atlas.searchPlaceholder) {
        errors.push(`${page} has incorrect Atlas navigation or search copy`);
      }
      verifyLinks(links, page);
    }
    if (page === indexPath) continue;
    const [article] = elements(doc, (el) => el.tagName === "article");
    if (!article) {
      errors.push(`${page} needs an Atlas article`);
      continue;
    }
    const pagination = elements(article, (el) => el.tagName === "nav" && attr(el, "aria-label") === atlas.paginationLabel).flatMap(atlasLinks);
    const position = order.indexOf(page);
    if (!sameList(hrefs(pagination), [order[position - 1], order[position + 1]].filter(Boolean)) ||
        attr(article, "data-atlas-copy") !== atlas.copy || attr(article, "data-atlas-copied") !== atlas.copied) {
      errors.push(`${page} has incorrect Atlas pagination or copy-button labels`);
    }
    verifyLinks(pagination, page);
    const proseLinks = atlasProseLinks(article);
    if (locale === "es" && pages.has(englishPath(page))) {
      const sourceLinks = hrefs(atlasProseLinks(atlasDocument(englishPath(page))));
      const expected = sourceLinks.map((href) => href.replace(/^\/[^?#]*/, (path) =>
        pages.has(englishPath(path)) ? localizedPath(path, locale) : path,
      ));
      if (!sameList(hrefs(proseLinks), expected)) errors.push(`${page} has Atlas prose links that differ from its English source`);
    }
    for (const link of proseLinks.filter((el) => atlasEntryPath.test(attr(el, "href")))) {
      const path = attr(link, "href");
      const fallback = locale === "es" && path === englishPath(path);
      if (!pages.has(path) || path !== localizedPath(path, locale) || atlasText(link).endsWith(nav.englishFallback) !== fallback) {
        errors.push(`${page} has an incorrect Atlas article link: ${path}`);
      }
    }
  }
}
const spanish404 = pages.get("/es/404/");
if (
  spanish404 &&
  (!existsSync("dist/es/404.html") ||
    readFileSync(spanish404, "utf8") !== readFileSync("dist/es/404.html", "utf8"))
) {
  errors.push("Cloudflare Pages needs the Spanish error page at dist/es/404.html");
}
if (existsSync("dist/es/rss.xml")) errors.push("RSS must stay English only");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `i18n: ${pairs} page pairs; ${entryCount} collection entry pairs; dictionary keys match.`,
);
