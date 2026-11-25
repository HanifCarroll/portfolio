import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../i18n";
import { getProject } from "./projects";
import type { Project } from "./types/project";

export interface CaseStudyPageProps {
  project: Project;
  caseStudy: CollectionEntry<"caseStudies">;
}

export async function getCaseStudyPaths(locale: Locale) {
  const caseStudies = await getCollection(
    "caseStudies",
    ({ id }) => id.startsWith("es/") === (locale === "es"),
  );

  return caseStudies.map((caseStudy) => {
    const slug = locale === "es" ? caseStudy.id.slice(3) : caseStudy.id;
    const project = getProject(slug);
    if (!project) throw new Error(`Missing project metadata for case study "${caseStudy.id}".`);

    return { params: { slug }, props: { project, caseStudy } satisfies CaseStudyPageProps };
  });
}
