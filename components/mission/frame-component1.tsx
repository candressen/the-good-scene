import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

// Figma exact: Section1 1440x760, bg #1e1716
// Layer order: coral (z1) < purple (z2) < image (z3)
// Coral: x=-45,y=242,w=765,h=520,rot=0.1deg  → behind-bottom-right
// Purple: x=-120,y=174,w=754,h=503,rot=0deg  → behind-top-left
// Image: x=-25,y=219,w=703,h=475             → on top, rot ~-5deg per visual
// Text: x=820,y=272

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex items-center py-0 pl-[62px] pr-[62px] box-border gap-[60px] shrink-0 max-w-full h-full ${className}`}>

      {/* LEFT: Image with decorative layers - 700px wide container */}
      <div className="relative flex-shrink-0" style={{ width: '640px', height: '520px' }}>

        {/* 1. Coral layer — BACK, below and to the right, large, slight rot */}
        <div
          className="absolute bg-[#e7675b] rounded-[28px]"
          style={{
            width: '580px', height: '480px',
            bottom: '-30px', left: '40px',
            transform: 'rotate(3deg)',
            zIndex: 1,
          }}
        />

        {/* 2. Purple layer — MIDDLE, top-left, slight negative rot */}
        <div
          className="absolute bg-[#a791e3] rounded-[28px]"
          style={{
            width: '560px', height: '460px',
            top: '-20px', left: '-10px',
            transform: 'rotate(-2deg)',
            zIndex: 2,
          }}
        />

        {/* 3. Image — TOP, rotated ~-5deg */}
        <div
          className="absolute rounded-[20px] overflow-hidden shadow-xl"
          style={{
            width: '540px', height: '430px',
            top: '30px', left: '20px',
            transform: 'rotate(-5deg)',
            zIndex: 3,
          }}
        >
          <Image
            src="/mission-hero-photo.png"
            alt="Our Mission"
            fill
            className="object-cover"
            sizes="540px"
          />
        </div>
      </div>

      {/* RIGHT: Text block — Figma x=820 from section left */}
      <section className="flex flex-col items-start gap-6 flex-1 text-left text-[56px] text-white font-['Playfair_Display'] pt-[80px] pb-[40px]">
        <h1 className="m-0 text-[length:inherit] italic font-bold leading-tight">
          Our Mission
        </h1>
        <p className="m-0 text-[18px] font-['Poppins'] text-white/80 leading-relaxed max-w-[500px]">
          We&apos;re building a more thoughtful way to experience social life — one
          that values intention, comfort, and meaningful connection over noise
          and volume.
        </p>
        <div className="pt-2">
          <button className="cursor-pointer border-none py-3.5 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6e6e6]">
            <span className="text-[16px] font-medium font-['Poppins'] text-[#1e1716]">Explore More</span>
            <Image
              className="w-[33px] h-[33px] object-contain"
              width={33} height={33} alt="" src="/Icon7@2x.png"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent1;
