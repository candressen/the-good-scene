import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type FrameComponent1Type = { className?: string };

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <>
      {/* Image stack — left grid cell */}
      <div className={`relative overflow-visible ${className}`}>
        <div className="relative w-[600px] h-[390px] overflow-visible p-8">
          {/* Purple — back, z-10 */}
          <div className="absolute inset-8 z-10 rounded-[26px] bg-[#9b8ae6]"
            style={{ transform: 'rotate(-4deg)' }} />
          {/* Red — behind, z-0 */}
          <div className="absolute left-12 top-12 z-0 h-full w-full rounded-[26px] bg-[#e7675b]"
            style={{ transform: 'rotate(3deg)' }} />
          {/* Image — front, z-30 */}
          <div className="relative z-30 h-full w-full rounded-[22px] overflow-hidden"
            style={{ transform: 'rotate(-3deg)' }}>
            <Image
              src="/mission-hero-photo.png"
              alt="Our Mission"
              fill
              className="object-cover"
              sizes="560px"
            />
          </div>
        </div>
      </div>

      {/* Text — right grid cell */}
      <div className="max-w-[520px]">
        <h1 className="text-[52px] md:text-[64px] italic font-bold leading-tight font-['Playfair_Display'] text-white">
          Our Mission
        </h1>
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
    </>
  );
};
export default FrameComponent1;
