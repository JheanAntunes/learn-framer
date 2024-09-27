"use client";
import React from "react";
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";

const ExamplePropagation = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0, x: -100 },
  };

  const fakeArrayItems = [0, 1, 2];

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      {fakeArrayItems.map((_, i) => (
        <motion.li key={i} custom={i} variants={item}>
          Propagração{" "}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ExamplePropagation;
