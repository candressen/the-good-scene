import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex items-center justify-between max-w-[1150px] mx-auto px-6 py-16 gap-[60px] shrink-0 w-full ${className}`}>

      {/* LEFT: Image stack — dominant, pulled left */}
      <div className="relative w-[560px] h-[380px] flex-shrink-0" style={{ marginLeft: "-20px", overflow: "visible" }}>

        {/* Coral — bottom, rotate -6deg, scale 1.08, peek down */}
        <div className="absolute inset-0 bg-[#E46A5A] rounded-[32px]"
          style={{ transform: 'rotate(-6deg) scale(1.08) translateY(24px)', zIndex: 1 }} />

        {/* Purple — middle, rotate -3deg, scale 1.04 */}
        <div className="absolute inset-0 bg-[#9B8AE6] rounded-[32px]"
          style={{ transform: 'rotate(-3deg) scale(1.04)', zIndex: 2 }} />

        {/* Image — top, rotate -4deg, shadow */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden"
          style={{ transform: 'rotate(-5deg)', zIndex: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}>
          <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="520px" />
        </div>
      </div>

      {/* RIGHT: Text — closer to image */}
      <div className="max-w-[520px] ml-4 flex flex-col items-start">
        <h1 className="text-[56px] leading-[1.1] font-['Playfair_Display'] italic font-bold text-white mb-5">
          Our Mission
        </h1>
        <p className="text-[18px] leading-[1.6] font-['Poppins'] text-white/80 mb-6 max-w-[460px]">
          We&apos;re building a more thoughtful way to experience social life — one
          that values intention, comfort, and meaningful connection over noise
          and volume.
        </p>
        <button className="cursor-pointer border-none flex items-center gap-3 bg-white text-[#1e1716] px-6 py-3 rounded-full text-[16px] font-medium font-['Poppins'] hover:bg-[#e6e6e6]">
          Explore More
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1e1716] text-white text-xs">→</span>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
