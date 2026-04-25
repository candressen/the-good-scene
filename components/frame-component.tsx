import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start justify-center max-w-full text-left text-[56px] text-white font-['Playfair_Display'] ${className}`}
    >
      <div className="w-full flex flex-col items-center gap-6 max-w-full px-8">
        <h2 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] mq750:text-[45px] mq450:text-[34px]">
          <span>{`Step Into the `}</span>
          <span className="text-accent-1">Right</span>
          <span> Scene</span>
        </h2>
        <div className="self-stretch relative text-xl font-[Poppins] text-center mq450:text-base">
          Skip the noise and explore a curated collection of events that
          prioritize quality, atmosphere, and genuine connection.
        </div>
        <button className="cursor-pointer [border:none] pt-4 px-0 pb-0 bg-[transparent] flex flex-col items-start">
          <button className="cursor-pointer [border:none] py-4 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center box-border gap-1.5 hover:bg-[#e6e6e6]">
            <div className="relative text-base font-medium font-[Poppins] text-[#2d2828] text-left shrink-0">
              Explore Now
            </div>
            <Image
              className="w-[33.3px] relative max-h-full object-contain shrink-0"
              width={33.3}
              height={33.3}
              sizes="100vw"
              alt=""
              src="/Icon7@2x.png"
            />
          </button>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
