"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ExampleOrchestration from "../example-orchestration";
import ExamplePropagation from "../example-propagation";

const Menu = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const handleClickToggle = () => setIsVisibleMenu(!isVisibleMenu);
  return (
    <div>
      <Button aria-expanded={isVisibleMenu} onClick={handleClickToggle}>
        {isVisibleMenu ? "Fechar Menu" : "abrir Menu"}
      </Button>
      <AnimatePresence>
        {isVisibleMenu && (
          <>
            <MenuBackground />
            <MenuContent />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed -z-10 inset-0 bg-neutral-900/50"
    />
  );
};

const MenuContent = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed p-5 text-neutral-50 w-80 left-0 top-0 inset-0 bg-neutral-900"
    >
      <ExampleOrchestration />
      <ExamplePropagation />
    </motion.div>
  );
};

export default Menu;
