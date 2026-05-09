import type { NextPage } from "next";
import Image from "next/image";

const FrameComponent11: NextPage<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative mx-auto flex max-w-[1180px] min-h-[300px] flex-col overflow-hidden rounded-[28px] bg-white px-8 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.14)] lg:flex-row lg:items-center lg:px-12 ${className}`}>

      {/* LEFT: Text content — full width on mobile, 52% on desktop */}
      <div className="relative z-20 w-full lg:w-[52%]">
        <p className="font-['Playfair_Display'] italic text-[28px] text-[#1e1513] md:text-[36px]">
          Be <span className="text-[#e7675b]">Part</span> of the Scene
        </p>
        <h3 className="mt-4 text-[24px] font-semibold leading-tight text-[#1e1513] md:text-[30px]">
          Are You Hosting Something Worth Experiencing?
        </h3>
        <p className="mt-4 max-w-[540px] text-[15px] leading-[1.6] text-[#1e1513]/75 md:text-[16px]">
          We&apos;re always looking for standout events that bring people together in the right way. Submit your event for consideration and become part of a carefully curated social experience.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button className="cursor-pointer border-none rounded-full bg-[#1e1513] px-6 py-3 text-[14px] font-semibold font-['Poppins'] text-white hover:bg-black">
            Submit Your Proposal
          </button>
          <button className="cursor-pointer rounded-full border border-[#1e1513] bg-white px-6 py-3 text-[14px] font-semibold font-['Poppins'] text-[#1e1513] hover:bg-[#f5f5f5]">
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT: People image with purple shape — below text on mobile, right side on desktop */}
      <div className="relative z-10 mt-8 flex h-[220px] w-full items-end justify-center lg:absolute lg:bottom-0 lg:right-8 lg:mt-0 lg:h-full lg:w-[48%]">
        {/* Purple shapes behind people */}
        <div className="absolute bottom-8 right-0 h-[115px] w-[420px] max-w-full rounded-full bg-[#9b8ae6]" />
        <div className="absolute bottom-0 right-[100px] h-[90px] w-[260px] max-w-full rounded-full bg-[#9b8ae6]" />
        {/* Decorative label */}
        <b className="absolute right-[280px] top-[60px] z-20 hidden rotate-[-9deg] font-['Cabin_Condensed'] text-[22px] font-bold tracking-[0.18em] text-[#1e1513] lg:block">
          Make New<br />Friends
        </b>
        {/* People image */}
        <Image
          src="/Highlight-Visual@2x.png"
          alt=""
          width={500}
          height={380}
          className="relative z-10 h-[240px] w-auto max-w-full object-contain lg:h-[285px]"
        />
      </div>
    </div>
  );
};

export default FrameComponent11;
