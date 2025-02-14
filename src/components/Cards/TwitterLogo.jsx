import { useState } from "react";

export const TwitterLogo = ({ color, hoverColor, link }) => {
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
          <g clipPath="url(#clip0_987_797)">
            <path
              d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
              fill={clr}
            />
          </g>
          <defs>
            <clipPath id="clip0_987_797">
              <rect width="20" height="20" fill={clr} />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};
