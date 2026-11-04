import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      seoTitle: z.string().optional(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      coverImage: image().optional(),
      hidden: z.boolean().default(false),
      ctaVariant: z.enum(["general", "systemsBuild"]).default("general"),
    }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({}),
});

const atlas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/atlas" }),
  schema: z.object({
    title: z.string(),
    section: z.enum(["product", "application", "testing", "ai", "agents"]),
    summary: z.string(),
  }),
});

export const collections = { blog, caseStudies, atlas };
