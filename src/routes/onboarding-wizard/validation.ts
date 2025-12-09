// zod each
import { z } from "zod";

export const emailStepValidation = z.object({
  email: z.string().email(),
});

export const personalDetailsStepValidation = z.object({
  firstName: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z]+$/),
  lastName: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z]+$/),
  dateOfBirth: z.string().min(1),
});
