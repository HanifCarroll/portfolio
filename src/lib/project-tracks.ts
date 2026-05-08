import type { ProjectTrack, ProjectTrackGroup } from './types/project';

export interface ProjectTrackMeta {
  label: string;
  shortLabel: string;
  group: ProjectTrackGroup;
  ctaVariant: 'mvp' | 'fractional';
  rank: number;
}

export const projectTrackMeta: Record<ProjectTrack, ProjectTrackMeta> = {
  workflow_automation: {
    label: 'Operational Product System',
    shortLabel: 'Systems proof',
    group: 'supporting_product_proof',
    ctaVariant: 'fractional',
    rank: 3,
  },
  ai_systems: {
    label: 'AI Product Proof',
    shortLabel: 'AI proof',
    group: 'supporting_product_proof',
    ctaVariant: 'fractional',
    rank: 4,
  },
  mvp_build: {
    label: 'MVP Build',
    shortLabel: 'MVP',
    group: 'mvp_and_validation',
    ctaVariant: 'mvp',
    rank: 0,
  },
  mvp_validation: {
    label: 'Validation Build',
    shortLabel: 'Validation',
    group: 'mvp_and_validation',
    ctaVariant: 'mvp',
    rank: 1,
  },
  launch_site: {
    label: 'Launch Site',
    shortLabel: 'Site',
    group: 'launch_sites',
    ctaVariant: 'mvp',
    rank: 2,
  },
};

export const projectTrackGroups: Array<{
  key: ProjectTrackGroup;
  title: string;
  description: string;
}> = [
  {
    key: 'supporting_product_proof',
    title: 'Supporting product systems proof',
    description:
      'AI and workflow-heavy projects framed as proof of product engineering judgment, not standalone service categories.',
  },
  {
    key: 'mvp_and_validation',
    title: 'MVPs and validation',
    description:
      'First versions built to test demand, get in front of users quickly, and avoid overbuilding the initial scope.',
  },
  {
    key: 'launch_sites',
    title: 'Launch sites and credibility',
    description:
      'Sites built to explain the offer clearly, improve credibility, and turn more interest into qualified conversations.',
  },
];

export function getProjectTrackMeta(track: ProjectTrack): ProjectTrackMeta {
  return projectTrackMeta[track];
}
