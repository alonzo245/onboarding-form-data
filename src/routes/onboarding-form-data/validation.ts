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

export const homeAddressStepValidation = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z
    .string()
    .min(5, "ZIP code must be at least 5 characters")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code format"),
});
