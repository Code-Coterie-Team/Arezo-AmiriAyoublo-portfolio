"use client";

import React, { JSX } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Starsvg from "@/icon/Starsvg";
import DeleteSvg from "@/icon/DeleteSvg";
import LoadBranchSvg from "@/icon/LoadBranchSvg";
import Sidewindow from "@/icon/Sidewindow";
import ToggleSvg from "@/icon/ToggleSvg";
import JsonPackageSvg from "@/icon/JsonPackageSvg";
import ReactItem from "@/icon/ReactItem";

const Headermain = () => {
  const links = useStore((state) => state.links);
  const { setActiveProject, setActiveLink, setShowAboutme, removeLink } =
    useStore();
  const path = usePathname();
  const router = useRouter();
  const activeLink = useStore((state) => state.activeLink);
  const iconMap:{[key: string]:JSX.Element} = {
    "About me": <Starsvg />,
    "product-list": <JsonPackageSvg />,
    "Kanban": <ReactItem />,
    "Real State": <ReactItem />,
    "Calculator": <ReactItem />
  };
  const handelDelete = (href: string) => {
 
    removeLink(href);
   
  };
  const setLink = (name: string, href: string) => {
    setActiveProject(name);
    setActiveLink(href);
    if (name === "About me") {
      setShowAboutme(true);
    } else {
      setShowAboutme(false);
    }
  };
  
  useEffect(() => {
    if (activeLink) {
      router.push(activeLink);
      if (activeLink !== "/") {
        setShowAboutme(false);
      } else {
        setShowAboutme(true);
      }
    }
  }, [links, router, activeLink, setShowAboutme]);

  return (
    <div className="  flex-1 border-b-2 border-borderdark flex justify-between   items-center bg-maincolor text-sm  flex-grow-0">
      <div className="flex">
        {links.map((item: { name: string; href: string }, index: number) => (
          <div
            key={index}
            className={`w-36 flex  gap-1 items-center justify-around text-center font-semibold  border-r border-borderdark ${
              item.href === path
                ? "border-b-2 border-b-headerborder text-linkcolor"
                : "text-fontcolor"
            }`}
          >
            {iconMap[item.name]} 
            <button
              onClick={() => setLink(item.name, item.href)}
              className="h-10"
            >
              {item.name}
            </button>
            
           
            <button
              onClick={() => {
                handelDelete(item.href);
              }}
            >
              <DeleteSvg className="fill-white" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex h-full items-center gap-2 ">
        <LoadBranchSvg />
        <Sidewindow />
        <ToggleSvg />
      </div>
    </div>
  );
};
export default Headermain;
