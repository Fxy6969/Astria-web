"use client";

import Link from "next/link";
import { useRef } from "react";

// icons
import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 transform">
      <nav className="relative z-40 border-default border-b backdrop-blur-sm transition-opacity">
        <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
          <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
            <div className="flex items-center">
              <Link href="/" className="items-center flex gap-1 font-semibold">
                <Component1Icon />
                Eclipse
              </Link>
            </div>

            <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
              <div className="flex items-start justify-start text-[15px] text-navbar_text_color font-light">
                <Button asChild variant="ghost" size={"gyat"}>
                  <Link href="#pricing-section">Pricing</Link>
                </Button>
                <Button asChild variant="ghost" size={"gyat"}>
                  <Link href="#project-section">Projects</Link>
                </Button>
                <Button asChild variant="ghost" size={"gyat"}>
                  <Link href="/discord">Careers</Link>
                </Button>
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-[1px] border-navbar_border_color border-solid bg-bg_navbar_button rounded-[6px] shadow-none text-[14px]"
                size={"gyat"}
              >
                <Link href="/discord">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
