import { MywokrSvg, MyworkiconSvg, WorkSvg } from "@/assets";
import BorderTop from "./Bordertop";
import Samplework from "./Samplework";
import SampleMini from "./SampleMini";


export default function Mywork(){

    return(
        <div id="mywork" className="grid grid-cols-1 gap-10 ">
            <BorderTop/>
            <div className="flex gap-4 relative">
                <div className="size-10 rounded-full bg-workfont blur-xl"></div>
                <MyworkiconSvg className=" absolute left-2 top-1"/>
                <span className="text-2xl text-white">My work</span>
                
            </div>
            <p className="font-extrabold  text-white  text-3xl "> Some of my work as a <span className="text-workfont">Frontend developer</span></p>
            <div className="grid grid-cols-1 gap-8 pt-20">
                <Samplework project={'Kanban '} image={'/kanban.jpg'} link={'/apps/kanban'} projectlink=""/>
                <Samplework project={'real-state'} image={'/real-estate.png'} link={'/apps/real-state'} projectlink=""/>
                <Samplework project={'Calculator'} image={'/calculator.png'} link={'/apps/calculator'} projectlink={'https://calculator-react-app-arezoo.netlify.app/'}/>
                 <Samplework project={'Product list'} image={'/productlist.webp'} link={'/apps/product-list'} projectlink={'https://product-list-card-js.netlify.app/'}/>

            </div>
        </div>
    )
}