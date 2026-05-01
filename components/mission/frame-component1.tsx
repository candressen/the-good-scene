import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

// Figma Section1: 1440x760, bg #1e1716
// Img group: x=-120, y=174, w=840, h=589
//   Rectangle 15 (purple #a791e3): x=-120, y=174, w=754, h=503, rot=0deg
//   Rectangle 14 (coral #e7675b): x=-45, y=242, w=765, h=520, rot=0.1deg
//   Rectangle 13 (IMAGE): x=-25, y=219, w=703, h=475
// Headline: x=820, y=272, w=558, h=272

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex-1 relative flex items-center max-w-full overflow-hidden ${className}`}>
      {/* Image group - left side, exact Figma positioning (relative to 1440px width) */}
      <div className="absolute" style={{ left: '-120px', top: '174px', width: '840px', height: '589px' }}>
        {/* Purple layer - back */}
        <div className="absolute rounded-[24px] bg-[#a791e3]"
          style={{ left: '0px', top: '0px', width: '754px', height: '503px', transform: 'rotate(0deg)', zIndex: 1 }} />
        {/* Coral layer - middle */}
        <div className="absolute rounded-[24px] bg-[#e7675b]"
          style={{ left: '75px', top: '68px', width: '765px', height: '520px', transform: 'rotate(0.1deg)', zIndex: 2 }} />
        {/* Photo - front */}
        <div className="absolute rounded-[20px] overflow-hidden"
          style={{ left: '95px', top: '45px', width: '703px', height: '475px', zIndex: 3 }}>
          <Image src="/mission-hero-photo.png" alt="Our Mission" fill className="object-cover" sizes="703px" />
        </div>
      </div>

      {/* Text block - right side, Figma x=820, y=272 */}
      <div className="absolute" style={{ left: '820px', top: '272px', width: '558px' }}>
        <div className="flex flex-col items-start gap-6 text-left text-white font-['Playfair_Display']">
          <h1 className="m-0 text-[56px] italic font-bold leading-tight">Our Mission</h1>
          <p className="m-0 text-lg font-['Poppins'] text-white/80 leading-relaxed" style={{ width: '558px' }}>
            We&apos;re building a more thoughtful way to experience social life — one
            that values intention, comfort, and meaningful connection over noise
            and volume.
          </p>
          <div className="pt-2">
            <button className="cursor-pointer border-none py-3.5 pl-8 pr-6 bg-white rounded-lg flex items-center gap-2 hover:bg-[#e6e6e6]">
              <span className="text-base font-medium font-['Poppins'] text-[#1e1716]">Explore More</span>
              <Image src="/Icon7@2x.png" alt="" width={28} height={28} className="object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
