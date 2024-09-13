"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ExampleGesture from "./components/docs/example-gesture";
import ExampleAnimatePresence from "./components/docs/example-animate-presence";
import ExampleVariants from "./components/docs/example-variants";
import ExampleOrchestration from "./components/docs/example-orchestration";
import ExamplePropagation from "./components/docs/example-propagation";
import ExampleHookUseScroll from "./components/docs/example-hook-use-scroll";

// Notificar quando o componente (motion) é desmontado ou está na árvore.
// Adiar a desmontagem do componente (motion) até que a operação (animação) seja concluída.

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClickToggleVisible = () => setIsVisible(!isVisible);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Button onClick={handleClickToggleVisible}>
        {isVisible ? "Esconder" : "Mostrar"}
      </Button>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <ExampleVariants /> */}
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
      <ExamplePropagation />
      <ExampleOrchestration />
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <ExampleAnimatePresence isVisible={isVisible} />
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
        <ExampleGesture />
      </div>
      <section className="h-svh" />
      <ExampleHookUseScroll />
      <section className="h-svh" />
    </main>
  );
}
