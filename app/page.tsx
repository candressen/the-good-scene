import Link from 'next/link'
import { getAllEvents } from '@/lib/airtable'
import type { Event } from '@/lib/airtable'

function EventCard({ event }: { event: Event }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
      <div className="h-48 w-full bg-[#e3e2dd]">
        {event.images[0] ? (
          <img
            src={event.images[0].url}
            alt={event.images[0].filename || event.name}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {(event.tags?.length ? event.tags : ['Curated']).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#A392DD]/10 px-3 py-1 text-xs text-[#A392DD]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 font-playfair text-xl font-semibold text-[#1e1716]">{event.name}</h3>
        <p className="mb-3 text-sm text-[#666666]">
          {event.date}
          {event.location ? ` · ${event.location}` : ''}
        </p>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#666666]">
          {event.description}
        </p>
        <Link href="/events" className="text-sm font-medium text-[#A392DD] hover:underline">
          Read More
        </Link>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="h-48 w-full animate-pulse bg-[#e3e2dd]" />
      <div className="p-6">
        <div className="mb-3 flex gap-2">
          <div className="h-6 w-20 animate-pulse rounded-full bg-[#e3e2dd]" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-[#e3e2dd]" />
        </div>
        <div className="mb-3 h-7 w-3/4 animate-pulse rounded bg-[#e3e2dd]" />
        <div className="mb-3 h-4 w-1/2 animate-pulse rounded bg-[#e3e2dd]" />
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-[#e3e2dd]" />
        <div className="mb-4 h-4 w-5/6 animate-pulse rounded bg-[#e3e2dd]" />
        <div className="h-4 w-24 animate-pulse rounded bg-[#e3e2dd]" />
      </div>
    </article>
  )
}

export default async function Home() {
  const events = await getAllEvents()
  const featuredEvents = events.slice(0, 3)
  const showPlaceholders = featuredEvents.length === 0

  return (
    <div className="bg-[#f6f6f6] font-poppins text-[#1e1716]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1e1716] px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,146,221,0.18),transparent_38%),linear-gradient(180deg,rgba(30,23,22,0.35),rgba(30,23,22,0.85))]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-[#A392DD]/30 bg-[#A392DD]/10 px-3 py-1 text-xs font-medium text-[#A392DD]">
            Boston, MA
          </span>
          <h1 className="mb-6 font-playfair text-5xl font-bold leading-tight text-white md:text-7xl">
            Step Into the Right Scene
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            Skip the noise and explore a curated collection of events that prioritize quality,
            atmosphere, and genuine connection.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/events" className="rounded-full bg-[#A392DD] px-8 py-3 text-white">
              Explore Events
            </Link>
            <Link
              href="/mission"
              className="rounded-full border border-white/30 px-8 py-3 text-white/80"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#e3e2dd] px-6 py-20">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-[#666666]">
          Weekly Drop
        </p>
        <h2 className="mb-12 text-center font-playfair text-4xl font-bold text-[#1e1716]">
          This Week&apos;s Selection
        </h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {showPlaceholders
            ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
            : featuredEvents.map((event) => <EventCard key={event.id} event={event} />)}
        </div>

        <div className="mt-10 text-center">
          <Link href="/events" className="text-sm font-medium text-[#A392DD] hover:underline">
            View All Events
          </Link>
        </div>
      </section>

      <section className="bg-[#f6f6f6] px-6 py-20">
        <h2 className="mx-auto mb-6 max-w-[800px] text-center font-playfair text-4xl font-bold text-[#1e1716]">
          What Makes Us Different
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#666666]">
          We do things differently by focusing on what truly matters — not the number of options,
          but the quality of each experience. Every event you see here has been intentionally
          selected to stand out.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e3e2dd] bg-white p-8">
            <h3 className="mb-3 font-playfair text-xl font-semibold text-[#1e1716]">
              Carefully Curated
            </h3>
            <p className="text-sm leading-relaxed text-[#666666]">
              Every event is intentionally selected. We look beyond popularity.
            </p>
          </article>
          <article className="rounded-2xl border border-[#e3e2dd] bg-white p-8">
            <h3 className="mb-3 font-playfair text-xl font-semibold text-[#1e1716]">
              Connection Over Crowds
            </h3>
            <p className="text-sm leading-relaxed text-[#666666]">
              The best experiences are defined by who you meet, not how many.
            </p>
          </article>
          <article className="rounded-2xl border border-[#e3e2dd] bg-white p-8">
            <h3 className="mb-3 font-playfair text-xl font-semibold text-[#1e1716]">
              Guided by Trust
            </h3>
            <p className="text-sm leading-relaxed text-[#666666]">
              Our recommendations are built on thoughtful consideration, not algorithms.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#1e1716] px-6 py-20 text-center">
        <h2 className="mb-4 font-playfair text-4xl font-bold text-white">Be Part of the Scene</h2>
        <p className="mb-4 text-xl text-white/70">Are You Hosting Something Worth Experiencing?</p>
        <p className="mx-auto mb-10 max-w-xl text-sm text-white/50">
          We&apos;re always looking for standout events. Submit your event for consideration and
          become part of a carefully curated social experience.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/submit" className="rounded-full bg-[#A392DD] px-8 py-3 text-white">
            Submit Your Event
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-3 text-white/80"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
