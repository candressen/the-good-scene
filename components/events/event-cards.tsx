import type { NextPage } from "next";
import EventRows from "./event-rows";

export type EventCardsType = {
  className?: string;
};

const EventCards: NextPage<EventCardsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center gap-10 max-w-full mq800:gap-5 ${className}`}
    >
      <EventRows
        eventCardColumnBackgrounds="/Card-Backgrounds@2x.png"
        eventCardColumnTwoBackgrounds="/Card-Backgrounds-Two@2x.png"
        eventCardColumnThreeBackgrounds="/Rectangle-67@2x.png"
        eventCardColumnFourBackgrounds="/Rectangle-610@2x.png"
        eventCardColumnFiveBackgrounds="/Card-Backgrounds-Five@2x.png"
        eventCardBackgrounds="/Rectangle-66@2x.png"
      />
      <EventRows
        eventCardColumnBackgrounds="/Card-Backgrounds@2x.png"
        eventCardColumnTwoBackgrounds="/Card-Backgrounds-Two@2x.png"
        eventCardColumnThreeBackgrounds="/Rectangle-67@2x.png"
        eventCardColumnFourBackgrounds="/Rectangle-610@2x.png"
        eventCardColumnFiveBackgrounds="/Card-Backgrounds-Five@2x.png"
        eventCardBackgrounds="/Rectangle-66@2x.png"
      />
      <div className="flex flex-col items-start pt-7 px-0 pb-0">
        <button className="cursor-pointer [border:none] py-3.5 px-8 bg-accent-2 rounded-lg flex items-center justify-center hover:bg-[#524a4a]">
          <div className="relative text-[16px] font-medium font-[Poppins] text-white text-left">
            Calendar
          </div>
        </button>
      </div>
    </div>
  );
};

export default EventCards;
