import { describe, it, expect } from 'vitest'
import { inquirySchema } from '@/lib/validators'
import { buildFallbackMailto } from '@/lib/submitInquiry'

describe('Phase 4: Inquiry Form & Validation', () => {
  it('validates a correct inquiry submission', () => {
    const validData = {
      name: 'Narendra Varma',
      company: 'Tech Parks Hyderabad',
      email: 'narendra@techpark.in',
      phone: '+91 98765 43210',
      serviceType: 'food_court_management' as const,
      headcount: '250 people',
      timeline: 'Q1 Launch',
      message: 'Looking for full food court management proposal.',
      website: '', // empty honeypot
    }

    const result = inquirySchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('fails when required fields are missing or invalid', () => {
    const invalidData = {
      name: '',
      company: '',
      email: 'not-an-email',
      phone: '12',
      serviceType: 'invalid_service',
      website: '',
    }

    const result = inquirySchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      expect(fieldErrors.name).toBeDefined()
      expect(fieldErrors.company).toBeDefined()
      expect(fieldErrors.email).toBeDefined()
      expect(fieldErrors.phone).toBeDefined()
    }
  })

  it('rejects submissions where the bot honeypot field is filled', () => {
    const botData = {
      name: 'Bot Spammer',
      company: 'Spam Corp',
      email: 'spam@bot.com',
      phone: '+91 98765 43210',
      serviceType: 'food_court_management' as const,
      website: 'https://spam-bot.xyz',
    }

    const result = inquirySchema.safeParse(botData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.website).toBeDefined()
    }
  })

  it('builds a fallback mailto link when API/network fails', () => {
    const fallback = buildFallbackMailto({
      name: 'Anil Kumar',
      company: 'Fintech Solutions',
      email: 'anil@fintech.co',
      phone: '9876543210',
      serviceType: 'corporate_catering',
    })

    expect(fallback).toContain('mailto:')
    expect(fallback).toContain('Fintech%20Solutions')
    expect(fallback).toContain('anil%40fintech.co')
  })
})
