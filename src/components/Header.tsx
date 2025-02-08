"use client"
import ActivewindowSvg from "@/icon/ActivwindowSvg";
import HorizintalSvg from "@/icon/HorizntalWindowSvg";
import Sidewindow from "@/icon/Sidewindow";
import VscodeSvg from "@/icon/VscodeSvg";
import { useStore } from "@/store";


const Header = () => {
  const hideExplore=useStore((state)=> state.hideExplore);
  const {setHideExplore}=useStore();
  const liArray = ["File", "Edit", "View", "Run", "Go", "Terminal", "Help"];
  return (
    <div className="  row-span-1 flex justify-between  p-4 items-center  border-b-2 border-borderdark text-sm    ">
      <div className="flex gap-20 text-base ">
        
        <ul className="flex gap-4   ">
           <li><VscodeSvg  /></li>
          {liArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
      </div>
      <h1>Arezoo AmiriAyoubloo-Visual Studio Code</h1>
      <div className="flex gap-6  ">
        <div className="flex gap-2">
          <button onClick={()=>setHideExplore(!hideExplore)}>
            <ActivewindowSvg />
          </button>
          <button>
            <HorizintalSvg />
          </button>
          <button>
            <Sidewindow />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
