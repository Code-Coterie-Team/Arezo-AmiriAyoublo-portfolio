import { ReactItemSvg } from "@/assets";
import Link from "next/link"

const MyWorkItem = () => {
    return (
        <div className="flex gap-6  pl-1 ">
            <div className="border-[0.1px] border-bordercolor"></div>
            <div className="flex flex-col gap-4 ">
                <Link href={'/apps/kanban'}>
                    <div className="flex gap-2">
                        <ReactItemSvg />
                        Kanban
                    </div>
                </Link>
                <Link href={'/real-state'}>
                    <div className="flex gap-2">
                        <ReactItemSvg />
                         real state
                    </div>
                </Link>
                <Link href={'/real-state'}>
                    <div className="flex gap-2">
                        <ReactItemSvg />
                         calculator
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default MyWorkItem;