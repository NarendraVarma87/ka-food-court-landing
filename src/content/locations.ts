import type { LocationsContent } from '@/types/content'

export const locationsContent: LocationsContent = {
  eyebrow: 'Our Presence · Hyderabad',
  h2: 'Operating inside premier corporate buildings and tech parks.',
  subheading:
    'Conveniently situated in Hyderabad’s primary IT hubs, delivering fresh daily hospitality where high-performing teams work.',
  locations: [
    {
      name: 'KA Food Court @ Awfis Campus',
      building: 'Awfis Corporate Building',
      area: 'Hitech City, Hyderabad',
      type: 'Corporate Food Court',
      timings: '08:00 AM – 09:30 PM (Mon – Sat)',
      mapsUrl: 'https://maps.google.com/?q=Awfis+Hitech+City+Hyderabad',
      isFeatured: true,
    },
    {
      name: 'KA Express Cafe @ Tech Corridor',
      building: 'Corporate Tech Park Towers',
      area: 'Madhapur, Hyderabad',
      type: 'Tech Park Cafe',
      timings: '08:30 AM – 08:00 PM (Mon – Fri)',
      mapsUrl: 'https://maps.google.com/?q=Madhapur+Hyderabad+Corporate+Park',
      isFeatured: false,
    },
    {
      name: 'KA Central Food Hub',
      building: 'Financial District Complex',
      area: 'Gachibowli, Hyderabad',
      type: 'Express Counter',
      timings: '09:00 AM – 07:00 PM (Mon – Fri)',
      mapsUrl: 'https://maps.google.com/?q=Gachibowli+Financial+District+Hyderabad',
      isFeatured: false,
    },
  ],
}
