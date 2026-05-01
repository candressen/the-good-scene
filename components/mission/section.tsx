import type { NextPage } from "next";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

// Figma Section4: 1440x680, bg #e7675b
// Group 2 (top-left): x=53, y=43, w=375, h=228
//   Rectangle 22 (IMAGE): x=56, y=98, w=293, h=174, rot=3.1deg  <- back image
//   Rectangle 21 (IMAGE): x=156, y=57, w=262, h=148, rot=0.1deg <- front image
// Group 4 (white frame): x=1044, y=407, w=364, h=256 — white bg, rot=0.1deg
// Group 3 (bottom-right IMAGE): x=1037, y=407, w=346, h=223, rot=0.1deg

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section className={`self-stretch relative bg-[#e7675b] overflow-hidden shrink-0 max-w-full ${className}`}
      style={{ height: '680px' }}>

      {/* TOP-LEFT cluster: Group 2 at x=53, y=43 */}
      <div className="absolute" style={{ left: '53px', top: '43px', width: '375px', height: '228px', zIndex: 2 }}>
        {/* Rectangle 22 - back image, rot=3.1deg */}
        <div className="absolute rounded-xl overflow-hidden shadow-lg"
          style={{ left: '3px', top: '55px', width: '293px', height: '174px', transform: 'rotate(3.1deg)', zIndex: 1 }}>
          <Image src="/mission-trust-topleft1.png" alt="" fill className="object-cover" sizes="293px" />
        </div>
        {/* Rectangle 21 - front image, rot=0.1deg */}
        <div className="absolute rounded-xl overflow-hidden shadow-lg"
          style={{ left: '103px', top: '14px', width: '262px', height: '148px', transform: 'rotate(0.1deg)', zIndex: 2 }}>
          <Image src="/mission-trust-topleft2.png" alt="" fill className="object-cover" sizes="262px" />
        </div>
      </div>

      {/* CENTER text block: x=285, y=129, w=871 */}
      <div className="absolute flex flex-col items-center text-center"
        style={{ left: '285px', top: '129px', width: '871px', zIndex: 1 }}>
        <h2 className="m-0 text-5xl italic font-bold font-['Playfair_Display'] text-white leading-tight mb-6"
          style={{ maxWidth: '369px' }}>
          Guided by Trust,<br />Not Trends
        </h2>
        <p className="m-0 text-lg font-['Poppins'] text-white/80 leading-relaxed mb-8" style={{ maxWidth: '871px' }}>
          Our recommendations are built on thoughtful consideration, not
          algorithms alone. We aim to provide insight you can rely on — so when
          you choose something from here, you can feel confident in your decision.
          We&apos;re not here to promote everything. We&apos;re here to highlight what
          truly stands out, giving you a clearer, more dependable way to
          navigate your social life.
        </p>
        <button className="cursor-pointer border-none py-3.5 pl-8 pr-6 bg-white rounded-lg flex items-center gap-2 hover:bg-[#e6e6e6]">
          <span className="text-base font-medium font-['Poppins'] text-[#1e1716]">Contact Us</span>
        </button>
      </div>

      {/* BOTTOM-RIGHT: white frame (Group 4) + image (Group 3) */}
      {/* White frame at x=1044, y=407, rot=0.1deg */}
      <div className="absolute rounded-[16px] bg-white shadow-lg"
        style={{ left: '1044px', top: '407px', width: '364px', height: '256px', transform: 'rotate(0.1deg)', zIndex: 2 }} />
      {/* Image at x=1037, y=407, w=346, h=223 */}
      <div className="absolute rounded-[12px] overflow-hidden shadow-lg"
        style={{ left: '1048px', top: '412px', width: '346px', height: '223px', transform: 'rotate(0.1deg)', zIndex: 3 }}>
        <Image src="/mission-trust-bottomright.png" alt="" fill className="object-cover" sizes="346px" />
      </div>

    </section>
  );
};

export default Section;
