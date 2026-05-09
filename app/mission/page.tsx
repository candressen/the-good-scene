import type { Metadata } from 'next'
import LocofyFooter from '@/components/locofy-footer'
import FrameComponent1 from '@/components/mission/frame-component1'
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
      {/* Hero — overflow-x-hidden on section only, not on wrapper */}
      <section className="relative bg-[#1e1513] overflow-x-hidden">
        <div className="mx-auto max-w-[1240px] px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 overflow-visible">
            <FrameComponent1 />
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
