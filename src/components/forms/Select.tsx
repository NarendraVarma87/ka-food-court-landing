import { forwardRef } from 'react'
import type { SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: readonly SelectOption[]
  error?: string
  required?: boolean
  className?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, required, className, id, ...props }, ref) => {
    const fieldId = id || props.name || label.toLowerCase().replace(/\s+/g, '-')
    const errorId = `${fieldId}-error`

    return (
      <div className="space-y-1.5 text-left">
        <label
          htmlFor={fieldId}
          className="block text-xs font-bold text-ink/90 tracking-wide"
        >
          {label}
          {required && <span className="text-brand-600 ml-1" aria-hidden="true">*</span>}
        </label>

        <div className="relative">
          <select
            id={fieldId}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              'w-full appearance-none rounded-2xl border px-4 py-3 pr-10 text-sm text-ink bg-surface transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 cursor-pointer',
              error
                ? 'border-red-500/80 focus:ring-red-500/30 focus:border-red-500'
                : 'border-border/90 hover:border-border',
              className,
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {error && (
          <p id={errorId} className="text-xs font-semibold text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'
