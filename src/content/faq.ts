import type { FaqContent } from '@/types/content'
import { SITE } from '@/config/site'

export const faqContent: FaqContent = {
  eyebrow: 'Frequently Asked Questions',
  h2: 'Everything you need to know about partnering with KA Food Court.',
  subheading:
    'Clear, practical answers about commercial cafeteria management, bulk food delivery, and facility onboarding in Hyderabad.',
  items: [
    {
      id: 'faq-1',
      question: 'What does KA Food Court handle in a corporate food court?',
      answer:
        'We manage the entire food court lifecycle: vendor stall curation, chef and counter staffing, daily kitchen hygiene audits, multi-cuisine menu rotation, POS billing systems, customer feedback loops, and waste disposal management.',
    },
    {
      id: 'faq-2',
      question: 'Which areas and business hubs in Hyderabad do you serve?',
      answer:
        'Our primary operations are located in Hitech City, Madhapur, Gachibowli, Kondapur, and the Financial District. We currently operate food court facilities in corporate locations such as the Awfis building.',
    },
    {
      id: 'faq-3',
      question: 'What is the minimum order size and notice period for bulk catering?',
      answer:
        'For office snacks, team birthdays, and executive meeting orders, our minimum order size is 10 to 15 people with 12 to 24 hours advance notice. For large townhalls and department offsites (100+ pax), 48 hours notice is recommended.',
    },
    {
      id: 'faq-4',
      question: 'Can you handle specific dietary requirements (pure veg, Jain, vegan)?',
      answer:
        'Yes. All catering packages include clear dietary splits. Pure vegetarian dishes and Jain preparations are cooked using segregated utensils and cooking stations to maintain complete culinary integrity.',
    },
    {
      id: 'faq-5',
      question: 'How does corporate pricing and billing work?',
      answer:
        'We offer flexible commercial arrangements: direct employee pay-as-you-eat billing, subsidized cafeteria vouchers, or itemized monthly corporate invoices with 100% GST-compliant documentation for enterprise procurement.',
    },
    {
      id: 'faq-6',
      question: 'Can KA Food Court scale to handle large enterprise tech park campuses?',
      answer:
        'Yes. We have operational architecture and supply chains capable of managing multi-vendor food courts serving hundreds of corporate employees across continuous morning, lunch, high-tea, and dinner shifts.',
    },
    {
      id: 'faq-7',
      question: 'How do we request a custom menu and commercial proposal?',
      answer:
        `Simply complete our online inquiry form on this site or message our team directly via WhatsApp (${SITE.phone}). A dedicated operations manager will contact you within 2 business hours to schedule an on-site consultation.`,
    },
  ],
}
