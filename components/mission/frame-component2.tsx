import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[764px] flex items-start pt-0 px-0 pb-[84px] box-border max-w-full ${className}`}
    >
      <div className="self-stretch flex-1 bg-accent-3 flex flex-col items-start py-[202px] pl-[285px] pr-[284px] box-border relative isolate max-w-full">
        <div className="w-[682px] h-[425.3px] absolute !!m-[0 important] top-[-112.6px] right-[-77px] shrink-0">
          <div className="absolute top-[195.9px] left-[0px] rounded-[140.3px] bg-accent-1 w-[473.9px] h-[88.6px]" />
          <div className="absolute top-[283.6px] left-[58.8px] rounded-[140.3px] bg-accent-1 w-[563.5px] h-[88.6px] z-[1]" />
          <div className="absolute top-[111.9px] left-[207.1px] rounded-[140.3px] bg-accent-1 w-[474.9px] h-[88.6px] z-[1]" />
          <div className="absolute top-[336.6px] left-[183px] rounded-[140.3px] bg-accent-1 w-[474.9px] h-[88.6px] z-[2]" />
          <Image
            className="absolute top-[0px] left-[72.8px] w-[559.8px] h-[372.3px] object-cover z-[3]"
            loading="lazy"
            width={559.8}
            height={372.3}
            sizes="100vw"
            alt=""
            src="/d2f47e82-97ed-4bbc-a918-e3207f34df0b-removalai-preview-1@2x.png"
          />
        </div>
        <div className="w-[644.1px] h-[418.5px] absolute !!m-[0 important] bottom-[-0.5px] left-[-121.1px] shrink-0">
          <div className="absolute top-[235px] left-[152.5px] rounded-[145.2px] bg-accent-1 w-[491.6px] h-[91.7px]" />
          <div className="absolute top-[143.3px] left-[36.6px] rounded-[145.2px] bg-accent-1 w-[491.6px] h-[91.7px]" />
          <div className="absolute top-[326.7px] left-[92.7px] rounded-[145.2px] bg-accent-1 w-[490.6px] h-[91.7px]" />
          <Image
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[627.7px] object-cover z-[1]"
            width={627.7}
            height={418.5}
            sizes="100vw"
            alt=""
            src="/8f293188-2aa1-4451-acb8-d99f72d5a2da-removalai-preview-1@2x.png"
          />
        </div>
        <section className="self-stretch flex flex-col items-center gap-10 z-[2] shrink-0 text-center text-5xl text-white font-['Playfair_Display']">
          <div className="flex items-center justify-center shrink-0">
            <h1 className="m-0 relative text-[length:inherit] capitalize italic font-bold font-[inherit]">
              A Carefully Curated <br />
              Selection
            </h1>
          </div>
          <div className="self-stretch relative text-lg font-[Poppins] shrink-0">
            Every experience featured here is intentionally selected. We look
            beyond popularity and focus on quality — what makes an event feel
            engaging, welcoming, and genuinely enjoyable.
            <br />
            This means fewer options, but better ones. Each recommendation is
            chosen to reflect a higher standard, so you can trust that what you
            see is worth showing up for.
          </div>
          <button className="cursor-pointer [border:none] pt-4 px-0 pb-0 bg-[transparent] hidden flex-col items-start shrink-0">
            <div className="h-[52px] rounded-lg bg-accent-2 flex items-center justify-center py-3.5 pl-8 pr-[30px] box-border gap-1.5">
              <div className="relative text-base font-medium font-[Poppins] text-white text-left shrink-0">
                Explore Our Events
              </div>
              <Image
                className="w-[33.3px] relative max-h-full object-contain shrink-0"
                width={33.3}
                height={33.3}
                sizes="100vw"
                alt=""
                src="/Icon7@2x.png"
              />
            </div>
          </button>
        </section>
        <Image
          className="w-[51px] absolute !!m-[0 important] bottom-[247px] left-[0px] max-h-full object-contain z-[2] shrink-0"
          loading="lazy"
          width={51}
          height={51}
          sizes="100vw"
          alt=""
          src="/iconoir-spark1@2x.png"
        />
        <Image
          className="w-[198.4px] h-[112.8px] absolute !!m-[0 important] top-[50px] left-[51px] object-contain shrink-0"
          loading="lazy"
          width={198.4}
          height={112.8}
          sizes="100vw"
          alt=""
          src="/Spark-Separator-One@2x.png"
        />
        <Image
          className="w-[57.5px] absolute !!m-[0 important] top-[283px] right-[12.5px] max-h-full object-contain z-[4] shrink-0"
          loading="lazy"
          width={57.5}
          height={57.5}
          sizes="100vw"
          alt=""
          src="/streamline-color-ai-network-spark2@2x.png"
        />
        <Image
          className="w-[43.9px] h-[43.6px] absolute !!m-[0 important] bottom-[137.4px] left-[349px] object-contain z-[2] shrink-0"
          width={43.9}
          height={43.6}
          sizes="100vw"
          alt=""
          src="/Group-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
