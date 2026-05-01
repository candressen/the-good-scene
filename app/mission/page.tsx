import type { Metadata } from 'next'
import LocofyFooter from '@/components/locofy-footer'
import FrameComponent from '@/components/mission/frame-component'
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
    <div className="w-full relative bg-background overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      <main className="self-stretch h-[760px] bg-accent-2 overflow-hidden shrink-0 flex flex-col items-start pt-0 px-0 pb-[656px] box-border gap-[70.2px] max-w-full">
        <FrameComponent />
        <FrameComponent1 />
      </main>
      <FrameComponent2 />
      <FrameComponent3 />
      <Section />
      <LocofyFooter />
    </div>
  )
}
