'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

interface Props {
  eventName: string
  eventId: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ReserveForm({ eventName, eventId }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    guests: '1',
    notes: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      await fetch('https://formspree.io/f/mbdqgwob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          eventName,
          eventId,
          _subject: 'New Reservation - The Good Scene',
        }),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-[#e3e2dd] bg-white px-4 py-3 text-sm text-[#1e1716] placeholder-[#999] outline-none transition focus:border-[#A392DD] focus:ring-1 focus:ring-[#A392DD]/30 font-poppins'

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-[#A392DD]/20 bg-[#A392DD]/10 p-8 text-center">
        <p className="mb-2 font-playfair text-2xl text-[#1e1716]">You are on the list ✓</p>
        <p className="text-sm text-[#666666]">We will confirm your reservation within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm text-[#666666]">Full Name</label>
        <input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#666666]">Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#666666]">Number of Guests</label>
        <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
          <option value="1">Just me</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#666666]">Notes (optional)</label>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          className={inputClass + ' resize-none'}
          placeholder="Anything we should know?"
        />
      </div>
      {status === 'error' ? (
        <p className="text-sm text-[#666666]">Something went wrong. Please try again.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-[#A392DD] py-3 text-sm font-semibold text-white transition hover:bg-[#8e7ccc] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Reserve My Spot'}
      </button>
    </form>
  )
}
