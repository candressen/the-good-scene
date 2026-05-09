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
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-20 px-6 pt-32 pb-24 overflow-visible">

          {/* Left: Image stack — fixed dimensions, shrink-0 */}
          <div className="relative w-[620px] h-[390px] shrink-0 overflow-visible">
            <div className="absolute inset-0 z-10 rounded-[28px] bg-[#9b8ae6] rotate-[-4deg]" />
            <div className="absolute left-8 top-8 z-0 h-full w-full rounded-[28px] bg-[#e7675b] rotate-[3deg]" />
            <div className="relative z-20 h-full w-full rounded-[24px] overflow-hidden rotate-[-3deg]">
              <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="620px" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="relative z-30 max-w-[560px] shrink-0">
            <h1 className="font-['Playfair_Display'] italic text-[72px] leading-[1] text-white whitespace-nowrap font-bold">
              Our Mission
            </h1>
            <p className="mt-6 max-w-[620px] text-[20px] leading-[1.6] font-['Poppins'] text-white/85">
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
