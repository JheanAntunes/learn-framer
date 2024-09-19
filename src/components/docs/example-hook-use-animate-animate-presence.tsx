"use client";
import { AnimatePresence, useAnimate, usePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Component() {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 1 });
        await animate("li", { opacity: 1, x: 0 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("li", { opacity: 0, x: -100 });
        await animate(scope.current, { opacity: 0 });
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent, safeToRemove, animate, scope]);

  return (
    <ul ref={scope}>
      <li />
      <li />
      <li />
    </ul>
  );
}

import React from "react";

const ExampleHookUseAnimateWithPresence = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <AnimatePresence>
      {isShow ? <Component key="dialog" /> : null}
    </AnimatePresence>
  );
};

export default ExampleHookUseAnimateWithPresence;
