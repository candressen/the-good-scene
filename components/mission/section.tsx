import type { NextPage } from "next";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section className={`self-stretch relative bg-[#e7645b] overflow-hidden shrink-0 min-h-[680px] max-w-full ${className}`}>

      {/* TOP-LEFT image cluster */}
      <div className="absolute" style={{ top: '44px', left: '54px', width: '375px', height: '240px', zIndex: 2 }}>
        {/* Back image - cocktail/drinks scene, slightly behind */}
        <div className="absolute rounded-xl overflow-hidden" style={{ top: '55px', left: '100px', width: '262px', height: '160px', transform: 'rotate(3deg)', zIndex: 1 }}>
          <Image src="/Group-2@2x.png" alt="" fill className="object-cover" sizes="262px" />
        </div>
        {/* Front image - dance/celebration scene, overlapping */}
        <div className="absolute rounded-xl overflow-hidden" style={{ top: '15px', left: '0px', width: '292px', height: '185px', transform: 'rotate(-2deg)', zIndex: 2 }}>
          <Image src="/Group-2@2x.png" alt="" fill className="object-cover" sizes="292px" />
        </div>
      </div>

      {/* CENTER text block */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 min-h-[680px]">
        <div className="flex flex-col items-center gap-6 max-w-[700px]">
          <h2 className="m-0 text-5xl italic font-bold font-['Playfair_Display'] text-white leading-tight mq750:text-[38px] mq450:text-[28px]">
            Guided by Trust,
            <br />
            Not Trends
          </h2>
          <p className="m-0 text-lg font-['Poppins'] text-white/80 leading-relaxed max-w-[600px]">
            Our recommendations are built on thoughtful consideration, not
            algorithms alone. We aim to provide insight you can rely on — so when
            you choose something from here, you can feel confident in your decision.
            <br /><br />
            We&apos;re not here to promote everything. We&apos;re here to highlight what
            truly stands out, giving you a clearer, more dependable way to
            navigate your social life.
          </p>
          <div className="pt-2">
            <button className="cursor-pointer border-none py-3.5 pl-8 pr-6 bg-white rounded-lg flex items-center gap-2 hover:bg-[#e6e6e6]">
              <span className="text-base font-medium font-['Poppins'] text-[#2d2828]">Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM-RIGHT image cluster - framed photo with white border */}
      <div className="absolute" style={{ bottom: '20px', right: '45px', width: '370px', height: '260px', zIndex: 2 }}>
        {/* White frame/border behind image, slightly rotated */}
        <div className="absolute bg-white rounded-[16px]" style={{ inset: '0', transform: 'rotate(3deg)', zIndex: 1 }} />
        {/* Main image on top */}
        <div className="absolute rounded-[12px] overflow-hidden" style={{ top: '5px', left: '5px', right: '5px', bottom: '5px', zIndex: 2 }}>
          <Image src="/Group-3@2x.png" alt="" fill className="object-cover" sizes="360px" />
        </div>
      </div>

    </section>
  );
};

export default Section;
