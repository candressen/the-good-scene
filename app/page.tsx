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
        className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/images/home-page-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-5xl font-bold leading-tight text-white md:text-7xl">
            Step Into the <em className="italic text-white">Right</em> Scene
          </h1>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-lg text-white/80 font-poppins">
            Discover curated experiences designed to help you find the right scene.
          </p>
          <Link
            href="/events"
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1e1716] transition hover:bg-[#f6f6f6]"
          >
            Explore Now →
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <h2 className="mb-12 text-center font-montserrat text-6xl font-black uppercase tracking-tight text-[#1e1716] md:text-8xl">
          WEEKLY DROP
        </h2>

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
      </section>

      <section className="bg-[#f6f6f6] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[
              '/images/home-page-5.jpg',
              '/images/home-page-6.jpg',
              '/images/home-page-7.jpg',
              '/images/home-page-8.jpg',
            ].map((src, index) => (
              <div key={src} className="h-48 overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Collage ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-6 font-playfair text-3xl font-bold text-[#1e1716]">
              What Makes Us Different
            </h2>
            <p className="whitespace-pre-line font-poppins text-base leading-relaxed text-[#666]">
              We do things differently by focusing on what truly matters — not the number of
              options, but the quality of each experience. Every event you see here has been
              intentionally selected to stand out, so you can spend less time deciding and more
              time enjoying.

              Whether you are heading out alone or with others, the experience should feel easy and
              welcoming.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e1716] px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <h2 className="font-montserrat text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl">
            A More Thoughtful Way to Go Out
          </h2>
          <p className="font-poppins text-base leading-relaxed text-white/60">
            Whether you are heading out alone or with others, the experience should feel easy and
            welcoming.
          </p>
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

          <div>
            <img
              src="/images/home-page-12.jpg"
              alt="Be part of the scene"
              className="h-[400px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
