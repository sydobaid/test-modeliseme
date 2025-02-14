import React from "react";
import FounderImage from "../assets/FounderImage.webp"; // Replace with your actual image path
import { LinkedInLogo } from "./Cards/LinkedInLogo";
import { TwitterLogo } from "./Cards/TwitterLogo";

export const FoundersMessage = () => {
  return (
    <div className="bgbodysection py-[64px] px-[calc(0.5em+8vw)] 2xl:px-[calc(0.5em+8vw)] min-[1680px]:px-[calc(0.5em+16vw)]">
      <div className="flex flex-col lg:flex-row gap-[48px] justify-center items-center">
        {/* Founder Image */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src={FounderImage}
            alt="Founder"
            className="rounded-full w-[160px] h-[160px] object-cover border-4 border-gray-300"
          />
        </div>

        {/* Founder Message */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="font-mulish text-[24px] md:text-[36px] font-[600] leading-tight text-primary mb-[16px]">
            Message from the Founder
          </h2>

          <div className="border-t-[1px] border-gray-300 w-[50px] my-[16px]" />

          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start mb-[16px]">
              <p className="font-mulish text-[16px] md:text-[18px] font-[400] text-primary leading-relaxed max-w-[600px]">
                At the heart of our company, we believe in revolutionizing the
                way people shop. Our app brings the future of fashion to your
                fingertips, empowering you to make smarter, more confident
                decisions when choosing the perfect outfits. We hope you enjoy
                the journey.
              </p>
            </div>
          </div>

          {/* Founder’s Name */}
          <p className="font-mulish text-[18px] md:text-[20px] font-[500] text-primary mt-[24px]">
            Shakeena Zak, Founder & CEO
          </p>
          <div className="flex flex-row gap-[10px] mt-[12px] flex-wrap">
            <LinkedInLogo
              color={"black"}
              hoverColor={"#0B63E5"}
              link={"https://www.google.com"}
            />
            <TwitterLogo
              color={"black"}
              hoverColor={"#0B63E5"}
              link={"https://www.google.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
