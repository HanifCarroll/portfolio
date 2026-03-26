import type { ProjectTrack, ProjectTrackGroup } from './types/project';

export interface ProjectTrackMeta {
  label: string;
  shortLabel: string;
  group: ProjectTrackGroup;
  ctaVariant: 'mvp' | 'automation';
  rank: number;
}

export const projectTrackMeta: Record<ProjectTrack, ProjectTrackMeta> = {
  workflow_automation: {
    label: 'Workflow Automation',
    shortLabel: 'Automation',
    group: 'automation_and_ai',
    ctaVariant: 'automation',
    rank: 0,
  },
  ai_systems: {
    label: 'AI Systems',
    shortLabel: 'AI',
    group: 'automation_and_ai',
    ctaVariant: 'automation',
    rank: 1,
  },
  mvp_build: {
    label: 'MVP Build',
    shortLabel: 'MVP',
    group: 'mvp_and_validation',
    ctaVariant: 'mvp',
    rank: 2,
  },
  mvp_validation: {
    label: 'Validation Build',
    shortLabel: 'Validation',
    group: 'mvp_and_validation',
    ctaVariant: 'mvp',
    rank: 3,
  },
  launch_site: {
    label: 'Launch Site',
    shortLabel: 'Site',
    group: 'launch_sites',
    ctaVariant: 'mvp',
    rank: 4,
  },
};

export const projectTrackGroups: Array<{
  key: ProjectTrackGroup;
  title: string;
  description: string;
}> = [
  {
    key: 'automation_and_ai',
    title: 'Workflow Automation + AI',
    description:
      'Internal tools, automation layers, and AI systems built to remove operational drag.',
  },
  {
    key: 'mvp_and_validation',
    title: 'MVPs + Validation',
    description:
      'First versions and validation builds designed to get something real in front of users fast.',
  },
  {
    key: 'launch_sites',
    title: 'Launch Sites',
    description:
      'Marketing and portfolio sites built to support a launch, prove credibility, or test demand.',
  },
];

export function getProjectTrackMeta(track: ProjectTrack): ProjectTrackMeta {
  return projectTrackMeta[track];
}
