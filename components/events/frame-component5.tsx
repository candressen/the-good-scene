import type { NextPage } from "next";
import Image from "next/image";
import IconButtonStandard from "./icon-button-standard";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start justify-end py-0 pl-[50px] pr-[49px] box-border max-w-full text-left text-[16px] text-accent-1 font-[Poppins] mq1350:pl-[25px] mq1350:pr-6 mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center gap-8 max-w-full mq800:gap-4">
        <div className="w-[648px] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] rounded-[28px] bg-white overflow-hidden flex items-center max-w-[720px] mq800:max-w-full">
          <div className="self-stretch flex-1 flex items-center p-1 relative isolate">
            <IconButtonStandard
              size="Small"
              state="Enabled"
              type="Round"
              width="Default"
              icon={
                <Image
                  className="h-6 w-full relative h-6 w-full relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                alt=""
                src="/Icon7@2x.png"
              />
              }
              showLeadingIcon={false}
            />
            <input
              className="w-[calc(100%_-_32px)] [border:none] [outline:none] bg-[transparent] h-12 flex-1 flex items-center py-3 px-5 box-border font-[Roboto] text-[16px] text-subtext min-w-[250px] z-[1]"
              placeholder="Search"
              type="text"
            />
            <div className="!!m-[0 important] absolute top-[calc(50%_-_24px)] right-[4px] flex items-center justify-end z-[2]">
              <IconButtonStandard
                size="Small"
                state="Enabled"
                type="Round"
                width="Default"
                icon={
                  <Image
                    className="h-6 w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Icon.svg"
                  />
                }
                showLeadingIcon
              />
              <IconButtonStandard
                size="Small"
                state="Enabled"
                type="Round"
                width="Default"
                icon={
                  <Image
                    className="h-6 w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                alt=""
                src="/Icon7@2x.png"
              />
                }
                showLeadingIcon={false}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-3 mq1350:h-auto mq1350:flex-wrap">
          <Image
            className="w-6 relative max-h-full"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/mynaui-filter.svg"
          />
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Woman Only</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">{`Arts & Crafts`}</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">No Drinking</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Reggaeton</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Classy</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">{`Wine & Gossip`}</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Rofftop Views</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Pop-up</div>
          </div>
          <div className="rounded-3xl bg-[rgba(231,100,91,0.2)] flex items-center justify-center py-2 px-5">
            <div className="relative font-medium">Singles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
