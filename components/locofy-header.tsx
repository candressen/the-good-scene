import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start pt-6 px-0 pb-0 top-[0] z-[99] sticky ${className}`}
    >
      <div className="self-stretch h-20 rounded-2xl bg-white overflow-hidden shrink-0 flex items-center justify-between py-0 px-[60px] box-border gap-5 mq1100:gap-5 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border">
        <Image
          className="h-[50px] w-[120.9px] relative"
          loading="lazy"
          width={120.9}
          height={50}
          sizes="100vw"
          alt=""
          src="/Group.svg"
        />
        <div className="flex items-center gap-10 mq750:gap-5">
          <nav className="m-0 flex items-center gap-6 text-left text-lg text-accent-2 font-[Poppins] mq1100:hidden">
            <div className="relative">Our Mission</div>
            <div className="relative">Lorem</div>
            <div className="relative">Calendar</div>
            <div className="relative">Portal</div>
          </nav>
          <div className="flex items-center gap-4 mq450:hidden">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-accent-2 rounded-lg flex items-center justify-center hover:bg-[#524a4a]">
              <div className="relative text-base font-medium font-[Poppins] text-white text-left">
                Get Started
              </div>
            </button>
            <button className="cursor-pointer border-accent-2 border-solid border-[1px] py-2.5 px-[23px] bg-[transparent] rounded-lg flex items-center justify-center hover:bg-[rgba(82,74,74,0.09)] hover:border-[#524a4a] hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="relative text-base font-medium font-[Poppins] text-accent-2 text-left">
                Contact Us
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
