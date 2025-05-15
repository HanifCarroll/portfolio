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
        githubLink: z.string().optional(),
        siteLink: z.string().optional(),

    }),
});

const uxInsightsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        imageAlt: z.string().optional(),
        isFeatured: z.boolean().default(false),
        order: z.number().optional(),

    })
})

export const collections = {
    projects: projectsCollection,
    uxInsights: uxInsightsCollection
};