import AboutKanban from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";

export default function Kanban() {
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      <AboutKanban
        project={"Kanban"}
        description={
          "A Kanban project built using React,Redux, and Tailwind CSS is a modern, responsive task management application."
        }
        imageproject={"/kanban.jpg"}
      />
      <Challenge />
      <Soultion />
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
    </div>
  );
}
