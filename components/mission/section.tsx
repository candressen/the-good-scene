import type { NextPage } from "next";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[680px] relative bg-[#e7675b] overflow-hidden shrink-0 max-w-full ${className}`}
    >
      {/* Top-left cluster */}
      <div className="absolute top-[43.4px] left-[53.1px] w-[375.3px] h-[228.3px]">
        <Image
          className="absolute top-[55px] left-[3px] w-[293px] h-[174px] object-cover rounded-xl"
          style={{ transform: 'rotate(3.1deg)', zIndex: 1 }}
          loading="lazy"
          width={293}
          height={174}
          sizes="293px"
          alt=""
          src="/mission-trust-topleft1.png"
        />
        <Image
          className="absolute top-[14px] left-[103px] w-[262px] h-[148px] object-cover rounded-xl"
          style={{ transform: 'rotate(0.1deg)', zIndex: 2 }}
          width={262}
          height={148}
          sizes="262px"
          alt=""
          src="/mission-trust-topleft2.png"
        />
      </div>

      {/* Center text */}
      <section className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center gap-8 text-center text-white font-['Playfair_Display']">
        <div className="flex items-center justify-center py-0 px-5">
          <h1 className="m-0 relative text-[length:inherit] capitalize italic font-bold font-[inherit]">
            Guided by Trust,
            <br />
            Not Trends
          </h1>
        </div>
        <div className="self-stretch relative text-[18px] font-[Poppins]">
          Our recommendations are built on thoughtful consideration, not
          algorithms alone. We aim to provide insight you can rely on — so when
          you choose something from here, you can feel confident in your
          decision.
          <br />
          We&apos;re not here to promote everything. We&apos;re here to highlight what
          truly stands out, giving you a clearer, more dependable way to
          navigate your social life.
        </div>
        <div className="flex flex-col items-start pt-4 px-5 pb-0">
          <button className="cursor-pointer [border:none] py-3.5 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center box-border hover:bg-[#e6e6e6]">
            <div className="relative text-[16px] font-medium font-[Poppins] text-[#2d2828] text-left">
              Contact Us
            </div>
          </button>
        </div>
      </section>

      {/* Bottom-right card - lower right, decorative */}
      <div className="hidden lg:block absolute right-[90px] bottom-[70px] bg-white p-[6px] rounded-[16px]"
        style={{ transform: "rotate(5deg)", zIndex: 2, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
        <div className="relative rounded-[12px] overflow-hidden" style={{ width: "300px", height: "180px" }}>
          <Image
            fill
            className="object-cover"
            sizes="300px"
            alt=""
            src="/mission-trust-bottomright.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
