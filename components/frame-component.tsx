import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start justify-start max-w-full text-left text-[40px] text-white font-['Playfair_Display'] pt-16 pl-16 mq750:pl-8 mq450:pl-5 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 max-w-[520px]">
        <h2 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] mq750:text-[32px] mq450:text-[26px]">
          <span>{`Step Into the `}</span>
          <span className="text-accent-1">Right</span>
          <span> Scene</span>
        </h2>
        <div className="relative text-base font-[Poppins] text-left leading-relaxed max-w-[400px]">
          Skip the noise and explore a curated collection of events that prioritize quality, atmosphere, and genuine connection.
        </div>
        <button className="cursor-pointer [border:none] py-3 pl-7 pr-6 bg-white rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#e6e6e6] mt-2">
          <div className="relative text-sm font-medium font-[Poppins] text-[#2d2828] text-left shrink-0">
            Explore Now
          </div>
          <Image
            className="w-7 relative max-h-full object-contain shrink-0"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Icon7@2x.png"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
