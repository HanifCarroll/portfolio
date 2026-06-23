import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
			ctaVariant: z.enum(['general', 'mvp', 'fractional']).default('general')
		})
});

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
	schema: z.object({
		projectSlug: z.string().optional()
	})
});

export const collections = { blog, caseStudies };
