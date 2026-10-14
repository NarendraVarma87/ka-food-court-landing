import { cn } from '@/lib/cn'
import type { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  children: ReactNode
  className?: string
  dark?: boolean
  soft?: boolean
}

export function Section({
  id,
  children,
  className,
  dark = false,
  soft = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-28 scroll-mt-24 transition-colors',
        dark && 'bg-ink text-white',
        soft && 'bg-surface-soft text-ink',
        !dark && !soft && 'bg-surface text-ink',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
