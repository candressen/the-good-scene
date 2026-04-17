'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Event } from '@/lib/airtable'

interface Props {
  event: Event
  onClose: () => void
}

export default function EventModal({ event, onClose }: Props) {
  const [saved, setSaved] = useState(false)
  const img = event.images[0]?.url || '/images/pop-up-21.jpg'

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

  const reserveHref = event.bookingLink || `/reserve/${event.id}`
  const reserveTarget = event.bookingLink ? '_blank' : undefined
  const reserveRel = event.bookingLink ? 'noreferrer' : undefined
  const interestedAvatars = [0, 1, 2]

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
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        >
          <div className="relative">
            <img src={img} alt={event.name} className="h-64 w-full rounded-t-2xl object-cover" />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <h2 className="font-playfair text-2xl font-bold italic text-[#1e1716]">
              {event.name}
            </h2>

            <div className="mt-1 mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#999]">
              <span>Friday, {event.date}</span>
              {event.time ? <span>• {event.time}</span> : null}
              {event.location ? <span>• {event.location}</span> : null}
            </div>

            <div className="my-4 border-t border-[#e3e2dd]" />

            <p className="mb-4 text-sm leading-relaxed text-[#1e1716]">
              {event.description}
            </p>

            {event.location ? (
              <p className="mt-2 text-sm font-medium text-[#1e1716]">{event.location}</p>
            ) : null}

            {event.tags.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#A392DD]/40 bg-[#A392DD]/5 px-3 py-1 text-xs text-[#A392DD]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {event.hostedBy ? (
              <div className="flex items-center gap-3 border-t border-[#e3e2dd] py-4">
                <div className="h-8 w-8 flex-shrink-0 rounded-full bg-[#e3e2dd]" />
                <div>
                  <p className="text-xs text-[#999]">Hosted By</p>
                  <p className="text-sm font-medium text-[#1e1716]">{event.hostedBy}</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="sticky bottom-0 border-t border-[#e3e2dd] bg-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {interestedAvatars.map((index) => (
                    <div
                      key={index}
                      className={`${index > 0 ? '-ml-2' : ''} h-7 w-7 rounded-full bg-[#e3e2dd]`}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-[#1e1716]">76+ People Interested</p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={toggleSave}
                  className="rounded-full border border-[#e3e2dd] px-5 py-2 text-sm text-[#666] transition hover:border-[#A392DD] hover:text-[#A392DD]"
                >
                  {saved ? '♥ Save Event' : '♡ Save Event'}
                </button>
                <a
                  href={reserveHref}
                  target={reserveTarget}
                  rel={reserveRel}
                  className="rounded-full bg-[#1e1716] px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
                >
                  Reserve Event
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
