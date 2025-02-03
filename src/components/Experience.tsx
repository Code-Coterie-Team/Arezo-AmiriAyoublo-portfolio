import { strict } from "assert"

interface IData{
    date:string;
    position:string;
    description:string[];
    company: string;
    imageSrc: string;
}
export default function Experience({date,position,description,company,imageSrc}:IData){
    return(
        <div className="p-6 border-l border-fontcolor grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-16">
                    <p className="text-sm text-white">{date}</p>
                    <img src={imageSrc} alt="" className="size-32" />
            </div>
            <div className="flex flex-col gap-8 ">
                    <div className="flex flex-col gap-6">
                         <p className="text-red-400 text-lg font-semibold "> {company} | {position}</p>
                    
                            <div className="flex flex-col gap-2 content-center">
                                {description.map((desc,index)=>(
                                    <p key={index}>{desc}</p>
                                ))}
                                
                                
                            </div>
                    </div>
            </div>
            
        </div>
    )
}