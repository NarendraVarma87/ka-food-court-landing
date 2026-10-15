# KA Food Court · Corporate Marketing & Lead Generation Website

A high-performance corporate marketing website and enterprise lead generation engine for **KA Food Court**, engineered for facilities managers, procurement heads, and corporate administration leaders in Hyderabad.

Built with **Next.js App Router (SSG)**, **TypeScript Strict**, **Tailwind CSS**, **Radix UI**, **Motion**, **React Hook Form**, **Zod**, and **Resend**.

---

## 1. Project Overview & Business Purpose

KA Food Court operates multi-stall food courts and corporate cafeterias inside tech parks in Hyderabad (such as the Awfis building in Hitech City) and delivers bulk catering for corporate meetings, team outings, birthdays, and office celebrations.

This website is designed to:
1. Establish enterprise trust with procurement/facilities decision-makers within seconds.
2. Present full-service cafeteria and food court management capabilities.
3. Capture qualified B2B leads via a typed inquiry pipeline, direct WhatsApp chat, and phone calls.
4. Rank #1 on Google for local B2B searches (food court management company Hyderabad, corporate catering Hyderabad, bulk food orders Hyderabad).

---

## 2. Tech Stack & Justifications

| Library / Tool | Version | Reason & Value |
|---|---|---|
| **Next.js (App Router)** | `16.x` | Static Site Generation (SSG), pre-rendered semantic HTML, instant Core Web Vitals, zero layout shift. |
| **React & TypeScript** | `19.x` / `5.x` | Strict type safety, clean component boundaries, zero `any`. |
| **Tailwind CSS** | `4.x` | Token-driven styles via `@theme` in `src/app/globals.css`. No hardcoded hex values in UI components. |
| **Radix UI** | Dialog & Accordion | Lightweight, accessible, SSR-safe modal navigation, lightbox, and FAQ accordion. (Replaces heavier UI frameworks to keep bundle lean). |
| **Motion** | `12.x` | Subtle purposeful motion (reveal-on-scroll, stagger), full `prefers-reduced-motion` compliance. |
| **React Hook Form + Zod** | `7.x` / `3.x` | Typed client and server validation for the enterprise inquiry form. |
| **Resend** | `4.x` | Server-side email delivery to the sales team and auto-acknowledgements to prospects. |
| **Lucide React** | `0.5x` | Unified, crisp icon system. |
| **Vitest + RTL** | `2.x` | Fast unit tests and interaction testing for primitives and forms. |

---

## 3. Project Architecture & Structure

```
ka-food-court-web/
├── .env.example                # Documented environment variables
├── README.md                   # Complete architectural and operational manual
├── public/
│   ├── brand/                  # Logo SVG variants (light, dark, white, icon)
│   ├── images/                 # Client-supplied photos (no stock photos used)
│   └── og/                     # Static fallback OpenGraph assets
└── src/
    ├── app/
    │   ├── api/inquiry/route.ts # Validates, rate-limits, honeypots, delivers email via Resend
    │   ├── layout.tsx          # Plus Jakarta Sans & Inter fonts, JSON-LD, MotionConfig
    │   ├── page.tsx            # Composes sections 1 to 12 in strict spec order
    │   ├── privacy/page.tsx    # Privacy policy compliance stub
    │   ├── globals.css         # Token system (@theme) and base typography
    │   ├── icon.svg            # Dynamic SVG favicon
    │   ├── manifest.ts         # PWA and web manifest
    │   ├── not-found.tsx       # Accessible 404 page
    │   ├── opengraph-image.tsx # 1200x630 dynamic OpenGraph banner
    │   ├── robots.ts           # Search bot rules
    │   └── sitemap.ts          # XML sitemap generator
    ├── components/
    │   ├── forms/              # InquiryForm, Field, Select
    │   ├── layout/             # Navbar, MobileNav (Radix Dialog), Footer, SkipLink, StickyCta
    │   ├── seo/                # JsonLd helper
    │   └── ui/                 # Button, Container, Section, SectionHeading, Badge, Card, Reveal
    ├── config/
    │   └── site.ts             # Central source of truth (contact, address, phone, socials)
    ├── content/                # All typed copy (Zero business text inside components)
    │   ├── hero.ts, about.ts, services.ts, process.ts, whyUs.ts
    │   ├── locations.ts, events.ts, gallery.ts, testimonials.ts, faq.ts, inquiry.ts, seo.ts
    ├── hooks/
    │   └── useActiveSection.ts # IntersectionObserver active anchor tracking
    ├── lib/
    │   ├── cn.ts               # clsx + tailwind-merge
    │   ├── motion.ts           # Easing curves and motion variants
    │   ├── schema.ts           # JSON-LD builders (LocalBusiness, FoodEstablishment, FAQPage)
    │   ├── submitInquiry.ts    # Client submit helper + mailto fallback
    │   └── validators.ts       # Zod validation schema
    └── tests/
        ├── primitives.test.tsx
        ├── faq-accordion.test.tsx
        └── inquiry.test.ts
```

---

## 4. Getting Started Locally

### Prerequisites
- Node.js 20+ (Node v20.15.1+ recommended)
- npm 10+

### Installation & Run
```bash
# Navigate to the project directory
cd ka-food-court-web

# Install dependencies
npm install

# Setup local environment variables
cp .env.example .env.local

# Run the development server
npm run dev

# Run TypeScript checks
npm run typecheck

# Run ESLint
npm run lint

# Run Vitest test suite
npm run test

# Run production build
npm run build
```

---

## 5. Environment Variables (`.env.local`)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for delivering inquiry emails (`re_...`). |
| `INQUIRY_TO_EMAIL` | Inbox receiving inbound corporate proposals (`corporate@kafoodcourt.com`). |
| `INQUIRY_FROM_EMAIL` | Verified sender domain in Resend (`inquiries@kafoodcourt.com`). |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain (`https://kafoodcourt.com`). |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Optional toggle for privacy-friendly Vercel Analytics (`false` by default). |

---

## 6. How the Client Can Edit Content

All user-facing copy is separated from UI components and stored in `src/content/`:
- **Change Hero Title / Subtitle**: Edit `src/content/hero.ts`.
- **Add / Edit Outlets & Timings**: Edit `src/content/locations.ts`.
- **Update Services & Offerings**: Edit `src/content/services.ts`.
- **Add Verified Testimonials**: Add client quotes with written consent to `src/content/testimonials.ts`.
- **Add FAQ Questions**: Edit `src/content/faq.ts`.
- **Update Phone, WhatsApp or Address**: Edit `src/config/site.ts`.

---

## 7. Client Post-Launch Technical-SEO Checklist (Non-Code Action Plan)

To rank on Google for target keywords (*food court management company Hyderabad*, *corporate cafeteria services Hyderabad*, *corporate catering Hyderabad*, *bulk food orders Hyderabad*), complete the following post-launch steps:

### 1. Google Business Profile (GBP) — Highest Local Impact
- [ ] Claim or create the **Google Business Profile** under the exact legal name: `KA Food Court`.
- [ ] Set Primary Category: **Food Court** or **Cafeteria**.
- [ ] Set Secondary Categories: **Caterer**, **Corporate Catering Service**, **Restaurant**.
- [ ] Specify Service Area: *Hitech City, Madhapur, Gachibowli, Financial District, Kondapur, Hyderabad, Telangana*.
- [ ] Add the verified business phone: `+91 63025 10915`.
- [ ] Add the production website link: `https://kafoodcourt.com`.
- [ ] Upload high-resolution interior and counter photos of your operations at Awfis and tech parks.

### 2. Google Search Console & Bing Webmaster Tools
- [ ] Add property `https://kafoodcourt.com` in [Google Search Console](https://search.google.com/search-console).
- [ ] Submit XML sitemap: `https://kafoodcourt.com/sitemap.xml`.
- [ ] Test the homepage with Google's [Rich Results Test](https://search.google.com/test/rich-results) to confirm valid `LocalBusiness`, `FoodEstablishment`, and `FAQPage` schema.

### 3. Local Citations & NAP Consistency
- [ ] Ensure **Name, Address, Phone (NAP)** matches everywhere:
  - Justdial, IndiaMART, Sulekha, Zomato, Google Business Profile.
  - Consistent address: `Awfis Building, Hitech City, Hyderabad, Telangana 500081`.
  - Consistent phone: `+91 63025 10915`.

### 4. Client Review Collection Strategy
- [ ] Create a short GBP review link (`https://g.page/r/.../review`).
- [ ] Request reviews from 5-10 facilities managers, HR heads, and team leads who have tasted or used KA Food Court.
- [ ] Mention keywords naturally in review responses (e.g., *"Thank you for trusting KA Food Court for your team outing catering in Hitech City"*).

### 5. Future Growth (Phase 6 Service Pages)
- [ ] When ready, expand dedicated search landing pages:
  - `/services/food-court-management`
  - `/services/corporate-catering`
  - `/services/party-and-event-catering`
- [ ] Publish a monthly corporate dining guide (e.g., *"How to Select a Cafeteria Vendor for 500+ Employee Tech Parks in Hyderabad"*).
