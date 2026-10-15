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
      src: '/images/gallery-high-tea.jpg',
      alt: 'Executive corporate high-tea snack spread and tea service setup',
      caption: 'Executive High-Tea & Team Celebration Spread',
      category: 'Corporate Events',
      isClientSupplied: true,
    },
    {
      id: 'gallery-4',
      src: '/images/gallery-coffee-counter.jpg',
      alt: 'Artisan corporate cafe counter serving espresso and filter coffee',
      caption: 'All-Day Corporate Coffee & Quick Bites Counter',
      category: 'Cafe Spaces',
      isClientSupplied: true,
    },
    {
      id: 'gallery-5',
      src: '/images/gallery-breakfast-stall.jpg',
      alt: 'Live tiffins, dosas, and South Indian morning breakfast stall',
      caption: 'Live Morning Breakfast & Regional Specialties Stall',
      category: 'Food Court',
      isClientSupplied: true,
    },
    {
      id: 'gallery-6',
      src: '/images/gallery-outdoor-catering.jpg',
      alt: 'Outdoor corporate evening celebration and team dinner catering',
      caption: 'Outdoor Team Outing & Milestone Dinner Catering',
      category: 'Corporate Events',
      isClientSupplied: true,
    },
  ],
}
