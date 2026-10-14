import type { HeroContent } from '@/types/content'
import { SITE } from '@/config/site'

export const heroContent: HeroContent = {
  eyebrow: 'Food court & corporate catering · Hyderabad',
  h1: 'Food courts and catering your teams will actually look forward to.',
  subheading:
    'End-to-end food court management for corporate buildings and tech parks in Hyderabad, plus reliable bulk catering for team outings, office parties, and celebrations.',
  ctaPrimary: {
    label: 'Request a proposal',
    href: '#inquiry',
  },
  ctaSecondary: {
    label: 'Call / WhatsApp us',
    href: SITE.whatsappUrl,
  },
  ctaOrderApp: {
    label: 'Order for your office',
    href: SITE.existingOrderApp,
    note: '// TODO(client): confirm if external employee order app link should be shown in hero',
  },
  chips: [
    'Operating in Hyderabad Corporate Buildings',
    'Multiple In-House Cafes',
    'Bulk & Event Catering',
  ],
  heroImageAlt: 'KA Food Court corporate dining space and cafeteria hospitality setup',
}
