
import BorderTop from "./Bordertop";

interface IProps{
    soultions:string[]
}

export default function Soultion({soultions}:IProps){

    return(
        <div id="solution" className="flex flex-col gap-4 pl-6">
               
               <BorderTop/>
               <span className="text-white text-4xl">Soultions </span>
               {soultions.map((item,index)=>(
                   <p key={index}  className="pl-4"> {item}</p>
               ))}
        </div>
    )
}