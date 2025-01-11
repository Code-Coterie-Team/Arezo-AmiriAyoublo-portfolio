import { SuitcaSvg } from "@/assets";
import Experience from "./Experience";



const WorkExperience=()=>{
     

    return(
        <div id='work-experience' className="flex flex-col gap-6 overflow-auto">
            <div className="flex gap-2 w-full">
                <div className="w-4 border-t-4 border-white"></div>
                <div className=" w-full border-t border-fontcolor p-2"></div>
            </div>
            <div className="flex gap-8">
                <div className="  blur"></div>
                <SuitcaSvg className=" " />
                <span className="text-2xl text-white">work experience </span>
            </div>
            <h2 className="font-extrabold  text-white  text-3xl "> <span className="text-red-400"> Junior Frontend </span> with  <span className="text-red-400">1 years</span> of <br /> experience in the software industry</h2>
                <div className="pt-20">
                <Experience date='JUN 2023-PRESENT' imageSrc="codecoterie.jpeg" company="CodeCoterie" position='Frontend Developer' description={['Developed and maintained React  components, screens','Developed front-end user interface using React,Tailwind and JavaScript for Web Apps','Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.'] } />
                <Experience date='JUN 2023-PRESENT' imageSrc="codecoterie.jpeg" company="CodeCoterie" position='Frontend Developer' description={['Developed and maintained React Native components, screens, and features for the mobile app using TDD practices', 'Developed front-end user interface using React, React Native and JavaScript for Web Apps', 'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.']} />

                </div>
                
            
        </div>
    )

}

export default WorkExperience;