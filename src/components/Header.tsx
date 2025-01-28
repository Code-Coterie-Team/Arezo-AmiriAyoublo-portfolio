"use client";
import { useStore } from "@/store";
import {
  ActiveWindowSvg,
  ArowSvg,
  HorizWindowSvg,
  SidewindowSvg,
  VscodeSvg,
} from "../assets";

const Header = () => {
    const liArray=['File','Edit','View','Run','Go','Terminal','Help']
  return (
    <div className=" row-span-1  flex justify-between  border-b-2 border-borderdark text-sm p-2  ">
      <div className="flex gap-20 text-base">
        <ul className="flex gap-4   ">
          <VscodeSvg />
          {liArray.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1>Arezoo AmiriAyoubloo-Visual Studio Code</h1>
      </div>

      <div className="flex gap-6  ">
        <div className="flex gap-2">
          <button>
            <ActiveWindowSvg />
          </button>
          <button>
            <HorizWindowSvg />
          </button>
          <button>
            <SidewindowSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
