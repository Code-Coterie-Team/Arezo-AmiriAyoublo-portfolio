import AboutKanban from "@/components/AboutProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";

const Calculator=()=>{
    return(
        <div  className="grid grid-cols-1 gap-4 h-full">
            <AboutKanban project={'Calculator'} description={"This project is a modern and responsive calculator application built using React and Tailwind CSS, designed to perform basic arithmetic operations with an intuitive and user-friendly interface."}  imageproject={"/calculator.png"}/>
            <Challenge/>
            <Soultion/>
            <Technologies item={[{name:'JavaScript',image:'/js-logo.webp'},{name:'HTML5',image:'/html5-logo.webp'},{name:'CSS3',image:'/css-logo.png'},
               {name:'ReactJS',image:'/react-logo.webp'},{name:'Git',image:'/git-logo.webp'}
               ,{name:'Github',image:'/github-logo.webp'},{name:'TailwindCSS',image:'/tailwindcss-logo.webp'}]}/>
        </div>
    )
}

export default Calculator;