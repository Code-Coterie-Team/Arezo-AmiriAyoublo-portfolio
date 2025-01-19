import { ChallengeSvg, ProjectAboutSvg, SolutionSvg, TechnologySvg } from "@/assets";
import Link from "next/link";

const ProjectItem=()=>{
    return(
         <div className="flex flex-col gap-2 pl-6 pt-1">
             <Link href={`#about`} className={`flex gap-2`}>
                <ProjectAboutSvg/>
                 About
             </Link>
             <Link href={`#challenge`} className={`flex gap-2`}>
                <ChallengeSvg/>
                 Challenge
             </Link>
             <Link href={`#solution`} className={`flex gap-2`}>
                <SolutionSvg/>
                Solution
             </Link>
             <Link href={`#technologies`} className={`flex gap-2`}>
                <TechnologySvg/>
                 Technologies
             </Link>

         </div>
    )
}

export default ProjectItem;