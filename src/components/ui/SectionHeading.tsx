import { cn } from '@/lib/cn'
import type { HTMLAttributes } from 'react'

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-xs md:text-[13px] font-bold uppercase tracking-widest mb-3',
            dark ? 'text-brand-400' : 'text-brand-600',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading font-bold tracking-tight text-[clamp(1.875rem,4vw,2.875rem)] leading-[1.15]',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-white/70' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
