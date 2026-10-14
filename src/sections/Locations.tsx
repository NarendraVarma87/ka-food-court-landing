import { MapPin, Clock, ExternalLink, Building2 } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Badge, Reveal } from '@/components/ui'
import { locationsContent } from '@/content/locations'

export function Locations() {
  return (
    <Section id="locations" soft className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={locationsContent.eyebrow}
            title={locationsContent.h2}
            subtitle={locationsContent.subheading}
          />
        </Reveal>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {locationsContent.locations.map((loc, idx) => (
            <Reveal key={loc.name} delay={idx * 0.1} className="h-full">
              <Card
                interactive
                highlight={loc.isFeatured}
                className="flex flex-col justify-between h-full bg-surface"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600">
                      <Building2 size={20} />
                    </div>
                    <Badge variant={loc.isFeatured ? 'brand' : 'neutral'} className="text-[10px]">
                      {loc.type}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-ink">
                      {loc.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-700 mt-1 flex items-center gap-1.5">
                      <MapPin size={13} className="text-brand-600 shrink-0" />
                      <span>{loc.building}</span>
                    </p>
                    <p className="text-xs text-muted mt-0.5 pl-4">
                      {loc.area}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-muted">
                    <Clock size={14} className="text-brand-600 shrink-0" />
                    <span>{loc.timings}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/80">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors group"
                  >
                    <span>Get directions via Google Maps</span>
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
