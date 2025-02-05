import AboutProject from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Soultion";
import Technologies from "@/components/Technology";
const RealState = () => {
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      <AnimateProject id="about">
        <AboutProject
          project={"Real State"}
          description={`
            This project is a feature-rich real estate management platform developed using React Redux
             and Tailwind CSS It is designed to provide a seamless and
             responsive user experience for buying, selling, and renting propertie`}
          imageproject={"/real-estate.png"}
        />
      </AnimateProject>
      <AnimateProject id="challenge">
        <Challenge
          description={
            "This challenge involves designing and developing a modernresponsive landing page for a home-related business or service. The goal is to create an engaging and visually appealing webpage that effectively showcases key features, services, or products."
          }
          point1={
            "Responsive Design The page is designed to be fully responsive, ensuring a seamless experience on desktop, tablet, and mobile devices."
          }
          point2={
            "Mobile-friendly hamburger menu for easy navigation on smaller screens."
          }
          point3={
            "A clean and intuitive navigation bar helps users explore the site effortlessly."
          }
        />
      </AnimateProject>
      <AnimateProject id="soultion">
        <Soultion
          soultions={[
            "Utilized CSS Flexbox and Grid to create a responsive layout that adapts seamlessly to various screen sizes.",
            "Implemented a sticky navigation bar for easy access to key sections",
            "Integrated CSS animations and hover effects to provide a dynamic user experience.",
          ]}
        />
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

export default RealState;
