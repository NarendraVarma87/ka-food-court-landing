import { Quote } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '@/components/ui'
import { testimonialsContent } from '@/content/testimonials'

/**
 * Testimonials Section.
 * Spec rule: "Only real, client-provided quotes with name, role and company. If none, omit the section; do not fabricate."
 */
export function Testimonials() {
  if (!testimonialsContent.testimonials || testimonialsContent.testimonials.length === 0) {
    return null
  }

  return (
    <Section id="testimonials" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsContent.eyebrow}
            title={testimonialsContent.h2}
            subtitle={testimonialsContent.subheading}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsContent.testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Card className="p-8 flex flex-col justify-between h-full bg-surface">
                <Quote size={28} className="text-brand-500 mb-4" />
                <p className="text-sm md:text-base text-ink/80 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-border">
                  <h3 className="font-heading font-bold text-sm text-ink">{t.author}</h3>
                  <p className="text-xs text-muted">{t.role}, {t.company}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
