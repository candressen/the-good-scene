'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Event } from '@/lib/airtable'

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1))

  useEffect(() => {
    fetch('/api/events').then(r => r.json()).then(setEvents).catch(() => {})
  }, [])

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDayRaw = new Date(year, month, 1).getDay()
  const startOffset = firstDayRaw === 0 ? 6 : firstDayRaw - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthLabel = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })

  const eventsByDate: Record<string, Event[]> = {}
  events.forEach(e => {
    if (e.date) {
      const d = e.date.split('T')[0]
      if (!eventsByDate[d]) eventsByDate[d] = []
      eventsByDate[d].push(e)
    }
  })

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] || []) : []

  function fmt(y: number, m: number, d: number) {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  }

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const dotColors = ['#34c759', '#ffcc00', '#ff8d28', '#00c0e8']

  return (
    <div className="min-h-screen bg-[#e3e2dd]">
      {/* Page header */}
      <div className="px-6 pt-14 pb-8 text-center">
        <h1 className="font-playfair text-5xl font-bold italic text-[#1e1716]">Calendar</h1>
      </div>

      {/* Calendar + Events panel */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr] items-start">

          {/* LEFT: Calendar widget */}
          <div className="rounded-2xl border border-[#d5d4cf] bg-white shadow-sm overflow-hidden">
            {/* Month nav */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#f0efea]">
              <button
                onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0efea] transition text-[#1e1716] text-lg"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0efea] transition text-[#1e1716] text-lg"
              >
                ›
              </button>
              <span className="font-poppins font-semibold text-[#1e1716] text-base ml-1">{monthLabel}</span>
              <div className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg border border-[#e3e2dd] text-[#999] cursor-pointer hover:bg-[#f0efea] transition">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 bg-[#A392DD]">
              {weekDays.map(d => (
                <div key={d} className="py-3 text-center text-xs font-semibold text-white font-poppins">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7">
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="h-20 border-b border-r border-[#f0efea]" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const dateStr = fmt(year, month, day)
                const hasEvents = !!eventsByDate[dateStr]
                const isSelected = selectedDate === dateStr
                const col = (startOffset + i) % 7
                const isSunday = col === 6
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                    className={[
                      'h-20 border-b border-r border-[#f0efea] p-2 text-right align-top transition',
                      isSelected ? 'bg-[#fce8e8]' : isSunday ? 'bg-[#fafafa]' : 'hover:bg-[#fafafa]',
                    ].join(' ')}
                  >
                    <span className={`text-xs font-poppins ${isSelected ? 'text-[#e7645b] font-semibold' : 'text-[#999]'}`}>
                      {day}
                    </span>
                    {hasEvents && (
                      <div className="mt-2 flex flex-wrap gap-1 justify-start">
                        {(eventsByDate[dateStr] || []).slice(0, 3).map((_, ei) => (
                          <div
                            key={ei}
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: dotColors[ei % 4] }}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Events panel */}
          <div className="rounded-2xl border border-[#d5d4cf] bg-white shadow-sm p-6">
            <p className="font-poppins text-sm text-[#1e1716] font-medium mb-1">Events On</p>
            <p className="font-poppins text-2xl font-bold text-[#e7645b] mb-6">
              {selectedDate
                ? new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })
                : 'Select a date'}
            </p>

            {!selectedDate && (
              <p className="text-sm text-[#999] font-poppins">Click any date to view events.</p>
            )}
            {selectedDate && selectedEvents.length === 0 && (
              <p className="text-sm text-[#999] font-poppins">No events scheduled for this date.</p>
            )}

            <div className="space-y-4">
              {selectedEvents.map(event => (
                <div key={event.id} className="rounded-xl border border-[#f0efea] overflow-hidden flex">
                  <div className="w-36 flex-shrink-0 h-24 bg-[#e3e2dd]">
                    {event.images[0] && (
                      <img src={event.images[0].url} className="w-full h-full object-cover" alt="" />
                    )}
                  </div>
                  <div className="p-4 flex-1 min-w-0">
                    <p className="font-poppins font-semibold text-[#1e1716] text-sm line-clamp-1">{event.name}</p>
                    <p className="text-xs text-[#999] mt-1">
                      {event.time}{event.time && event.location ? ' • ' : ''}{event.location}
                    </p>
                    <Link href="/events" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#e7645b] hover:underline">
                      Open ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mx-auto mt-6 max-w-[1200px] flex flex-wrap gap-8">
          {[
            { color: '#34c759', label: 'Social' },
            { color: '#ffcc00', label: 'Arts & Culture' },
            { color: '#ff8d28', label: 'Wellness' },
            { color: '#00c0e8', label: 'Networking' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: item.color }} />
              <span className="text-sm text-[#666] font-poppins">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
