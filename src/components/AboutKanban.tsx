import Image from "next/image"

export default function AboutKanban() {
    return (
        <div id='about' className="flex flex-col gap-20 justify-center items-center pt-20 pb-10">
            <div className="flex flex-col gap-6 justify-center items-center">
                <span className="text-linkcolor font-bold">case study</span>
                <h3 className="text-5xl font-medium text-white">Kanban</h3>
                <p className="text-fontcolor p-10 text-center text-lg">A Kanban project built using React,Redux, and Tailwind CSS is a modern, responsive task management application. </p>
            </div>
            <div className=" border-[0.5px] border-fontcolor w-full flex flex-col">
                <div className="flex w-full h-20">
                    <div className="border-r-[0.5px] border-fontcolor w-1/3 flex flex-col  justify-center pl-8 font-bold text-sm">
                        <span className="text-linkcolor font-medium ">Industry</span>
                        <span className="text-fontcolor font-medium">Management</span>
                    </div>
                    <div className="border-r border-fontcolor w-1/3 flex flex-col pl-8 justify-center font-bold text-sm">
                        <span className="text-linkcolor font-medium">Industry</span>
                        <span className="text-fontcolor font-medium">Management</span>
                    </div>
                    <div className="border-r border-fontcolor w-1/3 flex flex-col pl-8 justify-center font-bold text-sm">
                        <span className="text-linkcolor ">Industry</span>
                        <span className="text-fontcolor ">Management</span>
                    </div>
                </div>
                <div>
                      <Image src="/kanban.jpg" alt="" width={1200} height={600}/>
                </div>
            </div>
        </div>
    )
}