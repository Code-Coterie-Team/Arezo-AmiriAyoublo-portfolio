"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store";

const AnimateComponent = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount:0.1});
  const { setActiveSection } = useStore();

  useEffect(() => {
    if (isInView) setActiveSection(id);
  }, [isInView,id,setActiveSection]);

  const animationVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};
export default AnimateComponent;
