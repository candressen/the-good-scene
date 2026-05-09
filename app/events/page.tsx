import type { Metadata } from 'next'
import LocofyFooter from '@/components/locofy-footer'
import FrameComponent4 from '@/components/events/frame-component4'
import FrameComponent5 from '@/components/events/frame-component5'
import EventCards from '@/components/events/event-cards'

export const metadata: Metadata = {
  title: 'Upcoming Events',
  description: 'Explore a curated selection of upcoming experiences.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full bg-[#e9ebe4] overflow-x-hidden flex flex-col">
      <section className="self-stretch flex items-start py-0 px-[30px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-end gap-20 max-w-full mq800:gap-10 mq450:gap-5">
          <FrameComponent4 />
          <FrameComponent5 />
        </div>
      </section>
      <main className="self-stretch flex items-start pt-0 pb-5 pl-[57px] pr-[63px] box-border max-w-full shrink-0 mq800:pl-7 mq800:pr-[31px] mq800:box-border">
        <EventCards />
      </main>
      <LocofyFooter />
    </div>
  )
}
