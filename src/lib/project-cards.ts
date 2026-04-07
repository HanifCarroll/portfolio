import type { Project } from '@src/lib/types/project';
import { getAllProjects } from '@src/lib/projects';
import { getProjectTrackMeta } from './project-tracks';

export interface ProjectCard {
  slug: string;
  name: string;
  description: string;
  outcome: string;
  demoLink: string;
  tags: string[];
  year: string;
  client: string;
  proofType: Project['proofType'];
  proofTypeLabel: string;
  service: string;
  bestFit: string;
  track: Project['track'];
  trackLabel: string;
  trackShortLabel: string;
  trackGroup: ReturnType<typeof getProjectTrackMeta>['group'];
  category: 'product' | 'marketing-site';
}

const firstText = (value: string | string[]) =>
  Array.isArray(value) ? value[0] : value;

const getProofTypeLabel = (proofType: Project['proofType']) =>
  proofType === 'client' ? 'Client Work' : 'Selected Experiment';

const toCard = (project: Project): ProjectCard => {
  const trackMeta = getProjectTrackMeta(project.track);

  return {
    slug: project.slug,
    name: project.title,
    description: project.description,
    outcome: firstText(project.result),
    demoLink: project.liveUrl ?? '',
    tags: project.technologies ?? [],
    year: project.year ?? '',
    client: project.client,
    proofType: project.proofType,
    proofTypeLabel: getProofTypeLabel(project.proofType),
    service: project.service,
    bestFit: project.bestFit,
    track: project.track,
    trackLabel: trackMeta.label,
    trackShortLabel: trackMeta.shortLabel,
    trackGroup: trackMeta.group,
    category: project.category ?? 'product',
  };
};

const parseYear = (value: string) => {
  const numeric = parseInt(value, 10);
  return Number.isNaN(numeric) ? 0 : numeric;
};

export const projects: ProjectCard[] = getAllProjects()
  .map(toCard)
  .sort((a, b) => {
    const trackDifference =
      getProjectTrackMeta(a.track).rank - getProjectTrackMeta(b.track).rank;
    if (trackDifference !== 0) return trackDifference;
    return parseYear(b.year) - parseYear(a.year);
  });
