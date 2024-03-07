import { z } from "zod"

export const petFormSchema = z.object({
    name: z.string().min(3),
    ownerName: z.string().min(3),
    imageUrl: z.string().optional(),
    age: z.string(),
    notes: z.string().min(5)
  })