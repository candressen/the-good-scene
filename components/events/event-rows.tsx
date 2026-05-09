"use client";
import type { NextPage } from "next";
import { useState } from "react";
import EventCardColumn from "./event-card-column";

export type EventRowsType = {
  className?: string;
  eventCardColumnBackgrounds: string;
  eventCardColumnTwoBackgrounds: string;
  eventCardColumnThreeBackgrounds: string;
  eventCardColumnFourBackgrounds: string;
  eventCardColumnFiveBackgrounds: string;
  eventCardBackgrounds: string;
};

const EventRows: NextPage<EventRowsType> = ({
  className = "",
  eventCardColumnBackgrounds,
  eventCardColumnTwoBackgrounds,
  eventCardColumnThreeBackgrounds,
  eventCardColumnFourBackgrounds,
  eventCardColumnFiveBackgrounds,
  eventCardBackgrounds,
}) => {
  const [eventCardColumnItems] = useState([
    {
      cardBackgrounds: eventCardColumnBackgrounds,
    },
    {
      cardBackgrounds: eventCardColumnTwoBackgrounds,
    },
    {
      cardBackgrounds: eventCardColumnThreeBackgrounds,
    },
  ]);
  const [eventCardColumnItems1] = useState([
    {
      cardBackgrounds: eventCardColumnFourBackgrounds,
    },
    {
      cardBackgrounds: eventCardColumnFiveBackgrounds,
    },
    {
      cardBackgrounds: eventCardBackgrounds,
    },
  ]);
  return (
    <div
      className={`self-stretch flex items-start flex-wrap content-start gap-x-6 gap-y-10 ${className}`}
    >
      <div className="w-[1320px] flex items-center gap-8 mq800:gap-4">
        {eventCardColumnItems.map((item, index) => (
          <EventCardColumn key={index} cardBackgrounds={item.cardBackgrounds} />
        ))}
      </div>
      <div className="w-[1320px] flex items-center gap-8 mq800:gap-4">
        {eventCardColumnItems1.map((item, index) => (
          <EventCardColumn key={index} cardBackgrounds={item.cardBackgrounds} />
        ))}
      </div>
    </div>
  );
};

export default EventRows;
