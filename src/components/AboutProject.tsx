import Image from "next/image";
interface IData{
    project:string;
    description:string;
    imageproject:string;
    industry:string;

}
export default function AboutProject({project,description,imageproject,industry}:IData) {
    
    return (
        <div id='about' className="flex flex-col gap-20 justify-center items-center pt-20 pb-10">
            <div className="flex flex-col gap-6 justify-center items-center">
                <span className="text-linkcolor font-bold">case study</span>
                <h3 className="text-5xl font-medium text-white">{project}</h3>
                <p className="text-fontcolor p-10 text-center text-lg">{description} </p>
            </div>
            <div className=" border-[0.5px] border-fontcolor w-full flex flex-col">
                <div className="flex w-full h-20">
                    <div className="border-r-[0.5px] border-fontcolor w-1/3 flex flex-col  justify-center pl-8 font-bold text-sm">
                        <span className="text-linkcolor font-medium ">Industry</span>
                        <span className="text-fontcolor font-medium">{industry}</span>
                    </div>
                    <div className="border-r border-fontcolor w-1/3 flex flex-col pl-8 justify-center font-bold text-sm">
                        <span className="text-linkcolor font-medium">Year</span>
                        <span className="text-fontcolor font-medium">2024</span>
                    </div>
                    <div className="border-r border-fontcolor w-1/3 flex flex-col pl-8 justify-center font-bold text-sm">
                        <span className="text-linkcolor ">Servic</span>
                        <span className="text-fontcolor ">Web Application</span>
                    </div>
                </div>
                <div>
                      <Image src={imageproject} alt="" width={1200} height={600}/>
                </div>
            </div>
        </div>
    )
}