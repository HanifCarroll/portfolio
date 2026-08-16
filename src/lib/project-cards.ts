import type { Project } from "@src/lib/types/project";
import type { ImageMetadata } from "astro";
import { getProjectImage } from "./project-images";
import { getAllProjects } from "@src/lib/projects";
import { getProjectTrackMeta } from "./project-tracks";

export interface ProjectCard {
  slug: string;
  name: string;
  description: string;
  demoLink: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  proofType: Project["proofType"];
  cardLabel?: string;
  service: string;
  track: Project["track"];
  trackLabel: string;
  trackShortLabel: string;
  trackGroup: ReturnType<typeof getProjectTrackMeta>["group"];
  category: "product" | "marketing-site";
  videos: Project["videos"];
  image: ImageMetadata;
}

const toCard = (project: Project): ProjectCard => {
  const trackMeta = getProjectTrackMeta(project.track);

  return {
    slug: project.slug,
    name: project.title,
    description: project.description,
    demoLink: project.liveUrl ?? "",
    tags: project.technologies ?? [],
    year: project.year ?? "",
    client: project.client,
    role: project.role ?? "",
    proofType: project.proofType,
    cardLabel: project.cardLabel,
    service: project.service,
    track: project.track,
    trackLabel: trackMeta.label,
    trackShortLabel: trackMeta.shortLabel,
    trackGroup: trackMeta.group,
    category: project.category ?? "product",
    videos: project.videos,
    image: getProjectImage(project, "feature"),
  };
};

const parseYear = (value: string) => {
  const numeric = parseInt(value, 10);
  return Number.isNaN(numeric) ? 0 : numeric;
};

export const projects: ProjectCard[] = getAllProjects()
  .map(toCard)
  .sort((a, b) => {
    const trackDifference = getProjectTrackMeta(a.track).rank - getProjectTrackMeta(b.track).rank;
    if (trackDifference !== 0) return trackDifference;
    return parseYear(b.year) - parseYear(a.year);
  });
