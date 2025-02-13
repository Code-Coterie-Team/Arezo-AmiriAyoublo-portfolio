import BranchSvg from "@/icon/BarnchSvg";
import BellSvg from "@/icon/BellSvg";
import CloseSvg from "@/icon/CloseSvg";
import FLashSvg from "@/icon/Falsh";
import LiveSvg from "@/icon/LiveSvg";
import TriangelSvg from "@/icon/Triangel";

const Footer = () => {
  return (
    <div className="flex  bg-borderdark border-t-2 justify-between items-center border-borderdark ">
      <div className="flex items-center gap-1 md:gap-4 ">
        <div className=" w-10    opacity-35 hover:bg-blue-300"></div>
        <div className="flex  gap-1 items-center   ">
          <BranchSvg />
          <span className=" text-sm">main</span>
        </div>
        <FLashSvg/>
        <div className=" hidden md:flex nd:items-center md:text-xs gap-1 ">
            <CloseSvg/>
            <span>0</span>
            <TriangelSvg/>
            <span>0</span>

        </div>
      </div>
      <div className="flex gap-2 md:gap-6 pr-4 text-sm font-medium items-center">
        <span className=" hidden md:flex hover:bg-slate-800">space:2</span>
        <span className=" hidden md:flex hover:bg-slate-800">UTF-8</span>
        <span className="hidden md:flex hover:bg-slate-800">CRLF</span>
        <span className= " hidden md:flex hover:bg-slate-800"> {"{ }"} TypeScript JSX</span>
        <div className=" flex hover:bg-slate-800"><LiveSvg/> Go Live</div>
        <BellSvg/>
      </div>
    </div>
  );
};
export default Footer;
