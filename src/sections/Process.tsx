import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Button, Reveal } from '@/components/ui'
import { processContent } from '@/content/process'

export function Process() {
  return (
    <Section id="how-it-works" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Section Header on Desktop (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow={processContent.eyebrow}
                title={processContent.h2}
                subtitle={processContent.subheading}
                align="left"
                className="mb-6"
              />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 rounded-[24px] bg-surface-soft border border-border space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                  <CheckCircle2 size={16} className="text-brand-600" />
                  <span>Enterprise SLA Guarantee</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Every food court setup is backed by our strict Service Level Agreements covering hygiene, operational readiness, and counter uptime.
                </p>
                <a href="#inquiry" className="inline-block pt-1">
                  <Button variant="primary" size="sm">
                    <span>Schedule a Campus Walkthrough</span>
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4-Step Timeline with Connected Vertical Track (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Track Line on Desktop/Tablet */}
            <div
              className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-500 via-brand-300 to-border hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-6 sm:space-y-8">
              {processContent.steps.map((step, idx) => (
                <Reveal key={step.stepNumber} delay={idx * 0.1}>
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    {/* Step Number Badge Node */}
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-surface border-2 border-brand-500 flex items-center justify-center shrink-0 shadow-md">
                      <span className="font-heading font-black text-sm text-brand-700">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Content Card */}
                    <Card className="flex-1 p-6 md:p-7 hover:border-brand-500/40">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="font-heading font-bold text-lg text-ink">
                          {step.title}
                        </h3>
                        <span className="inline-flex text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200/50 w-fit">
                          {step.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
