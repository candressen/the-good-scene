'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Event } from '@/lib/airtable'
import { SITE } from '@/lib/constants'

interface Props {
  event: Event
  onClose: () => void
}

export default function EventModal({ event, onClose }: Props) {
  const [saved, setSaved] = useState(false)
  const img = event.images[0]?.url

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const stored = JSON.parse(localStorage.getItem('tgs_saved') || '[]') as string[]
    setSaved(stored.includes(event.id))

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [event.id, onClose])

  function toggleSave() {
    const stored = JSON.parse(localStorage.getItem('tgs_saved') || '[]') as string[]
    const next = stored.includes(event.id)
      ? stored.filter((id) => id !== event.id)
      : [...stored, event.id]

    localStorage.setItem('tgs_saved', JSON.stringify(next))
    setSaved(next.includes(event.id))
  }

  const reserveHref = event.bookingLink || SITE.url

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        >
          <div className="h-64 w-full overflow-hidden rounded-t-3xl bg-[#e3e2dd]">
            {img ? <img src={img} alt={event.name} className="h-full w-full object-cover" /> : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1e1716] shadow transition hover:bg-white"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="p-8">
            {event.tags.length > 0 ? (
              <div className="mb-4 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#A392DD]/10 px-3 py-1 text-xs font-medium text-[#A392DD]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <h2 className="mb-4 font-playfair text-3xl font-bold text-[#1e1716]">
              {event.name}
            </h2>

            <div className="mb-6 flex flex-wrap gap-4 border-b border-[#e3e2dd] pb-6 text-sm text-[#666666]">
              {event.date ? <span>📅 {event.date}</span> : null}
              {event.time ? <span>🕐 {event.time}</span> : null}
              {event.location ? <span>📍 {event.location}</span> : null}
              {event.price ? <span>💰 {event.price}</span> : null}
            </div>

            <p className="mb-6 leading-relaxed text-[#666666] font-poppins">
              {event.description}
            </p>

            {event.whySelected ? (
              <div className="mb-6 rounded-2xl border-l-4 border-[#A392DD] bg-[#f6f6f6] p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#A392DD]">
                  Why We Picked This
                </p>
                <p className="text-sm leading-relaxed text-[#666666]">{event.whySelected}</p>
              </div>
            ) : null}

            {event.hostedBy ? (
              <div className="mb-6 border-t border-[#e3e2dd] pt-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#666666]">
                  Hosted By
                </p>
                <p className="font-medium text-[#1e1716]">{event.hostedBy}</p>
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={reserveHref}
                target={event.bookingLink ? '_blank' : undefined}
                rel={event.bookingLink ? 'noreferrer' : undefined}
                className="flex-1 rounded-full bg-[#A392DD] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#8e7ccc]"
              >
                Reserve Spot
              </a>
              <button
                type="button"
                onClick={toggleSave}
                className={`flex-1 rounded-full border py-3 text-center text-sm font-semibold transition ${
                  saved
                    ? 'border-[#A392DD] bg-[#A392DD]/10 text-[#A392DD]'
                    : 'border-[#e3e2dd] text-[#666666] hover:border-[#A392DD] hover:text-[#A392DD]'
                }`}
              >
                {saved ? '♥ Saved' : '♡ Save Event'}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
