"use client"
import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import ContactToMe from "./Contacttome";
import Mywork from "./Mywork";
import AnimateComponent from "./AnimateComponent";

const AboutMe = () => {
   
return (
        <div className={`flex flex-col p-8 gap-60 h-full  `}  >
            <AnimateComponent id='aboutme'><PersonalInformation   /></AnimateComponent>
            <AnimateComponent id='work-experience'><WorkExperience /></AnimateComponent>
            <AnimateComponent id='skills'><Skills /></AnimateComponent>
            <AnimateComponent id='mywork'><Mywork /></AnimateComponent>
            <AnimateComponent id='contact-me'><ContactToMe /></AnimateComponent>
            

        </div>
    )
}
export default AboutMe;