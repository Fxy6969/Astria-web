'use client';

import React from "react";
import Link from "next/link";

import "../app/style.css";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

// Icons
import { GitHubLogoIcon, Component1Icon } from '@radix-ui/react-icons';
import { FaDiscord, FaShoppingBasket } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";


// Components
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
  

export function NavBar() {
    const { setTheme } = useTheme()

    return (
        <>
            <div className="navbar border">
                <nav className="flex items-center justify-between gap-3">
                    <Link href="/" className="items-center flex gap-2 font-semibold">
                        <Component1Icon />
                        Eclipse
                    </Link>

                    <div className="flex items-center justify-items-center gap-3 font-semibold">
                        <Link href="/">
                            Pricing
                        </Link>
                        <Link href="/">
                            Projects
                        </Link>
                        <Link href="/">
                            Careers
                        </Link>
                        <Link href="/">
                            Developers
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button asChild variant="outline" className="discord-button" size={"gyat"}>
                            <Link href="/">Contact Us</Link>
                        </Button>

                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </div>
                </nav>
            </div>
        </>
    )
}