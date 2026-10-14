'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react'
import { Container } from '@/components/ui'
import { NAV_ITEMS, SITE } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-28 md:pb-16 border-t border-white/10" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand & Description (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Image
              src="/brand/logo-dark.svg"
              alt="KA Food Court"
              width={220}
              height={38}
              className="h-8 md:h-9 w-auto object-contain"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              End-to-end food court and cafeteria operations for corporate campuses and tech parks in Hyderabad, plus premium bulk catering for team events, office parties, and celebrations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare size={14} className="text-brand-400" />
                <span>WhatsApp Business</span>
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Call KA Food Court"
              >
                <Phone size={14} className="text-brand-400" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-transform"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#inquiry"
                  className="text-brand-400 hover:text-brand-300 font-semibold"
                >
                  Request a Proposal →
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Food Court Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate Cafeteria Operations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Daily & Weekly Office Catering
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Team Outings & Celebrations
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Office Birthday Bulk Orders
                </a>
              </li>
              {SITE.existingOrderApp && (
                <li className="pt-2">
                  <a
                    href={SITE.existingOrderApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                  >
                    <span>Employee Order App ↗</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-1" />
                <span>{SITE.primaryAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-brand-400 shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 {SITE.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
