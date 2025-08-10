import { defineCollection, z } from 'astro:content';


const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: image(),
        imageAlt: z.string().optional(),
        isFeatured: z.boolean().default(false),
        order: z.number().optional(),
        toolsUsed: z.array(z.string()),
        role: z.string(),
        figmaLink: z.string().optional(),
        siteLink: z.string().optional(),
        prototypeLink: z.string().optional(),

    }),
});

const writingCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(), // ISO string format
        summary: z.string().optional(),
        tags: z.array(z.string()),
        isNewsletter: z.boolean().default(true),
        canonical: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
    writing: writingCollection,
};