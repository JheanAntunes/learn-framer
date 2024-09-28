"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExampleLayout = () => {
  const [direction, setDirection] = useState(false);
  return (
    <section
      className="h-svh w-full flex items-center justify-center"
      onClick={() => setDirection(!direction)}
    >
      <div
        data-direction={direction}
        className="switch bg-neutral-200 w-80 h-20 rounded-xl flex p-5 items-center"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="bg-blue-600 w-20 h-10 rounded-full"
        />
      </div>
    </section>
  );
};

export default ExampleLayout;
