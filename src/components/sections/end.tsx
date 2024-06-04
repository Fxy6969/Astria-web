"use client";

// libraries
import Link from "next/link";
import React from "react";

// components
import { Button } from "@/components/ui/button";
import TextShimmer from "@/components/magicui/animated-shiny-text";

// icons
import { FaArrowRight } from "react-icons/fa6";

export function CalltoActionSection() {
  return (
    <section className="flex justify-center text-center items-center pb-[8rem]">
      <div>
        <div className="backdrop-blur-[24px] border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>👀 What are you waiting for?</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="text-5xl font-bold pt-4">
          Boost your Service <br />
          with Eclipse.
        </h1>
        <div className="pt-6 gap-4 flex justify-center items-center">
          <Button asChild>
            <Link href="/">Book a meeting</Link>
          </Button>
          <Button className="flex gap-2" variant="outline" asChild>
            <Link href="/">
              Contact us
              <FaArrowRight size={11} />
            </Link>
          </Button>
        </div>
        <div className="absolute w-[26vw] h-[8rem] blur-[17vh] bg-custom-gradient z-[-1]"></div>
      </div>
    </section>
  );
}
