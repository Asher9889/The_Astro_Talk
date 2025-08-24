import * as z from "zod";

export const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      // .regex(
      //   /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/,
      //   "Each word must start with a capital letter (e.g., John Doe)"
      // )
      ,
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string().trim()
      .min(10, "Phone number must be at least 10 digits")
      // .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
      ,
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
