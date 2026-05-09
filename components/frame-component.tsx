import type { NextPage } from "next";
import Image from "next/image";

const FrameComponent: NextPage<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 mx-auto flex min-h-[500px] max-w-[980px] flex-col items-center justify-center px-6 text-center md:min-h-[560px] ${className}`}>
      <h2 className="font-['Playfair_Display'] italic text-white text-[44px] leading-[0.95] md:text-[72px] lg:text-[92px] sm:text-[52px]">
        <span>Step Into the </span>
        <span className="text-[#e7675b]">Right</span>
        <span> Scene</span>
      </h2>
      <p className="mt-5 max-w-[720px] text-[17px] leading-[1.6] text-white/90 md:text-[20px] max-sm:max-w-[340px] max-sm:text-[15px] max-sm:leading-[1.55]">
        Skip the noise and explore a curated collection of events that prioritize quality, atmosphere, and genuine connection.
      </p>
      <button className="mt-8 cursor-pointer border-none inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[16px] font-semibold text-[#1e1513] shadow-sm hover:bg-[#f0f0f0] font-['Poppins']">
        Explore Now
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1e1513] text-sm text-white">→</span>
      </button>
    </div>
  );
};
export default FrameComponent;
