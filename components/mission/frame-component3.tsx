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
            <div className="self-stretch relative text-lg font-[Poppins] text-[#666666]">
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
              <button className="cursor-pointer [border:none] py-4 pl-8 pr-[30px] bg-[#2d2828] h-[52px] rounded-lg flex items-center justify-center box-border gap-1.5 hover:bg-[#524a4a]">
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
        <section className="flex items-center justify-center pt-8 pb-8 pl-8 pr-8 max-w-full lg:flex-1">
          <div className="relative w-[420px] h-[280px]">
            {/* Purple layer */}
            <div className="absolute inset-0 bg-[#9b7fa6] rounded-[24px]"
              style={{ transform: "rotate(4deg)", zIndex: 1 }} />
            {/* Coral layer */}
            <div className="absolute inset-0 bg-[#e7675b] rounded-[24px]"
              style={{ transform: "rotate(8deg)", zIndex: 0 }} />
            {/* Image */}
            <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-lg" style={{ zIndex: 2 }}>
              <Image
                fill
                className="object-cover"
                sizes="420px"
                alt=""
                src="/Rectangle-16@2x.png"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent3;
