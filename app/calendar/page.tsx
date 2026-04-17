'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Event } from '@/lib/airtable'

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then(setEvents)
      .catch(() => {})
  }, [])

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  })

  const eventsByDate: Record<string, Event[]> = {}
  events.forEach((event) => {
    if (event.date) {
      const dateKey = event.date.split('T')[0]
      if (!eventsByDate[dateKey]) eventsByDate[dateKey] = []
      eventsByDate[dateKey].push(event)
    }
  })

  const selectedEvents = selectedDate ? eventsByDate[selectedDate] || [] : []
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date().toISOString().split('T')[0]

  function prevMonth() {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  function nextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  function formatDate(y: number, m: number, d: number) {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  }

  const selectedLabel = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString('default', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : 'Select a date'

  return (
    <div className="min-h-screen bg-[#e3e2dd]">
      <section className="bg-[#e3e2dd] px-6 pb-6 pt-12">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <h1 className="font-playfair text-5xl font-bold text-[#1e1716]">Calendar</h1>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-[#e3e2dd] bg-white px-6 py-2.5 text-sm font-semibold text-[#1e1716] transition hover:bg-[#f6f6f6]"
          >
            Explore More →
          </Link>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl shadow-lg lg:grid-cols-[3fr_2fr]">
            <div className="bg-[#1c1c1c]">
              <div className="flex items-center justify-between px-8 py-5">
                <span className="font-poppins text-base font-medium text-white">{monthName}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm text-white transition hover:bg-white/20"
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e3e2dd] text-sm text-[#1c1c1c] transition hover:bg-white"
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 bg-[#A392DD]">
                {days.map((day) => (
                  <div key={day} className="py-3 text-center font-poppins text-xs font-semibold text-white">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 bg-white">
                {Array.from({ length: firstDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="h-[85px] border-b border-r border-[#e3e2dd]" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1
                  const dateStr = formatDate(year, month, day)
                  const hasEvents = (eventsByDate[dateStr]?.length || 0) > 0
                  const isSelected = selectedDate === dateStr
                  const isToday = dateStr === today

                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                      className={[
                        'relative flex h-[85px] flex-col items-start border-b border-r border-[#e3e2dd] px-3 py-2 text-left transition',
                        isSelected ? 'bg-[#f4f0ff]' : 'bg-white hover:bg-[#faf9f6]',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold',
                          isToday
                            ? 'bg-[#1c1c1c] text-white'
                            : isSelected
                              ? 'bg-[#A392DD] text-white'
                              : 'text-[#1e1716]',
                        ].join(' ')}
                      >
                        {day}
                      </span>
                      {hasEvents ? (
                        <div className="mt-2 flex flex-wrap gap-0.5">
                          {eventsByDate[dateStr].slice(0, 3).map((_, eventIndex) => (
                            <div key={eventIndex} className="h-2 w-2 rounded-full bg-[#A392DD]" />
                          ))}
                        </div>
                      ) : null}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="border-l border-white/10 bg-[#1c1c1c] px-6 py-6">
              <h2 className="mb-6 font-poppins text-lg font-semibold text-white">{selectedLabel}</h2>

              {!selectedDate ? (
                <p className="font-poppins text-sm text-white/40">Click any date to see events.</p>
              ) : selectedEvents.length === 0 ? (
                <p className="font-poppins text-sm text-white/40">No events on this date.</p>
              ) : null}

              <div className="space-y-4">
                {selectedEvents.map((event) => (
                  <div key={event.id} className="flex overflow-hidden rounded-xl bg-white">
                    <div className="w-[120px] flex-shrink-0 bg-[#e3e2dd]">
                      {event.images[0] ? (
                        <img
                          src={event.images[0].url}
                          className="h-full w-full object-cover"
                          alt=""
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1 p-4">
                      <p className="font-playfair text-sm font-semibold text-[#1e1716] line-clamp-1">
                        {event.name}
                      </p>
                      <p className="mt-1 text-xs text-[#666]">
                        {event.time} · {event.location}
                      </p>
                      <Link
                        href={event.bookingLink || `/reserve/${event.id}`}
                        className="mt-2 inline-block text-xs font-medium text-[#A392DD] hover:underline"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#34c759]" />
              <span className="font-poppins text-sm text-[#666]">Social</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#ffcc00]" />
              <span className="font-poppins text-sm text-[#666]">Arts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#ff8d28]" />
              <span className="font-poppins text-sm text-[#666]">Wellness</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#00c0e8]" />
              <span className="font-poppins text-sm text-[#666]">Networking</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
