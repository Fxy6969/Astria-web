"use client";
import Link from "next/link";

import { Companies } from "@/components/ui/companies";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { SphereMask } from "@/components/magicui/sphere-mask";

// icons
import { FaDiscord } from "react-icons/fa";

export default function Detail() {
  return (
    <section className="relative">
      <SphereMask />
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
        <div className="backdrop-blur-[24px] border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🫨 Contact us / we are available on</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="text-5xl font-bold pt-4">Top-Tier Experience.</h1>
        <span className="text-text_gray text-1xl font-regular mt-1">
          You can seamlessly reach out to Astria through your favourite <br />
          Platform and bring your Service to the next level.
        </span>

        <div className="mx-auto mt-5 grid grid-cols-12 gap-5">
          <div className="h-max w-[22rem] p-10 col-span-12 md:col-span-4 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <div className="flex justify-start items-center">
              <FaDiscord size={82} fill="rgba(255,255,255,0.9)" />
            </div>
            <span className="text-text_gray_lighter text-[18px] font-normal mt-1">
              You can join our Discord Server and get in touch with us and meet
              our community.
            </span>
            <Link href="/contact" className="mt-1 text-text_red font-semibold">
              Join us on Discord...
            </Link>
          </div>

          <div className="h-max w-[22rem] p-10 col-span-12 md:col-span-4 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <div className="flex justify-start items-center">
              <FaDiscord size={82} fill="rgba(255,255,255,0.9)" />
            </div>
            <span className="text-text_gray_lighter text-[18px] font-normal mt-1">
              You can join our Discord Server and get in touch with us and meet
              our community.
            </span>
            <Link href="/contact" className="mt-1 text-text_red font-semibold">
              Join us on Discord...
            </Link>
          </div>

          <div className="h-max w-[22rem] p-10 col-span-12 md:col-span-4 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <a>im so gay</a>
          </div>
        </div>
      </div>
      <Companies />
    </section>
  );
}
