import { getCollection, type CollectionEntry } from "astro:content";
import { deferredGuideCopy } from "../data/guide-deferred.es";
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
  // Preserve the English catalog order and previous/next neighbors in both languages.
  return entries
    .filter((entry) => !entry.id.startsWith("es/"))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((original) => {
      const slug = original.id;
      const spanish = locale === "es" ? byId.get(`es/${slug}`) : undefined;
      const entry = spanish ?? original;
      const fallback = locale === "es" && !spanish;
      const copy = fallback ? deferredGuideCopy[slug] : undefined;
      if (fallback && !copy) throw new Error(`Missing Spanish guide catalog copy for ${slug}`);
      return {
        slug,
        entry,
        title: copy?.title ?? entry.data.title,
        summary: copy?.summary ?? entry.data.summary,
        tools: copy?.tools ?? guideTools(entry.body, spanish ? "es" : "en"),
        href: localizedPath(`/guide/${slug}/`, locale),
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
