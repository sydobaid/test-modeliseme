import ContactCardDesign from "../assets/ContactCardDesignCropped.png";
import { LogoCard } from "./Cards/LogoCard";
import ContactLogo from "../assets/ContactLogo.png";
import EmailLogo from "../assets/EmailLogo.png";
import { TwitterLogo } from "./Cards/TwitterLogo";
import { FacebookLogo } from "./Cards/FacebookLogo";
import { InstagramLogo } from "./Cards/InstagramLogo";
const SupportSection = () => {
  return (
    <div className="gap-[40px] bgbodysection flex flex-col py-[80px]">
      <div className="flex flex-col font-mulish items-center text-center gap-[32px]">
        <div className="font-[500] text-[36px]  md:text-[56px] w-[350px] min-[600px]:w-[500px] md:w-[872px]">
          We are here to help you out!
        </div>
        <div className="font-[400] text-[16px] md:text-[20px] w-[350px] min-[600px]:w-[500px] md:w-[722px]">
          We’d love to hear from you! Whether you have questions, feedback, or
          need assistance, fill out the form below, and our team will get back
          to you shortly
        </div>
      </div>
      <div className="font-mulish flex flex-col mx-[4px] md:flex-row justify-center drop-shadow-2xl md:mx-[48px]">
        <div className=" bg-[#0A51BF] text-white md:w-[496px] rounded-t-[24px] md:rounded-l-[24px] md:rounded-tr-none relative">
          <img
            src={ContactCardDesign}
            className="absolute w-[180px] top-0 right-0 "
          />
          <div>
            <div className="my-[72px] ml-[48px] lg:ml-[72px] gap-[40px] text-[32px]">
              <div>Get in touch</div>
              <div className="flex flex-col gap-[24px] mt-[32px]">
                <LogoCard
                  logo={ContactLogo}
                  title={"EMAIL US"}
                  desc1={"info@modeliseme.com"}
                />
                <LogoCard
                  logo={EmailLogo}
                  title={"PHONE NUMBER"}
                  desc1={"+44-7930-604332"}
                />
              </div>
            </div>
            <div className="my-[72px] ml-[72px]">
              <div className="flex items-center">
                <div className="ml-1 text-[16px] font-[500]">
                  Connect with us:
                </div>
              </div>
              <div className="flex flex-row gap-[10px] mt-[12px] flex-wrap">
                <FacebookLogo color={"white"} hoverColor={"#0B63E5"} />
                <TwitterLogo color={"white"} hoverColor={"#0B63E5"} />
                <InstagramLogo color={"white"} hoverColor={"#0B63E5"} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] md:w-[744px] rounded-b-[24px] md:rounded-r-[24px] md:rounded-bl-none">
          <div className="m-[12px] md:m-[32px] lg:m-[72px] gap-[20px] flex flex-col">
            <div className="gap-[6px] flex flex-row">
              <div className="w-1/2">
                <div className="text-[14px] font-[400]">Name</div>
                <input
                  className="border-[#E6E8EC] border-[1px] text-[12px] md:text-[14px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-1/2">
                <div className="text-[14px] font-[400]">Email</div>
                <input
                  className="border-[#E6E8EC] border-[1px] text-[12px] md:text-[14px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Subjects</div>
              <input
                className="border-[#E6E8EC] border-[1px] text-[12px] md:text-[14px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                placeholder="Subject"
              />
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Company Name</div>
              <input
                className="border-[#E6E8EC] border-[1px] text-[12px] md:text-[14px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                placeholder="Brand/Company/Product Name"
              />
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Message</div>
              <textarea
                className="border-[#E6E8EC] border-[1px] text-[12px] md:text-[14px] max-h-[106px] rounded-[5px] pl-[18px] w-[100%] pt-[10px]"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="bg-[#0B63E5] mx-auto md:mx-0 hover:bg-[#210be5] flex flex-row w-[203px] h-[48px] gap-[12px] rounded-[7px] justify-center items-center text-white">
              <button>Send Message</button>
              <div className="relative transition ease-in-out duration-300 hover:translate-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.39941 12H20.8994"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1494 5.25L20.8994 12L14.1494 18.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
