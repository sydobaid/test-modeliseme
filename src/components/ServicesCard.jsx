/* eslint-disable react/prop-types */
export const ServicesCard = ({
  icon,
  title,
  description,
  selected = false,
}) => {
  return (
    <div
      className={`flex flex-col xl:w-[312px] gap-[20px] p-[24px] bg-white rounded-2xl ${
        selected ? `shadow-[0_12px_56px_0_rgba(6,28,61,0.12)]` : ``
      } `}
    >
      <div>
        <img src={icon} className="w-[64px]" />
      </div>
      <div className="font-[600] text-[#061C3D] font-mulish my-[10px]">
        {title}
      </div>
      <div className="font-[400] text-[#42526B] font-mulish">{description}</div>
    </div>
  );
};
