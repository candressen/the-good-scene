import type { NextPage } from "next";
import Image from "next/image";

export type EventVisualsType = {
  className?: string;
  rectangle6: string;
};

const EventVisuals: NextPage<EventVisualsType> = ({
  className = "",
  rectangle6,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white overflow-hidden flex items-start p-3 gap-6 text-left text-[18px] text-accent-2 font-[Poppins] mq450:flex-wrap ${className}`}
    >
      <Image
        className="h-[100px] w-[175px] relative rounded-xl object-cover mq450:flex-1"
        loading="lazy"
        width={175}
        height={100}
        sizes="100vw"
        alt=""
        src={rectangle6}
      />
      <div className="flex-1 flex flex-col items-start gap-4 min-w-[156px]">
        <div className="self-stretch flex flex-col items-start py-0 px-1 gap-3">
          <div className="self-stretch flex flex-col items-start gap-1 shrink-0">
            <div className="self-stretch relative font-medium">
              Rooftop Social Night
            </div>
            <div className="self-stretch flex items-center gap-2 text-[16px] text-subtext">
              <div className="relative text-[18px] hidden shrink-0">
                Fri, Mar 15
              </div>
              <div className="h-1.5 w-1.5 relative rounded-[50%] bg-subtext hidden shrink-0" />
              <div className="relative shrink-0">10:15 PM</div>
              <div className="h-1.5 w-1.5 relative rounded-[50%] bg-subtext shrink-0" />
              <div className="relative shrink-0">Downtown</div>
            </div>
          </div>
          <div className="w-[301px] relative text-[#000] hidden shrink-0">
            An easygoing evening with music, drinks, and a welcoming crowd.
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-0 px-1 bg-[transparent] flex items-center gap-1">
          <div className="relative text-[16px] font-medium font-[Poppins] text-accent-1 text-left">
            Open
          </div>
          <Image
            className="h-[16.9px] w-[17px] relative object-contain"
            width={17}
            height={16.9}
            sizes="100vw"
            alt=""
            src="/Group2@2x.png"
          />
        </button>
      </div>
    </div>
  );
};

export default EventVisuals;
