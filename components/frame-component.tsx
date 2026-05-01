import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-center justify-center max-w-full text-center text-[52px] text-white font-['Playfair_Display'] pb-24 mq750:text-[40px] mq450:text-[30px] ${className}`}
    >
      <div className="flex flex-col items-center gap-5 max-w-[540px] text-center">
        <h2 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] leading-tight">
          <span>{`Step Into the `}</span>
          <span className="text-accent-1">Right</span>
          <span> Scene</span>
        </h2>
        <div className="relative text-lg font-[Poppins] text-center leading-relaxed max-w-[420px] mq450:text-base">
          Skip the noise and explore a curated collection of events that prioritize quality, atmosphere, and genuine connection.
        </div>
        <button className="cursor-pointer [border:none] py-3.5 pl-8 pr-6 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-[#e6e6e6] mt-2">
          <div className="relative text-base font-semibold font-[Poppins] text-[#2d2828] text-left shrink-0">
            Explore Now
          </div>
          <Image
            className="w-8 relative max-h-full object-contain shrink-0"
            width={32}
            height={32}
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
