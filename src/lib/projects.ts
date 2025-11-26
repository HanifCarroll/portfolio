import type { Project } from './types/project';
import genruptData from './projects/genrupt.json';
import languageExchangeData from './projects/language-exchange.json';
import muchoHangoutsData from './projects/mucho-hangouts.json';
import voxPrismaticData from './projects/vox-prismatic.json';
import casaElariaData from './projects/casa-elaria.json';
import desarmaderoLatorreData from './projects/desarmadero-latorre.json';
import maximoInteriorismoData from './projects/maximo-interiorismo.json';
import redwriterComicsData from './projects/redwriter-comics.json';

export const projects: Record<string, Project> = {
  'genrupt': genruptData as Project,
  'mucho-hangouts': muchoHangoutsData as Project,
  'language-exchange': languageExchangeData as Project,
  'vox-prismatic': voxPrismaticData as Project,
  'casa-elaria': casaElariaData as Project,
  'desarmadero-latorre': desarmaderoLatorreData as Project,
  'maximo-interiorismo': maximoInteriorismoData as Project,
  'redwriter-comics': redwriterComicsData as Project,
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}
