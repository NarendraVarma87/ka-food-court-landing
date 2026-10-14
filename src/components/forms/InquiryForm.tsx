'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle, MessageSquare, Mail, RefreshCw } from 'lucide-react'
import { inquirySchema, type InquiryFormValues } from '@/lib/validators'
import { submitInquiry, buildFallbackMailto } from '@/lib/submitInquiry'
import { inquiryContent } from '@/content/inquiry'
import { SITE } from '@/config/site'
import { Button } from '@/components/ui'
import { Field } from './Field'
import { Select } from './Select'

const serviceOptions = [
  { value: 'food_court_management', label: 'Food Court & Cafeteria Management' },
  { value: 'corporate_catering', label: 'Corporate Catering & Bulk Orders' },
  { value: 'party_and_event', label: 'Office Party, Outing or Celebration' },
  { value: 'other', label: 'Other Operational Query' },
] as const

interface InquiryFormProps {
  defaultService?: 'food_court_management' | 'corporate_catering' | 'party_and_event' | 'other'
}

export function InquiryForm({ defaultService = 'food_court_management' }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceType: defaultService,
      headcount: '',
      timeline: '',
      message: '',
      website: '', // honeypot
    },
  })

  const onSubmit = async (values: InquiryFormValues) => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await submitInquiry(values)
      setStatus('success')
      setSuccessMessage(res.message)
      reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong submitting your request. Please use our direct WhatsApp or phone options.'
      )
    }
  }

  // Success State
  if (status === 'success') {
    return (
      <div className="rounded-[28px] p-8 md:p-10 bg-surface text-ink border border-border shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-2xl text-ink">
            Proposal Request Received!
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
            {successMessage}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-surface-soft border border-border max-w-sm mx-auto text-xs text-muted text-left space-y-1">
          <p className="font-bold text-ink">What happens next?</p>
          <p>1. Our operations manager reviews your campus requirements.</p>
          <p>2. We draft a tailored commercial proposal and menu options.</p>
          <p>3. We connect with you via phone or WhatsApp within 2 business hours.</p>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
          >
            Submit another inquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[28px] p-6 sm:p-8 md:p-10 bg-surface text-ink border border-border/90 shadow-2xl space-y-5"
    >
      <div className="border-b border-border pb-4">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
          Request a Corporate Proposal
        </h3>
        <p className="text-xs sm:text-sm text-muted mt-1">
          Fill out your requirements below to receive custom menu options and pricing.
        </p>
      </div>

      {/* Honeypot field (hidden visually and from screen readers) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      {/* Grid: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label={inquiryContent.formLabels.name}
          required
          placeholder="e.g. Ramesh Varma"
          error={errors.name?.message}
          {...register('name')}
        />
        <Field
          label={inquiryContent.formLabels.company}
          required
          placeholder="e.g. Acme Tech Park"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label={inquiryContent.formLabels.email}
          type="email"
          required
          placeholder="name@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Field
          label={inquiryContent.formLabels.phone}
          type="tel"
          required
          placeholder="+91 98765 43210"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      {/* Service Type */}
      <Select
        label={inquiryContent.formLabels.serviceType}
        required
        options={serviceOptions}
        error={errors.serviceType?.message}
        {...register('serviceType')}
      />

      {/* Grid: Headcount & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label={inquiryContent.formLabels.headcount}
          placeholder="e.g. 150 people"
          error={errors.headcount?.message}
          {...register('headcount')}
        />
        <Field
          label={inquiryContent.formLabels.timeline}
          placeholder="e.g. Next month / Oct 25"
          error={errors.timeline?.message}
          {...register('timeline')}
        />
      </div>

      {/* Message */}
      <Field
        label={inquiryContent.formLabels.message}
        multiline
        placeholder="Brief description of dietary requirements, meal shifts, or campus locations..."
        error={errors.message?.message}
        {...register('message')}
      />

      {/* Error state alert & Graceful Fallback */}
      {status === 'error' && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-left space-y-3" role="alert">
          <div className="flex items-start gap-2 text-red-800 text-xs font-semibold">
            <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-red-200/60 text-xs">
            <span className="text-red-900 font-bold">Direct Fallback Options:</span>
            <a
              href={buildFallbackMailto(getValues())}
              className="inline-flex items-center gap-1 font-bold text-brand-700 hover:underline"
            >
              <Mail size={13} />
              <span>Send via Email</span>
            </a>
            <span className="text-muted">·</span>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline"
            >
              <MessageSquare size={13} />
              <span>Send via WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full shadow-lg hover:shadow-xl transition-all"
        >
          {status === 'submitting' ? (
            <span className="inline-flex items-center gap-2">
              <RefreshCw size={18} className="animate-spin" />
              <span>{inquiryContent.formLabels.submittingButton}</span>
            </span>
          ) : (
            <span>{inquiryContent.formLabels.submitButton}</span>
          )}
        </Button>
      </div>

      <p className="text-[11px] text-center text-muted">
        Strict privacy: We never share or spam your contact details. By submitting, you agree to our{' '}
        <a href="/privacy" className="text-brand-600 underline">Privacy Policy</a>.
      </p>
    </form>
  )
}
