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
    title: 'When the workflow is the bottleneck',
    description:
      'Internal tools, automation, and AI systems built to remove manual work, clean up messy handoffs, or make a process usable at scale.',
  },
  {
    key: 'mvp_and_validation',
    title: 'When you need to launch or validate',
    description:
      'MVPs and validation builds designed to get something useful in front of users quickly, without dragging the first version out for months.',
  },
  {
    key: 'launch_sites',
    title: 'When credibility or conversion needs work',
    description:
      'Sites built to support a launch, improve credibility, or turn interest into better-qualified conversations.',
  },
];

export function getProjectTrackMeta(track: ProjectTrack): ProjectTrackMeta {
  return projectTrackMeta[track];
}
