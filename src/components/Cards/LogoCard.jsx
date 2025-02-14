/* eslint-disable react/prop-types */
export const LogoCard = ({ logo, title, desc1, desc2 }) => {
  return (
    <div className="flex gap-[6px]">
      <div className="flex size-[64px] bg-[#FFFFFF14] rounded-full justify-center items-center">
        <img src={logo} className="size-[32px] flex" />
      </div>
      <div className="flex flex-col my-auto font-mulish ">
        {title !== undefined ? (
          <>
            <div className="text-[14px] font-[500] opacity-50 tracking-[0.01em]">
              {title}
            </div>
            <div className="text-[20px] font-[200]">{desc1}</div>
          </>
        ) : (
          <>
            <div className="text-[16px] font-[200]">{desc1}</div>
            <div className="text-[16px] font-[200]">{desc2}</div>
          </>
        )}
      </div>
    </div>
  );
};
