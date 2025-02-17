"use client";
import { useState } from "react";
import Portfolio from "./Portfolio";
import ArowSvg from "@/icon/ArowSvg";




const FileExplore = () => {
  const [arowStyle, setArowStyle] = useState<{[key:string]:boolean}>({
    "OPEN EDITORS": false,
   "PORTFOLIO": true,
    "OUTLINE": false,
    "TIMELINE": false,
    "SCRIPTS": false,
  });
  const toggleItem = (itemName: string) => {
    setArowStyle((prev) => ({
      ...prev,
      [itemName]: !prev[itemName], 
    }))
  }
  
  const exploreitem = [
    "OPEN EDITORS",
    "PORTFOLIO",
    "OUTLINE",
    "TIMELINE",
    "SCRIPTS",
  ];
  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden  ">
      <div className="font-medium text-xs p-2">EXPLORER</div>
      <div className="flex bordr-b-2 border-borderdark  overflow-hidden text-xs flex-col gap-2 ">
        {exploreitem.map((item, index) => (
          <div className="border-b-2 font-extrabold border-borderdark flex-1   " key={index}>
            <div
              className="flex flex-col pb-1  hover:border-[0.5px] hover:border-fontcolor"
              onClick={() => toggleItem(item)}
            >
              <div className="flex">
                <ArowSvg
                  style={{
                    transform: arowStyle[item]
                      ? "rotate(90deg)"
                      : "rotate(0deg)", 
                    transition: "transform 0.3s ease",
                  }}
                />

                <span>{item}</span>
              </div>
            </div>
            {item === "PORTFOLIO" && arowStyle[item]&&
                 <div className="max-h-[300px]  overflow-y-auto ">
                     <Portfolio />
                 </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplore;
