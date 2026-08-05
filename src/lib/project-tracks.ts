import type { ProjectTrack, ProjectTrackGroup } from "./types/project";

export interface ProjectTrackMeta {
  label: string;
  shortLabel: string;
  group: ProjectTrackGroup;
  ctaVariant: "general" | "systemsBuild" | "ongoing";
  rank: number;
}

export const projectTrackMeta: Record<ProjectTrack, ProjectTrackMeta> = {
  workflow_automation: {
    label: "Operational Product System",
    shortLabel: "Systems work",
    group: "supporting_product_proof",
    ctaVariant: "general",
    rank: 3,
  },
  ai_systems: {
    label: "AI Product System",
    shortLabel: "AI systems",
    group: "supporting_product_proof",
    ctaVariant: "systemsBuild",
    rank: 4,
  },
  mvp_build: {
    label: "Product System",
    shortLabel: "Build",
    group: "mvp_and_validation",
    ctaVariant: "systemsBuild",
    rank: 0,
  },
  mvp_validation: {
    label: "Product Prototype",
    shortLabel: "Build",
    group: "mvp_and_validation",
    ctaVariant: "systemsBuild",
    rank: 1,
  },
  launch_site: {
    label: "Client Website",
    shortLabel: "Client work",
    group: "launch_sites",
    ctaVariant: "systemsBuild",
    rank: 2,
  },
};

export function getProjectTrackMeta(track: ProjectTrack): ProjectTrackMeta {
  return projectTrackMeta[track];
}
