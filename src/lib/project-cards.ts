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
  category: 'product' | 'marketing-site';
}

const toCard = (project: Project): ProjectCard => ({
  slug: project.slug,
  name: project.title,
  description: project.description,
  demoLink: project.liveUrl ?? '',
  tags: project.technologies ?? [],
  year: project.year ?? '',
  client: project.client,
  category: project.category ?? 'product',
});

const parseYear = (value: string) => {
  const numeric = parseInt(value, 10);
  return Number.isNaN(numeric) ? 0 : numeric;
};

const categoryRank = (category: ProjectCard['category']) =>
  category === 'marketing-site' ? 1 : 0;

export const projects: ProjectCard[] = getAllProjects()
  .map(toCard)
  .sort((a, b) => {
    const categoryDifference = categoryRank(a.category) - categoryRank(b.category);
    if (categoryDifference !== 0) return categoryDifference;
    return parseYear(b.year) - parseYear(a.year);
  });
