import { ServicesCard } from "./ServicesCard";
import TryOnIcon from "../assets/TryOnIcon.svg";
import SharingIcon from "../assets/SharingIcon.svg";
import SaveIcon from "../assets/SaveIcon.svg";
import SecureIcon from "../assets/SecureIcon.svg";
import AppleBadge from "../assets/AppleBadge.svg";
import GoogleBadge from "../assets/GoogleBadge.svg";

export const BodySection = () => {
  return (
    <div className="bgbodysection py-[64px]">
      <div className="w-auto h-auto mx-[calc(0.5em+8vw)] 2xl:mx-[calc(0.5em+8vw)] min-[1680px]:mx-[calc(0.5em+16vw)] flex flex-col md:flex-row justify-end gap-[48px]">
        <div className="flex flex-col justify-center">
          <div className="font-mulish text-[36px] md:text-[54px] font-[600] leading-tight">
            {"Explore Key Features You'll Love!"}
          </div>
          <div className="font-mulish text-[16px] md:text-[18px] font-[400]">
            Say goodbye to sizing dilemmas and shopping frustrations by using
            visualisation over imagination
            {/* <br /> */}
            —our app ensures you find the perfect fit and colour every time,
            making your shopping journey not only easier but also more
            enjoyable.
          </div>
          <div className="flex flex-col  min-[1340px]:flex-row">
            <img
              src={GoogleBadge}
              className="w-[140px] md:w-[192px] mr-[2vw] mt-[1.5vw]"
            />
            <img
              src={AppleBadge}
              className="w-[140px] md:w-[171px] mt-[1.5vw]"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row md:gap-[32px]">
          <div className="flex flex-col gap-[32px]">
            <ServicesCard
              icon={TryOnIcon}
              title={"Interactive Virtual Try-On"}
              description={
                "Transform the way you shop with our Interactive Virtual Try-On feature. Make informed choices by visualizing your favorite pieces, all from the comfort of your device."
              }
            />
            <ServicesCard
              icon={SaveIcon}
              title={"Save & Compare Looks"}
              description={
                "Save multiple outfits and compare them side by side to find the perfect look that suits your style."
              }
            />
          </div>
          <div className="flex flex-col gap-[32px] pt-[48px]">
            <ServicesCard
              icon={SharingIcon}
              title={"Seamless Sharing"}
              description={
                "Instantly share your 3D model with others within the app, letting them try on outfits to help you find the perfect fit for hassle-free shopping."
              }
              selected
            />

            <ServicesCard
              icon={SecureIcon}
              title={"You Privacy, Our Priority"}
              description={
                "Your data and privacy are always protected with top-tier security, ensuring a safe experience."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
