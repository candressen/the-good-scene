import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex-1 flex items-center justify-between px-16 py-0 gap-16 max-w-full mq750:flex-col mq750:px-8 mq750:gap-10 ${className}`}>
      {/* Image block with decorative layers */}
      <div className="relative flex-shrink-0 w-[560px] h-[400px] mq750:w-full mq750:h-[280px]">
        {/* Coral layer - lower right, rotate +3deg */}
        <div
          className="absolute bg-[#e7645b] rounded-[24px]"
          style={{ width: '500px', height: '360px', bottom: '-20px', left: '40px', transform: 'rotate(3deg)', zIndex: 1 }}
        />
        {/* Purple layer - upper left, rotate -2deg */}
        <div
          className="absolute bg-[#a791e3] rounded-[24px]"
          style={{ width: '500px', height: '360px', top: '-20px', left: '-20px', transform: 'rotate(-2deg)', zIndex: 2 }}
        />
        {/* Main photo on top */}
        <div className="absolute rounded-[18px] overflow-hidden" style={{ top: '16px', left: '16px', right: '-16px', bottom: '16px', zIndex: 3 }}>
          <Image
            src="/Img6@2x.png"
            alt="People celebrating"
            fill
            className="object-cover"
            sizes="560px"
          />
        </div>
      </div>

      {/* Text block - right side, vertically centered */}
      <section className="flex flex-col items-start gap-6 max-w-[480px] text-left text-white font-['Playfair_Display'] mq750:max-w-full">
        <h1 className="m-0 text-[56px] italic font-bold leading-tight mq750:text-[40px] mq450:text-[32px]">
          Our Mission
        </h1>
        <p className="m-0 text-lg font-['Poppins'] text-white/80 leading-relaxed">
          We&apos;re building a more thoughtful way to experience social life — one
          that values intention, comfort, and meaningful connection over noise
          and volume.
        </p>
        <div className="pt-2">
          <button className="cursor-pointer border-none py-3.5 pl-8 pr-6 bg-white rounded-lg flex items-center gap-2 hover:bg-[#e6e6e6]">
            <span className="text-base font-medium font-['Poppins'] text-[#2d2828]">Explore More</span>
            <Image src="/Icon7@2x.png" alt="" width={28} height={28} className="object-contain" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent1;
