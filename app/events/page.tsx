import type { Metadata } from 'next'
import FilteredEvents from '@/components/FilteredEvents'
import { getAllEvents } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'Upcoming Events',
  description:
    'Explore a curated selection of upcoming experiences in Boston designed to help you find the right scene.',
}

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className="min-h-screen bg-[#e3e2dd] font-poppins text-[#1e1716]">
      <section className="relative overflow-hidden bg-[#1e1716] px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,146,221,0.2),transparent_42%),linear-gradient(180deg,rgba(30,23,22,0.25),rgba(30,23,22,0.9))]" />
        <div className="relative mx-auto max-w-[820px]">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A392DD]">Boston, MA</p>
          <h1 className="mb-4 font-playfair text-5xl font-bold text-white md:text-7xl">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Explore a curated selection of upcoming experiences designed to help you find the
            right scene.
          </p>
          <div className="mt-6 mx-auto max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#A392DD]/50 focus:bg-white/15"
              />
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e3e2dd] px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          {events.length === 0 ? (
            <div className="py-20 text-center font-poppins text-[#666666]">
              <p className="mb-3 font-playfair text-2xl text-[#1e1716]">More events coming soon.</p>
              <p className="text-sm">We curate carefully. Check back next week.</p>
            </div>
          ) : (
            <FilteredEvents events={events} />
          )}
        </div>
      </section>
    </div>
  )
}
