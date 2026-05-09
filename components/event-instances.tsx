import type { NextPage } from "next";
import Image from "next/image";

const EventInstances: NextPage<{ className?: string }> = ({ className = "" }) => {
  return (
    <section className={`rounded-[16px] bg-white p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex flex-col items-start text-left font-['Poppins'] ${className}`}>
      <Image
        className="h-[160px] w-full rounded-[12px] object-cover"
        loading="lazy"
        width={392}
        height={160}
        sizes="(max-width:768px) 100vw, 33vw"
        alt=""
        src="/Rectangle-64@2x.png"
      />
      <div className="mt-4 flex flex-col gap-1 w-full">
        <h3 className="text-[20px] font-bold text-[#1e1513]">Rooftop Social Night</h3>
        <div className="flex items-center gap-2 text-[14px] font-medium text-[#1e1513]/70 flex-wrap">
          <span>Fri, Mar 15</span>
          <span className="h-1 w-1 rounded-full bg-current opacity-50" />
          <span>10:15 PM</span>
          <span className="h-1 w-1 rounded-full bg-current opacity-50" />
          <span>Downtown</span>
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-[1.45] text-[#1e1513]/75">
        An easygoing evening with music, drinks, and a welcoming crowd.
      </p>
      <a href="#" className="mt-3 inline-block text-[14px] font-semibold text-[#e76255] hover:underline">
        Read More
      </a>
    </section>
  );
};
export default EventInstances;
