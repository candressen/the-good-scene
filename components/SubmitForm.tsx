'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function SubmitForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    eventName: '',
    date: '',
    location: '',
    description: '',
    hostName: '',
    contactEmail: '',
    link: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('https://formspree.io/f/mbdqgwob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Event Submission - The Good Scene' }),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-[#e3e2dd] bg-white px-4 py-3 text-sm text-[#1e1716] placeholder-[#999] outline-none transition focus:border-[#A392DD] focus:ring-1 focus:ring-[#A392DD]/30 font-poppins'

  if (status === 'sent')
    return (
      <div className='rounded-2xl border border-[#A392DD]/20 bg-[#A392DD]/10 p-8 text-center'>
        <p className='mb-2 font-playfair text-2xl text-[#1e1716]'>
          Submission received ✓
        </p>
        <p className='text-sm text-[#666666]'>
          We review every event personally. We will be in touch if it is a fit.
        </p>
      </div>
    )

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='mb-1.5 block text-sm text-[#666666]'>Event Name</label>
        <input
          name='eventName'
          required
          value={form.eventName}
          onChange={handleChange}
          className={inputClass}
          placeholder='Name of your event'
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='mb-1.5 block text-sm text-[#666666]'>Date</label>
          <input
            name='date'
            type='date'
            required
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className='mb-1.5 block text-sm text-[#666666]'>Location</label>
          <input
            name='location'
            required
            value={form.location}
            onChange={handleChange}
            className={inputClass}
            placeholder='Venue + city'
          />
        </div>
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-[#666666]'>Description</label>
        <textarea
          name='description'
          required
          rows={4}
          value={form.description}
          onChange={handleChange}
          className={inputClass + ' resize-none'}
          placeholder='Tell us about the experience...'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-[#666666]'>Host Name</label>
        <input
          name='hostName'
          required
          value={form.hostName}
          onChange={handleChange}
          className={inputClass}
          placeholder='Your name or organization'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-[#666666]'>Contact Email</label>
        <input
          name='contactEmail'
          type='email'
          required
          value={form.contactEmail}
          onChange={handleChange}
          className={inputClass}
          placeholder='your@email.com'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-[#666666]'>Event Link (optional)</label>
        <input
          name='link'
          value={form.link}
          onChange={handleChange}
          className={inputClass}
          placeholder='https://...'
        />
      </div>
      <button
        type='submit'
        disabled={status === 'sending'}
        className='w-full rounded-full bg-[#A392DD] py-3 text-sm font-semibold text-white transition hover:bg-[#8e7ccc] disabled:opacity-60'
      >
        {status === 'sending' ? 'Submitting...' : 'Submit for Review'}
      </button>
    </form>
  )
}
