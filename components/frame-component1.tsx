import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const FrameComponent11: NextPage<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative mx-auto flex max-w-[1180px] min-h-[330px] flex-col overflow-hidden rounded-[28px] bg-white px-10 py-12 shadow-[0_18px_45px_rgba(0,0,0,0.14)] lg:flex-row lg:items-center lg:px-14 ${className}`}>

      {/* LEFT: Text */}
      <div className="relative z-20 max-w-[580px] lg:w-[54%]">
        <p className="font-['Playfair_Display'] italic text-[32px] text-[#1e1513] md:text-[42px]">
          Be <span className="text-[#e7675b]">Part</span> of the Scene
        </p>
        <h3 className="mt-4 text-[26px] font-semibold leading-tight text-[#1e1513] md:text-[32px]">
          Are You Hosting Something Worth Experiencing?
        </h3>
        <p className="mt-4 max-w-[560px] text-[16px] leading-[1.65] text-[#1e1513]/75">
          We&apos;re always looking for standout events that bring people together in the right way. Submit your event for consideration and become part of a carefully curated social experience.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/submit" className="rounded-full bg-[#1e1513] px-6 py-3 text-[14px] font-semibold font-['Poppins'] text-white hover:bg-black text-center">
            Submit Your Proposal
          </Link>
          <Link href="/contact" className="rounded-full border border-[#1e1513] bg-white px-6 py-3 text-[14px] font-semibold font-['Poppins'] text-[#1e1513] hover:bg-[#f5f5f5] text-center">
            Contact Us
          </Link>
        </div>
      </div>

      {/* RIGHT: People image */}
      <div className="relative z-10 mt-10 flex h-[220px] w-full items-end justify-center lg:absolute lg:bottom-0 lg:right-10 lg:mt-0 lg:h-full lg:w-[46%]">
        <div className="absolute bottom-8 right-0 h-[120px] w-[430px] max-w-full rounded-full bg-[#9b8ae6]" />
        <div className="absolute bottom-0 right-[100px] h-[90px] w-[260px] max-w-full rounded-full bg-[#9b8ae6]" />
        <b className="absolute right-[280px] top-[60px] z-20 hidden rotate-[-9deg] font-['Cabin_Condensed'] text-[22px] font-bold tracking-[0.18em] text-[#1e1513] lg:block">
          Make New<br />Friends
        </b>
        <Image
          src="/Highlight-Visual@2x.png"
          alt=""
          width={500}
          height={380}
          className="relative z-10 h-[250px] w-auto max-w-full object-contain lg:h-[305px]"
        />
      </div>
    </div>
  );
};
export default FrameComponent11;
