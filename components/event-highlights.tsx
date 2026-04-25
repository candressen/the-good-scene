"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import EventInstances from "./event-instances";

export type EventHighlightsType = {
  className?: string;
};

const EventHighlights: NextPage<EventHighlightsType> = ({ className = "" }) => {
  const [eventInstancesItems] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <div
      className={`self-stretch flex flex-col items-end gap-[53px] max-w-full mq750:gap-[26px] ${className}`}
    >
      <section className="self-stretch flex items-start relative isolate max-w-full text-center text-[80px] text-white font-[Montserrat]">
        <Image
          className="w-[78.9px] absolute !!m-[0 important] bottom-[-5.5px] left-[143.5px] max-h-full object-contain shrink-0"
          loading="lazy"
          width={78.9}
          height={78.9}
          sizes="100vw"
          alt=""
          src="/iconoir-spark@2x.png"
        />
        <div className="h-7 w-7 absolute !!m-[0 important] top-[50.28px] right-[190.8px] overflow-hidden shrink-0 [transform:_rotate(-11.3deg)] [transform-origin:0_0]" />
        <div className="flex-1 bg-accent-2 flex items-start py-[31px] pl-[395px] pr-[392px] box-border max-w-full z-[1] shrink-0 mq750:pl-[197px] mq750:pr-[196px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 relative text-[length:inherit] tracking-[0.02em] uppercase font-extrabold font-[inherit] mq750:text-[40px] mq450:text-2xl">
            Weekly Drop
          </h1>
        </div>
      </section>
      <div className="self-stretch flex items-start justify-end py-0 pl-[61px] pr-[59px] box-border max-w-full mq750:pl-[30px] mq750:pr-[29px] mq750:box-border">
        <div className="flex-1 flex items-start relative isolate max-w-full">
          <Image
            className="h-[92.8px] w-[192.8px] absolute !!m-[0 important] bottom-[-56.8px] left-[65px] object-contain shrink-0"
            loading="lazy"
            width={192.8}
            height={92.8}
            sizes="100vw"
            alt=""
            src="/Frame-26@2x.png"
          />
          <div className="flex-1 flex flex-col items-center gap-[60px] max-w-full z-[1] shrink-0 mq750:gap-[30px]">
            <div className="self-stretch flex items-start flex-wrap content-start gap-6">
              {eventInstancesItems.map((item, index) => (
                <EventInstances key={index} />
              ))}
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-8 bg-white border border-accent-2 rounded-lg flex items-center justify-center hover:bg-gray-50">
              <div className="relative text-base font-medium font-[Poppins] text-accent-2 text-left">
                View More
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
