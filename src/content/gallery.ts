import type { GalleryContent } from '@/types/content'

export const galleryContent: GalleryContent = {
  eyebrow: 'Our Spaces & Food Experience',
  h2: 'A glimpse into our corporate cafeterias, counters, and food craft.',
  subheading:
    'Real photos from our food court operations and corporate dining spaces across Hyderabad.',
  items: [
    {
      id: 'gallery-1',
      src: '/images/corporate-food-court.jpg',
      alt: 'KA Food Court corporate dining setup and multi-cuisine counters at Awfis Hitech City',
      caption: 'Corporate Cafeteria Counter · Awfis Hitech City Campus',
      category: 'Food Court',
      isClientSupplied: true,
    },
    {
      id: 'gallery-2',
      src: '/images/corporate-catering.jpg',
      alt: 'Freshly prepared corporate lunch buffet and warm catering spread',
      caption: 'Fresh Daily Lunch Buffet & Multi-Cuisine Catering',
      category: 'Catering',
      isClientSupplied: true,
    },
    {
      id: 'gallery-3',
      src: '',
      alt: 'Office celebration and high-tea snack table arrangement',
      caption: 'Executive High-Tea & Team Celebration Spread',
      category: 'Corporate Events',
      isClientSupplied: false, // Renders brand-tinted placeholder with // TODO(client): photo
    },
    {
      id: 'gallery-4',
      src: '',
      alt: 'Artisan cafe counter serving espresso and filter coffee',
      caption: 'All-Day Corporate Coffee & Quick Bites Counter',
      category: 'Cafe Spaces',
      isClientSupplied: false, // Renders brand-tinted placeholder with // TODO(client): photo
    },
    {
      id: 'gallery-5',
      src: '',
      alt: 'Live dosa and South Indian morning breakfast stall',
      caption: 'Live Morning Breakfast & Regional Specialties Stall',
      category: 'Food Court',
      isClientSupplied: false, // Renders brand-tinted placeholder with // TODO(client): photo
    },
    {
      id: 'gallery-6',
      src: '',
      alt: 'Evening team outing catering setup with live mocktail and snack bar',
      caption: 'Outdoor Team Outing & Milestone Dinner Catering',
      category: 'Corporate Events',
      isClientSupplied: false, // Renders brand-tinted placeholder with // TODO(client): photo
    },
  ],
}
