import type { EventsContent } from '@/types/content'

export const eventsContent: EventsContent = {
  eyebrow: 'Bulk Orders & Corporate Events',
  h2: 'Stress-free catering for team milestones, birthdays, and offsites.',
  subheading:
    'From celebrating product launches and quarterly townhalls to team birthdays and department farewells, we prepare generous, fresh, and beautifully presented food spreads.',
  bookingSteps: [
    {
      step: 'Step 01',
      title: 'Share Event Details',
      desc: 'Tell us your date, expected headcount, venue, and cuisine preferences via form or WhatsApp.',
    },
    {
      step: 'Step 02',
      title: 'Review Curated Menu & Quote',
      desc: 'Receive transparent per-plate packages with dietary splits (Veg/Non-Veg/Jain) within 2 business hours.',
    },
    {
      step: 'Step 03',
      title: 'We Deliver, Setup & Serve',
      desc: 'Our culinary team arrives early with insulated warmers, clean serving gear, and optional service staff.',
    },
  ],
  categories: [
    {
      title: 'Team Outings & Offsites',
      tagline: 'Energizing hearty spreads for full-day team retreats and sports days.',
      description: 'Breakfast combos, packed meal boxes, or live on-site buffet stations with beverages and snacks.',
      idealFor: '20 – 300+ Attendees',
      leadTime: '24 – 48 Hours Notice',
      minHeadcount: 'Min. 15 Pax',
      serviceValue: 'party_event',
    },
    {
      title: 'Office Birthday & Milestone Parties',
      tagline: 'Delightful celebration snacks, artisan finger foods, and desserts.',
      description: 'Gourmet sliders, live chaat counters, cold beverages, and customized dessert displays for floor celebrations.',
      idealFor: '10 – 100+ Team Members',
      leadTime: '12 – 24 Hours Notice',
      minHeadcount: 'Min. 10 Pax',
      serviceValue: 'party_event',
    },
    {
      title: 'Townhalls & Executive Board Meetings',
      tagline: 'High-touch executive dining and plated gourmet hospitality.',
      description: 'Multi-course lunch buffets, premium tea/coffee service, and discrete professional attendants for leadership summits.',
      idealFor: '25 – 250+ Executives',
      leadTime: '48 Hours Notice',
      minHeadcount: 'Min. 20 Pax',
      serviceValue: 'corporate_catering',
    },
  ],
  ctaLabel: 'Book your event catering',
}
