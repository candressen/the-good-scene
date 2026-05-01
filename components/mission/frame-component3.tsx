import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1423px] flex items-start pt-0 px-[60px] pb-[83.4px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex items-end gap-[58px] max-w-full lg:flex-wrap">
        <section className="flex-1 flex flex-col items-start pt-0 px-0 pb-16 box-border min-w-[438px] min-h-[449px] max-w-full text-left text-5xl text-accent-2 font-['Playfair_Display']">
          <div className="self-stretch flex flex-col items-start gap-[30px]">
            <div className="flex items-center justify-center">
              <h2 className="m-0 relative text-[length:inherit] capitalize italic font-bold font-[inherit]">
                Connection Over Crowds
              </h2>
            </div>
            <div className="self-stretch relative text-lg font-[Poppins] text-subtext">
              We believe the best experiences aren’t defined by how many people
              attend, but by how they make you feel.
              <br />
              <br />
              That’s why we prioritize environments that encourage natural
              interaction, ease, and a sense of belonging. Whether you’re going
              out alone or with others, the focus is on creating spaces where
              connections happen effortlessly.
            </div>
            <div className="flex flex-col items-start pt-4 px-0 pb-0">
              <button className="cursor-pointer [border:none] py-4 pl-8 pr-[30px] bg-accent-2 h-[52px] rounded-lg flex items-center justify-center box-border gap-1.5 hover:bg-[#524a4a]">
                <div className="relative text-base font-medium font-[Poppins] text-white text-left shrink-0">
                  Explore Our Events
                </div>
                <Image
                  className="w-[33.3px] relative max-h-full object-contain shrink-0"
                  width={33.3}
                  height={33.3}
                  sizes="100vw"
                  src="/Icon7@2x.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start pt-[80.3px] pb-[103px] pl-[72px] pr-[57px] box-border max-w-full lg:flex-1">
          <div className="self-stretch flex items-start relative isolate max-w-full">
            <div className="h-full w-full absolute !!m-[0 important] bottom-[-112.05px] left-[-72.3px] rounded-[19.8px] bg-accent-3 [transform:_rotate(-13.7deg)] [transform-origin:0_0] shrink-0" />
            <div className="h-full w-full absolute !!m-[0 important] top-[324.63px] right-[-438.18px] rounded-[19.8px] bg-accent-1 [transform:_rotate(-169.4deg)] [transform-origin:0_0] z-[1] shrink-0" />
            <Image
              className="h-[329.6px] flex-1 relative rounded-[19.8px] max-w-full overflow-hidden object-cover z-[2] shrink-0"
              loading="lazy"
              width={440.8}
              height={329.6}
              sizes="100vw"
              alt=""
              src="/Rectangle-16@2x.png"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent3;
