import type { Metadata } from 'next'
import LocofyFooter from '@/components/locofy-footer'
import FrameComponent5 from '@/components/events/frame-component5'
import EventCards from '@/components/events/event-cards'

export const metadata: Metadata = {
  title: 'Upcoming Events',
  description: 'Explore a curated selection of upcoming experiences.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full bg-[#e9ebe4] overflow-x-hidden flex flex-col">

      {/* Hero header */}
      <section className="relative mx-auto max-w-[1180px] w-full px-6 pt-[130px] pb-8 text-center">
        {/* Decorative label */}
        <p className="absolute left-8 top-[130px] hidden text-[13px] uppercase tracking-[0.25em] text-[#9b8ae6] lg:block">
          Mark Your Calendar
        </p>
        <h1 className="font-['Playfair_Display'] italic text-[48px] leading-tight text-[#1e1513] md:text-[60px]">
          Upcoming Events
        </h1>
        <p className="mx-auto mt-4 max-w-[880px] text-[16px] leading-[1.6] text-[#1e1513]/75 font-['Poppins']">
          Explore a curated selection of upcoming experiences designed to help you find the right atmosphere, connect with the right people, and make the most of your time out.
        </p>
      </section>

      {/* Search bar + filter chips (Locofy) */}
      <div className="self-stretch flex items-start justify-end py-0 px-[50px] box-border max-w-full mq1350:px-6">
        <FrameComponent5 />
      </div>

      {/* Event cards */}
      <main className="self-stretch flex items-start pt-0 pb-5 pl-[57px] pr-[63px] box-border max-w-full shrink-0 mq800:pl-7 mq800:pr-[31px]">
        <EventCards />
      </main>

      <LocofyFooter />
    </div>
  )
}
