import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex flex-col items-center justify-center text-center text-white font-['Playfair_Display'] ${className}`}
    >
      <div className="flex flex-col items-center gap-5 px-6 max-w-[900px] w-full">
        <h2
          className="m-0 text-[52px] italic font-bold leading-tight mq750:text-[38px] mq450:text-[28px]"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span>Step Into the </span>
          <span className="text-accent-1">Right</span>
          <span> Scene</span>
        </h2>
        <p className="m-0 text-lg font-['Poppins'] font-normal leading-relaxed max-w-[500px] mq450:text-base">
          Skip the noise and explore a curated collection of events that prioritize quality, atmosphere, and genuine connection.
        </p>
        <button className="cursor-pointer border-none py-3.5 pl-8 pr-6 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-[#e6e6e6] mt-2">
          <span className="text-base font-semibold font-['Poppins'] text-[#2d2828]">
            Explore Now
          </span>
          <Image
            className="w-8 h-8 object-contain"
            width={32}
            height={32}
            alt=""
            src="/Icon7@2x.png"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
