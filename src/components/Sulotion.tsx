import DirectionIcon from "@/icon/DirectionIcon";
import BorderTop from "./Bordertop";
import Link from "next/link";

interface IProps {
  soultions: string[];
  linkPoject:string
}

export default function Soultion({ soultions,linkPoject }: IProps) {
  return (
    <div id="solution" className="flex flex-col gap-4 p-10">
      <BorderTop />
      <span className="text-white text-4xl">Soultions </span>
      {soultions.map((item, index) => (
        <p key={index} className="pl-4">
          {" "}
          {item}
        </p>
      ))}
      <Link href={linkPoject} target="_blank" className="bg-white items-center rounded-2xl w-36 p-2 h-8 text-black flex gap-2 "> 
        visit website
        <DirectionIcon/> 
      </Link>
    </div>
  );
}
