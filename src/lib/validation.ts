import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  type: z.string().min(3).max(255),
  location: z.string().min(3).max(255),
  company: z.string().min(3).max(255),
  company_url: z.string().min(3).max(255),
  company_logo: z.string().min(3).max(255),
});

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type TjobFilterSchema = z.infer<typeof jobFilterSchema>;
