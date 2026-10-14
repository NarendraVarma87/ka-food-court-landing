import type { TestimonialsContent } from '@/types/content'

/**
 * Client-approved testimonials only.
 * Rule: Never fabricate quotes, roles, or company names.
 * When empty, the section is completely omitted from rendering.
 */
export const testimonialsContent: TestimonialsContent = {
  eyebrow: 'Client Feedback',
  h2: 'What facility leaders and team managers say about us.',
  subheading: 'Real feedback from corporate partners across Hyderabad.',
  testimonials: [
    // TODO(client): Add verified client testimonials with written permission to display
  ],
}
