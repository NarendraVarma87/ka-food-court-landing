'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageSquare, ArrowRight } from 'lucide-react'
import { SITE } from '@/config/site'
import { cn } from '@/lib/cn'

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past 380px (past hero top)
      setVisible(window.scrollY > 380)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 pt-2 bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(10,10,11,0.08)] pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-3 rounded-full text-xs font-bold text-ink bg-surface-soft border border-border hover:bg-brand-50 hover:text-brand-800 transition-colors"
          aria-label="WhatsApp KA Food Court"
        >
          <MessageSquare size={15} className="text-brand-600" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-3 rounded-full text-xs font-bold text-ink bg-surface-soft border border-border hover:bg-brand-50 hover:text-brand-800 transition-colors"
          aria-label="Call KA Food Court"
        >
          <Phone size={15} className="text-brand-600" />
          <span>Call</span>
        </a>

        <button
          onClick={scrollToInquiry}
          className="flex-[1.4] inline-flex items-center justify-center gap-1 h-11 px-4 rounded-full text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 shadow-sm transition-colors cursor-pointer"
        >
          <span>Get Quote</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
