"use client";

import { useState } from "react";

import AboutMets from "./Aboutitem";
import {
  ArowSvg,
  EsllintSvg,
  GitignoreSvg,
  JsonpakageSvg,
  NextitemSvg,
  NodeitemSvg,
  PublicitemSvg,
  
  SrcSvg,
  TailwindSvg,
  TsconfigSvg,
  WorksrcSvg,
} from "@/assets";

import MyWorkItem from "./MyworkItem";

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
      svg: <NextitemSvg />,
    },
    {
      title: "node-modules",
      svg: <NodeitemSvg />,
    },
  ];
  const directory = [
    {
      title: ".eslintrc.json",
      svg: <EsllintSvg />,
    },
    {
      title: ".gitignore",
      svg: <GitignoreSvg />,
    },
    {
      title: "next.config.js",
      svg: <NextitemSvg />,
    },
    {
      title: "package-lock.js",
      svg: <JsonpakageSvg />,
    },
    {
      title: "package.json",
      svg: <JsonpakageSvg />,
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
      className="flex flex-col gap-1  h-screen overflow-y-auto"
      style={{ maxHeight: "400px" }}
    >
      {firstDirectory.map((item, index) => (
        <div key={index} className="flex gap-1  hover:bg-borderdark pl-2">
          <ArowSvg />
          {item.svg}
          <span className="text-gray-500">{item.title}</span>
        </div>
      ))}
      <div
        className="flex gap-1 text-base text-fontcolor hover:bg-borderdark pl-2"
        onClick={togglePublic}
      >
        <ArowSvg />
        <PublicitemSvg />
        <span>public</span>
      </div>
      <div className="flex gap-4 pl-4 ">{showPublic && <AboutMets />}</div>
      <div className="pl-2 flex gap-1 " onClick={toggleSrc}>
        <div className="flex gap-1">
          <ArowSvg />
          <SrcSvg />
          <span>src</span>
        </div>
      </div>
      {showSrc && (
        <div className="flex gap-2 pl-4">
          <div className="border-[0.5px] border-bordercolor"></div>
          <div className="flex flex-col  gap-2   ">
            <div className="border-l-[0.5px] border-bordercolor"></div>
            <div className="flex gap-1 " onClick={toggleWork}>
              <ArowSvg />
              <WorksrcSvg />
              <span>my work</span>
            </div>
            {showWork && <MyWorkItem />}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1 pl-6">
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
