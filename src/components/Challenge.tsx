import BorderTop from "./Bordertop";



export default function Challenge(){
     
    return(
        <div id="challenge" className="flex flex-col gap-4 h-[600] pl-12">
               <BorderTop/>
               <p className="text-3xl font-medium text-white">Challenge</p>
               
               <p>Design and develop a platform that deploys a prebuilt Kanban task management system within minutes. <br /> This application integrates multiple services seamlessly to deliver a robust and scalable task management solution.</p>
               
        </div>
    )

}