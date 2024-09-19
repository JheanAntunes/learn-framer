"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

const ExampleCustomCursor = () => {
  const { sizeCursor, x, y } = useCustomCursor();

  return (
    <div className="h-svh w-full">
      <motion.div
        style={{ width: sizeCursor, height: sizeCursor, x, y }}
        className="fixed left-0 top-0 pointer-events-none mix-blend-difference rounded-full bg-white"
      />
    </div>
  );
};

export default ExampleCustomCursor;
