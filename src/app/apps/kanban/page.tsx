import AboutKanban from "@/components/AboutKanban";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";


export default function Kanban  () {
   return (
      
         
         <div className="grid grid-cols-1 gap-4">
           
            <AboutKanban />
            <Challenge/>
            <Soultion/>
            <Technologies/>
         </div>
     
   )
}
