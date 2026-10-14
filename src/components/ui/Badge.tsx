import { cn } from '@/lib/cn'
import type { HTMLAttributes, ReactNode } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'brand' | 'neutral' | 'accent' | 'dark'
  className?: string
}

export function Badge({ children, variant = 'brand', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase select-none transition-colors',
        variant === 'brand' && 'bg-brand-50 text-brand-800 border border-brand-200/60',
        variant === 'neutral' && 'bg-surface-soft text-muted border border-border',
        variant === 'accent' && 'bg-accent/15 text-brand-900 border border-accent/30',
        variant === 'dark' && 'bg-white/10 text-white/90 border border-white/15',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
