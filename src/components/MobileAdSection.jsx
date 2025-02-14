import IphoneImg from "../assets/Iphone.png";
import GoogleBadge from "../assets/GoogleBadge.svg";
import AppleBadge from "../assets/AppleBadge.svg";

export const MobileAdSection = () => {
  return (
    <div className="flex justify-center my-[80px] text-white">
      <div className="w-max sm:w-[740px] lg:w-[1000px] xl:w-[1240px] bg-[linear-gradient(110.31deg,_#0C195B_-2.59%,_#0670F7_102.5%)] rounded-[40px] mx-[12px] sm:mx-[48px] flex flex-col md:flex-row">
        <div className="md:w-[240px] lg:w-[350px] xl:w-[500px] m-[32px] md:m-[100px] flex flex-col gap-[24px]">
          <div className="font-[Mulish] text-[32px] leading-[42px] md:text-[30px] md:leading-[32px]  lg:text-[42px] xl:text-[52px] font-medium lg:leading-[55px] ltracking-tight text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">
            Experience a new way to shop with our AI-powered virtual trial room
          </div>
          <div className="font-[Mulish] text-[18px] font-normal leading-[28px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] text-[#8BA2C0]">
            Download our app and enjoy the magic of virtual try-ons. Your ideal
            wardrobe is just a tap away.
          </div>
          <div className="flex">
            <div className="w-[135px]">
              <img src={GoogleBadge} />
            </div>
            <div className="ml-[20px] w-[120px]">
              <img src={AppleBadge} />
            </div>
          </div>
        </div>
        <div className="transition-all transform ease-in-out duration-300 block mx-auto md:relative w-[360px] hover:w-[380px] ">
          <img src={IphoneImg} className="md:absolute md:bottom-0 md:right-0" />
        </div>
      </div>
    </div>
  );
};
