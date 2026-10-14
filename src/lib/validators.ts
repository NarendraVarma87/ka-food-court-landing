import { z } from 'zod'

export const inquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name')
    .max(100, 'Name must be under 100 characters')
    .trim(),
  company: z
    .string()
    .min(2, 'Please enter your company or workspace name')
    .max(120, 'Company name must be under 120 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid work email address')
    .max(120, 'Email must be under 120 characters')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .max(20, 'Phone number must be under 20 characters')
    .regex(/^[0-9+\s\-()]{8,20}$/, 'Please enter a valid phone number format')
    .trim(),
  serviceType: z.enum([
    'food_court_management',
    'corporate_catering',
    'party_and_event',
    'other',
  ], {
    message: 'Please select a service requirement',
  }),
  headcount: z
    .string()
    .max(50, 'Headcount description must be under 50 characters')
    .optional()
    .or(z.literal('')),
  timeline: z
    .string()
    .max(80, 'Timeline description must be under 80 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .max(1000, 'Message must be under 1000 characters')
    .optional()
    .or(z.literal('')),
  // Anti-bot honeypot field
  website: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
})

export type InquiryFormValues = z.infer<typeof inquirySchema>
