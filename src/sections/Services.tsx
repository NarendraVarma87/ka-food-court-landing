import { Building2, Soup, Sparkles, Check, ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Badge, Reveal } from '@/components/ui'
import { servicesContent } from '@/content/services'

const iconMap = {
  Building2,
  Soup,
  Sparkles,
}

export function Services() {
  return (
    <Section id="services" soft className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={servicesContent.eyebrow}
            title={servicesContent.h2}
            subtitle={servicesContent.subheading}
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesContent.services.map((service, idx) => {
            const Icon = iconMap[service.iconName]
            const isFeatured = idx === 0

            return (
              <Reveal key={service.id} delay={idx * 0.1} className="h-full">
                <Card
                  id={service.id}
                  interactive
                  highlight={isFeatured}
                  className="flex flex-col justify-between h-full bg-surface scroll-mt-28"
                >
                  <div className="space-y-5">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 shadow-xs">
                        <Icon size={24} />
                      </div>
                      <Badge variant={isFeatured ? 'brand' : 'neutral'} className="text-[10px]">
                        {service.badge}
                      </Badge>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-ink tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* 3 Bullet Points */}
                    <ul className="space-y-3 pt-4 border-t border-border/80">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/80">
                          <div className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5 text-brand-700">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link scrolling to form with service type intent */}
                  <div className="pt-6 mt-6 border-t border-border/60">
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
