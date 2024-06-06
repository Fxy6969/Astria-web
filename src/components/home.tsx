"use client";

import TextShimmer from "@/components/magicui/animated-shiny-text";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import WordRotate from "./magicui/word-rotate";
import { BorderBeam } from "@/components/magicui/border-beam";
import Header from "@/components/custom-comps/header";

import Link from "next/link";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Icons
import { ArrowRightIcon } from "@radix-ui/react-icons";

// Sections
import CardSection from "@/components/sections/cards";
import ProjectSection from "@/components/sections/projects";
import Details from "@/components/sections/details";
import FeatureSection from "@/components/sections/features";
import { CalltoActionSection } from "@/components/sections/end";

export function Page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section className="relative mx-auto mt-[9rem] md:mt-[3rem] max-w-[80rem] px-6 text-center md:px-8">
        <div className="flex text-center items-center justify-center">
          <div className="flex text-center items-center justify-center gap-6 rounded-[999px] p-1 pr-2 shadow-main_tag w-max border-[1px] border-navbar_shadow border-solid backdrop-blur-[12px] bg-nav-background">
            <div className="shadow-main_tag rounded-[999px] pr-[5px] pt-[2px] pb-[2px] pl-[5px] w-max border-[1px] border-navbar_shadow border-solid backdrop-blur-[12px] bg-nav-background">
              <div className="text-[13px] outline-none flex flex-col justify-star flex-shrink-0 ">
                <p className="text-navbar_text_color">Latest Release</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-center gap-6">
              <TextShimmer className="text-[16px]">
                <span>Introducing Adapt!</span>{" "}
              </TextShimmer>
              <div className="p-[2px] shadow-main_tag rounded-[999px] w-max border-[1px] border-navbar_shadow border-solid backdrop-blur-[12px] bg-nav-background">
                <Link href="./">
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 justify-center text-center items-center">
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
              <BorderBeam card={true} size={150} duration={8} delay={2} />
              <img
                src="/image.png"
                alt="Coding Image"
                loading="lazy"
                className="relative w-full h-full rounded-[inherit] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Details />
      <CardSection />
      <ProjectSection />
      <FeatureSection />
      <CalltoActionSection />
    </>
  );
}
