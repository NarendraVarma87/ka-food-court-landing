import { cn } from '@/lib/cn'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm hover:shadow focus-visible:ring-2 focus-visible:ring-brand-500/50',
  secondary:
    'bg-brand-50 text-brand-800 hover:bg-brand-100 active:bg-brand-200 focus-visible:ring-2 focus-visible:ring-brand-500/50',
  ghost:
    'text-ink hover:bg-surface-soft active:bg-brand-50 focus-visible:ring-2 focus-visible:ring-brand-500/50',
  outline:
    'border border-border text-ink bg-surface hover:bg-surface-soft active:bg-brand-50 focus-visible:ring-2 focus-visible:ring-brand-500/50',
  dark:
    'bg-ink text-white hover:bg-black/90 active:bg-black focus-visible:ring-2 focus-visible:ring-brand-500/50',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-xs font-semibold tracking-wide uppercase',
  md: 'h-11 px-6 text-sm font-semibold',
  lg: 'h-14 px-8 text-base font-semibold',
}

/**
 * Primary button component. Always pill-shaped (rounded-full).
 * Touch target minimum 44px. Uses tokens exclusively.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
