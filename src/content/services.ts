import type { ServicesContent } from '@/types/content'

export const servicesContent: ServicesContent = {
  eyebrow: 'Our Core Services',
  h2: 'Comprehensive food solutions for modern corporate workplaces.',
  subheading:
    'Whether managing an entire building cafeteria or delivering warm bulk meals for high-stakes leadership meetings, we provide hospitality that decision-makers rely on.',
  services: [
    {
      id: 'services-food-court',
      badge: 'Enterprise Facility Management',
      title: 'Food Court & Cafeteria Management',
      shortDesc:
        'Complete end-to-end operation for corporate campuses, tech parks, and commercial towers. One trusted partner managing every stall and counter.',
      bullets: [
        'Curated vendor selection and multi-cuisine counter operations',
        'Stringent kitchen hygiene audits and daily temperature monitoring',
        'Integrated POS, billing support, and transparent reporting',
      ],
      ctaLabel: 'Request food court proposal',
      iconName: 'Building2',
    },
    {
      id: 'services-catering',
      badge: 'Corporate Dining & Meetings',
      title: 'Corporate Catering & Bulk Orders',
      shortDesc:
        'Scheduled breakfast, lunch, and high-tea deliveries for daily teams, client delegations, board meetings, and multi-day training workshops.',
      bullets: [
        'Punctual delivery with temperature-retaining food containers',
        'Dietary customizations: pure vegetarian, Jain, high-protein, and wellness options',
        'Flexible corporate invoice billing with GST compliant documentation',
      ],
      ctaLabel: 'Get catering quote',
      iconName: 'Soup',
    },
    {
      id: 'services-events',
      badge: 'Office Celebrations & Offsites',
      title: 'Parties, Team Outings & Celebrations',
      shortDesc:
        'Memorable celebrations without administrative headaches. Custom food spreads for team milestones, project completions, and birthday celebrations.',
      bullets: [
        'Appetizer spreads, festive live counters, and celebration desserts',
        'On-site serving staff, chafing dishes, and post-event cleanup support',
        'Scalable packages from intimate 15-person teams to full department gatherings',
      ],
      ctaLabel: 'Plan your celebration',
      iconName: 'Sparkles',
    },
  ],
}
