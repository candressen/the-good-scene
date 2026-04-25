import type { NextPage } from "next";
import Image from "next/image";

export type BgDesignType = {
  className?: string;
};

const BgDesign: NextPage<BgDesignType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start pt-[25px] px-0 pb-0 box-border relative isolate gap-[65px] max-w-full z-[2] text-center text-2xl text-accent-3 font-['Cabin_Condensed'] mq750:gap-8 mq450:gap-4 bg-[#fdf6ee] ${className}`}
    >
      <Image
        className="w-[34.2px] absolute !!m-[0 important] top-[42.2px] right-[80px] max-h-full object-contain z-[1] shrink-0"
        loading="lazy"
        width={34.2}
        height={34.2}
        sizes="100vw"
        alt=""
        src="/streamline-color-ai-network-spark@2x.png"
      />
      <Image
        className="w-screen h-[1529px] absolute !!m-[0 important] top-[0px] left-[50%] -translate-x-1/2 overflow-hidden shrink-0 z-[0] pointer-events-none"
        width={1440}
        height={1529}
        sizes="100vw"
        alt=""
        src="/Vector-2.svg"
      />
      <div className="self-stretch flex items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full shrink-0">
        <div className="flex items-start relative isolate max-w-full">
          <b className="h-[58px] absolute !!m-[0 important] top-[20.18px] right-[-30.7px] tracking-[0.12em] inline-block [transform:_rotate(-8.4deg)] [transform-origin:0_0] shrink-0 mq450:text-[19px]">
            Meet New
            <br />
            People
          </b>
          <div className="flex-1 flex flex-col items-start gap-[58px] max-w-full shrink-0 text-left text-5xl text-[#000] font-['Playfair_Display'] mq750:gap-[29px]">
            <div className="flex items-start py-0 pl-[299px] pr-[295px] mq750:pl-[74px] mq750:pr-[73px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:pl-[149px] mq1250:pr-[147px] mq1250:box-border">
              <h2 className="m-0 h-16 relative text-[length:inherit] capitalize inline-block italic font-bold font-[inherit] z-[3] mq750:text-[38px] mq450:text-[29px]">
                What Makes Us Different
              </h2>
            </div>
            <div className="self-stretch flex items-start gap-[143px] max-w-full mq750:gap-9 mq450:gap-[18px] mq1100:flex-wrap mq1250:gap-[71px]">
              <section className="flex-1 flex flex-col items-start pt-[33px] px-0 pb-0 box-border min-w-[398px] max-w-full mq750:min-w-full">
                <div className="self-stretch h-[452px] relative">
                  <Image
                    className="absolute top-[0px] left-[67px] rounded-3xl w-[488px] h-[269px] object-cover z-[3]"
                    width={488}
                    height={269}
                    sizes="100vw"
                    alt=""
                    src="/Img3@2x.png"
                  />
                  <Image
                    className="absolute top-[128px] left-[0px] rounded-3xl w-[290px] h-[230px] object-cover z-[4]"
                    width={290}
                    height={230}
                    sizes="100vw"
                    alt=""
                    src="/Img1@2x.png"
                  />
                  <Image
                    className="absolute top-[211px] left-[345px] rounded-3xl w-[267px] h-[241px] object-cover z-[4]"
                    loading="lazy"
                    width={267}
                    height={241}
                    sizes="100vw"
                    alt=""
                    src="/Img4@2x.png"
                  />
                </div>
              </section>
              <div className="h-[393px] relative min-w-[384px] max-w-full mq750:min-w-full mq1100:flex-1">
                <Image
                  className="absolute top-[0px] left-[0px] rounded-3xl w-[264px] h-[302px] object-cover z-[3]"
                  width={264}
                  height={302}
                  sizes="100vw"
                  alt=""
                  src="/Img2@2x.png"
                />
                <Image
                  className="absolute top-[231px] left-[94px] rounded-3xl w-[290px] h-[162px] object-cover z-[4]"
                  loading="lazy"
                  width={290}
                  height={162}
                  sizes="100vw"
                  alt=""
                  src="/Img@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-[#2d2828] flex flex-col items-start pt-[18px] px-[60px] pb-[72px] box-border max-w-full shrink-0 text-left text-[120px] text-white font-[Poppins] mq750:pl-[30px] mq750:pr-[30px] mq750:pb-[31px] mq750:box-border mq1100:pt-5 mq1100:pb-[47px] mq1100:box-border">
        <div className="w-[1440px] h-[975px] relative bg-accent-2 hidden max-w-full z-[1] shrink-0" />
        <h1 className="m-0 w-[760px] h-[720px] relative text-[length:inherit] font-black font-[inherit] inline-block max-w-full z-[3] shrink-0 mq750:text-5xl mq450:text-3xl">
          A More Thoughtful Way to Go Out
        </h1>
        <div className="self-stretch flex items-start justify-end max-w-full mt-[-186px] relative shrink-0 text-lg">
          <div className="h-[351px] w-[646px] relative font-medium inline-block shrink-0 max-w-full z-[4]">
            We do things differently by focusing on what truly matters — not the
            number of options, but the quality of each experience. Every event
            you see here has been intentionally selected to stand out, so you
            can spend less time deciding and more time enjoying.
            <br />
            <br />
            We understand that going out isn’t just about the event itself —
            it’s about how it feels. That’s why we prioritize atmosphere,
            energy, and the kind of crowd you can expect, helping you choose
            experiences that align with your comfort and mood.
            <br />
            <br />
            Whether you're heading out alone or with others, the experience
            should feel easy and welcoming. Our goal is to remove uncertainty
            and make it simpler to step into social settings with confidence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgDesign;
