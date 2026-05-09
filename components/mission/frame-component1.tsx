import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type FrameComponent1Type = { className?: string };

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`mx-auto flex max-w-[1240px] items-center justify-between gap-12 px-6 py-20 w-full ${className}`}>

      {/* LEFT: Image stack — overflow-visible, safe padding */}
      <div className="relative w-[560px] h-[370px] overflow-visible p-4 flex-shrink-0">
        {/* Purple — back */}
        <div className="absolute inset-4 rounded-[24px] bg-[#9b8ae6]" style={{ transform: 'rotate(-4deg)', zIndex: 1 }} />
        {/* Coral — middle */}
        <div className="absolute top-8 left-8 h-full w-full rounded-[24px] bg-[#e7675b]" style={{ transform: 'rotate(3deg)', zIndex: 2 }} />
        {/* Image — top */}
        <div className="relative z-10 h-full w-full rounded-[20px] overflow-hidden" style={{ transform: 'rotate(-3deg)' }}>
          <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="520px" />
        </div>
      </div>

      {/* RIGHT: Text */}
      <div className="max-w-[520px]">
        <h1 className="text-[52px] md:text-[64px] italic font-bold leading-tight font-['Playfair_Display'] text-white">Our Mission</h1>
        <p className="mt-4 text-[17px] leading-[1.6] font-['Poppins'] text-white/80 max-w-[460px]">
          We&apos;re building a more thoughtful way to experience social life — one that values intention, comfort, and meaningful connection over noise and volume.
        </p>
        <div className="mt-6">
          <Link href="/events" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-[16px] font-medium font-['Poppins'] text-[#1e1513] hover:bg-[#e6e6e6]">
            Explore More
            <Image src="/Icon7@2x.png" alt="" width={28} height={28} className="object-contain" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FrameComponent1;
