"use clinet";
import { AboutSvg, BackgroundSvg, ContactSvg, GiticonSvg } from "@/assets";
import Link from "next/link";

import BorderTop from "./Bordertop";
import Image from "next/image";
import College from "./College";
import Social from "./Social";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";

export default function PersonalInformation() {
  const activeRef = useRef(null);
  const isView = useInView(activeRef, { once: false });
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

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
          <span className="text-linkcolor animate-pulse">
            /Frontend Developer
          </span>
        </div>
        <p>
          I’m a frontend developer passionate about creating engaging and
          visually appealing user interfaces. With a background in backend
          development using Python and Django, I bring valuable problem-solving
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
              y: [0, 15, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              delay: index * 0.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-10 text-white">
        <BorderTop />
        <div className="flex items-center gap-4 relative">
          <div className="size-10 rounded-full bg-green-300 blur-lg "></div>
          <ContactSvg
            className="fill-white absolute  left-4 "
            width={32}
            height={32}
          />
          <h2 className="text-2xl">About Me</h2>
        </div>
        <p className="text-5xl">
          I'm a <span className="text-green-600">software developer</span>{" "}
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
              I’m a junior software developer , passionate about honing my
              skills and always eager to learn new technologies
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
