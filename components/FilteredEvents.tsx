'use client'

import { useState } from 'react'
import type { Event } from '@/lib/airtable'
import EventCard from './EventCard'
import { TAGS } from '@/lib/constants'

interface Props {
  events: Event[]
}

export default function FilteredEvents({ events }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? events.filter((event) => event.tags.includes(active)) : events

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={
            'rounded-full px-4 py-2 text-sm font-medium transition ' +
            (!active
              ? 'bg-[#A392DD] text-white'
              : 'border border-[#e3e2dd] text-[#666666] hover:border-[#A392DD] hover:text-[#A392DD]')
          }
        >
          All
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            className={
              'rounded-full px-4 py-2 text-sm transition ' +
              (active === tag
                ? 'bg-[#A392DD] text-white'
                : 'border border-[#e3e2dd] text-[#666666] hover:border-[#A392DD] hover:text-[#A392DD]')
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="mb-2 font-playfair text-2xl text-[#1e1716]">No events match this filter.</p>
          <button onClick={() => setActive(null)} className="mt-4 text-sm text-[#A392DD] hover:underline">
            Clear filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </>
  )
}
