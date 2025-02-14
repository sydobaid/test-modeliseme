import { useState } from "react";

import maleModel from "../assets/models/Models/WMM.png";
import femaleModel from "../assets/models/Models/WWM.png";
import VT_T_1 from "../assets/models/Apparels/Tops/VT-01.jpg";
import VT_T_2 from "../assets/models/Apparels/Tops/VT-02.jpg";
import VT_T_3 from "../assets/models/Apparels/Tops/VT-03.jpg";
import VT_B_1 from "../assets/models/Apparels/Bottoms/VT-01.png";
import VT_B_2 from "../assets/models/Apparels/Bottoms/VT-02.png";
import VT_B_3 from "../assets/models/Apparels/Bottoms/VT-03.jpeg";
import VT_O_1 from "../assets/models/Apparels/Full/VT-01.png";
import VT_O_2 from "../assets/models/Apparels/Full/VT-02.jpg";
import VT_O_3 from "../assets/models/Apparels/Full/VT-03.jpg";
import { OutfitSelector } from "./OutfitSelector";
import WWM_T_VT1 from "../assets/models/Output/Female/WWM-T-VT1.png";
import WWM_T_VT2 from "../assets/models/Output/Female/WWM-T-VT2.png";
import WWM_T_VT3 from "../assets/models/Output/Female/WWM-T-VT3.png";
import WWM_B_VT1 from "../assets/models/Output/Female/WWM-B-VT1.png";
import WWM_B_VT2 from "../assets/models/Output/Female/WWM-B-VT2.png";
import WWM_B_VT3 from "../assets/models/Output/Female/WWM-B-VT3.png";
import WWM_O_VT1 from "../assets/models/Output/Female/WWM-O-VT1.png";
import WWM_O_VT2 from "../assets/models/Output/Female/WWM-O-VT2.png";
import WWM_O_VT3 from "../assets/models/Output/Female/WWM-O-VT3.png";
import WMM_T_VT1 from "../assets/models/Output/Male/WMM-T-VT1.png";
import WMM_T_VT2 from "../assets/models/Output/Male/WMM-T-VT2.png";
import WMM_T_VT3 from "../assets/models/Output/Male/WMM-T-VT3.png";
import WMM_B_VT1 from "../assets/models/Output/Male/WMM-B-VT1.png";
import WMM_B_VT2 from "../assets/models/Output/Male/WMM-B-VT2.png";
import WMM_O_VT1 from "../assets/models/Output/Male/WMM-O-VT1.png";

export const WardrobeViewer = () => {
  const tops = [VT_T_1, VT_T_2, VT_T_3];
  const bottoms = [VT_B_1, VT_B_2, VT_B_3];
  const overalls = [VT_O_1, VT_O_2, VT_O_3];
  const [gender, setGender] = useState("Male");
  const [valid, setValid] = useState(true);
  const mapping = {
    FemaleTops1: WWM_T_VT1,
    FemaleTops2: WWM_T_VT2,
    FemaleTops3: WWM_T_VT3,
    FemaleBottoms1: WWM_B_VT1,
    FemaleBottoms2: WWM_B_VT2,
    FemaleBottoms3: WWM_B_VT3,
    FemaleOveralls1: WWM_O_VT1,
    FemaleOveralls2: WWM_O_VT2,
    FemaleOveralls3: WWM_O_VT3,
    MaleTops1: WMM_T_VT1,
    MaleTops2: WMM_T_VT2,
    MaleTops3: WMM_T_VT3,
    MaleBottoms1: WMM_B_VT1,
    MaleBottoms2: WMM_B_VT2,
    MaleOveralls1: WMM_O_VT1,
  };
  const [output, setOutput] = useState(null);
  const [outfit, setOutfit] = useState(null);
  const generateOutput = () => {
    const clothMap = gender + "" + outfit;
    if (
      ["MaleBottoms3", "MaleOveralls2", "MaleOveralls3"].includes(clothMap) ===
      true
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
    setOutput(mapping[gender + "" + outfit]);
  };
  return (
    <div className="bg-gradient-to-b bgbodysection">
      <div className="text-[40px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-mulish font-[600] text-center bg-[linear-gradient(181.59deg,_#a09588_16.78%,_#F2F2F2_83.68%)] bg-clip-text text-transparent">
        Virtual Trial Room
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
        <div className="md:w-1/2 md:max-w-[510px] lg:max-w-[680px]">
          <img
            src={
              gender === "Male"
                ? output
                  ? output
                  : maleModel
                : output
                ? output
                : femaleModel
            }
            className="max-h-[680px] lg:max-h-[920px] my-4 max-w-[90%] flex justify-center items-center mx-auto rounded-lg shadow-lg"
          />
          <div className="m-4 h-[120px]">
            <div className="flex gap-2 z-100 justify-center">
              <button
                onClick={() => {
                  setOutput(null);
                  setValid(true);
                  setGender("Male");
                }}
              >
                <img
                  src={maleModel}
                  className={`rounded-lg shadow-lg  hover:h-[120px] hover:w-[90px] ${
                    gender === "Male"
                      ? "h-[120px] w-[90px]"
                      : "h-[107px] w-[80px]"
                  } `}
                />
              </button>
              <button
                onClick={() => {
                  setOutput(null);
                  setValid(true);
                  setGender("Female");
                }}
              >
                <img
                  src={femaleModel}
                  className={` rounded-lg shadow-lg  hover:h-[120px] hover:w-[90px] ${
                    gender === "Female"
                      ? "h-[120px] w-[90px]"
                      : "h-[107px] w-[80px]"
                  } `}
                />
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="md:w-[420px] flex justify-center ">
          <div className="m-4 w-[90%] md:m-0 flex-col flex justify-top ">
            <div className="rounded-3xl ">
              <div className="bg-transparent font-mulish font-[600] text-[1.5em] lg:text-[2em] mt-4 mb-2">
                Select An Apparel To Try!
              </div>
              <div className="bg-white  drop-shadow-md rounded-lg pb-6">
                <OutfitSelector
                  outfits={tops}
                  title={"Tops"}
                  setOutfit={setOutfit}
                  outfit={outfit}
                />
                <OutfitSelector
                  outfits={bottoms}
                  title={"Bottoms"}
                  setOutfit={setOutfit}
                  outfit={outfit}
                />
                <OutfitSelector
                  outfits={overalls}
                  title={"Overalls"}
                  setOutfit={setOutfit}
                  outfit={outfit}
                />
              </div>
            </div>
            <div className="mx-auto mt-10">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                onClick={generateOutput}
              >
                <span className="relative px-7 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-mulish text-[1.5em]">
                  Generate
                </span>
              </button>
            </div>

            {valid ? (
              ""
            ) : (
              <span className="self-center">
                Please select valid combinations!
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="md:w-1/2 flex justify-center flex-col">
          {output ? (
            <>
              <div className="pl-4 flex justify-center font-mulish font-[600] text-[1.5em]">
                Output
              </div>
              <div className="flex justify-center  mx-auto rounded-lg shadow-lg">
                <img
                  src={output}
                  className="rounded-lg shadow-lg max-h-[680px]"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div> */}
    </div>
  );
};
