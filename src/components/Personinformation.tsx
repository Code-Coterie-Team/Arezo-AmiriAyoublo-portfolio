"use clinet";
import { ContactSvg } from "@/assets";
import BorderTop from "./Bordertop";
import Image from "next/image";
import College from "./College";
import Social from "./Social";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect } from "react";

export default function PersonalInformation() {
  const [animationState, setAnimationState] = useState("visible");
  const activeRef = useRef(null);
  const isView = useInView(activeRef, { once: false });
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev === "visible" ? "hidden" : "visible"));
    }, (job.length + 1) * 200);
    
    return () => clearInterval(interval);
  });

  const job = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    "  ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div id="aboutme" className=" flex flex-col gap-60">
      <div className="flex flex-col pt-20 gap-4 justify-center content-center  text-white scroll-smooth">
        <div className="flex text-5xl gap-4 relative">
          <h1 className=" font-semibold ">Arezoo AmiriAyoubloo</h1>
          <span className="  animation animate-wave">👋</span>
        </div>
        <div className="flex gap-2  items-center">
          <span>Looking for job</span>
          <div className="size-2 bg-red-600 animate-pulse rounded-full"></div>
          <motion.div
            className="text-linkcolor "
            initial="hidden"
            animate={animationState}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  staggerDirection: 1,
                },
              },
              hidden: {
                transition: {
                  staggerChildren: 0.2,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {job.map((item, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <p>
          I’m a frontend developer passionate about creating engaging and
          visually appealing user interfaces.I bring valuable problem-solving
          skills and a broad perspective to my work. Lately, I’ve been fully
          immersed in frontend projects, continuously honing my skills and
          staying updated with the latest technologies to deliver seamless user
          experiences.
        </p>
        <Social />
      </div>
      <div className=" flex flex-col justify-center items-center ">
        {[...Array(3)].map((_, index) => (
          <motion.span
            key={index}
            className="size-4 border-white border-r-2 border-b-2"
            animate={{
              rotate: [45, 45, 45],
              y: [-15, 0, 15],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay:index*0.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-10 text-white">
        <BorderTop />
        <div className="flex items-center gap-4 relative">
          <div className="size-10 rounded-full bg-green-300 blur-lg "></div>
          <ContactSvg
            className="text-white absolute  left-2 "
            width="2rem"
            height="2rem"
          />
          <h2 className="text-2xl">About Me</h2>
        </div>
        <p className="text-5xl">
          I am a <span className="text-green-600">software developer</span>{" "}
          specialized on
          <span className="text-green-600"> Web Applications</span>
        </p>
        <motion.div
          ref={activeRef}
          className="flex gap-14"
          initial="hidden"
          animate={isView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <div className="flex flex-col gap-8 font-semibold">
            <h3 className="text-2xl">Arezoo AmiriAyoubloo</h3>
            <span className="text-green-500">Frontend Developer</span>
            <p className="text-fontcolor">
              I’m software developer , passionate about honing my skills and
              always eager to learn new technologies
            </p>
          </div>
          <Image
            src="/arezoo.jpeg"
            alt=""
            className="rounded-full "
            height={300}
            width={300}
          />
        </motion.div>
        <College />
      </div>
    </div>
  );
}
