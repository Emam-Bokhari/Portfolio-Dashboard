import { z } from "zod";

export const skillSchema = z.object({
    name: z.string().min(3, "Skill must be at least 3 characters long").max(17, "Skill must be no longer than 17 characters"),
    icon: z.string().url("Invalid URL format"),
    description: z.string().min(3, "Description must be at least 3 characters long").max(20, "Description must be no longer than 20 characters"),
    category: z.string()
});
