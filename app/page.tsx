import Link from 'next/link'
import { getAllEvents } from '@/lib/airtable'

function EventCard({ event }: { event: Awaited<ReturnType<typeof getAllEvents>>[number] }) {
  const image = event.images[0]?.url || '/images/home-page-2.jpg'

  return (
    <Link
      href="/events"
      className="group overflow-hidden rounded-2xl border border-[#e3e2dd] bg-white transition hover:shadow-lg"
    >
      <div className="h-48 w-full bg-[#e3e2dd]">
        <img src={image} alt={event.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-[#999]">
          <span>{event.date}</span>
          <span>•</span>
          <span>{event.location}</span>
        </div>
        <h3 className="mb-1 font-playfair text-lg font-semibold text-[#1e1716]">
          {event.name}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-[#666]">{event.description}</p>
        <span className="text-sm font-medium text-[#A392DD]">Read More</span>
      </div>
    </Link>
  )
}

export default async function HomePage() {
  const events = await getAllEvents()

  return (
    <div>
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/images/home-page-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl pt-32 text-center md:pt-40">
          <h1 className="font-playfair text-5xl font-bold leading-tight text-white md:text-7xl">
            Not every event makes <span className="block whitespace-nowrap">The Good Scene</span>
          </h1>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-lg text-white/80 font-poppins">
            Go out with confidence. Every experience is selected to feel right from the moment you arrive.
          </p>
          <Link
            href="/events"
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1e1716] transition hover:bg-[#f6f6f6]"
          >
            Explore Now →
          </Link>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className='bg-[#1e1716] py-8 px-6 text-center'>
          <h2 className='font-dela text-6xl md:text-8xl uppercase tracking-tight text-white'>
            Weekly Highlights
          </h2>
        </div>

        <div className="px-6 py-20">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
            {events.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="inline-flex rounded-full border border-[#1e1716] px-8 py-2.5 text-sm text-[#1e1716] transition hover:bg-[#1e1716] hover:text-white"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-[#e3e2dd] py-20 px-6'>
        <div className='mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2'>
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/images/home-page-5.jpg'
              className='h-56 w-full rounded-2xl object-cover'
              alt=''
            />
            <img
              src='/images/home-page-6.jpg'
              className='mt-8 h-56 w-full rounded-2xl object-cover'
              alt=''
            />
            <img
              src='/images/home-page-7.jpg'
              className='h-56 w-full rounded-2xl object-cover'
              alt=''
            />
            <img
              src='/images/home-page-8.jpg'
              className='mt-8 h-56 w-full rounded-2xl object-cover'
              alt=''
            />
          </div>
          <div>
            <p className='mb-4 font-poppins text-xs uppercase tracking-[0.3em] text-[#A392DD]'>
              What Makes Us Different
            </p>
            <h2 className='mb-6 font-playfair text-4xl font-bold text-[#1e1716]'>
              A More Thoughtful Way to Go Out
            </h2>
            <p className='mb-6 font-poppins text-base leading-relaxed text-[#666]'>
              We do things differently by focusing on what truly matters — not the number of
              options, but the quality of each experience. Every event you see here has been
              intentionally selected to stand out.
            </p>
            <p className='font-poppins text-base leading-relaxed text-[#666]'>
              Whether you are heading out alone or with others, the experience should feel easy
              and welcoming. Our goal is to remove uncertainty and make it simpler to step into
              social settings with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-playfair text-3xl font-bold italic text-[#1e1716]">
              Be <em className="italic">Part</em> Of The Scene
            </h2>
            <p className="mb-3 font-poppins text-lg font-semibold text-[#1e1716]">
              Are You Hosting Something Worth Experiencing?
            </p>
            <p className="mb-8 text-sm text-[#666]">
              We are always looking for standout events that bring people together in the right
              way. Submit your event for consideration and become part of a carefully curated
              social experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/submit"
                className="rounded-full bg-[#1e1716] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Submit Your Proposal
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#1e1716] px-6 py-3 text-sm text-[#1e1716] transition hover:bg-[#1e1716] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className='relative'>
            <div className='rounded-3xl bg-white p-4 shadow-sm'>
              <img
                src='/images/home-page-12.jpg'
                className='h-[380px] w-full rounded-2xl object-cover'
                alt=''
              />
            </div>
            <div className='absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md'>
              <span className='text-lg'>👥</span>
              <span className='font-poppins text-sm font-medium text-[#1e1716]'>
                Make New Friends
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
