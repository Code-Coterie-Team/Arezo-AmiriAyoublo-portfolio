import { AboutSvg, ContactSvg, MywokrSvg, SkillsSvg, StarSvg, WorkSvg } from "@/assets";
import Link from "next/link";

const AboutMets=()=>{
    return(
        <div className=" flex gap-6">
            <div className="text-fontcolor  "></div>
            <div className="flex flex-col gap-2 ">
                <div className="flex gap-1  hover:bg-borderdark ">

                    <StarSvg/>
                    <span className="text-gray-500">about_me.ts</span>
                </div>
                 <Link href={'/#aboutme'}>
                    <button className="flex  gap-2">
                        <AboutSvg/>
                        <span className="text-gray-500">About Me</span>

                    </button>
                 </Link>
                <Link href={'/#work-experience'}><button className="flex  gap-2">
                    <WorkSvg/>
                    <span className="text-gray-500">Work Experience</span>

                </button></Link>
                <button className="flex  gap-2">
                    <SkillsSvg/>
                    <span className="text-gray-500">Skills</span>

                </button>
                <button className="flex  gap-2">
                    <MywokrSvg/>
                    <span className="text-gray-500">My Work</span>

                </button>
                <button className="flex  gap-2">
                    <ContactSvg/>
                    <span className="text-gray-500">Contact Me</span>

                </button>
            </div>

            
       </div>
    )
}
export default AboutMets;