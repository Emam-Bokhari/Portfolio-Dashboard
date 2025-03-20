import { z } from "zod";

export const blogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    thumbnail: z.string().url("Invalid URL format"),
    category: z.string(),
    authorName: z.string(),
    introduction: z.string(),
    mainContent: z.string().min(10, "Description should be more detailed"),
    tags: z.array(z.string()).optional(),
});
