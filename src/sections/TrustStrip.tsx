import { Building2, Utensils, PartyPopper, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui'
import { trustContent } from '@/content/trust'

const iconMap = {
  Building2,
  Utensils,
  PartyPopper,
  ShieldCheck,
}

export function TrustStrip() {
  return (
    <section
      aria-label="Trust and Credibility"
      className="py-8 md:py-10 border-y border-border/80 bg-surface-soft/80"
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustContent.items.map((item) => {
            const Icon = iconMap[item.iconName]
            return (
              <div
                key={item.label}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200/50 flex items-center justify-center shrink-0 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-ink leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
