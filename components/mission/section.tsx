import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type SectionType = { className?: string };

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section className={`relative w-full overflow-hidden bg-[#e7675b] px-6 py-24 text-center text-white ${className}`}>

      {/* Top-left cluster — desktop only */}
      <div className="hidden lg:block absolute top-[43px] left-[53px] w-[375px] h-[228px]" style={{ zIndex: 2 }}>
        <div className="absolute rounded-xl overflow-hidden shadow-lg" style={{ top: '55px', left: '3px', width: '293px', height: '174px', transform: 'rotate(3.1deg)', zIndex: 1 }}>
          <Image src="/mission-trust-topleft1.png" alt="" fill className="object-cover" sizes="293px" />
        </div>
        <div className="absolute rounded-xl overflow-hidden shadow-lg" style={{ top: '14px', left: '103px', width: '262px', height: '148px', transform: 'rotate(0.1deg)', zIndex: 2 }}>
          <Image src="/mission-trust-topleft2.png" alt="" fill className="object-cover" sizes="262px" />
        </div>
      </div>

      {/* Center text — z-20 so it's above decorative card */}
      <div className="relative z-20 mx-auto max-w-[820px]">
        <h2 className="text-[42px] md:text-[54px] italic font-bold font-['Playfair_Display'] leading-tight">
          Guided by Trust,<br />Not Trends
        </h2>
        <p className="mt-6 text-[16px] leading-[1.7] text-white/90 font-['Poppins']">
          Our recommendations are built on thoughtful consideration, not algorithms alone. We aim to provide insight you can rely on — so when you choose something from here, you can feel confident in your decision.
          <br /><br />
          We&apos;re not here to promote everything. We&apos;re here to highlight what truly stands out, giving you a clearer, more dependable way to navigate your social life.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1e1513] hover:bg-[#f0f0f0] font-['Poppins']">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom-right card — desktop, z-10 (below text z-20) */}
      <div className="hidden lg:block absolute bottom-[55px] right-[70px] z-10" style={{ transform: 'rotate(6deg)' }}>
        <div className="bg-white p-[6px] rounded-[16px] shadow-lg">
          <div className="relative rounded-[12px] overflow-hidden" style={{ width: '260px', height: '155px' }}>
            <Image src="/mission-trust-bottomright.png" alt="" fill className="object-cover" sizes="260px" />
          </div>
        </div>
      </div>

      {/* Mobile card — stacked below text */}
      <div className="relative z-10 mx-auto mt-10 lg:hidden" style={{ transform: 'rotate(3deg)', width: '280px' }}>
        <div className="bg-white p-[6px] rounded-[16px] shadow-lg">
          <div className="relative rounded-[12px] overflow-hidden" style={{ width: '100%', height: '155px' }}>
            <Image src="/mission-trust-bottomright.png" alt="" fill className="object-cover" sizes="280px" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
