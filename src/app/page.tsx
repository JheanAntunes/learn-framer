"use client";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Notificar quando o componente (motion) é desmontado ou está na árvore.
// Adiar a desmontagem do componente (motion) até que a operação (animação) seja concluída.

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClickToggleVisible = () => setIsVisible(!isVisible);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={handleClickToggleVisible}>
        {isVisible ? "Esconder" : "Mostrar"}
      </Button>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <motion.p
          initial={{ opacity: 0, x: "-100%" }}
          animate={{
            x: "0%",
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </motion.p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <AnimatePresence>
          {isVisible && (
            <motion.a
              key="KEY"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </motion.a>
          )}
        </AnimatePresence>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <motion.div
          whileHover={{
            scale: 1.2,
            backgroundColor: "rgb(0, 0, 0)",
            color: "rgb(250, 250, 250)",
            transition: { duration: 0.1 },
          }}
          onHoverStart={(event, info) => {
            console.log("event:", event);
            console.log("info:", info);
            // Função de retorno de chamada que é acionada quando o ponteiro começa a passar o mouse sobre o componente.
            // console.log("passei o mouse!");
          }}
          onHoverEnd={(event, info) => {
            // Função de retorno de chamada que é acionada quando o ponteiro para de pairar sobre o componente.
            // console.log("parei de passar sobre o componente o mouse!");
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
          onTap={(event, info) => {
            // Retorno de chamada quando o gesto de toque termina com êxito neste elemento
            console.log("cliquei e terminei nesse componente na ui");
          }}
          onTapStart={(event, info) => {
            // Retorno de chamada quando o gesto de toque é iniciado neste elemento
            console.log("inicie o clique nesse componente na ui");
          }}
          onTapCancel={(event, info) => {
            // Retorno de chamada quando o gesto de toque termina fora desse elemento.
            console.log("soltei o clique fora deste componente na ui");
          }}
          className="group rounded-lg px-5 py-4"
          drag
          dragDirectionLock
          onDirectionLock={(axis) => {
            // A função de retorno de chamada que dispara uma direção de arrasto é determinada.
            console.log(axis);
          }}
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 300 }}
          dragSnapToOrigin
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          onDrag={() => {
            // Função de retorno de chamada que é acionada quando o componente é arrastado.
            console.log("arrastei o elemento na ui");
          }}
          onDragStart={() => {
            // Função de retorno de chamada que é acionada quando o arrastar é iniciado.
            console.log("iniciei o arrastamento do elemento");
          }}
          onDragEnd={() => {
            // Função de retorno de chamada que é acionada quando o arrasto termina.
            console.log("parei de arrastar.");
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
      </div>
    </main>
  );
}
