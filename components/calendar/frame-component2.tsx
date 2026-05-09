"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import EventVisuals from "./event-visuals";

export type FrameComponent2Type = {
  className?: string;
  eventVisualsRectangle6: string;
  eventVisualsRectangle61: string;
  eventVisualsRectangle62: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  eventVisualsRectangle6,
  eventVisualsRectangle61,
  eventVisualsRectangle62,
}) => {
  const [eventVisualsItems] = useState([
    {
      rectangle6: eventVisualsRectangle6,
    },
    {
      rectangle6: eventVisualsRectangle61,
    },
    {
      rectangle6: eventVisualsRectangle62,
    },
  ]);
  return (
    <main
      className={`self-stretch flex items-start justify-end pt-0 pb-[92px] pl-[61px] pr-[59px] box-border max-w-full shrink-0 text-left text-[56px] text-accent-2 font-['Playfair_Display'] lg:pb-[60px] lg:box-border mq450:pl-[30px] mq450:pr-[29px] mq450:box-border mq450:pb-[39px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-[60px] max-w-full mq450:gap-[30px]">
        <div className="self-stretch flex items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1096px] flex flex-col items-center gap-6 max-w-full">
            <h1 className="m-0 relative text-[length:inherit] italic font-bold font-[inherit] shrink-0 mq450:text-[45px] mq450:text-[34px]">
              Calendar
            </h1>
            <div className="hidden flex-col items-start pt-4 px-0 pb-0 shrink-0 text-[16px] font-[Poppins]">
              <div className="h-[52px] rounded-lg bg-white flex items-center justify-center py-4 pl-8 pr-[30px] box-border gap-1.5">
                <div className="relative font-medium shrink-0">
                  Explore More
                </div>
                <Image
                  className="w-[33.3px] relative max-h-full object-contain shrink-0"
                  width={33.3}
                  height={33.3}
                  sizes="100vw"
                alt=""
                src="/Icon7@2x.png"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start gap-6 max-w-full text-[16px] font-[Poppins]">
          <div className="self-stretch flex-1 flex items-start justify-between relative isolate gap-5 max-w-full mq450:flex-wrap mq450:justify-center lg:flex-wrap lg:justify-center mq450:flex-wrap mq450:justify-center mq450:flex-wrap mq450:justify-center">
            <section className="rounded-3xl bg-[rgba(28,28,28,0.1)] border-accent-2 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start pt-[22px] px-[23px] pb-[30px] gap-4 max-w-full z-[0] text-left text-[24px] text-accent-2 font-[Poppins] mq450:flex-1 lg:flex-1 lg:min-w-full mq450:flex-1 mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1">
              <div className="self-stretch flex items-center gap-6 mq450:flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-4 relative max-h-full object-contain"
                      loading="lazy"
                      width={16}
                      height={32}
                      sizes="100vw"
                      alt=""
                      src="/weui-arrow-filled.svg"
                    />
                    <Image
                      className="w-4 relative max-h-full"
                      width={16}
                      height={32}
                      sizes="100vw"
                      alt=""
                      src="/weui-arrow-filled.svg"
                    />
                  </div>
                  <div className="relative font-medium mq450:text-[19px]">
                    March 2026
                  </div>
                </div>
                <div className="h-8 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white border-[rgba(102,102,102,0.3)] border-solid border-[1px] box-border hidden items-center py-1.5 px-[9px]">
                  <Image
                    className="w-full relative max-h-full h-auto"
                    width={18}
                    height={18}
                    sizes="100vw"
                alt=""
                src="/Icon7@2x.png"
              />
                </div>
                <button className="cursor-pointer border-accent-2 border-solid border-[0.9px] py-1.5 px-2 bg-background h-7 shadow-[0px_2px_6px_rgba(0,_0,_0,_0.2)] rounded-[7px] box-border flex items-center">
                  <Image
                    className="w-full relative max-h-full h-auto"
                    width={15.8}
                    height={15.8}
                    sizes="100vw"
                    alt=""
                    src="/lucide-calendar.svg"
                  />
                </button>
              </div>
              <div className="w-[736px] h-[478px] rounded-2xl bg-white border-[#cbcbcb] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start max-w-full text-[14px] text-white">
                <div className="w-[736px] bg-accent-3 border-[#cbcbcb] border-solid border-t-[1px] box-border overflow-x-auto flex items-center justify-between gap-0 [row-gap:20px] max-w-full">
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Monday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Tuesday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Wednesday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Thursday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Friday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Saturday</div>
                  </div>
                  <div className="flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] flex items-center justify-center pt-4 px-0 pb-[15px]">
                    <div className="relative font-medium">Sunday</div>
                  </div>
                </div>
                <div className="w-[736px] h-[425px] flex items-start flex-wrap content-start text-accent-2">
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[1]">
                    <div className="relative font-medium">1</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[2] ml-[-1px] relative">
                    <div className="relative font-medium">2</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[3] ml-[-1px] relative">
                    <div className="relative font-medium">3</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[4] ml-[-1px] relative">
                    <div className="relative font-medium">4</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[5] ml-[-1px] relative">
                    <div className="relative font-medium">5</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[6] ml-[-1px] relative">
                    <div className="relative font-medium">6</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[7] ml-[-1px] relative">
                    <div className="relative font-medium">7</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[8] ml-[-1px] relative">
                    <div className="relative font-medium">6</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[9] ml-[-1px] relative">
                    <div className="relative font-medium">7</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[10] ml-[-1px] relative">
                    <div className="relative font-medium">8</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[11] ml-[-1px] relative">
                    <div className="relative font-medium">9</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[12] ml-[-1px] relative">
                    <div className="relative font-medium">10</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[13] ml-[-1px] relative">
                    <div className="relative font-medium">11</div>
                  </div>
                  <div className="h-[85px] flex-1 bg-[rgba(231,100,91,0.5)] border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[14] ml-[-1px] relative">
                    <div className="relative font-medium">12</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[15] ml-[-1px] relative">
                    <div className="relative font-medium">13</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[16] ml-[-1px] relative">
                    <div className="relative font-medium">14</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[17] ml-[-1px] relative">
                    <div className="relative font-medium">15</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[18] ml-[-1px] relative">
                    <div className="relative font-medium">16</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[19] ml-[-1px] relative">
                    <div className="relative font-medium">17</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[20] ml-[-1px] relative">
                    <div className="relative font-medium">18</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[21] ml-[-1px] relative">
                    <div className="relative font-medium">19</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[22] ml-[-1px] relative">
                    <div className="relative font-medium">20</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[23] ml-[-1px] relative">
                    <div className="relative font-medium">21</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[24] ml-[-1px] relative">
                    <div className="relative font-medium">22</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[25] ml-[-1px] relative">
                    <div className="relative font-medium">23</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[26] ml-[-1px] relative">
                    <div className="relative font-medium">24</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[27] ml-[-1px] relative">
                    <div className="relative font-medium">25</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[28] ml-[-1px] relative">
                    <div className="relative font-medium">26</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] border-l-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[29] ml-[-1px] relative">
                    <div className="relative font-medium">27</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[30] ml-[-1px] relative">
                    <div className="relative font-medium">28</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[31] ml-[-1px] relative">
                    <div className="relative font-medium">28</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[32] ml-[-1px] relative">
                    <div className="relative font-medium">30</div>
                  </div>
                  <div className="h-[85px] flex-1 border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[33] ml-[-1px] relative">
                    <div className="relative font-medium">31</div>
                  </div>
                  <div className="h-[85px] flex-1 bg-[#f6f6f6] border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[34] ml-[-1px] relative">
                    <div className="relative font-medium">1</div>
                  </div>
                  <div className="h-[85px] flex-1 bg-[#f6f6f6] border-[#cbcbcb] border-solid border-r-[0.8px] border-b-[0.8px] box-border flex items-start justify-end pt-2 pb-0 pl-0 pr-3 z-[35] ml-[-1px] relative">
                    <div className="relative font-medium">2</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="self-stretch rounded-3xl bg-[rgba(28,28,28,0.1)] border-accent-2 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-6 px-[23px] gap-6 min-w-[511px] max-w-full z-[1] text-left text-[24px] text-accent-2 font-[Poppins] mq450:flex-1 lg:flex-1 mq450:flex-1 mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full mq450:flex-1">
              <div className="relative font-medium mq450:text-[19px]">
                <span>
                  Events On
                  <br />
                </span>
                <span className="text-[32px] text-accent-1">
                  March 12, 2026
                </span>
              </div>
              {eventVisualsItems.map((item, index) => (
                <EventVisuals key={index} rectangle6={item.rectangle6} />
              ))}
            </section>
            <Image
              className="h-[272px] w-[645px] absolute !!m-[0 important] bottom-[126px] left-[35px] z-[2]"
              loading="lazy"
              width={645}
              height={272}
              sizes="100vw"
              alt=""
              src="/Ellipses.svg"
            />
          </div>
          <div className="flex items-start py-0 px-[7px] box-border max-w-full">
            <div className="self-stretch flex-1 flex items-center gap-10 max-w-full mq450:gap-5 mq450:flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 relative rounded-[50%] bg-accents-green" />
                <div className="relative font-medium">Lorem Ipsum</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 relative rounded-[50%] bg-accents-yellow" />
                <div className="relative font-medium">Lorem Ipsum</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 relative rounded-[50%] bg-accents-orange" />
                <div className="relative font-medium">Lorem Ipsum</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 relative rounded-[50%] bg-accents-cyan" />
                <div className="relative font-medium">Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FrameComponent2;
