import { defineCollection, z } from 'astro:content';


const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        imageUrl: z.string(),
        imageAlt: z.string().optional(),
        projectUrl: z.string().url().optional(),
        publishDate: z.date().optional(),
        isFeatured: z.boolean().default(false),
        order: z.number().optional(),
        toolsUsed: z.array(z.string()),
    }),
});

export const collections = {
    projects: projectsCollection,
};