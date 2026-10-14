/**
 * Site configuration – contact, navigation, locations, legal.
 * Centralized source of truth. Never hardcode contact or business constants in components.
 */

export const SITE = {
  name: 'KA Food Court',
  tagline: 'Food courts and corporate catering your teams will look forward to.',
  legalName: 'KA Food Court Hospitality Services', // TODO(client): confirm legal entity registration name
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kafoodcourt.com',
  phone: '+91 63025 10915',
  phoneRaw: '+916302510915',
  whatsappRaw: '916302510915',
  whatsappUrl:
    'https://wa.me/916302510915?text=Hi%20KA%20Food%20Court%2C%20we%20would%20like%20to%20discuss%20corporate%20food%20court%20management%20%2F%20bulk%20catering.',
  email: 'corporate@kafoodcourt.com', // TODO(client): confirm inquiry inbox
  city: 'Hyderabad',
  operatingState: 'Telangana',
  country: 'India',
  primaryAddress: 'Awfis Building & Corporate Tech Parks, Hitech City, Hyderabad, Telangana 500081',
  existingOrderApp: 'https://ka-food-court-frontend.vercel.app/order', // TODO(client): confirm domain

  socials: {
    linkedin: 'https://linkedin.com/company/ka-food-court', // TODO(client): confirm profile
    instagram: 'https://instagram.com/kafoodcourt', // TODO(client): confirm profile
  },

  legal: {
    privacyPolicy: '/privacy',
    terms: '/terms',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Locations', href: '#locations' },
  { label: 'Events & Bulk', href: '#events' },
  { label: 'FAQ', href: '#faq' },
] as const
