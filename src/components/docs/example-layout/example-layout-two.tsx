"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ExampleLayoutTwo = () => {
  const [direction, setDirection] = useState(false);
  return (
    <section className="h-svh w-full flex items-center justify-center">
      <div
        onClick={() => setDirection(!direction)}
        style={{
          justifyContent: direction ? "flex-end" : "flex-start",
        }}
        className={cn(
          "bg-neutral-200 w-80 h-20 rounded-xl flex p-5 justify-right items-center"
        )}
      >
        <motion.div
          style={{ height: direction ? "50px" : "70px" }}
          layout
          animate={{}}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 35,
          }}
          className={cn("bg-blue-600 w-20 h-10 rounded-full")}
        />
      </div>
    </section>
  );
};

export default ExampleLayoutTwo;
