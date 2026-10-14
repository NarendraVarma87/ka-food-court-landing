import { SITE } from '@/config/site'
import type { FaqItem } from '@/types/content'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo.svg`,
    image: `${SITE.url}/images/client-hero.png`,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Awfis Building, Hitech City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4435',
      longitude: '78.3772',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Hyderabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Hitech City',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Gachibowli',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Financial District',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Madhapur',
      },
    ],
    servesCuisine: ['Indian', 'South Indian', 'North Indian', 'Continental', 'Beverages', 'Corporate Snacks'],
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      SITE.socials.linkedin,
      SITE.socials.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Corporate Food Court & Catering Offerings',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Food Court & Cafeteria Management',
          description: 'Full food court, cafeteria and vendor management for corporate office buildings and tech parks in Hyderabad.',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Corporate Catering & Bulk Meal Deliveries',
          description: 'Scheduled daily lunches, executive meetings, training sessions and office bulk meals.',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Office Parties & Team Outing Bulk Catering',
          description: 'Customized bulk catering for office celebrations, birthdays, team outings and townhalls.',
        },
      ],
    },
  }
}

export function buildFaqSchema(faqItems: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
