import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section, Button } from '@/components/ui'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | KA Food Court',
  description: 'Privacy Policy and data collection guidelines for KA Food Court corporate catering and facility inquiries.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <Section>
        <Container narrow>
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                Data Privacy & Trust
              </span>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-ink mt-2">
                Privacy Policy
              </h1>
              <p className="text-muted text-sm mt-2">
                Last updated: October 2026 · {SITE.legalName}
              </p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6 text-ink/80 text-sm md:text-base leading-relaxed border-t border-border pt-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold font-heading text-ink">1. Information We Collect</h2>
                <p>
                  When you submit an inquiry for corporate cafeteria management, food court operations, or event catering through our website, we collect the contact details you provide, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted">
                  <li>Full Name and Job Title</li>
                  <li>Company Name and Corporate Campus Location</li>
                  <li>Work Email Address and Contact Telephone Number</li>
                  <li>Service requirements, estimated headcount, and event timelines</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold font-heading text-ink">2. How We Use Your Data</h2>
                <p>
                  We use this information strictly to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted">
                  <li>Respond to your corporate catering, cafeteria, or bulk food inquiries.</li>
                  <li>Prepare customized proposals, commercial quotes, and menu plans.</li>
                  <li>Coordinate delivery, facility walkthroughs, and contractual agreements.</li>
                  <li>Communicate operational updates regarding your scheduled bookings.</li>
                </ul>
                <p>
                  We do not sell, rent, or lease your commercial or personal data to any third-party advertisers or external data brokers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold font-heading text-ink">3. Data Security and Confidentiality</h2>
                <p>
                  All commercial inquiries and corporate correspondence are handled with strict enterprise confidentiality. Inquiry submissions are transmitted over secure TLS/SSL encrypted channels.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold font-heading text-ink">4. Contact & Rectification</h2>
                <p>
                  If you wish to update, review, or request the deletion of your inquiry details, please contact our administrative team directly:
                </p>
                <p className="font-semibold text-ink">
                  {SITE.name} Admin Team<br />
                  Email: <a href={`mailto:${SITE.email}`} className="text-brand-600 underline">{SITE.email}</a><br />
                  Phone: {SITE.phone}<br />
                  Address: {SITE.primaryAddress}
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-border">
              <Link href="/">
                <Button variant="outline" size="sm">
                  ← Back to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
