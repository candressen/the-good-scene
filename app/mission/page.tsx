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
    <div className="w-full relative bg-background flex flex-col items-start leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-[#1e1513] shrink-0 flex items-start pt-24 pb-16 max-w-full">
        <FrameComponent1 />
      </main>
      <FrameComponent2 />
      <FrameComponent3 />
      <Section />
      <LocofyFooter />
    </div>
  )
}
