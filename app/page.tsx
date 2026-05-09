import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "@/components/frame-component";
import EventHighlights from "@/components/event-highlights";
import BgDesign from "@/components/bg-design";
import FrameComponent11 from "@/components/frame-component1";
import LocofyFooter from "@/components/locofy-footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#1e1513] flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[620px] w-full overflow-hidden bg-[#1e1513] pt-[120px] md:min-h-[680px] lg:min-h-[720px]">
        <Image
          src="/hero-section.png"
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <FrameComponent />
      </section>

      {/* Weekly Drop */}
      <EventHighlights />

      {/* What Makes Us Different */}
      <BgDesign />

      {/* Be Part of the Scene */}
      <div className="bg-[#e9ebe4] px-6 py-20">
        <FrameComponent11 />
      </div>

      <LocofyFooter />
    </div>
  );
};

export default HomePage;
