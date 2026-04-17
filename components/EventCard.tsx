'use client'

import { useState } from 'react'
import type { Event } from '@/lib/airtable'
import EventModal from './EventModal'

interface Props {
  event: Event
}

export default function EventCard({ event }: Props) {
  const [open, setOpen] = useState(false)
  const img = event.images[0]?.url

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group overflow-hidden rounded-2xl border border-[#e3e2dd] bg-white text-left transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <div className="relative h-52 w-full overflow-hidden bg-[#e3e2dd]">
          {img ? (
            <img
              src={img}
              alt={event.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
          {event.tags.length > 0 ? (
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {event.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-[#A392DD]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="p-5">
          <h3 className="mb-1 line-clamp-1 font-playfair text-lg font-semibold text-[#1e1716]">
            {event.name}
          </h3>
          <div className="mb-3 flex items-center gap-3 text-xs text-[#666666]">
            {event.date ? <span>📅 {event.date}</span> : null}
            {event.location ? <span>📍 {event.location}</span> : null}
            {event.price ? <span>💰 {event.price}</span> : null}
          </div>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#666666]">
            {event.description}
          </p>
          <span className="text-sm font-medium text-[#A392DD] group-hover:underline">
            Read More →
          </span>
        </div>
      </button>

      {open ? <EventModal event={event} onClose={() => setOpen(false)} /> : null}
    </>
  )
}
