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
      <section className="relative bg-[#1e1513] overflow-visible pt-[120px] md:pt-[140px] pb-16 flex items-center min-h-[80vh]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.52fr_0.48fr]">

          {/* Left: Image stack */}
          <div className="relative overflow-visible">
            <div className="relative w-full max-w-[540px] h-[340px] overflow-visible">
              {/* Coral — back, translateX+Y */}
              <div className="absolute inset-0 bg-[#e7675b] rounded-[28px] -z-10" style={{ transform: 'translateX(24px) translateY(24px)' }} />
              {/* Purple — middle */}
              <div className="absolute inset-0 bg-[#9b8ae6] rounded-[28px] -z-20" style={{ transform: 'translateX(12px) translateY(12px)' }} />
              {/* Image — front */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[24px]" style={{ transform: 'rotate(-3deg)' }}>
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
