"use client";
import React, { useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
const ExampleInView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    console.log("element está visievel ? ", inView);
  }, [inView]);

  return (
    <section className="w-full">
      <motion.div className="h-svh w-full bg-red-600">
        <motion.h1
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
          ref={ref}
          className="p-5 text-8xl"
          transition={{ duration: 0.5 }}
        >
          Anime
        </motion.h1>
      </motion.div>
      <motion.div className="h-svh w-full bg-pink-600">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 text-8xl"
        >
          Quando
        </motion.h1>
      </motion.div>
      <motion.div className="h-svh w-full bg-purple-600">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 text-8xl"
        >
          Estiver em
        </motion.h1>
      </motion.div>
      <motion.div className="h-svh w-full bg-blue-500">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 text-8xl"
        >
          Exibição
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default ExampleInView;
