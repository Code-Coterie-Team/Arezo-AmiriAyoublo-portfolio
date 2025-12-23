import AboutProject from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AnimateProject id="about">
        
        <AboutProject
          project={"Crypto Dashboadr "}
          description={
             "Design and develop a React Crypto Dashboard with a clean and user-friendly UI."
          }
          imageproject={"/cryptodashboard.png"}
          industry="Crypto"
        />
      </AnimateProject>
      <AnimateProject id="challenge">
    
        <Challenge
          description={
            "Design and develop a React Crypto Dashboard with a clean and user-friendly UI. "
          }
          point1={" Rapid State Changes & Race Conditions"}
          point2={"State Management Complexity "}
          point3={"Loading Flicker & UX Issues "}
        />
      </AnimateProject>
      <AnimateProject id="soultion">
        <Soultion
          soultions={[
            "Fast coin selection triggered overlapping requests. I solved this by using React Query with abort signals to cancel outdated requests.",
            "The dashboard combines UI state, persisted user preferences, and remote server data. I separated concerns using Zustand for local state and React Query for server state.",
            "Chart calculations (price changes, min/max) were expensive when recalculated every render. I optimized them using memoization."
          ]}
          linkPoject='https://cryptodashboardarezoo.netlify.app/'
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
            { name: "MUI", image: "/tailwindcss-logo.webp" },
          ]}
        />
      </AnimateProject>
    </div>
  );
};

export default Dashboard;