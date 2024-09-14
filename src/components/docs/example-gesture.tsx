"use client";
import React from "react";
import * as motion from "framer-motion/client";
const ExampleGesture = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(250, 250, 250)",
        transition: { duration: 0.1 },
      }}
      onHoverStart={(event, info) => {
        // Função de retorno de chamada que é acionada quando o ponteiro começa a passar o mouse sobre o componente.
      }}
      onHoverEnd={(event, info) => {
        // Função de retorno de chamada que é acionada quando o ponteiro para de pairar sobre o componente.
      }}
      whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
      onTap={(event, info) => {
        // Retorno de chamada quando o gesto de toque termina com êxito neste elemento
      }}
      onTapStart={(event, info) => {
        // Retorno de chamada quando o gesto de toque é iniciado neste elemento
      }}
      onTapCancel={(event, info) => {
        // Retorno de chamada quando o gesto de toque termina fora desse elemento.
      }}
      className="group rounded-lg px-5 py-4"
      drag
      dragDirectionLock
      onDirectionLock={(axis) => {
        // A função de retorno de chamada que dispara uma direção de arrasto é determinada.
      }}
      dragConstraints={{ left: 0, top: 0, bottom: 0, right: 300 }}
      dragSnapToOrigin
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      onDrag={() => {
        // Função de retorno de chamada que é acionada quando o componente é arrastado.
      }}
      onDragStart={() => {
        // Função de retorno de chamada que é acionada quando o arrastar é iniciado.
      }}
      onDragEnd={() => {
        // Função de retorno de chamada que é acionada quando o arrasto termina.
      }}
      whileDrag={{
        opacity: 0.8,
        scale: 0.8,
        transition: { duration: 0.5 },
      }}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        Deploy{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </motion.div>
  );
};

export default ExampleGesture;
