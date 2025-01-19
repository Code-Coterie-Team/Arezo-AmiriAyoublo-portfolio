

const Theme=()=>{
    return (
        <div className={`grid grid-cols-1  p-10 md:flex md:flex-col md:gap-20 text-white `} >
            <p className="text-white font-semibold text-2xl">Manage Theme</p>
            <div className="grid grid-cols-1 md:flex md:gap-20">
                <div className="flex flex-col gap-2  content-center">
                    <div className="h-20 w-20"><img src="_github-dark.png" alt="" className="h-full w-full rounded-full" /></div>
                    <p className=" font-semibold text-xl">GitHub Dark</p>
                    <span className="">GitHub</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-20 w-20"><img src="_dracula.png" alt="" className="h-full w-full rounded-full" /></div>
                    <p className=" font-semibold text-xl">Dracula</p>
                    <span>Dracula Theme</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-20 w-20"><img src="_ayu.png" alt="" className="h-full w-full rounded-full" /></div>
                    <p className=" font-semibold text-xl">Ayu Dark</p>
                    <span>teabyii</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-20 w-20"><img src="_ayu.png" alt="" className="h-full w-full rounded-full" /></div>
                    <p className=" font-semibold text-xl">Ayu Mirage</p>
                    <span>teabyii</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-20 w-20"><img src="_nord.png" alt="" className="h-full w-full rounded-full" /></div>
                    <p className=" font-semibold text-xl">Nord</p>
                    <span>arcticicestudio</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-20 w-20"><img src="_night-owl.png" alt="" className="h-full w-full " /></div>
                    <p className=" font-semibold text-xl">Night Owl</p>
                    <span>sarah.drasner</span>
                    <button className="h-10 w-30  " >Set Color Theme</button>
                </div>

            </div>
        </div>
    )
}
export default Theme;