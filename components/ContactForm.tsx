'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
        body: JSON.stringify(form),
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
          Message received ✓
        </p>
        <p className='text-sm text-[#666666]'>We will be in touch soon.</p>
      </div>
    )

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='mb-1.5 block text-sm font-poppins text-[#666666]'>Name</label>
        <input
          name='name'
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          placeholder='Your name'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm font-poppins text-[#666666]'>Email</label>
        <input
          name='email'
          type='email'
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder='you@email.com'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm font-poppins text-[#666666]'>Message</label>
        <textarea
          name='message'
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass + ' resize-none'}
          placeholder='What is on your mind?'
        />
      </div>
      <button
        type='submit'
        disabled={status === 'sending'}
        className='w-full rounded-full bg-[#A392DD] py-3 text-sm font-semibold text-white transition hover:bg-[#8e7ccc] disabled:opacity-60 font-poppins'
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className='text-center text-sm text-red-500'>
          Something went wrong. Try emailing us directly.
        </p>
      )}
    </form>
  )
}
