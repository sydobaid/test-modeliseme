import Logo from "../assets/ModeliseMe_Logo.svg";
import AppleBadge from "../assets/AppleBadgeDark.png";
import GoogleBadge from "../assets/GoogleBadgeDark.png";

export const Footer = () => {
  return (
    <div className="bg-black pt-[64px] pb-[32px] text-white font-inter lg:flex lg:flex-row lg:justify-between lg:px-[100px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center lg:justify-start">
            <img src={Logo} className="size-[48px]" />
          </div>
          <div className="flex flex-col text-[16px] font-[400] my-auto ml-[10px] justify-center"></div>
        </div>
        <div className="flex flex-col text-[16px] text-center font-[400] md:flex-row md:gap-[12px] md:justify-center">
          <a href="/">
            <div>Home</div>
          </a>
          <a href="/about">
            <div>About</div>
          </a>
          <a href="/help">
            <div>Help</div>
          </a>
          <a href="/privacy-policy">
            <div>Privacy Policy</div>
          </a>
          <a href="/license">
            <div>License</div>
          </a>
        </div>
        <div className="text-[#D1D5DB] text-[14px] text-center font-[400] lg:text-left">
          © 2025 All rights reserved
        </div>
      </div>
      <div className="flex items-center justify-center py-[12px] lg:flex-col lg:py-0 lg:justify-start lg:gap-[16px]">
        <div className="text-[#D1D5DB] text-[16px] text-center font-[500]">
          Get the App:
        </div>
        <div className="w-[105px] ml-[15px] lg:ml-0 lg:w-[135px]">
          <img src={AppleBadge} />
        </div>
        <div className="w-[105px] ml-[15px] lg:ml-0 lg:w-[135px]">
          <img src={GoogleBadge} />
        </div>
      </div>
    </div>
  );
};
