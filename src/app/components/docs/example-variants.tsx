"use client";
import { Variants } from "framer-motion";
import * as motion from "framer-motion/client";
import React from "react";

const ExampleVariants = () => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.2, transition: { duration: 0.1 } },
    tap: { scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <motion.p
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
    >
      Get started by editing&nbsp;
      <code className="font-mono font-bold">src/app/page.tsx</code>
    </motion.p>
  );
};

export default ExampleVariants;
