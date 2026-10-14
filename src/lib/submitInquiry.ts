import type { InquiryFormValues } from './validators'
import { SITE } from '@/config/site'

export interface SubmitInquiryResult {
  success: boolean
  message: string
}

export async function submitInquiry(data: InquiryFormValues): Promise<SubmitInquiryResult> {
  const response = await fetch('/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    const errorMsg =
      result?.error ||
      'Unable to submit inquiry at this moment. Please reach out to us directly via WhatsApp or phone.'
    throw new Error(errorMsg)
  }

  return {
    success: true,
    message:
      result?.message ||
      'Thank you! Your inquiry has been submitted. Our team will review your requirements and respond promptly.',
  }
}

export function buildFallbackMailto(data: Partial<InquiryFormValues>): string {
  const subject = encodeURIComponent(`Corporate Inquiry: ${data.company || 'New Request'} - KA Food Court`)
  const body = encodeURIComponent(
    `Hello KA Food Court Team,\n\nName: ${data.name || ''}\nCompany: ${data.company || ''}\nPhone: ${data.phone || ''}\nWork Email: ${data.email || ''}\nService: ${data.serviceType || ''}\nEstimated Headcount: ${data.headcount || ''}\nTimeline: ${data.timeline || ''}\n\nMessage:\n${data.message || ''}\n`
  )
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`
}
