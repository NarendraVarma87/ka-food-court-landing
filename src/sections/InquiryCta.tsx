import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { Container, Section, Badge, Reveal } from '@/components/ui'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { inquiryContent } from '@/content/inquiry'
import { SITE } from '@/config/site'

export function InquiryCta() {
  return (
    <Section
      id="inquiry"
      className="py-20 md:py-32 bg-gradient-to-br from-ink via-ink to-brand-900 text-white relative overflow-hidden"
    >
      {/* Background Glow Accents */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Value Pitch (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <Badge variant="dark" className="mb-3 text-brand-400">
                {inquiryContent.eyebrow}
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]">
                {inquiryContent.h2}
              </h2>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                {inquiryContent.subheading}
              </p>
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal delay={0.1}>
              <div className="p-6 md:p-7 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm space-y-5">
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-400 uppercase tracking-widest">
                    {inquiryContent.directContactTitle}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    {inquiryContent.directContactSub}
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm text-white/90">
                  {/* WhatsApp */}
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Chat on WhatsApp Business
                      </span>
                      <span className="block text-[11px] text-white/60">
                        Instant responses during business hours
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-brand-400 transition-colors">
                        Direct Phone: {SITE.phone}
                      </span>
                      <span className="block text-[11px] text-white/60">
                        Mon – Sat · 08:00 AM – 09:30 PM
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-brand-400 transition-colors">
                        Email: {SITE.email}
                      </span>
                      <span className="block text-[11px] text-white/60">
                        Inquiries, RFPs & commercial quotes
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-white/60">
                  <MapPin size={15} className="text-brand-400 shrink-0 mt-0.5" />
                  <span>{SITE.primaryAddress}</span>
                </div>
              </div>
            </Reveal>

            {/* SLA Trust Badges */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-400 shrink-0" />
                  <span>2-Hour Quote Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-400 shrink-0" />
                  <span>100% GST Invoiced</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: InquiryForm Card (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <InquiryForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
