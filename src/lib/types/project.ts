export interface ProjectImages {
  hero: string;
  feature: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  client: string;
  service: string;
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
}
