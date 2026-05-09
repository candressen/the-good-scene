import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const FrameComponent: NextPage<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 mx-auto flex min-h-[500px] max-w-[980px] flex-col items-center justify-center px-6 text-center md:min-h-[560px] ${className}`}>
      <h2 className="font-['Playfair_Display'] italic text-white text-[56px] leading-[0.95] md:text-[84px] lg:text-[100px] max-sm:text-[44px] max-sm:leading-[1]">
        <span>Step Into the </span>
        <span className="text-[#e7675b]">Right</span>
        <span> Scene</span>
      </h2>
      <p className="mt-5 max-w-[760px] text-[18px] leading-[1.55] text-white/90 md:text-[22px] max-sm:max-w-[340px] max-sm:text-[15px]">
        Skip the noise and explore a curated collection of events that prioritize quality, atmosphere, and genuine connection.
      </p>
      <Link href="/events" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[17px] font-semibold text-[#1e1513] shadow-sm hover:bg-[#f0f0f0] font-['Poppins']">
        Explore Now
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1e1513] text-white">→</span>
      </Link>
    </div>
  );
};
export default FrameComponent;
