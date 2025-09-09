import { Project } from './types/project';
import redwriterData from './projects/redwriter-comics.json';
import maximoData from './projects/maximo-interiorismo.json';
import desarmaderoData from './projects/desarmadero-latorre.json';
import casaElariaData from './projects/casa-elaria.json';

export const projects: Record<string, Project> = {
  'redwriter-comics': redwriterData as Project,
  'maximo-interiorismo': maximoData as Project,
  'desarmadero-latorre': desarmaderoData as Project,
  'casa-elaria': casaElariaData as Project,
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}