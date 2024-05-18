"use client";

import { NavBar } from "@/components/navbar";
import { Companies } from "./moving-cards";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { Spotlight } from "@/components/Spotlight";
import { Button } from "@/components/ui/button";
import WordRotate from "./magicui/word-rotate";
import { BorderBeam } from "@/components/magicui/border-beam";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Icons
import { ArrowRightIcon } from "@radix-ui/react-icons";

// Sections
import CardSection from "@/components/sections/cards";
import ProjectSection from "@/components/sections/projects";

export function Page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <NavBar />

      <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
        <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🚀 20% Discount for new Customers!</span>{" "}
          </TextShimmer>
        </div>
        <div className="justify-center text-center items-center">
          <Spotlight
            className="-top-[20px] left-[20px] md:left-[22vw] md:-top-[10vh]"
            fill="white"
          />
          <div className="flex justify-center text-center items-center gap-[12rem]">
            <h1 className="text-white text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center">
              Bring your{" "}
              <div className="inline-flex font-medium leading-none tracking-tighter">
                <WordRotate
                  className=""
                  words={["ideas", "dreams", "vision"]}
                />
              </div>
              <br className="hidden md:block" /> to life with{" "}
              <span className="hidden md:block bg-gradient-to-br from-red-300 from-30% to-red-800 bg-clip-text text-transparent">
                {" "}
                Eclipse
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3 pt-5">
            <Button variant="default">
              <Link href="/pricing">Learn more</Link>
              <ArrowRightIcon />
            </Button>
            <Button variant="outline">
              <Link href="/pricing">Get started</Link>
            </Button>
          </div>
          <div
            ref={ref}
            className="relative rounded-xl mt-[2rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
          >
            <div
              className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
                inView ? "before:animate-image-glow" : ""
              }`}
            >
              <div className="absolute w-full h-[5rem] blur-[15vh] bg-custom-gradient -z-1"></div>
              <BorderBeam card={true} size={150} duration={6} delay={2} />
              <img
                src="/image.png"
                alt="Coding Image"
                className="relative w-full h-full rounded-[inherit] object-contain"
              />
            </div>
          </div>
        </div>
        <Companies />
      </section>
      <CardSection />
      <ProjectSection />
    </>
  );
}
