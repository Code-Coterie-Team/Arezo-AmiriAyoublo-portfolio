import BorderTop from "./Bordertop";

interface ISubject{
    description:string;
    point1:string;
    point2:string;
    point3:string
}


export default function Challenge({description,point1,point2,point3}:ISubject){
     
    return(
        <div id="challenge"  className="flex flex-col gap-4 h-[600] pl-12">
               <BorderTop/>
               <p className="text-3xl font-medium text-white">Challenge</p>
               <p>
                 {description}
               </p>
               <span> {point1}</span>
               <span>{point2}</span>
               <span>{point3}</span>
               
        </div>
    )

}