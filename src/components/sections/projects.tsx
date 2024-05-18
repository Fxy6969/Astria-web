"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import TextShimmer from "@/components/magicui/text-shimmer";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function ProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative mx-auto pt-20 mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="justify-center text-center items-center">
        <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🚀 Introducing Adapt</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="font-bold text-center text-6xl">Introducing Adapt</h1>
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
          <div className="absolute w-full h-[5rem] blur-3xl bg-custom-purple -z-1"></div>
          <BorderBeam card={false} size={150} duration={6} delay={2} />
          <img
            src="/adapt.png"
            alt="Adapt Image"
            className="relative w-full h-full rounded-[inherit] object-contain"
          />
        </div>
      </div>
      <div className="pt-80"></div>
    </section>
  );
}
