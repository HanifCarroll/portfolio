import { deferredEntries, deferredPages } from "./deferred.ts";
import { en } from "./en.ts";
import { es } from "./es.ts";

export const dictionaries = { en, es };
export type Locale = keyof typeof dictionaries;

export const getLocale = (value: unknown): Locale => (value === "es" ? "es" : "en");
export const getDictionary = (value: unknown) => dictionaries[getLocale(value)];

export const collectionRoutes = {
  "case-studies": "projects",
  blog: "blog",
  atlas: "atlas",
} as const;
export const deferredPaths = new Set([
  ...deferredPages,
  ...Object.entries(collectionRoutes).flatMap(([collection, route]) =>
    deferredEntries[collection as keyof typeof collectionRoutes].map(
      (slug) => `/${route}/${slug}/`,
    ),
  ),
]);

export function englishPath(pathname: string): string {
  const unprefixed = pathname.replace(/^\/es(?=\/|$)/, "");
  return unprefixed.endsWith("/") ? unprefixed : `${unprefixed}/`;
}

/** Page paths only. Until translations ship, link to the existing English page. */
export function localizedPath(pathname: string, locale: Locale): string {
  const path = englishPath(pathname);
  return locale === "es" && !deferredPaths.has(path) ? `/es${path}` : path;
}

export function pairedPaths(pathname: string) {
  const en = englishPath(pathname);
  return deferredPaths.has(en) ? undefined : { en, es: localizedPath(en, "es") };
}
