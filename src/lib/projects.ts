import type { Project } from './types/project';
import languageExchangeData from './projects/language-exchange.json';
import muchoHangoutsData from './projects/mucho-hangouts.json';
import voxPrismaticData from './projects/vox-prismatic.json';
import genruptData from './projects/genrupt.json';

export const projects: Record<string, Project> = {
  'language-exchange': languageExchangeData as Project,
  'mucho-hangouts': muchoHangoutsData as Project,
  'genrupt': genruptData as Project,
  'vox-prismatic': voxPrismaticData as Project,
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}
