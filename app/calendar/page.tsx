'use client'
import { useState } from 'react'
import Image from 'next/image'
import LocofyFooter from '@/components/locofy-footer'

type CalEvent = {
  id: string; title: string; time: string; location: string;
  description: string; category: 'Social' | 'Arts & Culture' | 'Wellness' | 'Networking';
  image: string; tags: string[];
}

const CAT_COLORS = {
  'Social': 'bg-[#2ECC71]',
  'Arts & Culture': 'bg-[#FFD400]',
  'Wellness': 'bg-[#FF8A2A]',
  'Networking': 'bg-[#12B8D7]',
}

const CAT_TEXT = {
  'Social': 'text-[#2ECC71]',
  'Arts & Culture': 'text-[#FFD400]',
  'Wellness': 'text-[#FF8A2A]',
  'Networking': 'text-[#12B8D7]',
}

// Events keyed by day of month (March 2026)
const EVENTS_BY_DATE: Record<number, CalEvent[]> = {
  5: [{ id: 'e1', title: 'Wellness Morning Flow', time: '8:00 AM', location: 'Beacon Hill', description: 'Start your week with a guided wellness session.', category: 'Wellness', image: '/Rectangle-61@2x.png', tags: ['No Drinking', 'Woman Only'] }],
  8: [{ id: 'e2', title: 'Creative Networking Brunch', time: '11:00 AM', location: 'South End', description: 'Connect with Boston creatives over brunch.', category: 'Networking', image: '/Rectangle-62@2x.png', tags: ['Arts & Crafts'] }],
  12: [
    { id: 'e3', title: 'Rooftop Social Night', time: '10:15 PM', location: 'Downtown', description: 'An easygoing evening with music and drinks on a gorgeous rooftop.', category: 'Social', image: '/Rectangle-64@2x.png', tags: ['Rooftop Views', 'Classy'] },
    { id: 'e4', title: 'Wine & Gossip', time: '7:00 PM', location: 'Midtown', description: 'Good wine, great conversation, zero pressure.', category: 'Social', image: '/Rectangle-65@2x.png', tags: ['Wine & Gossip'] },
  ],
  15: [{ id: 'e5', title: 'Reggaeton Night', time: '11:00 PM', location: 'Seaport', description: 'Dance to the best reggaeton beats in town.', category: 'Social', image: '/Rectangle-63@2x.png', tags: ['Reggaeton'] }],
  18: [{ id: 'e6', title: 'Gallery Night Boston', time: '6:00 PM', location: 'Back Bay', description: 'Explore local art and meet the artists.', category: 'Arts & Culture', image: '/Rectangle-61@2x.png', tags: ['Arts & Crafts', 'No Drinking'] }],
  20: [{ id: 'e7', title: 'Singles Mixer', time: '7:30 PM', location: 'Beacon Hill', description: 'Meet new people in a fun, pressure-free environment.', category: 'Social', image: '/Rectangle-62@2x.png', tags: ['Singles'] }],
  22: [{ id: 'e8', title: 'Ladies Brunch', time: '11:00 AM', location: 'Back Bay', description: 'A curated brunch for women to connect and unwind.', category: 'Social', image: '/Rectangle-63@2x.png', tags: ['Woman Only', 'Classy'] }],
  25: [{ id: 'e9', title: 'Startup Networking Night', time: '6:30 PM', location: 'Cambridge', description: 'Connect with Boston entrepreneurs and founders.', category: 'Networking', image: '/Rectangle-64@2x.png', tags: ['Classy'] }],
  28: [{ id: 'e10', title: 'Sound Bath & Chill', time: '7:00 PM', location: 'Jamaica Plain', description: 'A deeply relaxing sound healing experience.', category: 'Wellness', image: '/Rectangle-65@2x.png', tags: ['No Drinking', 'Woman Only'] }],
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  // Monday = 0
  let startDow = firstDay.getDay() - 1
  if (startDow < 0) startDow = 6
  const days: { date: number | null; thisMonth: boolean }[] = []
  // Prev month padding
  const prevLast = new Date(year, month, 0).getDate()
  for (let i = startDow - 1; i >= 0; i--) days.push({ date: prevLast - i, thisMonth: false })
  // This month
  for (let d = 1; d <= lastDay.getDate(); d++) days.push({ date: d, thisMonth: true })
  // Next month padding
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) days.push({ date: d, thisMonth: false })
  return days
}

export default function CalendarPage() {
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(2) // March = 2
  const [selectedDay, setSelectedDay] = useState(12)

  const days = getCalendarDays(year, month)
  const selectedEvents = (month === 2 && year === 2026) ? (EVENTS_BY_DATE[selectedDay] || []) : []
  const hasEvents = (day: number) => month === 2 && year === 2026 && !!EVENTS_BY_DATE[day]

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1); setSelectedDay(1) }
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1); setSelectedDay(1) }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#e9ebe4] flex flex-col">
      <main className="mx-auto max-w-[1180px] px-6 pt-[130px] pb-24 w-full">
        <h1 className="mb-14 text-center font-['Playfair_Display'] italic text-[56px] leading-tight text-[#1e1513] md:text-[68px]">
          Calendar
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr]">

          {/* Left: Calendar */}
          <div className="rounded-[18px] border border-[#1e1513]/60 bg-[#d6d8d0] p-5 shadow-sm">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={prevMonth} className="flex h-8 w-8 items-center justify-center rounded-full text-[22px] text-[#1e1513] hover:bg-white/50 transition">‹</button>
                <span className="text-[18px] font-semibold text-[#1e1513] font-['Poppins']">{MONTHS[month]} {year}</span>
                <button onClick={nextMonth} className="flex h-8 w-8 items-center justify-center rounded-full text-[22px] text-[#1e1513] hover:bg-white/50 transition">›</button>
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#1e1513]/30 bg-white text-[#1e1513]">
                <Image src="/lucide-calendar.svg" alt="calendar" width={16} height={16} />
              </button>
            </div>

            {/* Grid */}
            <div className="overflow-hidden rounded-[12px] bg-white">
              {/* Weekday headers */}
              <div className="grid grid-cols-7 bg-[#9b8ae6]">
                {WEEKDAYS.map(d => (
                  <div key={d} className="py-3 text-center text-[13px] font-semibold text-white font-['Poppins']">{d}</div>
                ))}
              </div>
              {/* Date cells */}
              <div className="grid grid-cols-7">
                {days.map((cell, i) => {
                  const isSelected = cell.thisMonth && cell.date === selectedDay
                  const eventsOnDay = cell.thisMonth && cell.date ? EVENTS_BY_DATE[cell.date] : null
                  return (
                    <div
                      key={i}
                      onClick={() => cell.thisMonth && cell.date && setSelectedDay(cell.date)}
                      className={`relative min-h-[86px] border-b border-r border-[#1e1513]/10 p-2 text-right text-[13px] font-['Poppins'] transition
                        ${cell.thisMonth ? 'cursor-pointer text-[#1e1513]' : 'text-[#1e1513]/35 bg-white/50'}
                        ${isSelected ? 'bg-[#f4c7c2]' : cell.thisMonth ? 'bg-white hover:bg-[#f4c7c2]/40' : ''}
                      `}
                    >
                      {cell.date}
                      {eventsOnDay && (
                        <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
                          {eventsOnDay.slice(0,3).map((e, ei) => (
                            <span key={ei} className={`h-2.5 w-2.5 rounded-full ${CAT_COLORS[e.category]}`} />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4">
              {Object.entries(CAT_COLORS).map(([cat, cls]) => (
                <div key={cat} className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${cls}`} />
                  <span className="text-[12px] text-[#1e1513]/70 font-['Poppins']">{cat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Events panel */}
          <div className="rounded-[18px] border border-[#1e1513]/60 bg-[#d6d8d0] p-5 shadow-sm">
            <p className="text-[16px] font-semibold text-[#1e1513] font-['Poppins']">Events On</p>
            <p className="mt-2 text-[28px] font-bold text-[#1e1513] font-['Poppins']">
              {MONTHS[month]} {selectedDay}, {year}
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {selectedEvents.length === 0 ? (
                <div className="rounded-[12px] bg-white/60 px-5 py-8 text-center">
                  <p className="text-[15px] text-[#1e1513]/60 font-['Poppins']">No events on this date.</p>
                </div>
              ) : selectedEvents.map(event => (
                <div key={event.id} className="overflow-hidden rounded-[14px] bg-white shadow-sm">
                  <Image src={event.image} alt={event.title} width={400} height={120} className="h-[120px] w-full object-cover" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${CAT_COLORS[event.category]}`} />
                      <span className={`text-[12px] font-semibold font-['Poppins'] ${CAT_TEXT[event.category]}`}>{event.category}</span>
                    </div>
                    <h3 className="mt-1 text-[16px] font-bold text-[#1e1513] font-['Poppins']">{event.title}</h3>
                    <p className="mt-1 text-[13px] text-[#1e1513]/65 font-['Poppins']">{event.time} • {event.location}</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#1e1513]/70 font-['Poppins']">{event.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {event.tags.map(t => (
                        <span key={t} className="rounded-full bg-[#f4c7c2] px-3 py-1 text-[12px] font-semibold text-[#e76255] font-['Poppins']">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <LocofyFooter />
    </div>
  )
}
