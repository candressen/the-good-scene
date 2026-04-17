import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'We are building a more thoughtful way to experience social life.',
}

export default function MissionPage() {
  return (
    <div>
      {/* SECTION 1 — Dark hero with decorative shapes */}
      <section className='relative min-h-[680px] overflow-hidden bg-[#1e1716] px-6 py-24 flex items-center'>
        {/* Decorative layered shapes — coral + purple behind photo */}
        <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2'>
          <div className='absolute right-8 top-12 h-[520px] w-[500px] rounded-[40px] bg-[#e7645b] opacity-80 rotate-6' />
          <div className='absolute right-12 top-16 h-[500px] w-[480px] rounded-[40px] bg-[#a791e3] opacity-70 rotate-3' />
          <img
            src='/images/our-mission-14.jpg'
            className='absolute right-16 top-20 h-[480px] w-[460px] rounded-[32px] object-cover'
            alt=''
          />
        </div>

        <div className='relative z-10 max-w-[580px]'>
          <h1 className='mb-6 font-playfair text-6xl font-bold leading-tight text-white'>
            Our Mission
          </h1>
          <p className='mb-10 font-poppins text-lg leading-relaxed text-white/70'>
            We are building a more thoughtful way to experience social life — one that values intention, comfort, and meaningful connection over noise and volume.
          </p>
          <Link
            href='/events'
            className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e1716] transition hover:bg-[#f6f6f6]'
          >
            Explore More →
          </Link>
        </div>
      </section>

      {/* SECTION 2 — Purple bg — A Carefully Curated Selection */}
      <section className='overflow-hidden bg-[#a791e3] px-6 py-20'>
        <div className='mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2'>
          {/* LEFT: stacked photos with coral stripe accents */}
          <div className='relative h-[420px]'>
            {/* Coral stripe bars behind photos */}
            <div className='absolute left-0 right-0 top-0 h-20 rounded-xl bg-[#e7645b]' />
            <div className='absolute left-0 right-0 top-24 h-20 rounded-xl bg-[#e7645b]' />
            {/* Main photo with bg-removed person */}
            <img
              src='/images/our-mission-15.jpg'
              className='absolute bottom-0 left-0 right-0 mx-auto h-[380px] object-contain'
              alt=''
            />
          </div>

          {/* RIGHT: text content */}
          <div>
            <h2 className='mb-6 font-playfair text-5xl font-bold leading-tight text-white'>
              A Carefully
              <br />
              Curated
              <br />
              Selection
            </h2>
            <p className='mb-8 font-poppins text-base leading-relaxed text-white/80'>
              Every experience featured here is intentionally selected. We look beyond popularity and focus on quality — what makes an event feel engaging, welcoming, and genuinely enjoyable. This means fewer options, but better ones.
            </p>
            <Link
              href='/events'
              className='inline-flex items-center gap-2 rounded-full bg-[#1e1716] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black'
            >
              Explore Our Events →
            </Link>
          </div>
        </div>

        {/* Friends badge */}
        <div className='mx-auto mt-10 flex max-w-[1200px] items-center gap-2'>
          <div className='flex items-center gap-2 rounded-full bg-white/20 px-4 py-2'>
            <span className='font-poppins text-sm font-medium text-white'>Friends but Make it easy</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Warm bg — Connection Over Crowds */}
      <section className='overflow-hidden bg-[#e3e2dd] px-6 py-20'>
        <div className='mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2'>
          {/* LEFT: stacked photo with decorative shapes */}
          <div className='relative h-[420px]'>
            <div className='absolute inset-4 rounded-[32px] bg-[#a791e3] rotate-3' />
            <div className='absolute inset-6 rounded-[32px] bg-[#e7645b] -rotate-2' />
            <img
              src='/images/our-mission-17.jpg'
              className='absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] rounded-[24px] object-cover'
              alt=''
            />
          </div>

          {/* RIGHT: text */}
          <div>
            <h2 className='mb-6 font-playfair text-5xl font-bold leading-tight text-[#1e1716]'>
              Connection
              <br />
              Over Crowds
            </h2>
            <p className='mb-8 font-poppins text-base leading-relaxed text-[#666666]'>
              We believe the best experiences are not defined by how many people attend, but by how they make you feel. That is why we prioritize environments that encourage natural interaction, ease, and a sense of belonging.
            </p>
            <Link
              href='/events'
              className='inline-flex items-center gap-2 rounded-full bg-[#1e1716] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black'
            >
              Explore Our Events →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Coral bg — Guided by Trust */}
      <section className='overflow-hidden bg-[#e7645b] px-6 py-20'>
        <div className='mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2'>
          {/* LEFT: text */}
          <div>
            <h2 className='mb-6 font-playfair text-5xl font-bold leading-tight text-white'>
              Guided by
              <br />
              Trust,
              <br />
              Not Trends
            </h2>
            <p className='mb-8 font-poppins text-base leading-relaxed text-white/80'>
              Our recommendations are built on thoughtful consideration, not algorithms alone. We aim to provide insight you can rely on — so when you choose something from here, you can feel confident in your decision.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e1716] transition hover:bg-[#f6f6f6]'
            >
              Contact Us →
            </Link>
          </div>

          {/* RIGHT: photo with white frame effect */}
          <div className='relative'>
            <div className='absolute -inset-4 rounded-[32px] bg-white rotate-3' />
            <img
              src='/images/our-mission-18.jpg'
              className='relative h-[400px] w-full rounded-[24px] object-cover'
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  )
}
