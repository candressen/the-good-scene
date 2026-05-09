'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LocofyFooter from '@/components/locofy-footer'

const FILTERS = [
  'All', 'Woman Only', 'Arts & Crafts', 'No Drinking', 'Reggaeton',
  'Classy', 'Wine & Gossip', 'Rooftop Views', 'Pop-up', 'Singles'
]

type Event = {
  id: string; title: string; date: string; time: string; location: string;
  description: string; tags: string[]; image: string;
  venue?: string; address?: string;
}

const EVENTS: Event[] = [
  { id: 'evt-1', title: 'Rooftop Social Night', date: 'Fri, Mar 15', time: '10:15 PM', location: 'Downtown', venue: 'Piso Pisco Rooftop', address: '133 Pearl Street, Boston', description: 'An easygoing evening with music, drinks, and a welcoming crowd. Come as you are and leave with new friends.', tags: ['Rooftop Views', 'Classy'], image: '/Rectangle-64@2x.png' },
  { id: 'evt-2', title: 'Wine & Gossip Evening', date: 'Sat, Mar 16', time: '7:00 PM', location: 'Midtown', venue: 'The Velvet Room', address: '45 Newbury Street, Boston', description: 'A relaxed gathering for good wine and great conversation. No pressure, just vibes.', tags: ['Wine & Gossip', 'Classy'], image: '/Rectangle-65@2x.png' },
  { id: 'evt-3', title: 'Ladies Night Out', date: 'Fri, Mar 22', time: '9:00 PM', location: 'Back Bay', venue: 'Luna Lounge', address: '88 Boylston Street, Boston', description: 'A curated evening designed for women to connect and unwind.', tags: ['Woman Only', 'Classy'], image: '/Rectangle-61@2x.png' },
  { id: 'evt-4', title: 'Arts & Crafts Mixer', date: 'Sun, Mar 23', time: '3:00 PM', location: 'South End', venue: 'Studio 4', address: '22 Harrison Ave, Boston', description: 'Get creative while meeting new people in a laid-back setting.', tags: ['Arts & Crafts', 'No Drinking'], image: '/Rectangle-62@2x.png' },
  { id: 'evt-5', title: 'Reggaeton Night', date: 'Sat, Mar 29', time: '11:00 PM', location: 'Seaport', venue: 'Club Tropicana', address: '1 Seaport Blvd, Boston', description: 'Dance the night away to the best reggaeton beats in town.', tags: ['Reggaeton'], image: '/Rectangle-63@2x.png' },
  { id: 'evt-6', title: 'Singles Mixer', date: 'Fri, Apr 4', time: '7:30 PM', location: 'Beacon Hill', venue: 'The Social Club', address: '12 Charles Street, Boston', description: 'Meet new people in a fun and pressure-free environment.', tags: ['Singles'], image: '/Rectangle-64@2x.png' },
  { id: 'evt-7', title: 'Pop-up Garden Party', date: 'Sat, Apr 5', time: '2:00 PM', location: 'Cambridge', venue: 'Secret Garden', address: '5 Brattle Street, Cambridge', description: 'A surprise pop-up in a beautiful garden setting.', tags: ['Pop-up', 'No Drinking'], image: '/Rectangle-65@2x.png' },
  { id: 'evt-8', title: 'Classy Rooftop Brunch', date: 'Sun, Apr 6', time: '11:00 AM', location: 'Downtown', venue: 'Sky Terrace', address: '200 State Street, Boston', description: 'Brunch with a view and a side of great company.', tags: ['Rooftop Views', 'Classy', 'Woman Only'], image: '/Rectangle-61@2x.png' },
  { id: 'evt-9', title: 'Sober Social Night', date: 'Fri, Apr 11', time: '8:00 PM', location: 'Jamaica Plain', venue: 'The Living Room', address: '667 Centre Street, Jamaica Plain', description: 'Connect authentically without the noise of alcohol.', tags: ['No Drinking', 'Singles'], image: '/Rectangle-62@2x.png' },
  { id: 'evt-10', title: 'Crafts & Cocktails', date: 'Sat, Apr 12', time: '6:00 PM', location: 'Allston', venue: 'The Workshop', address: '350 Brighton Ave, Allston', description: 'A creative night with optional cocktails and good vibes.', tags: ['Arts & Crafts'], image: '/Rectangle-63@2x.png' },
  { id: 'evt-11', title: 'Gossip & Glam', date: 'Fri, Apr 18', time: '9:00 PM', location: 'Fenway', venue: 'Glam House', address: '1265 Boylston Street, Boston', description: 'Dress up, show up, and dish out.', tags: ['Wine & Gossip', 'Woman Only'], image: '/Rectangle-64@2x.png' },
  { id: 'evt-12', title: 'Latin Nights', date: 'Sat, Apr 19', time: '10:00 PM', location: 'North End', venue: 'Salsa Verde', address: '300 Hanover Street, Boston', description: 'Salsa, bachata, and reggaeton all night long.', tags: ['Reggaeton'], image: '/Rectangle-65@2x.png' },
]

type ReserveForm = { name: string; email: string; phone: string; notes: string }
type ReserveState = 'idle' | 'form' | 'submitting' | 'success'

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const [shareMsg, setShareMsg] = useState('')
  const [reserveState, setReserveState] = useState<ReserveState>('idle')
  const [form, setForm] = useState<ReserveForm>({ name: '', email: '', phone: '', notes: '' })
  const [errors, setErrors] = useState<Partial<ReserveForm>>({})

  const handleShare = async () => {
    const shareData = {
      title: event.title,
      text: event.description,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        setShareMsg('Event link copied')
        setTimeout(() => setShareMsg(''), 3000)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const validate = () => {
    const e: Partial<ReserveForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setReserveState('submitting')
    const payload = {
      event_id: event.id,
      event_title: event.title,
      name: form.name,
      email: form.email,
      phone: form.phone,
      notes: form.notes,
    }
    // TODO: connect to Supabase — insert into event_reservations
    console.log('Reservation payload:', payload)
    await new Promise(r => setTimeout(r, 800)) // simulate async
    setReserveState('success')
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 py-8" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-[980px] overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl md:p-8" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button onClick={onClose} className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#e76255] text-white text-xl font-bold hover:bg-[#d15545] z-10">×</button>

        {/* Logo */}
        <Image src="/logos/logo.svg" alt="The Good Scene" width={180} height={72} className="mb-8 h-[96px] w-auto object-contain scale-[1.4] origin-left" />

        {/* Main card */}
        <div className="rounded-[16px] bg-[#f1f1f1] p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.48fr_0.52fr]">
            <div>
              <Image src={event.image} alt={event.title} width={440} height={300} className="h-[300px] w-full rounded-[18px] object-cover" />
              <div className="mt-5 flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#e76255]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <div>
                  <p className="text-[16px] font-semibold text-[#1e1513] font-['Poppins']">{event.venue || 'Venue TBA'}</p>
                  <p className="mt-1 text-[14px] text-[#1e1513]/65 font-['Poppins']">{event.address || event.location}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] italic text-[34px] leading-tight text-[#1e1513] md:text-[40px]">{event.title}</h2>
              <p className="mt-2 text-[16px] font-medium text-[#1e1513]/70 font-['Poppins']">{event.date} • {event.time} • {event.location}</p>
              <div className="my-5 h-px w-full bg-[#1e1513]/15" />
              <p className="text-[15px] leading-[1.6] text-[#1e1513]/75 font-['Poppins']">{event.description}</p>
              <div className="my-5 h-px w-full bg-[#1e1513]/15" />
              <div className="flex flex-wrap gap-3">
                {event.tags.map(tag => <span key={tag} className="rounded-full bg-[#f4c7c2] px-5 py-2 text-[14px] font-semibold text-[#e76255] font-['Poppins']">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Host row */}
        <div className="mt-5 flex items-center justify-between rounded-[14px] bg-[#f1f1f1] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#9b8ae6] flex items-center justify-center text-white text-sm font-bold font-['Poppins']">TGS</div>
            <div>
              <p className="text-[15px] font-semibold text-[#1e1513] font-['Poppins']">Hosted By</p>
              <p className="text-[14px] text-[#1e1513]/65 font-['Poppins']">The Good Scene</p>
            </div>
          </div>
          <a href={`mailto:hellothegoodscene@outlook.com?subject=Question about ${encodeURIComponent(event.title)}`}
            className="rounded-[10px] border border-[#1e1513] px-5 py-2 text-[14px] font-semibold text-[#1e1513] transition hover:bg-[#1e1513] hover:text-white font-['Poppins']">
            Contact Host
          </a>
        </div>

        {/* Reserve form */}
        {reserveState === 'form' || reserveState === 'submitting' ? (
          <div className="mt-5 rounded-[14px] bg-[#f1f1f1] px-6 py-5">
            <h3 className="text-[18px] font-bold text-[#1e1513] font-['Poppins']">Reserve Your Spot</h3>
            <p className="mt-1 text-[14px] text-[#1e1513]/65 font-['Poppins']">Enter your information and we&apos;ll save your interest for this event.</p>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name *"
                  className={`w-full rounded-[10px] border px-4 py-3 text-[14px] outline-none font-['Poppins'] ${errors.name ? 'border-[#e76255]' : 'border-[#1e1513]/20'}`} />
                {errors.name && <p className="mt-1 text-[12px] text-[#e76255]">{errors.name}</p>}
              </div>
              <div>
                <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email *" type="email"
                  className={`w-full rounded-[10px] border px-4 py-3 text-[14px] outline-none font-['Poppins'] ${errors.email ? 'border-[#e76255]' : 'border-[#1e1513]/20'}`} />
                {errors.email && <p className="mt-1 text-[12px] text-[#e76255]">{errors.email}</p>}
              </div>
              <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Phone (optional)"
                className="w-full rounded-[10px] border border-[#1e1513]/20 px-4 py-3 text-[14px] outline-none font-['Poppins']" />
              <input value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Notes (optional)"
                className="w-full rounded-[10px] border border-[#1e1513]/20 px-4 py-3 text-[14px] outline-none font-['Poppins']" />
              <div className="flex gap-3 sm:col-span-2">
                <button type="submit" disabled={reserveState === 'submitting'}
                  className="rounded-[10px] bg-[#1e1513] px-6 py-3 text-[14px] font-semibold text-white transition hover:opacity-85 disabled:opacity-60 font-['Poppins']">
                  {reserveState === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
                <button type="button" onClick={() => setReserveState('idle')}
                  className="rounded-[10px] border border-[#1e1513]/30 px-6 py-3 text-[14px] font-semibold text-[#1e1513]/70 font-['Poppins']">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : reserveState === 'success' ? (
          <div className="mt-5 rounded-[14px] bg-[#f1f1f1] px-6 py-5 text-center">
            <p className="text-[16px] font-semibold text-[#1e1513] font-['Poppins']">✓ Thanks — your spot has been reserved.</p>
          </div>
        ) : null}

        {/* Action row */}
        <div className="mt-5 flex flex-col gap-4 rounded-[14px] bg-[#f1f1f1] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-[#e9ebe4]" />)}
            </div>
            <p className="text-[14px] text-[#1e1513]/75 font-['Poppins']">76+ People Interested</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={handleShare}
              className="rounded-[10px] border border-[#1e1513] px-5 py-3 text-[14px] font-semibold text-[#1e1513] transition hover:bg-[#1e1513] hover:text-white font-['Poppins']">
              {shareMsg || 'Share Event'}
            </button>
            <button onClick={() => setReserveState(s => s === 'idle' || s === 'success' ? 'form' : 'idle')}
              className="rounded-[10px] bg-[#1e1513] px-5 py-3 text-[14px] font-semibold text-white transition hover:opacity-85 font-['Poppins']">
              Reserve Spot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const filtered = EVENTS.filter(e => {
    const matchesFilter = activeFilter === 'All' || e.tags.includes(activeFilter)
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = q === '' ||
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.location.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen w-full bg-[#e9ebe4] overflow-x-hidden flex flex-col">
      <section className="relative mx-auto w-full max-w-[1180px] px-6 pt-[130px] pb-8 text-center">
        <p className="absolute left-8 top-[130px] hidden text-[13px] uppercase tracking-[0.25em] text-[#9b8ae6] lg:block">Mark Your Calendar</p>
        <h1 className="font-['Playfair_Display'] italic text-[48px] leading-tight text-[#1e1513] md:text-[60px]">Upcoming Events</h1>
        <p className="mx-auto mt-4 max-w-[880px] text-[16px] leading-[1.6] text-[#1e1513]/75 font-['Poppins']">
          Explore a curated selection of upcoming experiences designed to help you find the right atmosphere, connect with the right people, and make the most of your time out.
        </p>
      </section>

      <div className="mx-auto mt-8 flex h-[52px] w-[calc(100%-3rem)] max-w-[560px] items-center rounded-full bg-white px-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <svg className="mr-3 h-4 w-4 flex-shrink-0 text-[#1e1513]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <input type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-[14px] text-[#1e1513] outline-none placeholder:text-[#1e1513]/40 font-['Poppins']" />
      </div>

      <div className="mx-auto mt-6 flex max-w-[1180px] flex-wrap items-center justify-center gap-3 px-6">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)}
            className={`rounded-full px-5 py-2 text-[13px] font-semibold transition font-['Poppins'] cursor-pointer ${activeFilter === f ? 'bg-[#e76255] text-white' : 'bg-[#f4c7c2] text-[#1e1513] hover:bg-[#e76255] hover:text-white'}`}>
            {f}
          </button>
        ))}
      </div>

      <main className="mx-auto max-w-[1180px] px-6 pt-10 pb-16 w-full">
        {filtered.length === 0
          ? <p className="py-16 text-center text-[16px] text-[#1e1513]/60 font-['Poppins']">No events match your search.</p>
          : <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => (
                <button key={i} type="button" onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer rounded-[16px] bg-white p-4 text-left shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.16)]">
                  <Image src={event.image} alt={event.title} width={392} height={160} className="h-[160px] w-full rounded-[12px] object-cover" />
                  <h3 className="mt-4 text-[20px] font-bold text-[#1e1513] font-['Poppins']">{event.title}</h3>
                  <p className="mt-1 text-[14px] font-medium text-[#1e1513]/70 font-['Poppins']">{event.date} • {event.time} • {event.location}</p>
                  <p className="mt-3 text-[14px] leading-[1.45] text-[#1e1513]/75 font-['Poppins']">{event.description}</p>
                  <span className="mt-3 inline-block text-[14px] font-semibold text-[#e76255] font-['Poppins']">Read More</span>
                </button>
              ))}
            </div>
        }
        <div className="mt-10 flex justify-center">
          <Link href="/calendar" className="rounded-full bg-[#1e1513] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:opacity-85 font-['Poppins']">Calendar</Link>
        </div>
      </main>

      <LocofyFooter />
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  )
}
