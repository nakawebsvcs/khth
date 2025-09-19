import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
            tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

// Job Openings collection
const jobOpeningsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/job-openings" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image(),
        }),
});

// Volunteer Opportunities collection
const volunteerOpportunitiesCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/volunteer-opportunities" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image(),
        }),
});

// Training Events collection
const trainingEventsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/training-events" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image(),
        }),
});

export const collections = {
    blog: blogsCollection,
    'job-openings': jobOpeningsCollection,
    'volunteer-opportunities': volunteerOpportunitiesCollection,
    'training-events': trainingEventsCollection,
};