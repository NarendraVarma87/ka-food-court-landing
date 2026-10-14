import { ShieldCheck, Sparkles, Clock, Users, Receipt, Headphones } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '@/components/ui'
import { whyUsContent } from '@/content/whyUs'

const iconMap = {
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  Receipt,
  Headphones,
}

export function WhyUs() {
  return (
    <Section id="why-us" soft className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={whyUsContent.eyebrow}
            title={whyUsContent.h2}
            subtitle={whyUsContent.subheading}
          />
        </Reveal>

        {/* 6 Benefit Cards Grid (2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyUsContent.benefits.map((benefit, idx) => {
            const Icon = iconMap[benefit.iconName]
            const isTodo = benefit.proof?.startsWith('// TODO')

            return (
              <Reveal key={benefit.title} delay={idx * 0.08} className="h-full">
                <Card
                  interactive
                  className="p-7 md:p-8 flex flex-col justify-between h-full bg-surface"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 shadow-xs">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-ink">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {benefit.proof && (
                    <div className="mt-6 pt-4 border-t border-border/80">
                      <span
                        className={
                          isTodo
                            ? 'text-xs italic text-brand-600/70'
                            : 'text-xs font-semibold text-brand-700'
                        }
                      >
                        {benefit.proof}
                      </span>
                    </div>
                  )}
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
