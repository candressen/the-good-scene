import type { NextPage } from "next";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[680px] relative bg-accent-1 overflow-hidden shrink-0 max-w-full ${className}`}
    >
      <Image
        className="absolute top-[43.4px] left-[53.1px] w-[375.3px] h-[228.3px] object-contain"
        loading="lazy"
        width={375.3}
        height={228.3}
        sizes="100vw"
        alt=""
        src="/Group-2@2x.png"
      />
      <section className="absolute top-[calc(50%_-_211px)] left-[calc(50%_-_435px)] w-[871px] flex flex-col items-center gap-[38.5px] max-w-full text-center text-5xl text-white font-['Playfair_Display']">
        <div className="flex items-center justify-center py-0 px-5">
          <h1 className="m-0 relative text-[length:inherit] capitalize italic font-bold font-[inherit]">
            Guided by Trust,
            <br />
            Not Trends
          </h1>
        </div>
        <div className="self-stretch relative text-lg font-[Poppins]">
          Our recommendations are built on thoughtful consideration, not
          algorithms alone. We aim to provide insight you can rely on — so when
          you choose something from here, you can feel confident in your
          decision.
          <br />
          We’re not here to promote everything. We’re here to highlight what
          truly stands out, giving you a clearer, more dependable way to
          navigate your social life.
        </div>
        <div className="flex flex-col items-start pt-4 px-5 pb-0">
          <button className="cursor-pointer [border:none] py-3.5 pl-8 pr-[30px] bg-white h-[52px] rounded-lg flex items-center justify-center box-border hover:bg-[#e6e6e6]">
            <div className="relative text-base font-medium font-[Poppins] text-accent-2 text-left">
              Contact Us
            </div>
          </button>
        </div>
      </section>
      <div className="absolute top-[406.6px] left-[1037px] w-[371.1px] h-64">
        <Image
          className="absolute top-[0px] left-[6.9px] w-full h-full object-contain"
          loading="lazy"
          width={364.2}
          height={256}
          sizes="100vw"
          alt=""
          src="/Group-4@2x.png"
        />
        <Image
          className="absolute top-[0.4px] left-[0px] w-[346.1px] h-[223.3px] object-contain z-[2]"
          width={346.1}
          height={223.3}
          sizes="100vw"
          alt=""
          src="/Group-3@2x.png"
        />
      </div>
    </section>
  );
};

export default Section;
