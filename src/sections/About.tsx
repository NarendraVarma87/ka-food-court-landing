import Image from 'next/image'
import { MapPin, CheckCircle2, Image as ImageIcon } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '@/components/ui'
import { aboutContent } from '@/content/about'

export function About() {
  return (
    <Section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Confirmed Operational Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.h2}
                align="left"
                className="mb-6"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-sm sm:text-base text-ink/80 leading-relaxed">
                {aboutContent.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={p.startsWith('// TODO') ? 'text-xs italic text-brand-600/70 border-l-2 border-brand-300 pl-3' : undefined}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Confirmed Stats / Operational Pillars */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {aboutContent.stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <span className="block text-xl sm:text-2xl font-extrabold font-heading text-ink">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-bold text-brand-600 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    {stat.note && (
                      <span className="block text-[11px] text-muted">
                        {stat.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Collage with Client Photo & Tasteful Brand Placeholder (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Primary Client Photo */}
              <Reveal delay={0.1}>
                <div className="relative rounded-[24px] overflow-hidden border border-border/80 shadow-md aspect-[16/11]">
                  <Image
                    src="/images/client-hero.png"
                    alt={aboutContent.imageAlt}
                    width={560}
                    height={385}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border text-[11px] font-bold text-ink flex items-center gap-1.5">
                    <MapPin size={12} className="text-brand-600" />
                    <span>Awfis Tech Park · Hyderabad</span>
                  </div>
                </div>
              </Reveal>

              {/* Secondary Tasteful Brand Placeholder with TODO Marker */}
              <Reveal delay={0.2}>
                <Card className="p-6 bg-brand-50/50 border border-brand-200/60 relative flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-brand-700">
                      Food Court Operations
                    </span>
                    <ImageIcon size={18} className="text-brand-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-sm text-ink">
                      Enterprise Cafeteria & Pantry Management
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Handling full procurement, daily hot lunch spreads, hygienic stalls, and billing stations.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-200/50 flex items-center justify-between text-[11px] text-brand-800">
                    <span className="flex items-center gap-1 font-semibold">
                      <CheckCircle2 size={13} className="text-brand-600" />
                      Daily On-Site Audit
                    </span>
                    <span className="text-[10px] text-muted italic">
                      {'// TODO(client): photo'}
                    </span>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
