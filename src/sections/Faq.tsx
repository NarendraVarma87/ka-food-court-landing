'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import { Container, Section, SectionHeading, Button, Reveal } from '@/components/ui'
import { faqContent } from '@/content/faq'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildFaqSchema } from '@/lib/schema'
import { SITE } from '@/config/site'

export function Faq() {
  const faqSchema = buildFaqSchema(faqContent.items)

  return (
    <Section id="faq" className="py-20 md:py-28">
      {/* Inject Structured FAQPage Data for Google Rich Results */}
      <JsonLd data={faqSchema} />

      <Container narrow>
        <Reveal>
          <SectionHeading
            eyebrow={faqContent.eyebrow}
            title={faqContent.h2}
            subtitle={faqContent.subheading}
          />
        </Reveal>

        {/* Radix UI Accessible Accordion */}
        <Reveal delay={0.1}>
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqContent.items.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="rounded-[20px] border border-border bg-surface px-6 py-2 transition-all duration-200 data-[state=open]:border-brand-500/40 data-[state=open]:shadow-sm"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-heading font-bold text-sm sm:text-base text-ink hover:text-brand-600 transition-colors cursor-pointer group">
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className="text-brand-600 shrink-0 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden text-xs sm:text-sm text-muted leading-relaxed pb-4 pt-1 border-t border-border/50 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>

        {/* Still have questions banner */}
        <Reveal delay={0.2}>
          <div className="mt-12 p-6 rounded-[24px] bg-surface-soft border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-ink">Have a specific question about your campus?</h3>
                <p className="text-xs text-muted">Our Hyderabad team is available to discuss custom operational requirements.</p>
              </div>
            </div>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="outline" size="sm">
                <MessageSquare size={14} className="text-brand-600 mr-1" />
                <span>Ask on WhatsApp</span>
              </Button>
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
