import { Users, Clock, PartyPopper, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Button, Badge, Reveal } from '@/components/ui'
import { eventsContent } from '@/content/events'

export function EventsCatering() {
  return (
    <Section id="events" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eventsContent.eyebrow}
            title={eventsContent.h2}
            subtitle={eventsContent.subheading}
          />
        </Reveal>

        {/* 3-Step "How to Book Bulk Catering" Strip */}
        <Reveal delay={0.1}>
          <div className="mb-14 p-6 sm:p-8 rounded-[24px] bg-brand-50/60 border border-brand-200/70">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left max-w-xs shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Quick Ordering Flow
                </span>
                <h3 className="font-heading font-bold text-lg text-ink mt-1">
                  How to book office catering
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 w-full">
                {eventsContent.bookingSteps.map((bStep) => (
                  <div key={bStep.step} className="space-y-1">
                    <span className="text-[11px] font-black uppercase text-brand-600">
                      {bStep.step}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-ink">
                      {bStep.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {bStep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Categories Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {eventsContent.categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.1} className="h-full">
              <Card
                interactive
                className="p-7 md:p-8 flex flex-col justify-between h-full bg-surface border-border hover:border-brand-500/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600">
                      <PartyPopper size={20} />
                    </div>
                    <Badge variant="accent" className="text-[10px]">
                      {cat.leadTime}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-ink">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-700 mt-1">
                      {cat.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-ink/80 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-brand-600" />
                      <span>{cat.idealFor}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-muted">
                      <Clock size={14} className="text-brand-600" />
                      <span>{cat.minHeadcount}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/80">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors group"
                  >
                    <span>Request Menu & Per-Plate Pricing</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Section Primary Action */}
        <Reveal delay={0.3} className="text-center">
          <a href="#inquiry">
            <Button variant="primary" size="lg" className="shadow-md">
              <CheckCircle2 size={17} className="mr-1" />
              <span>{eventsContent.ctaLabel}</span>
            </Button>
          </a>
        </Reveal>
      </Container>
    </Section>
  )
}
