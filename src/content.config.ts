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
    section: z.enum(["code", "ai", "tests", "guardrails", "production", "agent"]),
    summary: z.string(),
  }),
});

// Business tools guide for small-business owners. `seoTitle` puts the search phrase first in <title>.
const guide = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guide" }),
  schema: z.object({
    title: z.string(),
    group: z.enum(["get-found", "get-paid", "day-to-day", "save-time", "stay-safe", "concepts"]),
    summary: z.string(),
    seoTitle: z.string().max(45),
    description: z.string(),
  }),
});

export const collections = { blog, caseStudies, atlas, guide };
