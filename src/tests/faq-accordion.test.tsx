import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Faq } from '@/sections/Faq'
import { Locations } from '@/sections/Locations'
import { EventsCatering } from '@/sections/EventsCatering'

describe('Phase 3 Sections (Locations, Events, FAQ)', () => {
  it('renders Locations with Awfis Hitech City campus card', () => {
    render(<Locations />)
    expect(screen.getByText(/KA Food Court @ Awfis Campus/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Get directions via Google Maps/i).length).toBeGreaterThan(0)
  })

  it('renders Events and Bulk Catering with 3 booking steps', () => {
    render(<EventsCatering />)
    expect(screen.getByText(/How to book office catering/i)).toBeInTheDocument()
    expect(screen.getByText(/Share Event Details/i)).toBeInTheDocument()
  })

  it('renders FAQ with Radix accordion and toggles answer on click/keyboard', async () => {
    render(<Faq />)
    const firstQuestion = screen.getByRole('button', {
      name: /What does KA Food Court handle in a corporate food court\?/i,
    })
    expect(firstQuestion).toBeInTheDocument()

    // Initially collapsed
    expect(firstQuestion).toHaveAttribute('data-state', 'closed')

    // Click/Space opens accordion
    fireEvent.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('data-state', 'open')
    expect(screen.getByText(/We manage the entire food court lifecycle/i)).toBeInTheDocument()
  })
})
