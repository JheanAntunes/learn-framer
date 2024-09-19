"use client";
import React, { useEffect } from "react";
import * as motion from "framer-motion/client";
import { useAnimate } from "framer-motion";
const ExampleHookUseAnimate = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { y: 0, opacity: 1 }, { duration: 0.5 });
  }, [scope, animate]);

  return (
    <div className="h-svh w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        ref={scope}
        className="w-20 h-20 rounded bg-red-600"
      />
    </div>
  );
};

export default ExampleHookUseAnimate;
