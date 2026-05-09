import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start gap-[60px] max-w-full text-left text-[56px] text-accent-2 font-['Playfair_Display'] mq800:gap-[30px] ${className}`}
    >
      <header className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 z-[2]">
        <div className="self-stretch h-20 rounded-2xl bg-white overflow-hidden shrink-0 flex items-center justify-between py-0 px-[60px] box-border gap-5 mq450:gap-5 mq450:pl-[30px] mq450:pr-[30px] mq450:box-border">
          <Image
            className="h-[50px] w-[120.9px] relative"
            loading="lazy"
            width={120.9}
            height={50}
            sizes="100vw"
            alt=""
            src="/Group1.svg"
          />
          <div className="flex items-center gap-10 mq800:gap-5">
            <nav className="m-0 flex items-center gap-6 text-left text-[18px] text-accent-2 font-[Poppins] mq450:hidden">
              <div className="relative">Our Mission</div>
              <div className="relative">Lorem</div>
              <div className="relative">Calendar</div>
              <div className="relative">Portal</div>
            </nav>
            <div className="flex items-center gap-4 mq450:hidden">
              <button className="cursor-pointer [border:none] py-3 px-6 bg-accent-2 rounded-lg flex items-center justify-center hover:bg-[#524a4a]">
                <div className="relative text-[16px] font-medium font-[Poppins] text-white text-left">
                  Get Started
                </div>
              </button>
              <button className="cursor-pointer border-accent-2 border-solid border-[1px] py-2.5 px-[23px] bg-[transparent] rounded-lg flex items-center justify-center hover:bg-[rgba(82,74,74,0.09)] hover:border-[#524a4a] hover:border-solid hover:hover:border-[1px] hover:box-border">
                <div className="relative text-[16px] font-medium font-[Poppins] text-accent-2 text-left">
                  Contact Us
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1096px] flex flex-col items-center relative isolate gap-6 max-w-full">
          <h1 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] z-[0] shrink-0 mq800:text-[45px] mq450:text-[34px]">
            Upcoming Events
          </h1>
          <div className="self-stretch relative text-[18px] font-[Poppins] text-center z-[1] shrink-0">
            Explore a curated selection of upcoming experiences designed to help
            you find the right atmosphere, connect with the right people, and
            make the most of your time out.
          </div>
          <button className="cursor-pointer [border:none] pt-4 px-0 pb-0 bg-[transparent] hidden flex-col items-start z-[2] shrink-0">
            <div className="h-[52px] rounded-lg bg-white flex items-center justify-center py-4 pl-8 pr-[30px] box-border gap-1.5">
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
            </div>
          </button>
          <Image
            className="w-[170.3px] h-[90.8px] absolute !!m-[0 important] top-[-30px] left-[-99px] object-contain z-[3] shrink-0"
            loading="lazy"
            width={170.3}
            height={90.8}
            sizes="100vw"
            alt=""
            src="/Events-Spacer@2x.png"
          />
          <div className="w-[94.5px] h-[66px] absolute !!m-[0 important] top-[-5px] right-[-76.5px] shrink-0">
            <Image
              className="absolute top-[0px] left-[0px] w-[51px] h-[51px] object-contain"
              width={51}
              height={51}
              sizes="100vw"
              alt=""
              src="/iconoir-spark2@2x.png"
            />
            <Image
              className="absolute h-[calc(100%_-_3.4px)] top-[3.4px] bottom-[0px] left-[31.9px] max-h-full w-[62.6px] object-contain"
              width={62.6}
              height={62.6}
              sizes="100vw"
              alt=""
              src="/iconoir-spark3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
