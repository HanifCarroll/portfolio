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
  year: string;
  technologies: string[];
  liveUrl: string;
  problem: string;
  solution: string;
  result: string;
  images: ProjectImages;
}