import type { NextPage } from "next";
import Image from "next/image";

export type EventInstancesType = {
  className?: string;
};

const EventInstances: NextPage<EventInstancesType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[424px] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] rounded-3xl bg-white overflow-hidden shrink-0 flex flex-col items-start pt-4 px-4 pb-6 box-border gap-6 text-left text-2xl text-[#000] font-[Poppins] ${className}`}
    >
      <Image
        className="self-stretch h-[230px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={392}
        height={230}
        sizes="100vw"
        alt=""
        src="/Rectangle-64@2x.png"
      />
      <div className="self-stretch flex flex-col items-start py-0 px-1 gap-3">
        <div className="flex flex-col items-start gap-1">
          <h3 className="m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
            Rooftop Social Night
          </h3>
          <div className="flex items-center gap-2 text-lg text-subtext mq450:flex-wrap">
            <div className="relative">Fri, Mar 15</div>
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-subtext" />
            <div className="relative whitespace-nowrap">10:15 PM</div>
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-subtext" />
            <div className="relative">Downtown</div>
          </div>
        </div>
        <div className="self-stretch relative text-lg">
          An easygoing evening with music, drinks, and a welcoming crowd.
        </div>
      </div>
      <div className="flex items-center justify-center py-0 px-1 text-lg text-accent-1">
        <div className="relative [text-decoration:underline] font-medium">
          Read More
        </div>
      </div>
    </section>
  );
};

export default EventInstances;
