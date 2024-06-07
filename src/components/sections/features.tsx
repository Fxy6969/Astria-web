"use client";

import Link from "next/link";
import React from "react";

// components
import { Button } from "@/components/ui/button";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa6";

// icons
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";
import { IoIosStats } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaCodePullRequest } from "react-icons/fa6";

export default function FeatureSection() {
  return (
    <section className="relative pt-20 pb-60">
      <div className="flex flex-col items-start md:p-10 lg:p-20">
        <div className="backdrop-blur-[24px] border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🫨 What does Eclipse offer?</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="text-5xl font-bold pt-4">Leveled-up Designs.</h1>
        <span className="text-text_gray text-1xl font-regular mt-1">
          With enchanced Designs, High Quality, and full support, you <br />
          can seamlesssly bring your Service to the next level.
        </span>

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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 sm:px-0 mt-20 max-w-[97%]">
          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <MdOutlineLibraryAdd fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Unlimited Components
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                Our development team possesses the expertise to seamlessly
                integrate any component you envision for your website. We
                understand that every website requires unique features to
                achieve its specific goals.
              </p>
            </div>
          </div>

          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <MdOutlineSecurity fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Seamless Third-Party Integrations
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                Need to connect your website with your payment gateway? We'll
                bridge the gap, secure and efficient, empowering you to
                streamline your workflow and maximize the value of your existing
                technology stack.
              </p>
            </div>
          </div>

          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <PiStrategy fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Strategic Design Elements
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                From captivating video backgrounds and interactive animations
                <br /> that command attention, to user-friendly forms and
                intuitive <br />
                navigation that ensure a smooth user journey.
              </p>
            </div>
          </div>

          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <IoIosStats fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Craft a Website that Captivates
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                Websites are more than online brochures; they're the digital
                face of your brand. We create websites that not only look
                stunning, but also convert visitors into leads and customers.
              </p>
            </div>
          </div>

          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <FaWandMagicSparkles fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Your Brand Deserves More Than Stock Photos
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                In today's world, a user-friendly website isn't a luxury, it's a
                necessity. We prioritize user experience in every design,
                ensuring your website is not only visually appealing but also
                intuitive and easy to navigate.
              </p>
            </div>
          </div>

          <div className="text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <FaCodePullRequest fill="gray" />
              </div>
              <h3 className="text-base tracking-tight font-semibold leading-6 text-white">
                Beyond Pixels: Strategic Web Design for Measurable Growth.
              </h3>
            </div>
            <div>
              <p className="text-text_gray font-regular">
                The web is constantly evolving, and so are we. Our team stays at
                the forefront of web design trends, ensuring your website is not
                only <br />
                beautiful but also performs flawlessly across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
