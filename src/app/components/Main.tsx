import Home from "./Homemain";
import Headermain from "./Headermain";
import Homemain from "./Homemain";
import Link from "next/link";
import { jetBrainsMono } from "../ui/font";




const Main = () => {



    return (

        <div className={`bg-barcolor w-full col-start- col-end-4 ${jetBrainsMono.className}`}>
            
            <Homemain/>


        </div>


    )
}
export default Main;