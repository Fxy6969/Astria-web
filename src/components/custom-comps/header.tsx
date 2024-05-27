"use client";

import Link from "next/link";

// icons
import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-center">
      <div className="z-10 fixed p-3 m-4 border-[1px] border-navbar_border border-solid backdrop-blur-[16px] bg-nav-background rounded-[17px] w-max max-w-max">
        <div className="flex items-center gap-[13vw]">
          <Link
            href="/"
            className="items-center flex gap-1 font-semibold text-navbar_text_color"
          >
            <Component1Icon />
            Eclipse
          </Link>

          <div className="flex items-center justify-center text-[15px] text-navbar_text_color font-light">
            <Button asChild variant="ghost" size={"gyat"}>
              <Link href="/">Pricing</Link>
            </Button>
            <Button asChild variant="ghost" size={"gyat"}>
              <Link href="/">Projects</Link>
            </Button>
            <Button asChild variant="ghost" size={"gyat"}>
              <Link href="/">Careers</Link>
            </Button>
            <Button asChild variant="ghost" size={"gyat"}>
              <Link href="/">Developers</Link>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            {/* <div className="border-[1px] border-navbar_border_color border-solid bg-bg_navbar_button rounded-[6px] shadow-none text-[12px]">
              <div className="border-0 border-navbar_border_color2 bg-nav-background-button rounded-[5px] shadow-navbar_shadow shadow-navbar_button">
                <div className="pl-4 pr-4 pt-1 pb-1 outline-none flex flex-col justify-start flex-shrink-0">
                  <p>See past projects</p>
                </div>
              </div>
            </div> */}
            <Button
              asChild
              variant="outline"
              className="border-[1px] border-navbar_border_color border-solid bg-bg_navbar_button rounded-[6px] shadow-none text-[14px]"
              size={"gyat"}
            >
              <Link href="/">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
