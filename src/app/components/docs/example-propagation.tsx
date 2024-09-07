"use client";
import React from "react";
import * as motion from "framer-motion/client";

const ExamplePropagation = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      <motion.li variants={item}>Propagração </motion.li>
      <motion.li variants={item}>Propagração </motion.li>
      <motion.li variants={item}>Propagração</motion.li>
    </motion.ul>
  );
};

export default ExamplePropagation;
