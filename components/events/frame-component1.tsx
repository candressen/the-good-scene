import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-full relative flex items-start py-0 pl-[820px] pr-[62px] box-border gap-[100.6px] shrink-0 max-w-full mq1100:gap-[25px] mq1100:pl-5 mq1100:box-border mq750:gap-[50px] mq750:pl-[410px] mq750:pr-[31px] mq750:box-border mq450:flex-wrap ${className}`}
    >
      <Image
        className="ml-[-940.1px] w-[839.5px] relative max-h-full object-cover shrink-0 max-w-[151%] mq450:flex-1"
        loading="lazy"
        width={839.5}
        height={588.5}
        sizes="100vw"
        alt=""
        src="/Img6@2x.png"
      />
      <section className="flex flex-col items-start pt-[97.8px] px-0 pb-0 box-border max-w-full shrink-0 text-left text-[56px] text-white font-['Playfair_Display'] mq1100:pt-16 mq1100:box-border mq450:flex-1 mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start gap-6 shrink-0">
          <h1 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] mq1100:text-[34px] mq750:text-[45px]">
            Our Mission
          </h1>
          <div className="self-stretch relative text-[18px] font-[Poppins]">
            We’re building a more thoughtful way to experience social life — one
            that values intention, comfort, and meaningful connection over noise
            and volume.
          </div>
          <div className="flex flex-col items-start pt-4 px-0 pb-0">
            <button className="cursor-pointer [border:none] py-4 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center box-border gap-1.5 hover:bg-[#e6e6e6]">
              <div className="relative text-[16px] font-medium font-[Poppins] text-accent-2 text-left shrink-0">
                Explore More
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent1;
