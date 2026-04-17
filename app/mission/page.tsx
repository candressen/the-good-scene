import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'We are building a more thoughtful way to experience social life — one that values intention, comfort, and connection.',
}

export default function MissionPage() {
  return (
    <div className='min-h-screen bg-[#f6f6f6]'>
      {/* Hero */}
      <section className='bg-[#1e1716] px-6 py-24 text-center'>
        <div className='mx-auto max-w-[700px]'>
          <p className='mb-4 text-xs uppercase tracking-[0.3em] text-[#A392DD]'>
            Who We Are
          </p>
          <h1 className='mb-6 font-playfair text-5xl font-bold leading-tight text-white'>
            Our Mission
          </h1>
          <p className='font-poppins text-lg leading-relaxed text-white/60'>
            We are building a more thoughtful way to experience social life
            — one that values intention, comfort, and connection over noise
            and quantity.
          </p>
        </div>
      </section>

      {/* Mission content */}
      <section className='px-6 py-20'>
        <div className='mx-auto max-w-[800px] space-y-16'>
          <div>
            <h2 className='mb-4 font-playfair text-3xl font-bold text-[#1e1716]'>
              A Carefully Curated Selection
            </h2>
            <p className='font-poppins text-lg leading-relaxed text-[#666666]'>
              Every experience featured here is intentionally selected. We look
              beyond popularity and focus on quality, atmosphere, and the kind
              of environment where people can show up as themselves.
            </p>
          </div>
          <div className='border-t border-[#e3e2dd] pt-12'>
            <h2 className='mb-4 font-playfair text-3xl font-bold text-[#1e1716]'>
              Connection Over Crowds
            </h2>
            <p className='font-poppins text-lg leading-relaxed text-[#666666]'>
              We believe the best experiences are not defined by how many
              people attend, but by who shows up and why. Our curation focuses
              on events where connection is possible — not just proximity.
            </p>
          </div>
          <div className='border-t border-[#e3e2dd] pt-12'>
            <h2 className='mb-4 font-playfair text-3xl font-bold text-[#1e1716]'>
              Guided by Trust, Not Trends
            </h2>
            <p className='font-poppins text-lg leading-relaxed text-[#666666]'>
              Our recommendations are built on thoughtful consideration, not
              algorithms alone. Every event that makes it onto The Good Scene
              has passed a standard — so when you show up, you already know it
              is worth your time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#e3e2dd] px-6 py-20 text-center'>
        <div className='mx-auto max-w-[600px]'>
          <h2 className='mb-4 font-playfair text-3xl font-bold text-[#1e1716]'>
            Ready to Find Your Scene?
          </h2>
          <p className='mb-8 font-poppins text-[#666666]'>
            Browse our curated events and find the experience that feels right
            for you.
          </p>
          <a
            href='/events'
            className='rounded-full bg-[#A392DD] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#8e7ccc]'
          >
            Explore Events
          </a>
        </div>
      </section>
    </div>
  )
}
