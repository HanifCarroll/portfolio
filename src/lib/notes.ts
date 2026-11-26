import sections, { noteEntryId } from '../data/notes.ts';
import { noteEntriesEs, noteSectionsEs } from '../data/notes.es.ts';
import type { Locale } from '../i18n/index.ts';

export function getPublicNotes(locale: Locale) {
  const spanish = locale === 'es';
  return sections
    .filter(({ slug }) => !['systems-and-attention', 'health-and-training'].includes(slug))
    .map(({ slug, title, entries }) => {
      const sectionTitle = spanish ? noteSectionsEs[slug] : title;
      if (spanish && !sectionTitle?.trim()) throw new Error(`Missing Spanish Notes section title: ${slug}`);
      const visibleEntries = entries.filter((entry) => !('hidden' in entry && entry.hidden)).map((entry) => {
        const id = noteEntryId(slug, entry);
        if (!spanish) return { id, title: entry.title, body: entry.body };
        const [title, ...body] = noteEntriesEs[id.slice(slug.length + 1)] ?? [];
        if (!title?.trim() || body.length !== entry.body.length || body.some((paragraph) => !paragraph.trim())) {
          throw new Error(`Missing Spanish note copy: ${id}`);
        }
        return { id, title, body };
      });
      return { slug, title: sectionTitle, entries: visibleEntries };
    });
}
