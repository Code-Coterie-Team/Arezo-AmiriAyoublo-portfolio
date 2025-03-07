"use client";

import { useState } from "react";

import AboutMets from "./Aboutitem";

import MyWorkItem from "./MyworkItem";
import NextItem from "@/icon/NextItem";
import Nodeitem from "@/icon/Nodeitem";
import EslintSvg from "@/icon/EslintSvg";
import GitignoreSvg from "@/icon/GitignoreSvg";
import NextIcon from "@/icon/NextIcon";
import JsonPackageSvg from "@/icon/JsonPackageSvg";
import TailwindSvg from "@/icon/TailwindSvg";
import TsconfigSvg from "@/icon/TsconfigSvg";
import ArowSvg from "@/icon/ArowSvg";
import Publicitem from "@/icon/Publicitem";
import SrcSvg from "@/icon/SrcSvg";
import WorksrcSvg from "@/icon/WorksrcSvg";

const Portfolio = () => {
  const [showPublic, setShowPublic] = useState(true);
  const [showSrc, setShowSrc] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const togglePublic = () => {
    setShowPublic(!showPublic);
  };
  const toggleSrc = () => {
    setShowSrc(!showSrc);
  };
  const toggleWork = () => {
    setShowWork(!showWork);
  };
  const firstDirectory = [
    {
      title: ".next",
      svg: <NextItem/>,
    },
    {
      title: "node-modules",
      svg: < Nodeitem/>,
    },
  ];
  const directory = [
    {
      title: ".eslintrc.json",
      svg: <EslintSvg/>,
    },
    {
      title: ".gitignore",
      svg: <GitignoreSvg/>,
    },
    {
      title: "next.config.js",
      svg: <NextIcon/>,
    },
    {
      title: "package-lock.js",
      svg: <JsonPackageSvg />,
    },
    {
      title: "package.json",
      svg: <JsonPackageSvg />,
    },
    {
      title: "tailwind.config.ts",
      svg: <TailwindSvg />,
    },
    {
      title: "tsconfig.json",
      svg: <TsconfigSvg />,
    },
  ];
  return (
    <div
      className="flex flex-col gap-1 text-base  min-h-0 h-full font-normal overflow-x-hidden">
      {firstDirectory.map((item, index) => (
        <div key={index} className="flex gap-2 hover:bg-borderdark pl-2 flex-grow-0">
          <ArowSvg />
          {item.svg}
          <span className="text-gray-500">{item.title}</span>
        </div>
      ))}
      <div
        className="flex gap-1  text-fontcolor hover:bg-borderdark pl-2 flex-grow-0"
        onClick={togglePublic}
      >
        <ArowSvg />
        <Publicitem/>
        <span>public</span>
      </div>
      <div className="flex gap-1 pl-4  ">{showPublic && <AboutMets />}</div>
      <div className="pl-2 flex gap-1  " onClick={toggleSrc}>
        <div className="flex gap-1">
          <ArowSvg />
          <SrcSvg/>
          <span>src</span>
        </div>
      </div>
      {showSrc && (
        <div className="flex gap-1 pl-4 ">
          <div className="border-[0.5px] border-bordercolor"></div>
          <div className="flex flex-col  gap-1   ">
            <div className="border-l-[0.5px] border-bordercolor"></div>
            <div className="flex gap-1 " onClick={toggleWork}>
              <ArowSvg />
              < WorksrcSvg/>
              <span>my work</span>
            </div>
            {showWork && <MyWorkItem />}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 pl-6 flex-grow-1">
        {directory.map((item, index) => (
          <div key={index} className="flex gap-4">
            {item.svg}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
