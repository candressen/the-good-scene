"use client";
import type { NextPage } from "next";
import { useState } from "react";
import EventInstances from "./event-instances";

const EventHighlights: NextPage<{ className?: string }> = ({ className = "" }) => {
  const [items] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <div className={`w-full bg-[#e9ebe4] px-6 py-16 overflow-hidden ${className}`}>
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-10 text-center font-['Playfair_Display'] italic text-[42px] leading-tight text-[#1e1513] md:text-[56px]">
          Weekly Drop
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((_, i) => <EventInstances key={i} />)}
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
