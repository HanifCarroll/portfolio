const VIDEO_POSTER_WIDTHS = [480, 960, 1440] as const;

const getPosterBasePath = (posterPath: string) => posterPath.replace(/\.[a-z0-9]+$/i, "");

export const getVideoPosterSources = (posterPath: string) => {
  const basePath = getPosterBasePath(posterPath);
  const variantPath = (width: (typeof VIDEO_POSTER_WIDTHS)[number]) => `${basePath}-${width}.webp`;

  return {
    src: variantPath(960),
    large: variantPath(1440),
    srcset: VIDEO_POSTER_WIDTHS.map((width) => `${variantPath(width)} ${width}w`).join(", "),
  };
};
