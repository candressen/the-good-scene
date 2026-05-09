import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex items-center py-0 pl-[62px] pr-[62px] box-border gap-[60px] shrink-0 max-w-full h-full ${className}`}>

      {/* LEFT: Image stack — tighter, more dynamic rotation */}
      <div className="relative flex-shrink-0" style={{ width: '520px', height: '460px' }}>

        {/* 1. Coral — BACK, smaller, rotated +4deg, bottom-right, peeks not dominates */}
        <div className="absolute bg-[#e7675b] rounded-[24px]"
          style={{ width: '460px', height: '380px', bottom: '-15px', right: '-20px', transform: 'rotate(4deg)', zIndex: 1 }} />

        {/* 2. Purple — MIDDLE, slightly rotated -3deg, visible strip top-left */}
        <div className="absolute bg-[#a791e3] rounded-[24px]"
          style={{ width: '460px', height: '380px', top: '-15px', left: '-15px', transform: 'rotate(-3deg)', zIndex: 2 }} />

        {/* 3. Image — TOP, -7deg tilt, inset from edges */}
        <div className="absolute rounded-[20px] overflow-hidden shadow-xl"
          style={{ width: '440px', height: '360px', top: '30px', left: '25px', transform: 'rotate(-7deg)', zIndex: 3 }}>
          <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="440px" />
        </div>
      </div>

      {/* RIGHT: Text — closer to image, tighter spacing */}
      <section className="flex flex-col items-start gap-4 flex-1 text-left text-[52px] text-white font-['Playfair_Display'] pt-[60px] pb-[40px]">
        <h1 className="m-0 text-[length:inherit] italic font-bold leading-tight">Our Mission</h1>
        <p className="m-0 text-[17px] font-['Poppins'] text-white/80 leading-relaxed max-w-[460px]">
          We&apos;re building a more thoughtful way to experience social life — one
          that values intention, comfort, and meaningful connection over noise
          and volume.
        </p>
        <button className="cursor-pointer border-none mt-1 py-3.5 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6e6e6]">
          <span className="text-[16px] font-medium font-['Poppins'] text-[#1e1716]">Explore More</span>
          <Image className="w-[33px] h-[33px] object-contain" width={33} height={33} alt="" src="/Icon7@2x.png" />
        </button>
      </section>
    </div>
  );
};

export default FrameComponent1;
