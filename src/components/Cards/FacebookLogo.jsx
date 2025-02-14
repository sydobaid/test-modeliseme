import { useState } from "react";
/* eslint-disable react/prop-types */
export const FacebookLogo = ({ color, hoverColor, link }) => {
  const [clr, setClr] = useState(color);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div
        className="size-[44px] bg-[#FFFFFF14] justify-center flex items-center rounded-[5px] hover:bg-white"
        onMouseEnter={() => setClr(hoverColor)}
        onMouseLeave={() => setClr(color)}
        onClick={handleClick}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill={clr}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5492 20V10.8777H14.6099L15.0691 7.32156H11.5492V5.05147C11.5492 4.0222 11.8338 3.32076 13.3115 3.32076L15.193 3.31999V0.13923C14.8676 0.0969453 13.7507 0 12.4507 0C9.7361 0 7.87764 1.65697 7.87764 4.69927V7.32156H4.80762V10.8777H7.87764V20H11.5492Z"
            fill={clr}
          />
        </svg>
      </div>
    </>
  );
};
