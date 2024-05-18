"use client";

import React from "react";
import Link from "next/link";

import "../app/style.css";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

// Icons
import { GitHubLogoIcon, Component1Icon } from "@radix-ui/react-icons";
import { FaDiscord, FaShoppingBasket } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="navbar border backdrop-blur-xl">
        <nav className="flex items-center justify-between gap-3 backdrop-blur-xl">
          <Link href="/" className="items-center flex gap-2 font-semibold">
            <Component1Icon />
            Eclipse
          </Link>

          <div className="flex items-center justify-items-center gap-3 font-semibold">
            <Link href="/">Pricing</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Developers</Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="discord-button"
              size={"gyat"}
            >
              <Link href="/">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
