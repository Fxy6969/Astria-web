"use client";

import Link from "next/link";

import { Button } from "../ui/button";
// import { Badge } from "@/components/ui/badge";

import TextShimmer from "@/components/magicui/text-shimmer";

export default function PricingSection() {
  return (
    <section id="pricing-section" className="relative pb-[20rem]">
      <div className="justify-center text-center items-center">
        <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🙌 Our current available packages</span>{" "}
          </TextShimmer>
        </div>

        <h1 className="font-bold text-center md:text-6xl text-4xl pt-[2vh] pb-5">
          Plans that scale your Business
        </h1>
      </div>
      <div className="flex justify-center items-center pl-10 pt-10">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="h-max w-[22rem] p-5 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <p className="text-[22px] font-bold">One Pager</p>
            <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal">
              One Page is perfect for those seeking a concise and impactful
              online presence with a sleek, professional single-page website.
            </p>
            <p className="text-[25px] font-semibold mt-3">24.99€</p>
            <p className="text-[15px] font-normal">5€ for mobile designs</p>
            <div className="mt-5 w-full flex justify-center items-center">
              <Button className="w-full" asChild>
                <Link href="/discord">Get Started</Link>
              </Button>
            </div>
            <div className="flex-col justify-start items-start">
              <h1 className="text-[18px] font-bold mt-5">Information</h1>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Great for startups and small businesses
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Focuses on key information and services
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Responsive design
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Full Support
              </p>
            </div>
          </div>

          <div className="h-max w-[22rem] p-5 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <p className="text-[22px] font-bold justify-center items-center inline-flex">
              Premium
              {/* <Badge variant={"outline"} className="ml-[5px]">
                Recommended
              </Badge> */}
            </p>
            <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal">
              Our Premium Package is perfect for those seeking a comprehensive
              and versatile online presence with a multi-page website.
            </p>
            <p className="text-[25px] font-semibold mt-3">39.99€</p>
            <p className="text-[15px] font-normal">Mobile Designs, Included</p>
            <div className="mt-5 w-full flex justify-center items-center">
              <div className="z-[-1] absolute w-full h-5/3 md:h-[1rem] blur-[10vh] bg-custom-gradient duration-500 opacity-100"></div>
              <Button className="w-full" asChild>
                <Link href="/discord">Get Started</Link>
              </Button>
            </div>
            <div className="flex-col justify-start items-start">
              <h1 className="text-[18px] font-bold mt-5">Information</h1>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Ideal for established businesses
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Multiple pages for detailed content
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Responsive design
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Full Support
              </p>
            </div>
          </div>

          <div className="h-max w-[22rem] p-5 relative group flex flex-col justify-start items-start border-[1.7px] hover:border-white/25 transition-all bg-card_bg rounded-[13px] backdrop-blur-xl">
            <p className="text-[22px] font-bold">Enterprise</p>
            <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal">
              Our Enterprise Package is perfect for those seeking a custom
              project tailored to their unique needs.
            </p>
            <p className="text-[25px] font-semibold mt-3">
              Dependent on project size
            </p>
            <p className="text-[15px] font-normal">Discuss extra options</p>
            <div className="mt-5 flex w-full justify-center items-center">
              <Button className="w-full" asChild>
                <Link href="/discord">Lets Discuss</Link>
              </Button>
            </div>
            <div className="flex-col justify-start items-start">
              <h1 className="text-[18px] font-bold mt-5">Includes</h1>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Discussed Features
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Discussed Design
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Unlimited Components
              </p>
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] font-normal mt-2">
                Full Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
