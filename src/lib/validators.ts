import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z
    .string({
      invalid_type_error: "Company must be at least 2 characters",
    })
    .optional(),
  request: z
    .string()
    .min(5, {
      message: "Request must be at least 5 characters.",
    })
    .max(500, {
      message: "Request must be at most 500 characters.",
    }),
  email: z
    .string({
      required_error: "Email address is required",
    })
    .email({
      message: "Please provide a valid email.",
    }),
});

export type ContactFormSchemaProps = z.infer<typeof contactFormSchema>;
