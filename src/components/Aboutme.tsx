


import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import Mywokr from "./Mywork";
import ContactToMe from "./Contacttome";
import Mywork from "./Mywork";

const AboutMe = () => {
    
   
    return (
        <div className={`flex flex-col p-8 gap-60 h-full  `}  >
            <PersonalInformation   />
            <WorkExperience />
            <Skills />
            <Mywork />
            <ContactToMe />

        </div>
    )
}
export default AboutMe;