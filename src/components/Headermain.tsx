"use client";
import Link from "next/link";

import {
  DeletSvg,
  LoadBranchSvg,
  SidewindowSvg,
  StarSvg,
  ToggleSvg,
} from "@/assets";
import React from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Headermain = () => {
  const { removeLink } = useStore();
  const links = useStore((state) => state.links);
  const path = usePathname();
  const router = useRouter();
  console.log(links);
  const handelDelete = (href: string) => {
    removeLink(href);
  };

  useEffect(() => {
    if (links.length > 0) {
      const lastLink = links[links.length - 1]?.href;
      if (lastLink) {
        router.push(lastLink);
      }
    } else {
      router.push("/");
    }
  }, [links, router]);

  return (
    <div className=" w-full h-12 border-b-2 border-borderdark flex justify-between  items-center bg-maincolor text-sm  fixed z-10  pr-20">
      <div className="flex h-full ">
        {links.map((item: { name: string; href: string }, index: number) => (
          <div
            key={index}
            className={`w-36  h-full flex  gap-2 items-center justify-around text-center font-semibold  border-r border-borderdark ${
              item.href === path
                ? "border-b-2 border-b-headerborder text-linkcolor"
                : "text-fontcolor"
            }`}
          >
            {item.name === "Home" && <StarSvg />}
            <Link href={item.href}>{item.name}</Link>
            <button
              onClick={() => {
                handelDelete(item.href);
              }}
            >
              <DeletSvg className="fill-white" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex ">
        <LoadBranchSvg />
        <SidewindowSvg />
        <ToggleSvg />
      </div>
    </div>
  );
};
export default Headermain;
