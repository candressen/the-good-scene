import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import LocofyFooter from '@/components/locofy-footer'
import FrameComponent2 from '@/components/mission/frame-component2'
import FrameComponent3 from '@/components/mission/frame-component3'
import Section from '@/components/mission/section'

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'We are building a more thoughtful way to experience social life.',
}

export default function MissionPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="relative bg-[#1e1513] overflow-hidden">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 pt-32 pb-24 lg:grid-cols-[0.52fr_0.48fr]">

          {/* Left: Image stack */}
          <div className="relative overflow-visible">
            <div className="relative w-full max-w-[540px] h-[340px] overflow-visible">
              {/* Purple — back */}
              <div className="absolute inset-0 z-10 rounded-[26px] bg-[#9b8ae6]"
                style={{ transform: 'rotate(-4deg)' }} />
              {/* Red — behind */}
              <div className="absolute left-8 top-8 z-0 h-full w-full rounded-[26px] bg-[#e7675b]"
                style={{ transform: 'rotate(3deg)' }} />
              {/* Image — front */}
              <div className="relative z-30 h-full w-full rounded-[22px] overflow-hidden"
                style={{ transform: 'rotate(-3deg)' }}>
                <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="560px" />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="relative z-40 max-w-[520px] justify-self-start">
            <h1 className="text-[52px] md:text-[60px] italic font-bold leading-tight font-['Playfair_Display'] text-white">
              Our Mission
            </h1>
            <p className="mt-4 text-[17px] leading-[1.6] font-['Poppins'] text-white/80">
              We&apos;re building a more thoughtful way to experience social life — one that values intention, comfort, and meaningful connection over noise and volume.
            </p>
            <div className="mt-6">
              <Link href="/events" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-[16px] font-medium font-['Poppins'] text-[#1e1513] hover:bg-[#e6e6e6]">
                Explore More
                <Image src="/Icon7@2x.png" alt="" width={28} height={28} className="object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FrameComponent2 />
      <FrameComponent3 />
      <Section />
      <LocofyFooter />
    </div>
  )
}
