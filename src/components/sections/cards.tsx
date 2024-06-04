"use client";

import NumberTicker from "../magicui/number-ticker";
import RadialGradient from "@/components/magicui/radial-gradient";
import { Moving } from "@/components/custom-comps/moving";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/magicui/canvas-reveal";

// icons
import { MdShowChart } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";

import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

export default function CardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = React.useState(false);

  return (
    <section className="w-full pt-20">
      {/* <div className="overflow-x-hidden absolute blur-3xl -z-50 h-full w-full rounded-lg bg-transparent">
        <RadialGradient
          className="overflow-x-hidden absolute -z-50 blur-3xl -translate-y-20 left-0 right-0 -translate-x-[61vw]"
          from="#FF7D7D"
          size={330}
        />
      </div>
      <div className="overflow-hidden absolute blur-3xl -z-50 h-full w-full rounded-lg bg-transparent">
        <RadialGradient
          className="overflow-hidden -z-50 blur-3xl translate-y-20 left-0 right-0 translate-x-[61vw]"
          from="#FF7D7D"
          size={370}
        />
      </div> */}
      <div className="justify-center text-center items-center">
        <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🤔 Why should you choose Eclipse?</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="font-bold text-center text-6xl pt-[2vh] pb-10">
          Revolutionize your design <br />
          experience with Eclipse
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="group flex flex-col justify-center items-center border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[37rem] h-[22rem] rounded-[13px] rounded-tl-[53px] backdrop-blur-xl p-6">
          <div className="relative group-hover:-translate-y-0 transition-transform duration-500 ease-in-out">
            <img
              className="group-hover:opacity-0 transition-opacity duration-500"
              src="./card_1.png"
              width="350"
              height="240"
              alt="Card image 01"
            />
            <img
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              src="./card_1_after.png"
              width="350"
              height="240"
              alt="Card image 01 displaying on hover"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="mx-auto text-[12px] blur-xl text-text_red text-center mt-[-40px]">
              User Growth
            </p>

            <div className="flex items-center justify-center">
              <MdShowChart className="mr-2 text-text_red" />
              <p className="text-[12px] text-text_red text-center">
                User Growth
              </p>
            </div>
          </div>
          <p className="font-medium text-[24px] text-center mt-[-10px]">
            Customer Growth
          </p>
          <p className="text-[14px] text-text_gray text-center">
            Our designs attract and captivate your audience. With
            <br /> visually stunning and user-friendly layouts, we help
            <br /> your website stand out.
          </p>
        </div>

        <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[37rem] h-[22rem] rounded-[13px] rounded-tr-[53px] backdrop-blur-xl">
          <div className="group pt-7 flex flex-col justify-center items-center">
            <div className="z-50 relative w-full max-w-[265px] rounded-2xl border transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-[50px]">
              <BorderBeam card={true} size={70} duration={6} delay={2} />
              <div className="z-[-1] absolute bottom-0 w-full h-5/3 md:h-[2rem] blur-[15vh] bg-custom-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="p-5">
                <div className="z-50 flex justify-between items-center">
                  <div className="flex space-x-2 items-center mb-0.5">
                    <div className="text-2xl font-bold text-slate-200 mb-1">
                      17,479
                    </div>
                    <div className="text-xs font-medium text-emerald-500">
                      +48%
                    </div>
                  </div>
                  <button className="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="4"
                      fill="none"
                    >
                      <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-5">
                <img
                  className=""
                  src="./card_2.png"
                  width="380"
                  height="173"
                  alt="Card image 01"
                />
              </div>
            </div>
          </div>
          <p className="mx-auto text-[12px] blur-xl text-text_red text-center mt-[3px]">
            \n Boost
          </p>
          <div className="flex items-center justify-center">
            <MdAdsClick className="mr-2 text-text_red" />
            <p className="text-[12px] text-text_red text-center">Boost</p>
          </div>
          <p className="font-medium text-[24px] text-center mt-[-6px]">
            Conversion Rates
          </p>
          <p className="text-[14px] text-text_gray text-center">
            Our designs boost your conversion rates. With visually
            <br /> appealing and intuitive layouts, we turn visitors into
            customers, <br />
            helping your website achieve its goals.
          </p>
        </div>
        <div className="w-full flex justify-center gap-2">
          <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[25.7rem] h-[22rem] rounded-[13px] rounded-bl-[53px] backdrop-blur-xl">
            <div className="flex justify-center items-center pt-[5.5rem]">
              <div
                ref={containerRef}
                className="relative flex h-full w-[15rem] justify-between"
              >
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={div1Ref}
                  toRef={div2Ref}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={div1Ref}
                  toRef={div2Ref}
                  reverse={true}
                />
                <div
                  ref={div1Ref}
                  className="z-10 h-10 w-10 shadow-main_tag rounded-[10px] pr-[5px] pt-[2px] pb-[2px] pl-[5px] border-[1.5px] border-navbar_shadow border-solid backdrop-blur-[12px] bg-cards-comp-background"
                >
                  <div className="font-bold flex items-center justify-center pt-2">
                    <FaFigma fill="gray" size={20} />
                  </div>
                </div>
                <div className="h-[3.5rem] w-[3.5rem] shadow-main_tag rounded-[10px] mt-[-6px] pr-[5px] pt-[5px] pb-[2px] pl-[5px] border-[2.7px] border-white border-solid bg-card_comp_bg">
                  <div className="z-[11] font-bold flex items-center justify-center pt-2">
                    <IoMdPlanet className="z-[11]" size={28} />
                  </div>
                </div>
                <div className="absolute blur-[20px] z-[10] h-[3.5rem] w-[3.5rem] shadow-main_tag rounded-[10px] mt-[-6px] ml-[91px] pr-[5px] pt-[5px] pb-[2px] pl-[5px] border-[2px] border-white border-solid bg-card_comp_bg" />
                <div
                  ref={div2Ref}
                  className="z-10 h-10 w-10 shadow-main_tag rounded-[10px] pr-[5px] pt-[2px] pb-[2px] pl-[5px] border-[1.5px] border-navbar_shadow border-solid backdrop-blur-[12px] bg-cards-comp-background"
                >
                  <div className="z-[11] font-bold flex items-center justify-center pt-2">
                    <FaUser className="z-[11]" fill="gray" size={20} />
                  </div>
                </div>
              </div>
            </div>
            <p className="mx-auto text-[12px] blur-xl text-text_red text-center mt-[40px]">
              Fast
            </p>
            <div className="flex items-center justify-center">
              <HiQuestionMarkCircle className="mr-1 text-text_red" />
              <p className="text-[12px] text-text_red text-center">
                How we work
              </p>
            </div>
            <p className="font-medium text-[24px] text-center mt-[-6px]">
              The Process
            </p>
            <p className="text-[14px] text-text_gray text-center">
              We understand your needs, create a plan, design and <br />
              develop your website with your feedback,
              <br /> test thoroughly, launch, and provide ongoing
              <br /> support.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="group border-[1.7px] hover:border-white/25 transition-all bg-card_bg w-[22rem] h-[10.75rem] rounded-[13px] backdrop-blur-xl">
              <h1 className="pl-6 pt-6 leading-[6vh] tracking-normal font-semibold text-[52px] bg-custom-gradient bg-clip-text text-transparent">
                <NumberTicker value={30} />%
              </h1>
              <p className="font-regular pl-6 pt-7 text-[15px] text-start text-text_gray">
                <NumberTicker value={30} />% Increase in Conversion Rates.{" "}
                <br />
                We can insure a boost in conversion rates.
              </p>
            </div>
            <div className="group border-[1.7px] hover:border-white/25 transition-all bg-card_bg w-[22rem] h-[10.75rem] rounded-[13px] backdrop-blur-xl">
              <h1 className="pl-6 pt-6 leading-[6vh] tracking-normal font-semibold text-[52px] bg-custom-gradient bg-clip-text text-transparent">
                <NumberTicker value={45} />%
              </h1>
              <p className="font-regular pl-6 pt-7 text-[15px] text-start text-text_gray">
                <NumberTicker value={45} />% Increase in Engagement. <br />
                We can insure a increase in Engagement.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[25.7rem] h-[22rem] rounded-[13px] rounded-br-[53px] backdrop-blur-xl"
          >
            <div className="flex justify-center items-center z-20">
              <h1 className="z-50 pt-[3rem] leading-tight tracking-normal font-semibold text-[60px] bg-custom-gradient bg-clip-text text-transparent">
                Our Resolute
                <br /> Commitment
                <br /> to Detail
              </h1>
            </div>
            {/* <div className="absolute z-50 transition-all delay-700 [perspective:2000px] opacity-0 hover:opacity-100 [--animation-delay:400ms] rounded-[inherit] inset-0 hover:[background:linear-gradient(to_top,hsl(var(--background))_1%,transparent)]" /> */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0 rounded-[13px]"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent rounded-[13px]"
                  colors={[
                    [255, 122, 122],
                    [69, 41, 41],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={2}
                />
              </motion.div>
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
          </div>
        </div>
      </div>
    </section>
  );
}
