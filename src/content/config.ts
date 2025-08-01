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

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        category: z.enum(['Professional', 'Thoughts']),
        tags: z.array(z.string()),
        coverImage: image().optional(),
        coverImageAlt: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
    blog: blogCollection,
};