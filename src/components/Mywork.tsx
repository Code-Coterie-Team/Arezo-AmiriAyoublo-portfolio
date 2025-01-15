import { MywokrSvg, MyworkiconSvg, WorkSvg } from "@/assets";
import BorderTop from "./Bordertop";
import Samplework from "./Samplework";


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
            <div className="grid grid-cols-1 gap-8 pt-20">
                <Samplework project={'Kanban task management web app'} image={'/kanban.jpg'} link={'/apps/kanban'}/>
                <Samplework project={'Home Landing Page'} image={'/real-estate.png'} link={'/apps/real-state'}/>
            </div>
        </div>
    )
}