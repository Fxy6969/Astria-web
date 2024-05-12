"use client";

import { NavBar } from "@/components/navbar";
import { Companies } from "./moving-cards";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import RadialGradient from "@/components/magicui/radial-gradient";
import { CallToAction } from "@/components/magicui/call-to-action";
import { MagicContainer, MagicCard } from "@/components/magicui/magic-card";
import { Spotlight } from "@/components/Spotlight";
import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/magicui/number-ticker";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { FeatureCard1 } from "@/components/magicui/card";
import WordRotate from "./magicui/word-rotate";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Meteors } from "@/components/meteors";


// Icons
import { FaCircle } from "react-icons/fa6";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Page() {
  const ref = useRef(null);

  return (
    <>
      <NavBar />

      <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
        <div
          className={cn(
            "group rounded-full border max-w-[22rem] bg-navbar_bg",
          )}
        >
          <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ 20% discount for new customers</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </TextShimmer>
        </div>
        <Spotlight
        className="-top-[20px] left-[20px] md:left-[-10vw] md:-top-20"
        fill="white"
      />
        <div className="justify-start text-left items-start">
          <div className="flex gap-[12rem]">
          <h1 className="text-white py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-left">
              Bring your{' '}
              <div className="inline-flex text-left font-medium leading-none tracking-tighter">
                  <WordRotate
                      className=""
                      words={[
                          "ideas",
                          "dreams",
                          "vision",
                      ]}
                  />
              </div>
              <br className="hidden md:block" /> to life with{' '}
              <span className="hidden md:block bg-gradient-to-br from-red-300 from-30% to-red-800 bg-clip-text text-transparent" > Eclipse</span>
          </h1>

          </div>
          <div className="flex gap-3">
            <Button variant="default">
                <Link href="/pricing">Learn more</Link>
                <ArrowRightIcon />
            </Button>
            <Button variant="outline">
                <Link href="/pricing">Get started</Link>
            </Button>
          </div>
        </div>
        <Companies />
        {/* <div className="relative flex gap-[20rem] h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-[3rem] mt-[5rem] md:shadow-xl">
          <Meteors number={40} />
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Clients <span className="font-light"><br /><NumberTicker value={5} />+</span>
          </p>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Projects <span className="font-light"><br /><NumberTicker value={8} /></span>
          </p>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium text-black dark:text-white">
            Uptime <span className="font-light"><br /><NumberTicker value={24} />/7</span>
          </p>
        </div>
        <CallToAction /> */}
      </section>
    </>
  );
}