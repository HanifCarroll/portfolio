import type { ImageMetadata } from "astro";
import type { Project } from "./types/project";

const imageModules = import.meta.glob("../assets/img/projects/**/*.{avif,gif,jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, ImageMetadata>;

const toImageModulePath = (imagePath: string) => imagePath.replace(/^@src\/assets\//, "../assets/");

export function getProjectImage(
  project: Project,
  imageKey: keyof Project["images"] = "hero",
): ImageMetadata {
  const imagePath = project.images[imageKey] ?? project.images.hero;
  const image = imageModules[toImageModulePath(imagePath)];

  if (!image) {
    throw new Error(`Missing project image "${imagePath}" for "${project.slug}".`);
  }

  return image;
}
