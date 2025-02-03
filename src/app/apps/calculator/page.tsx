import AboutProject from "@/components/AboutProject";
import AboutKanban from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";

const Calculator = () => {
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      <AnimateProject id="about">
        {" "}
        <AboutProject
          project={"Calculator"}
          description={
            "This project is a  calculator application built using React and Tailwind CSS, designed to perform basic arithmetic operations with an intuitive and user-friendly interface."
          }
          imageproject={"/calculator.png"}
        />
      </AnimateProject>
      <AnimateProject id="challenge">
        {" "}
        <Challenge description={'Design and develop a React Calculator with a clean and user-friendly UI. The calculator should support basic arithmetic operations (Addition, Subtraction, Multiplication, Division) '} point1={' Implement using React & Tailwind CSS'} point2={'Support live calculations with a clear display'} point3={'Include a Clear (C) button to reset input'} />
      </AnimateProject>
      <AnimateProject id="soultion">
        <Soultion soultions={['This React-based calculator application is designed using React Hooks (useState) for state management','It implements essential arithmetic operations along with some advanced mathematical functions.ww']}  />
      </AnimateProject>
      <AnimateProject id="technologies">
        {" "}
        <Technologies
          item={[
            { name: "JavaScript", image: "/js-logo.webp" },
            { name: "HTML5", image: "/html5-logo.webp" },
            { name: "CSS3", image: "/css-logo.png" },
            { name: "ReactJS", image: "/react-logo.webp" },
            { name: "Git", image: "/git-logo.webp" },
            { name: "Github", image: "/github-logo.webp" },
            { name: "TailwindCSS", image: "/tailwindcss-logo.webp" },
          ]}
        />
      </AnimateProject>
    </div>
  );
};

export default Calculator;
