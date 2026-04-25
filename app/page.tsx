import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "@/components/frame-component";
import EventHighlights from "@/components/event-highlights";
import BgDesign from "@/components/bg-design";
import FrameComponent11 from "@/components/frame-component1";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-background overflow-hidden flex flex-col items-start isolate gap-[118px] leading-[normal] tracking-[normal] mq750:gap-[59px] mq450:gap-[29px]">
      <section className="self-stretch flex flex-col items-start gap-[25px] max-w-full">
        <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-[248px] box-border gap-[197px] bg-[url('/Hero-Section@3x.png')] bg-cover bg-no-repeat bg-center justify-center items-center max-w-full mq750:gap-[98px] mq450:gap-[49px] mq450:pb-[105px] mq450:box-border mq1100:pb-[161px] mq1100:box-border">
              <FrameComponent />
        </div>
        <EventHighlights />
      </section>
      <main className="self-stretch flex flex-col items-start pt-0 px-0 pb-[61px] box-border gap-[67px] max-w-full mq750:gap-[33px] mq750:pb-5 mq750:box-border mq450:gap-[17px] mq1250:pb-[26px] mq1250:box-border">
        <BgDesign />
        <FrameComponent11 />
      </main>
      <Image
        className="w-[51.8px] absolute !!m-[0 important] bottom-[1076.2px] left-[40px] max-h-full object-contain z-[1]"
        loading="lazy"
        width={51.8}
        height={51.8}
        sizes="100vw"
        alt=""
        src="/streamline-color-ai-network-spark1@2x.png"
      />
    </div>
  );
};

export default HomePage;
