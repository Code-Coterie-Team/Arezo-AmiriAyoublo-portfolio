"use client"
import { useStore } from '@/assets';
import { ActiveWindowSvg, ArowSvg, HorizWindowSvg, SidewindowSvg, VscodeSvg } from "../assets";




const Header = () => {
    const setVisibileExplore = useStore((state) => state.setVisibileExplore)
    const visibleExplore = useStore((state) => state.visibleExplore)

    return (
        <div className="   flex   justify-between  border-b-2 border-borderdark text-sm p-2  ">
            <div className="flex gap-20 text-base">

                <ul className="flex gap-4   ">
                    <VscodeSvg />

                    <li>File</li>
                    <li> Edit</li>
                    <li>View</li>
                    <li> Run</li>
                    <li>Go</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
                <h1>Arezoo AmiriAyoubloo-Visual Studio Code</h1>
            </div>

            <div className="flex gap-6 ">
                <div className="flex gap-2">
                    <button onClick={() => { setVisibileExplore(!visibleExplore) }}  ><ActiveWindowSvg /> </button>
                    <button><HorizWindowSvg /></button>
                    <button> <SidewindowSvg /></button>
                </div>

            </div>
        </div>
    )
}
export default Header;