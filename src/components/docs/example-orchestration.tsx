import React from "react";
import * as motion from "framer-motion/client";

const ExampleOrchestration = () => {
  /*
“beforeChildren”: A transição do componente pai ocorre antes das transições dos filhos.
“afterChildren”: A transição do componente pai ocorre após as transições dos filhos.
O staggerChildren é uma propriedade usada no Framer Motion para criar animações escalonadas entre elementos filhos
 */

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      <motion.li variants={item}>Orquestração</motion.li>
      <motion.li variants={item}>Orquestração</motion.li>
      <motion.li variants={item}>Orquestração</motion.li>
    </motion.ul>
  );
};

export default ExampleOrchestration;
