import { cn } from '@/lib/cn'
import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  interactive?: boolean
  highlight?: boolean
  dark?: boolean
}

export function Card({
  children,
  className,
  interactive = false,
  highlight = false,
  dark = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[24px] p-6 md:p-8 transition-all duration-300 relative overflow-hidden',
        dark
          ? 'bg-ink/80 text-white border border-white/10'
          : 'bg-surface text-ink border border-border/80 shadow-[0_4px_24px_-4px_rgba(10,10,11,0.04)]',
        highlight && 'border-brand-500/30 ring-1 ring-brand-500/20',
        interactive &&
          'hover:-translate-y-1 hover:shadow-[0_12px_32px_-4px_rgba(10,10,11,0.08)] hover:border-brand-500/40 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
