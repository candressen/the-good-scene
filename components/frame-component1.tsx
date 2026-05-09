import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative mx-auto flex max-w-[1180px] flex-col overflow-hidden rounded-[22px] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.12)] lg:min-h-[260px] lg:flex-row lg:items-center lg:px-12 ${className}`}
    >
      <div className="flex-1 relative max-w-full min-h-[500px] mq450:min-h-0">
        <div className="relative mt-[60px] shadow-[0px_4px_16px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white w-full overflow-hidden flex items-start py-14 px-[61px] box-border max-w-full mq750:py-10 mq750:px-[30px] mq450:py-8 mq450:px-5">
          <div className="w-[592px] flex flex-col items-start gap-10 max-w-full mq750:gap-5">
            <h2 className="m-0 self-stretch relative text-[length:inherit] capitalize italic font-bold font-[inherit] mq750:text-[38px] mq450:text-[29px]">
              <span>{`Be `}</span>
              <span className="text-accent-1">Part</span>
              <span> of the Scene</span>
            </h2>
            <section className="self-stretch flex flex-col items-start gap-6 text-left text-2xl text-accent-2 font-[Poppins]">
              <h3 className="m-0 self-stretch relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
                Are You Hosting Something Worth Experiencing?
              </h3>
              <div className="self-stretch relative text-lg">
                We’re always looking for standout events that bring people
                together in the right way. Submit your event for consideration
                and become part of a carefully curated social experience.
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="cursor-pointer border-none rounded-full bg-[#1e1513] px-6 py-3 text-[14px] font-semibold text-white hover:bg-black">
                  <div className="relative text-base font-medium font-[Poppins] text-white text-left">
                    Submit Your Proposal
                  </div>
                </button>
                <button className="cursor-pointer rounded-full border border-[#1e1513] bg-white px-6 py-3 text-[14px] font-semibold text-[#1e1513] hover:bg-[#f5f5f5]">
                  <div className="relative text-base font-medium font-[Poppins] text-accent-2 text-left">
                    Contact Us
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[501px] w-[819px] flex items-start isolate text-center text-2xl text-accent-3 font-['Cabin_Condensed']">
          <b className="h-[58px] absolute !!m-[0 important] top-[176.57px] left-[106px] tracking-[0.12em] inline-block [transform:_rotate(-9.1deg)] [transform-origin:0_0] z-[1] mq450:text-[19px]">
            Make New
            <br />
            Friends
          </b>
          <Image
            className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            width={819}
            height={603}
            sizes="100vw"
            alt=""
            src="/Highlight-Visual@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
