"use client";

import { useStore } from "@/store";

import React from "react";
import Explore from "./Explore";
import clsx from "clsx";
import Headermain from "./Headermain";

const LayoutExplore = ({ children }: { children: React.ReactNode }) => {
  const hideExplore = useStore((state) => state.hideExplore);

  return (
    <div className="grid grid-cols-12 overflow-hidden">
      <div
        className={clsx(
          "transition-all duration-300",
          hideExplore ? "opacity-0 absolute -z-10" : "col-start-1 col-end-4"
        )}
      >
        <Explore />
      </div>
      <div
        className={clsx(
          "transition-all  w-full duration-300  overflow-hidden h-full flex flex-col ",
          hideExplore ? "col-start-1 col-end-13" : "col-start-4 col-end-13"
        )}
      >
        <Headermain />
        <div className="overflow-y-auto overflow-x-hidden ">
          {children}
        </div>
      </div>
    </div>
  );
};
export default LayoutExplore;
