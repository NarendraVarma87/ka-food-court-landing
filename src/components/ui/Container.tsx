import { cn } from '@/lib/cn'
import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className, narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 md:px-8',
        narrow ? 'max-w-4xl' : 'max-w-6xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
