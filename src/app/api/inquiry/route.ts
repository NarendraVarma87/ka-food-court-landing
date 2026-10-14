import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { inquirySchema } from '@/lib/validators'

// Simple in-memory rate limiting map: ip -> { count, expiresAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  record.count += 1
  return false
}

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again after a few minutes or call us directly.' },
        { status: 429 },
      )
    }

    // 2. Parse Body & Validate
    const rawBody = await request.json().catch(() => null)
    if (!rawBody) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const validation = inquirySchema.safeParse(rawBody)
    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || 'Validation failed'
      return NextResponse.json({ error: firstError }, { status: 422 })
    }

    const data = validation.data

    // 3. Honeypot Check (silent discard for bots)
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry received. Thank you.',
      })
    }

    // 4. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const inquiryToEmail = process.env.INQUIRY_TO_EMAIL || 'corporate@kafoodcourt.com'
    const inquiryFromEmail = process.env.INQUIRY_FROM_EMAIL || 'inquiries@kafoodcourt.com'

    if (resendApiKey && !resendApiKey.includes('placeholder')) {
      const resend = new Resend(resendApiKey)

      // A) Notification to Facilities / Sales Team
      await resend.emails.send({
        from: `KA Food Court Inquiries <${inquiryFromEmail}>`,
        to: [inquiryToEmail],
        replyTo: data.email,
        subject: `New Corporate Inquiry: ${data.company} (${data.serviceType})`,
        text: `New Corporate Lead received from KA Food Court landing page:\n\n` +
          `Name: ${data.name}\n` +
          `Company: ${data.company}\n` +
          `Work Email: ${data.email}\n` +
          `Phone: ${data.phone}\n` +
          `Service Required: ${data.serviceType}\n` +
          `Approx Headcount: ${data.headcount || 'Not specified'}\n` +
          `Timeline: ${data.timeline || 'Not specified'}\n\n` +
          `Message:\n${data.message || 'No additional message'}\n`,
      })

      // B) Confirmation acknowledgement to client
      await resend.emails.send({
        from: `KA Food Court Team <${inquiryFromEmail}>`,
        to: [data.email],
        subject: `Thank you for contacting KA Food Court, ${data.name}`,
        text: `Dear ${data.name},\n\n` +
          `Thank you for reaching out to KA Food Court regarding your requirements for ${data.company}.\n\n` +
          `Our Hyderabad operations team is reviewing your details and will get in touch shortly with a customized proposal.\n\n` +
          `For urgent inquiries, feel free to WhatsApp or call us at +91 63025 10915.\n\n` +
          `Warm regards,\nKA Food Court Hospitality Team\nHyderabad, India\n`,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your proposal request has been submitted. Our team will contact you within 2 business hours.',
    })
  } catch {
    return NextResponse.json(
      {
        error:
          'A server error occurred while sending your inquiry. Please reach out via WhatsApp or call us directly.',
      },
      { status: 500 },
    )
  }
}
