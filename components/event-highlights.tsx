"use client";
import type { NextPage } from "next";
import { useState } from "react";
import EventInstances from "./event-instances";

const EventHighlights: NextPage<{ className?: string }> = ({ className = "" }) => {
  const [items] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <div className={`w-full bg-[#e9ebe4] overflow-hidden ${className}`}>
      {/* Title band */}
      <div className="flex h-[90px] items-center justify-center bg-[#1e1513] px-6">
        <h1 className="text-center text-[42px] font-black uppercase tracking-[0.18em] text-white md:text-[56px] max-sm:text-[34px] max-sm:tracking-[0.12em]">
          Weekly Drop
        </h1>
      </div>
      {/* Cards */}
      <div className="mx-auto max-w-[1180px] px-6 py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((_, index) => (
            <EventInstances key={index} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="cursor-pointer border-none rounded-full bg-[#1e1513] px-7 py-3 text-[14px] font-semibold text-white hover:bg-black">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventHighlights;
