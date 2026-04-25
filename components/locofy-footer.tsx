"use client";
import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-[#2d2828] overflow-hidden flex flex-col items-start pt-[76px] px-[60px] pb-7 box-border gap-7 max-w-full text-left text-base text-white font-[Poppins] mq750:pt-[49px] mq750:px-[30px] mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[93px] max-w-full mq750:gap-[46px] mq450:gap-[23px]">
        <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq1250:flex-wrap mq1250:gap-5">
          <div className="flex flex-col items-start pt-1.5 px-0 pb-0">
            <div className="self-stretch flex flex-col items-start gap-[16.3px]">
              <div className="flex items-start py-0 px-1.5">
                <Image
                  className="h-[82.7px] flex-1 relative max-w-full overflow-hidden w-full shrink-0"
                  loading="lazy"
                  width={200}
                  height={82.7}
                  sizes="100vw"
                  alt=""
                  src="/Logo.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start gap-6 shrink-0">
                <div className="self-stretch flex items-start py-0 pl-2 pr-[11px]">
                  <i className="relative">Step Into The Right Scene</i>
                </div>
                <div className="self-stretch h-0.5 relative bg-white" />
                <div className="flex flex-col items-start gap-4 z-[2] text-lg">
                  <div className="self-stretch relative font-medium">
                    Follow Us at:
                  </div>
                  <div className="flex items-center gap-3">
                    {[
                      { label: 'f', href: '#', title: 'Facebook' },
                      { label: 'in', href: '#', title: 'Instagram' },
                      { label: 'tw', href: '#', title: 'Twitter' },
                      { label: 'yt', href: '#', title: 'YouTube' },
                    ].map((s) => (
                      <a key={s.title} href={s.href} aria-label={s.title}
                        className="h-7 w-7 rounded-sm bg-[rgba(255,255,255,0.15)] flex items-center justify-center text-[10px] font-bold text-white hover:bg-[rgba(255,255,255,0.25)] transition-colors">
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[40px] max-w-full mq450:gap-[25px] mq1100:gap-[30px] mq1100:flex-wrap">
            <div className="self-stretch flex flex-col items-start gap-[21px]">
              <div className="self-stretch flex flex-col items-start gap-1.5 text-lg">
                <div className="relative font-medium">Quick Links</div>
                <div className="w-20 h-0.5 relative bg-white" />
              </div>
              <a href="/mission" className="self-stretch relative hover:underline">Our Mission</a>
              <a href="/events" className="self-stretch relative hover:underline">Upcoming Events</a>
              <a href="/calendar" className="self-stretch relative hover:underline">Calendar</a>
              <a href="/contact" className="self-stretch h-5 relative flex items-center shrink-0 hover:underline">Contact</a>
            </div>
            <div className="flex flex-col items-start gap-6 min-w-[220px]">
              <div className="self-stretch flex flex-col items-start gap-1.5 text-lg">
                <div className="relative font-medium">Contact Info</div>
                <div className="w-20 h-0.5 relative bg-white" />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  className="h-3.5 w-[17.5px] relative"
                  loading="lazy"
                  width={17.5}
                  height={14}
                  sizes="100vw"
                  alt=""
                  src="/mail.svg"
                />
                <div className="relative flex items-center flex-wrap break-all text-sm">
                  hellothegoodscene@outlook.com
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  className="h-[18px] w-[18px] relative"
                  loading="lazy"
                  width={18}
                  height={18}
                  sizes="100vw"
                  alt=""
                  src="/phone-in-talk.svg"
                />
                <div className="relative flex items-center">
                  (617) 959-9138
                </div>
              </div>
              <div className="flex items-center gap-[11.7px]">
                <Image
                  className="h-[22px] w-[17px] relative"
                  loading="lazy"
                  width={17}
                  height={22}
                  sizes="100vw"
                  alt=""
                  src="/location-on.svg"
                />
                <div className="relative">
                  Boston, MA
                </div>
              </div>
            </div>
            <div className="h-[186px] flex flex-col items-start gap-6 max-w-full">
              <div className="self-stretch flex flex-col items-start gap-1.5 text-lg">
                <div className="self-stretch h-[30px] relative font-medium flex items-center">
                  Subscribe
                </div>
                <div className="w-20 h-0.5 relative bg-white" />
              </div>
              <div className="flex flex-col items-start text-subtext">
                <form className="w-[366px] rounded-lg bg-white flex items-center py-1 pl-4 pr-1 box-border gap-2.5" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-8 flex-1 outline-none text-sm text-gray-600 bg-transparent"
                  />
                  <button type="submit" className="cursor-pointer border-[#2d2828] border-solid border-[1px] py-1.5 px-[19px] bg-[#2d2828] rounded-lg flex items-center justify-center hover:bg-[#524a4a]">
                    <div className="relative text-base font-medium font-[Poppins] text-white text-center">
                      Subscribe
                    </div>
                  </button>
                </form>
              </div>
              <div className="self-stretch h-[52px] flex items-start pt-0.5 pb-0 px-0 box-border">
                <div className="h-[72px] w-[366px] relative flex items-center shrink-0">
                  Send your email to receive our
                  <br />
                  newsletters and stay up to dated with new events.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative bg-white" />
      </div>
      <div className="flex items-start py-0 px-[457px] text-center mq750:pl-[114px] mq750:pr-[114px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:pl-[228px] mq1250:pr-[228px] mq1250:box-border">
        <div className="relative">
          Copyright 2026 The Good Scene, All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
