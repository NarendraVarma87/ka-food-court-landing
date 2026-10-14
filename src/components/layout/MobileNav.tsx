'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X, Phone, MessageSquare, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { NAV_ITEMS, SITE } from '@/config/site'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  activeId: string
  onNavClick: (href: string) => void
}

export function MobileNav({ open, onClose, activeId, onNavClick }: MobileNavProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex h-full w-[300px] sm:w-[340px] flex-col bg-surface p-6 shadow-2xl border-l border-border focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo-icon.svg"
                alt="KA Food Court"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading text-ink text-base font-bold tracking-tight">
                KA FOOD COURT
              </span>
            </div>
            <Dialog.Close asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted hover:bg-surface-soft hover:text-ink transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">Mobile Navigation Menu</Dialog.Title>

          {/* Navigation Links */}
          <nav aria-label="Mobile navigation" className="mt-6 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => onNavClick(item.href)}
                      className={cn(
                        'w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all cursor-pointer flex items-center justify-between',
                        isActive
                          ? 'bg-brand-50 text-brand-700 font-bold'
                          : 'text-ink hover:bg-surface-soft',
                      )}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} className={cn('opacity-40', isActive && 'opacity-100 text-brand-600')} />
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto border-t border-border pt-6 space-y-3">
            <Button
              variant="primary"
              size="md"
              className="w-full shadow-md"
              onClick={() => onNavClick('#inquiry')}
            >
              Get a Proposal
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full text-xs font-semibold text-ink bg-surface-soft border border-border hover:bg-brand-50 hover:text-brand-800 transition-colors"
              >
                <MessageSquare size={14} className="text-brand-600" />
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full text-xs font-semibold text-ink bg-surface-soft border border-border hover:bg-brand-50 hover:text-brand-800 transition-colors"
              >
                <Phone size={14} className="text-brand-600" />
                Call Us
              </a>
            </div>
            <p className="text-[11px] text-center text-muted">
              Hitech City & Tech Parks · Hyderabad
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
