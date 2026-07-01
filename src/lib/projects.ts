import type { Project } from "./types/project";

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
