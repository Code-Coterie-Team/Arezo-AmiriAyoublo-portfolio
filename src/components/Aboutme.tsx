"use client"
import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import Mywokr from "./Mywork";
import ContactToMe from "./Contacttome";
import Mywork from "./Mywork";
import AnimateComponent from "./AnimateComponent";

const AboutMe = () => {
    

    return (
        <div className={`flex flex-col p-8 gap-60 h-full  `}  >
            <PersonalInformation   />
            <AnimateComponent><WorkExperience /></AnimateComponent>
            <AnimateComponent><Skills /></AnimateComponent>
            <AnimateComponent><Mywork /></AnimateComponent>
            <AnimateComponent><ContactToMe /></AnimateComponent>
            

        </div>
    )
}
export default AboutMe;