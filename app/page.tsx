import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "@/components/frame-component";
import EventHighlights from "@/components/event-highlights";
import BgDesign from "@/components/bg-design";
import FrameComponent11 from "@/components/frame-component1";
import LocofyFooter from "@/components/locofy-footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-background flex flex-col items-start gap-[118px] leading-[normal] tracking-[normal] mq750:gap-[59px] mq450:gap-[29px]">
      <section className="self-stretch flex flex-col items-start gap-[25px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border max-w-full relative overflow-hidden"
          style={{ height: '100vh', minHeight: '1176px', backgroundImage: 'url(/hero-section.png)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }}>
          <div className="absolute inset-0 bg-black/50 z-[0]" />
          <div className="relative z-[1] w-full">
              <FrameComponent />
          </div>
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
      <LocofyFooter />
    </div>
  );
};

export default HomePage;
