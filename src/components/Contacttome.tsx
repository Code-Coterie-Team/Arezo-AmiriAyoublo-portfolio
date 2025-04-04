
import ContacttoMeSvg from "@/icon/ContacttoMeSvg";
import BorderTop from "./Bordertop";



export default function ContactToMe() {

    return (
        <div className="grid grid-cols-1 gap-8  pt-10 pb-20"  id='contact-me'>
            <BorderTop />
            <div className="flex gap-4 relative p-6 ">
                <div className="size-10 rounded-full bg-contactcolor  blur-xl"></div>
                <ContacttoMeSvg className=" absolute " />
                <p className="text-white font-semibold text-2xl">Contact Me</p>
            </div>
            <p className="text-3xl font-semibold text-white">Get in <span className="text-contactcolor">contact</span> and let s <span className="text-contactcolor">work together</span>
            </p>
            <div className="w-full flex flex-col group  rounded-2xl ">
                <div className="flex flex-col border  group  rounded-tl-xl rounded-tr-xl border-fontcolor p-4 group-focus-within:border-contactcolor group-focus-within:border-2 ">
                    <label htmlFor="" className=" group-focus-within:text-contactcolor" >Name</label>
                    <input type="text" className="bg-transparent  outline-none" />
                </div>
                <div className="flex flex-col  border border-fontcolor p-4">
                    <label htmlFor="">Email</label>
                    <input type="text" className="bg-transparent  outline-none" />
                </div>
                <div className="flex flex-col  border border-fontcolor p-4">
                    <label htmlFor="">Company</label>
                    <input type="text" className="bg-transparent  outline-none" />
                </div>
                <div className="flex flex-col  border border-fontcolor rounded-br-xl rounded-bl-xl  p-4">
                    <label>Message</label>
                    <input type="text" className="bg-transparent  outline-none" />
                </div>
            </div>
            <div className="flex justify-end"><button className="bg-white rounded-2xl text-borderdark font-bold w-16 h-6">send</button></div>
        </div>
    )
}