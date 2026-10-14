import type { ProcessContent } from '@/types/content'

export const processContent: ProcessContent = {
  eyebrow: 'How It Works · For Corporates',
  h2: 'A clear, structured onboarding process built for enterprise agility.',
  subheading:
    'From first consultation to ongoing daily cafeteria operations, our phased approach minimizes disruption and establishes reliable standards fast.',
  steps: [
    {
      stepNumber: '01',
      title: 'Requirement & Facility Discovery',
      description:
        'We visit your corporate campus or office space to review headcount, shift timings, pantry/cafeteria layout, and employee culinary preferences.',
      highlight: 'Detailed needs assessment & space audit',
    },
    {
      stepNumber: '02',
      title: 'Tailored Menu & Commercial Proposal',
      description:
        'You receive a comprehensive proposal including vendor stall curation, sample seasonal menus, transparent pricing models, and SLA commitments.',
      highlight: 'Clear SLAs & customizable meal pricing',
    },
    {
      stepNumber: '03',
      title: 'Seamless Onboarding & Counter Setup',
      description:
        'Our operations team deploys kitchen hardware, certifies staff hygiene protocols, configures billing counters, and prepares opening-day tastings.',
      highlight: 'Zero-downtime transition & hygiene checks',
    },
    {
      stepNumber: '04',
      title: 'Daily Operations & Feedback Loop',
      description:
        'A dedicated on-site manager supervises daily fresh preparation, manages vendor quality, and conducts bi-weekly satisfaction reviews with your admin team.',
      highlight: 'Dedicated manager & monthly audit reviews',
    },
  ],
}
