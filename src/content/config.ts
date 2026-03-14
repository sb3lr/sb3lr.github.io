import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date().optional(),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
    }),
});

const tools = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(), // Relaxed to string
        subcategory: z.string().optional(), // Relaxed to optional string
        tags: z.array(z.string()).default([]),
        link: z.string().optional(),
    }),
});

const achievements = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date().optional(),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
        category: z.string().optional(),
    }),
});

const reports = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date().optional(),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
        category: z.string().optional(),
    }),
});

export const collections = {
    'tutorials': tutorials,
    'cybertools': tools,
    'achievements': achievements,
    'reports': reports,
};
