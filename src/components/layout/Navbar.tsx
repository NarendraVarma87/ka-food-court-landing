'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, Phone, MessageSquare } from 'lucide-react'
import { NAV_ITEMS, SITE } from '@/config/site'
import { cn } from '@/lib/cn'
import { Container, Button } from '@/components/ui'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MobileNav } from './MobileNav'

const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-[0_2px_12px_rgba(10,10,11,0.03)] py-3'
            : 'bg-transparent py-4 md:py-6',
        )}
      >
        <Container>
          <nav aria-label="Main Navigation" className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
              aria-label="KA Food Court Home"
            >
              <Image
                src="/brand/logo.svg"
                alt="KA Food Court"
                width={210}
                height={36}
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 bg-surface/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/80 shadow-[0_2px_8px_rgba(10,10,11,0.02)]">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={cn(
                        'px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 select-none block',
                        isActive
                          ? 'bg-brand-50 text-brand-700 font-bold shadow-xs'
                          : 'text-muted hover:text-ink hover:bg-surface-soft',
                      )}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              {/* WhatsApp Quick Link */}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-surface text-ink hover:text-brand-600 hover:border-brand-500/40 hover:bg-brand-50/50 transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare size={17} />
              </a>

              {/* Call Link */}
              <a
                href={`tel:${SITE.phoneRaw}`}
                aria-label="Call KA Food Court"
                className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-surface text-ink hover:text-brand-600 hover:border-brand-500/40 hover:bg-brand-50/50 transition-colors"
                title={`Call ${SITE.phone}`}
              >
                <Phone size={17} />
              </a>

              {/* Primary Proposal CTA */}
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#inquiry')
                }}
              >
                <Button variant="primary" size="sm" className="hidden xs:inline-flex">
                  Get a Proposal
                </Button>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink hover:bg-surface-soft transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeId={activeId}
        onNavClick={handleNavClick}
      />
    </>
  )
}
