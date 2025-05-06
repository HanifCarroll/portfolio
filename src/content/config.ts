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
        role: z.string(),
        figmaLink: z.string().optional(),
        githubLink: z.string().optional(),
        siteLink: z.string().optional(),

    }),
});

export const collections = {
    projects: projectsCollection,
};