import { defineCollection, z } from 'astro:content';

const base = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().optional(),
  coverImage: z.string().optional(), // path /images/... berformat .webp
  coverAlt: z.string().optional(),
  category: z.string(),
  draft: z.boolean().default(false),
  summary: z.array(z.string()).optional(),
});

export const collections = {
  blog: defineCollection({ type: 'content', schema: base }),
  portfolio: defineCollection({ type: 'content', schema: base }),
};
