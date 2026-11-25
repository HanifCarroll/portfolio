import type { Locale } from "../i18n";
import spanishCopy from "./projects.es.json";
import type { Project, ProjectTranslation } from "./types/project";

const translations: Record<string, ProjectTranslation> = spanishCopy;
const spanishTechnologyLabels = new Map([
  ["Chrome Extension MV3", "Extensión de Chrome (MV3)"],
  ["Multiple AI Providers", "Varios proveedores de IA"],
  ["OpenAI Vision Models", "Modelos de visión de OpenAI"],
  ["WordPress Custom Theme", "Tema a medida para WordPress"],
]);

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;
  const translation = translations[project.slug];
  if (!translation) throw new Error(`Missing Spanish project metadata for "${project.slug}".`);
  return {
    ...project,
    ...translation,
    technologies: project.technologies.map((label) => spanishTechnologyLabels.get(label) ?? label),
  };
}

const projectModules = import.meta.glob("./projects/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Project>;

export const projects: Record<string, Project> = Object.fromEntries(
  Object.entries(projectModules).map(([path, project]) => {
    const fileSlug = path.match(/\/([^/]+)\.json$/)?.[1];

    if (!fileSlug) {
      throw new Error(`Unable to derive project slug from "${path}".`);
    }

    if (project.slug !== fileSlug) {
      throw new Error(
        `Project metadata slug "${project.slug}" does not match file "${fileSlug}.json".`,
      );
    }

    return [project.slug, project];
  }),
);

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}
