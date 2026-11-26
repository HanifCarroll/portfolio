import { getCollection, type CollectionEntry } from "astro:content";
import { guideGroups, guideTools } from "../data/guide";
import { localizedPath, type Locale } from "../i18n";

type GuideEntry = CollectionEntry<"guide">;

export interface GuideTopic {
  slug: string;
  entry: GuideEntry;
  title: string;
  summary: string;
  tools: string[];
  href: string;
  hreflang?: "en";
}

export async function getGuideCatalog(locale: Locale): Promise<GuideTopic[]> {
  const entries = await getCollection("guide");
  const byId = new Map(entries.map((entry) => [entry.id, entry]));
  // Start in English title order so article pagination keeps the same neighbors in both languages.
  return entries
    .filter((entry) => !entry.id.startsWith("es/"))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((original) => {
      const slug = original.id;
      const spanish = locale === "es" ? byId.get(`es/${slug}`) : undefined;
      const entry = spanish ?? original;
      const fallback = locale === "es" && !spanish;
      const href = localizedPath(`/guide/${slug}/`, locale);
      if (fallback !== (locale === "es" && !href.startsWith("/es/"))) {
        throw new Error(`Spanish guide route is out of sync for ${slug}`);
      }
      return {
        slug,
        entry,
        title: entry.data.title,
        summary: entry.data.summary,
        tools: guideTools(entry.body, spanish ? "es" : "en"),
        href,
        hreflang: fallback ? "en" : undefined,
      };
    });
}

export async function getGuideStaticPaths(locale: Locale) {
  const groupOrder = guideGroups.map(({ id }) => id);
  const catalog = (await getGuideCatalog(locale)).sort(
    (a, b) => groupOrder.indexOf(a.entry.data.group) - groupOrder.indexOf(b.entry.data.group),
  );
  return catalog.flatMap((topic, index) => topic.hreflang ? [] : [{
    params: { slug: topic.slug },
    props: { topic, prev: catalog[index - 1], next: catalog[index + 1] },
  }]);
}
