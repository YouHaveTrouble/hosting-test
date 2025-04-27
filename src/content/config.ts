import {z, defineCollection} from "astro:content";

const hosts = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    websites: z.array(z.string()),
    discord: z.string().optional(),
    admincraftCertified: z.boolean().optional(),
  }),
});

const tpstests = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string().date(),
    host: z.string(),
    planName: z.string(),
    pricePerMonth: z.number(),
    cpuName: z.string().optional(),
    cpuCores: z.number().optional(),
    ram: z.number(),
    renderTimes: z.array(z.number().positive()),
    chunksPerSecond: z.array(z.number().positive()),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  hosts,
  tpstests,
}
