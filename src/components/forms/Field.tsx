import { forwardRef } from 'react'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface BaseFieldProps {
  label: string
  error?: string
  required?: boolean
  className?: string
  hint?: string
}

export interface InputFieldProps
  extends BaseFieldProps,
    InputHTMLAttributes<HTMLInputElement> {
  multiline?: false
}

export interface TextareaFieldProps
  extends BaseFieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true
}

export type FieldProps = InputFieldProps | TextareaFieldProps

export const Field = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  ({ label, error, required, className, id, hint, multiline, ...props }, ref) => {
    const fieldId = id || props.name || label.toLowerCase().replace(/\s+/g, '-')
    const errorId = `${fieldId}-error`
    const hintId = `${fieldId}-hint`

    const sharedClasses = cn(
      'w-full rounded-2xl border px-4 py-3 text-sm text-ink bg-surface placeholder:text-muted/60 transition-colors duration-150',
      'focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500',
      error
        ? 'border-red-500/80 focus:ring-red-500/30 focus:border-red-500'
        : 'border-border/90 hover:border-border',
      className,
    )

    return (
      <div className="space-y-1.5 text-left">
        <label
          htmlFor={fieldId}
          className="block text-xs font-bold text-ink/90 tracking-wide"
        >
          {label}
          {required && <span className="text-brand-600 ml-1" aria-hidden="true">*</span>}
        </label>

        {multiline ? (
          <textarea
            id={fieldId}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={3}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={cn(sharedClasses, 'resize-none')}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={fieldId}
            ref={ref as React.Ref<HTMLInputElement>}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={sharedClasses}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {hint && !error && (
          <p id={hintId} className="text-[11px] text-muted">
            {hint}
          </p>
        )}

        {error && (
          <p id={errorId} className="text-xs font-semibold text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Field.displayName = 'Field'
