import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, Container, Badge, Card } from '@/components/ui'

describe('UI Primitives', () => {
  it('renders Button with pill shape and accessible text', () => {
    render(<Button variant="primary">Request a proposal</Button>)
    const btn = screen.getByRole('button', { name: /request a proposal/i })
    expect(btn).toBeInTheDocument()
    expect(btn.className).toContain('rounded-full')
    expect(btn.className).toContain('bg-brand-500')
  })

  it('renders Container with max-w-6xl', () => {
    const { container } = render(<Container>Test content</Container>)
    expect(container.firstChild).toHaveClass('max-w-6xl')
  })

  it('renders Badge with brand variant', () => {
    render(<Badge variant="brand">Corporate</Badge>)
    expect(screen.getByText('Corporate')).toBeInTheDocument()
  })

  it('renders Bento Card with 24px radius', () => {
    const { container } = render(<Card>Card body</Card>)
    expect(container.firstChild).toHaveClass('rounded-[24px]')
  })
})
