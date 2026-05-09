import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

// Figma Section1: 1440x760, bg #1e1716
// Img group: purple behind top-left (rot -5deg), coral behind bottom-right (rot +3deg), photo on top (rot -5deg)
// Headline: x=820, y=272

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex items-center py-0 pl-[62px] pr-[62px] box-border gap-[80px] shrink-0 max-w-full h-full ${className}`}>

      {/* LEFT: Image with decorative layers */}
      <div className="relative flex-shrink-0" style={{ width: '600px', height: '520px' }}>

        {/* Coral layer — behind, bottom-right, rot +3deg */}
        <div
          className="absolute bg-[#e7675b] rounded-[28px]"
          style={{
            width: '530px', height: '420px',
            bottom: '-20px', right: '-30px',
            transform: 'rotate(3deg)',
            zIndex: 1,
          }}
        />

        {/* Purple layer — behind, top-left, rot -5deg */}
        <div
          className="absolute bg-[#a791e3] rounded-[28px]"
          style={{
            width: '530px', height: '420px',
            top: '-20px', left: '-30px',
            transform: 'rotate(-5deg)',
            zIndex: 2,
          }}
        />

        {/* Photo — on top, rot -5deg */}
        <div
          className="absolute rounded-[24px] overflow-hidden"
          style={{
            width: '520px', height: '400px',
            top: '40px', left: '20px',
            transform: 'rotate(-5deg)',
            zIndex: 3,
          }}
        >
          <Image
            src="/mission-hero-photo.png"
            alt="Our Mission"
            fill
            className="object-cover"
            sizes="520px"
          />
        </div>
      </div>

      {/* RIGHT: Text block */}
      <section className="flex flex-col items-start gap-6 max-w-[520px] text-left text-[56px] text-white font-['Playfair_Display'] pt-[60px]">
        <h1 className="m-0 text-[length:inherit] italic font-bold leading-tight">
          Our Mission
        </h1>
        <p className="m-0 text-[18px] font-['Poppins'] text-white leading-relaxed" style={{ maxWidth: '520px' }}>
          We&apos;re building a more thoughtful way to experience social life — one
          that values intention, comfort, and meaningful connection over noise
          and volume.
        </p>
        <div className="pt-2">
          <button className="cursor-pointer border-none py-3.5 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6e6e6]">
            <span className="text-[16px] font-medium font-['Poppins'] text-[#1e1716]">Explore More</span>
            <Image
              className="w-[33px] h-[33px] object-contain"
              width={33}
              height={33}
              alt=""
              src="/Icon7@2x.png"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent1;
