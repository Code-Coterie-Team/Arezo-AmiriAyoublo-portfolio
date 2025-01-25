
import Image from "next/image";
import BorderTop from "./Bordertop";
interface IData {
    item: { name: string, image: string }[]
}
const Technologies = ({ item }: IData) => {

    return (
        <div className="flex flex-col gap-4 p-10" id='technologies'>
            <BorderTop />
            <span className="text-white text-3xl ">Technologies</span>
            <div className="flex gap-4 pb-20  items-center">
                {item.map((item, index) => (

                    <div key={index} className="flex flex-col items-center gap-2">
                        <Image src={item.image} alt="" width={50} height={50} />
                        <span className="text-white font-bold "> {item.name}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Technologies;