import { z } from "zod";
export const loginValidation = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(1, "Password is required"),
})