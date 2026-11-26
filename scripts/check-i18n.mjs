import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parse } from "parse5";
import { deferredEntries, deferredPages } from "../src/i18n/deferred.ts";
import { collectionRoutes, deferredPaths, dictionaries } from "../src/i18n/index.ts";
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
let deferredEntryCount = 0;
for (const name of Object.keys(collectionRoutes)) {
  const base = `src/content/${name}/`;
  const entries = new Set(
    files(base)
      .filter((file) => /\.mdx?$/.test(file))
      .map((file) => file.slice(base.length)),
  );
  const allowed = new Set(deferredEntries[name]);
  for (const file of entries) {
    if (file.startsWith("es/")) {
      if (!entries.has(file.slice(3))) errors.push(`${base}${file} has no English entry`);
      continue;
    }
    entryCount++;
    const slug = file.replace(/\.mdx?$/, "");
    const hasSpanish = entries.has(`es/${file}`);
    if (allowed.delete(slug)) {
      deferredEntryCount++;
      if (hasSpanish) errors.push(`Remove ${name}/${slug} from deferredEntries`);
    } else if (!hasSpanish) errors.push(`${base}${file} has no Spanish entry`);
  }
  for (const slug of allowed) errors.push(`Stale deferral: ${name}/${slug}`);
}

for (const file of files("src/content").filter((file) => /^src\/content\/[^/]+\.md$/.test(file))) {
  const counterpart = file.replace("src/content/", "src/content/es/");
  if (!existsSync(counterpart)) errors.push(`Missing ${counterpart}`);
}

if (!existsSync("dist/index.html")) {
  console.error("Build the site before running check:i18n.");
  process.exit(1);
}

const pages = new Map(
  files("dist")
    .filter((file) => file.endsWith("/index.html") || file === "dist/404.html")
    .map((file) => [
      file === "dist/404.html" ? "/404/" : file.slice(4, -"index.html".length),
      file,
    ]),
);

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
  const deferred = deferredPaths.has(route);
  if (!esFile && !deferred) errors.push(`${route} has no Spanish page`);
  if (esFile && deferred) errors.push(`Remove ${route} from the deferrals`);
  const expected = esFile
    ? { en: `${origin}${route}`, es: `${origin}${esRoute}`, "x-default": `${origin}${route}` }
    : {};
  const enDoc = parse(readFileSync(file, "utf8"));
  const esDoc = esFile && parse(readFileSync(esFile, "utf8"));
  for (const [doc, path, lang] of [
    [enDoc, route, "en"],
    [esDoc, esRoute, "es"],
  ]) {
    if (!doc) continue;
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
      esFile &&
      (switches.length === 0 ||
        switches.some(
          (link) =>
            attr(link, "aria-current") || attr(link, "href") !== (lang === "es" ? route : esRoute),
        ))
    ) {
      errors.push(`${path} needs a language link to its counterpart`);
    }
  }
  if (esDoc) {
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
for (const route of deferredPages) {
  if (!pages.has(route)) errors.push(`Stale deferral: ${route}`);
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
  `i18n: ${pairs} page pairs; ${deferredPages.length} standalone routes and ${deferredEntryCount}/${entryCount} collection entries explicitly deferred; dictionary keys match.`,
);
