import { SuitcaSvg } from "@/assets";
import Experience from "./Experience";
import BorderTop from "./Bordertop";



const WorkExperience=()=>{
     

    return(
        <div id='work-experience' className="flex flex-col gap-6 scroll-smooth">
           <BorderTop/>
            <div className="flex gap-8  relative ">
                <div className=" size-10 rounded-full bg-red-400 blur-lg "></div>
                <SuitcaSvg className=" absolute " />
                <span className="text-2xl text-white">work experience </span>
            </div>
            <h2 className="font-extrabold  text-white  text-3xl "> <span className="text-red-400"> Junior Frontend </span> with  <span className="text-red-400">1 years</span> of <br /> experience in the software industry</h2>
                <div className="pt-20">
                <Experience date='JUN 2023-PRESENT' imageSrc="codecoterie.jpeg" company="CodeCoterie" position='Frontend Developer' description={['Developed and maintained React  components, screens','Developed front-end user interface using React,Tailwind and JavaScript for Web Apps','Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.'] } />
                <Experience date='JUN 2023-PRESENT' imageSrc="acodev.jpeg" company="AcoDev" position='Frontend Developer' description={['Developed and maintained React Native components, screens, and features for the mobile app using TDD practices', 'Developed front-end user interface using React, React Native and JavaScript for Web Apps', 'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.']} />

                </div>
                
            
        </div>
    )

}

export default WorkExperience;