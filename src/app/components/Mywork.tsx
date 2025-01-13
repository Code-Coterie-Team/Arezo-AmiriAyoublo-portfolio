import { MywokrSvg, MyworkiconSvg, WorkSvg } from "@/assets";
import BorderTop from "./Bordertop";


export default function Mywokr(){

    return(
        <div id="mywork" className="grid grid-cols-1 gap-6 ">
            <BorderTop/>
            <div className="flex gap-4 relative">
                <div className="size-10 rounded-full bg-workfont blur-lg"></div>
                <MyworkiconSvg className=" absolute"/>
                <span className="text-2xl text-white">My work</span>
                
            </div>
            <p className="font-extrabold  text-white  text-3xl "> Some of my work as a <span className="text-workfont">Frontend developer</span></p>
            <div className="gird grid-cols-1 gap-4 pt-20">
                <div className="w-full p-6 border-[0.5px]  rounded-lg border-fontcolor h-[300px] hover:shadow-md hover:shadow-workfont"></div>

            </div>
        </div>
    )
}