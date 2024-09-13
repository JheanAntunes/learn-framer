"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
const ExampleHookUseScroll = () => {
  const targetRef = useRef(null);
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed w-full right-0 left-0 top-0 origin-[0%] bg-red-600 h-2"
      />
      <motion.section
        ref={targetRef}
        className="h-svh bg-orange-600 flex justify-center items-center w-full"
      >
        <motion.div
          style={{ opacity, x }}
          className="bg-pink-600 w-40 h-40 rounded"
        />
      </motion.section>
    </>
  );
};

export default ExampleHookUseScroll;
