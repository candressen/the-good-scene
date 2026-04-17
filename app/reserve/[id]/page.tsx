import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReserveForm from '@/components/ReserveForm'
import { getEventById } from '@/lib/airtable'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const event = await getEventById(id)

  if (!event) return {}

  return {
    title: `${event.name} Reservation`,
    description: `Reserve your spot for ${event.name}.`,
  }
}

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = await getEventById(id)

  if (!event) notFound()

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <section className="bg-[#1e1716] px-6 py-16 text-center">
        <Link
          href="/events"
          className="mb-6 inline-block text-sm text-white/40 transition hover:text-white"
        >
          ← Back to Events
        </Link>
        <h1 className="mb-2 font-playfair text-4xl font-bold text-white">{event.name}</h1>
        <div className="mt-3 flex justify-center gap-4 text-sm text-white/50">
          {event.date ? <span>📅 {event.date}</span> : null}
          {event.time ? <span>🕐 {event.time}</span> : null}
          {event.location ? <span>📍 {event.location}</span> : null}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[500px]">
          <p className="mb-2 font-playfair text-2xl font-bold text-[#1e1716]">
            Reserve Your Spot
          </p>
          <p className="mb-8 text-sm font-poppins text-[#666666]">
            Fill out the form below and we will confirm your reservation within 24 hours.
          </p>
          <ReserveForm eventName={event.name} eventId={event.id} />
        </div>
      </section>
    </div>
  )
}
