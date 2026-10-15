import Image from 'next/image'
import { Phone, ArrowRight, Sparkles, Building2, Utensils } from 'lucide-react'
import { Container, Section, Button, Badge, Reveal } from '@/components/ui'
import { heroContent } from '@/content/hero'

export function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-soft/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <Reveal>
              <Badge variant="brand" className="mb-2">
                <Sparkles size={13} className="text-brand-600" />
                <span>{heroContent.eyebrow}</span>
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-heading font-bold tracking-tight text-ink text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.12]">
                {heroContent.h1}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                {heroContent.subheading}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a href={heroContent.ctaPrimary.href}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg">
                    <span>{heroContent.ctaPrimary.label}</span>
                    <ArrowRight size={17} className="ml-1" />
                  </Button>
                </a>

                <a
                  href={heroContent.ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone size={17} className="text-brand-600 mr-1" />
                    <span>{heroContent.ctaSecondary.label}</span>
                  </Button>
                </a>
              </div>
            </Reveal>

            {/* Tertiary Order App Link */}
            {heroContent.ctaOrderApp && (
              <Reveal delay={0.4}>
                <div className="pt-2 flex items-center gap-2 text-xs text-muted">
                  <span>Looking to order food today?</span>
                  <a
                    href={heroContent.ctaOrderApp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2 inline-flex items-center gap-1"
                  >
                    <span>{heroContent.ctaOrderApp.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Hero Visual with Brand Glow & True Floating Chips (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Soft Brand Glow Orb */}
            <div
              className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-brand-500/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-accent/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <Reveal delay={0.2} className="relative z-10">
              <div className="relative rounded-[28px] overflow-hidden border border-border/80 shadow-[0_20px_50px_-12px_rgba(10,10,11,0.12)] bg-surface-soft">
                <Image
                  src="/images/corporate-food-court.jpg"
                  alt={heroContent.heroImageAlt}
                  width={640}
                  height={560}
                  priority
                  className="w-full h-auto object-cover aspect-[4/3.5] hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />

                {/* Subtle Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Chip 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 hidden xs:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface/95 backdrop-blur-md border border-border shadow-lg">
                <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Building2 size={15} />
                </div>
                <span className="text-xs font-bold text-ink whitespace-nowrap">
                  Corporate Food Courts
                </span>
              </div>

              {/* Floating Chip 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface/95 backdrop-blur-md border border-border shadow-lg">
                <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Utensils size={15} />
                </div>
                <span className="text-xs font-bold text-ink whitespace-nowrap">
                  Multiple Outlets & Bulk Orders
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
