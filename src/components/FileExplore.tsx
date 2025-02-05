"use client";
import { useState } from "react";
import Portfolio from "./Portfolio";
import { ArowSvg } from "@/assets";


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
    <div className="flex flex-col gap-4 ">
      <div className="font-light ">EXPLORER</div>
      <div className="flex font-bold bordr-b-2 border-borderdark text-sm flex-col gap-2 ">
        {exploreitem.map((item, index) => (
          <div className="border-b border-borderdark" key={index}>
            <div
              className="flex flex-col gap-1  hover:border-[0.5px] hover:border-fontcolor"
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
            {item === "PORTFOLIO" && arowStyle[item]&& <Portfolio />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplore;
