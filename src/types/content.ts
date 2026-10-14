/**
 * Strict TypeScript content interfaces.
 * All user-facing copy is separated from components and typed here.
 */

export interface HeroContent {
  eyebrow: string
  h1: string
  subheading: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
  ctaOrderApp?: {
    label: string
    href: string
    note: string
  }
  chips: readonly string[]
  heroImageAlt: string
}

export interface TrustItem {
  iconName: 'Building2' | 'Utensils' | 'PartyPopper' | 'ShieldCheck'
  label: string
  description: string
}

export interface TrustStripContent {
  items: readonly TrustItem[]
}

export interface AboutContent {
  eyebrow: string
  h2: string
  paragraphs: readonly string[]
  stats: readonly {
    label: string
    value: string
    note?: string
  }[]
  imageAlt: string
}

export interface ServiceItem {
  id: string
  title: string
  badge: string
  shortDesc: string
  bullets: readonly string[]
  ctaLabel: string
  iconName: 'Building2' | 'Soup' | 'Sparkles'
}

export interface ServicesContent {
  eyebrow: string
  h2: string
  subheading: string
  services: readonly ServiceItem[]
}

export interface ProcessStep {
  stepNumber: string
  title: string
  description: string
  highlight: string
}

export interface ProcessContent {
  eyebrow: string
  h2: string
  subheading: string
  steps: readonly ProcessStep[]
}

export interface WhyUsBenefit {
  iconName: 'ShieldCheck' | 'Sparkles' | 'Clock' | 'Users' | 'Receipt' | 'Headphones'
  title: string
  description: string
  proof?: string
}

export interface WhyUsContent {
  eyebrow: string
  h2: string
  subheading: string
  benefits: readonly WhyUsBenefit[]
}

export interface LocationItem {
  name: string
  building: string
  area: string
  type: 'Corporate Food Court' | 'Tech Park Cafe' | 'Express Counter'
  timings: string
  mapsUrl: string
  isFeatured?: boolean
}

export interface LocationsContent {
  eyebrow: string
  h2: string
  subheading: string
  locations: readonly LocationItem[]
}

export interface EventCategory {
  title: string
  tagline: string
  description: string
  idealFor: string
  leadTime: string
  minHeadcount: string
  serviceValue: 'party_event' | 'corporate_catering' | 'bulk_order'
}

export interface EventsContent {
  eyebrow: string
  h2: string
  subheading: string
  bookingSteps: readonly {
    step: string
    title: string
    desc: string
  }[]
  categories: readonly EventCategory[]
  ctaLabel: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
  category: 'Food Court' | 'Cafe Spaces' | 'Corporate Events' | 'Catering'
  isClientSupplied: boolean
}

export interface GalleryContent {
  eyebrow: string
  h2: string
  subheading: string
  items: readonly GalleryItem[]
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
}

export interface TestimonialsContent {
  eyebrow: string
  h2: string
  subheading: string
  testimonials: readonly TestimonialItem[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqContent {
  eyebrow: string
  h2: string
  subheading: string
  items: readonly FaqItem[]
}

export interface InquiryContent {
  eyebrow: string
  h2: string
  subheading: string
  formLabels: {
    name: string
    company: string
    email: string
    phone: string
    serviceType: string
    headcount: string
    timeline: string
    message: string
    submitButton: string
    submittingButton: string
  }
  directContactTitle: string
  directContactSub: string
}
