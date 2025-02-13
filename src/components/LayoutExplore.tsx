"use client";

import { useStore } from "@/store";

import React from "react";
import Explore from "./Explore";
import clsx from "clsx";
import Headermain from "./Headermain";
import { useEffect } from "react";

const LayoutExplore = ({ children }: { children: React.ReactNode }) => {
  const hideExplore = useStore((state) => state.hideExplore);
  const {setHideExplore}=useStore()
   useEffect(() => {
      if (window.innerHeight<768){
        setHideExplore(true);
      }
    
  }, [setHideExplore])
  
  

  return (
    <div className=" grid grid-cols-6  md:grid-cols-12 w-full overflow-hidden">
      <div
        className={clsx(
          "transition-all duration-300  ",
          hideExplore ? "opacity-0 absolute -z-10 " :  " col-span-2 md:col-start-1 md:col-end-4"
        )}
      >
        <Explore />
      </div>
      <div
        className={clsx(
          "transition-all  w-full duration-300  overflow-hidden h-full flex flex-col ",
          hideExplore ? "col-start-1 col-end-7 md:col-start-1 md:col-end-13" : " col-start-3 col-end-7 md:col-start-4 md:col-end-13"
        )}
      >
        <Headermain />
        <div className="overflow-y-auto overflow-x-auto  md:overflow-x-hidden  ">
          {children}
        </div>
      </div>
    </div>
  );
};
export default LayoutExplore;
