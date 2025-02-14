/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export const OutfitSelector = ({ outfits, title, setOutfit, outfit }) => {
  return (
    <div>
      <div className="bg-transparent py-2">
        <div className="pl-2 font-mulish font-[400] text-[1.25em]">{title}</div>
        <div className="flex flex-row gap-3 justify-center font-mulish">
          {outfits.map((o, i) => {
            return (
              <button
                key={i}
                onClick={() => setOutfit(title + "" + (i + 1))}
                className={` ${
                  outfit === title + "" + (i + 1)
                    ? "drop-shadow-lg "
                    : "drop-shadow-sm"
                }`}
              >
                <img src={o} className="h-[107px] w-[80px] rounded-lg " />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
