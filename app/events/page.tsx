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
    <div className="min-h-screen bg-[#f6f6f6] font-poppins text-[#1e1716]">
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
        </div>
      </section>

      <section className="px-6 py-16">
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
