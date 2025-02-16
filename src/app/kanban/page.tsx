import AboutProject from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";
 const Kanban=()=> {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AnimateProject id="about">
        <AboutProject
          project={"Kanban"}
          description={
            "A Kanban project built using React,Redux, and Tailwind CSS is a modern, responsive task management application."
          }
          imageproject={"/kanban.jpg"}
          industry="Management"
        />
      </AnimateProject>
      <AnimateProject id="challenge">
        
        <Challenge
          description={
            "Build a fully functional Kanban board application where users can manage tasks by moving them between columns (To-Do, In Progress, and Done)"
          }
          point1={
            "Users should be able to create tasks with a title  description"
          }
          point2={"users should be able to edit tasks and board "}
          point3={"The board should be responsive and work well on both mobile and desktop screens"}
        />
      </AnimateProject>
      <AnimateProject id="solution">
        <Soultion
          soultions={[
            "build with a state and save in local stoarge",
            "set a global state with redux for handeling edit ",
            "responsive with tailwind",
          ]}
          linkPoject='https://kanban-react-arezoo.netlify.app/'
        />
      </AnimateProject>
      <AnimateProject id="technologies">
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
}
export default Kanban