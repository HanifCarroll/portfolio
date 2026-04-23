export interface ProjectImages {
  hero: string;
  feature: string;
}

export interface ProjectProofQuote {
  quote: string;
  author: string;
  role?: string;
}

export type ProjectTrack =
  | 'mvp_build'
  | 'mvp_validation'
  | 'workflow_automation'
  | 'ai_systems'
  | 'launch_site';

export type ProjectTrackGroup =
  | 'automation_and_ai'
  | 'mvp_and_validation'
  | 'launch_sites';

export type ProjectDetailVariant =
  | 'product'
  | 'workflow'
  | 'launch_site';

export interface Project {
  slug: string;
  title: string;
  description: string;
  client: string;
  proofType: 'client' | 'experiment';
  service: string;
  bestFit: string;
  track: ProjectTrack;
  detailVariant: ProjectDetailVariant;
  category?: 'product' | 'marketing-site';
  year?: string;
  technologies: string[];
  liveUrl?: string;
  problem: string | string[];
  solution: string | string[];
  result: string | string[];
  images: ProjectImages;
  // Optional fields for richer case studies (when available)
  role?: string;
  teamSize?: string;
  timeline?: string;
  constraints?: string[];
  outcomes?: string[]; // metrics or qualitative outcomes
  repository?: string;
  architectureImage?: string;
  proofQuote?: ProjectProofQuote;
}
