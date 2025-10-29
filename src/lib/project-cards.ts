import type { Project } from '@src/lib/types/project';
import { getAllProjects } from '@src/lib/projects';

export interface ProjectCard {
  slug: string;
  name: string;
  description: string;
  demoLink: string;
  tags: string[];
  year: string;
  client: string;
}

const toCard = (project: Project): ProjectCard => ({
  slug: project.slug,
  name: project.title,
  description: project.description,
  demoLink: project.liveUrl ?? '',
  tags: project.technologies ?? [],
  year: project.year ?? '',
  client: project.client,
});

const parseYear = (value: string) => {
  const numeric = parseInt(value, 10);
  return Number.isNaN(numeric) ? 0 : numeric;
};

export const projects: ProjectCard[] = getAllProjects()
  .map(toCard)
  .sort((a, b) => parseYear(b.year) - parseYear(a.year));
