"use client";

import Link from "next/link";

// icons
import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/react-alert";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 transform">
      <nav className="relative z-40 border-default border-b backdrop-blur-xl transition-opacity">
        <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
          <div className="flex items-center px-6 lg:px-0 flex-1 justify-between">
            <div className="flex items-center">
              <Link href="/" className="items-center flex gap-1 font-semibold">
                <Component1Icon />
                Astria
              </Link>
            </div>

            <nav className="relative z-10 flex items-center justify-center pl-8 sm:space-x-4 lg:flex hidden h-16">
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
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent h-8 px-4 py-2">
                        Policies
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className="bg-card_bg">
                        <ul className="grid gap-5 p-4 md:grid-cols-2 lg:w-max">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline">
                                Terms of Service
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Terms of Service
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Welcome to Astria! Please read these terms
                                  carefully before using our services. By
                                  accessing or using our services, you agree to
                                  be bound by these terms. If you do not agree
                                  to these terms, please close the page.
                                </AlertDialogDescription>
                                <p className="text-muted-foreground text-sm">
                                  Last updated: June 22, 2024
                                </p>
                                <h3 className="text-lg font-bold">
                                  1. Acceptance of Terms
                                </h3>
                                <p className="text-[15px]">
                                  <li>
                                    By accessing or using Astria's web design
                                    services, you agree to be bound by these
                                    Terms of Service (the "Terms").
                                  </li>
                                  <li>
                                    If you do not agree to these Terms, you must
                                    not access or use our services.
                                  </li>
                                </p>
                                <h3 className="text-lg font-bold">
                                  2. Services Provided
                                </h3>
                                <p className="text-[15px]">
                                  Astria provides a range of web design and
                                  development services, including but not
                                  limited to website creation, maintenance, and
                                  optimization. The specific services to be
                                  provided will be outlined in a separate
                                  agreement between you and Astria.
                                </p>
                                <h3 className="text-lg font-bold">
                                  3. User Responsibilities
                                </h3>
                                <ul className="space-y-2">
                                  <li>
                                    You agree to provide accurate and complete
                                    information as required for the provision of
                                    services.
                                  </li>
                                </ul>
                                <h3 className="text-lg font-bold">
                                  4. Payment Terms
                                </h3>
                                <p className="text-[15px]">
                                  <li>
                                    Payment terms and conditions will be
                                    specified in the service agreement. Payment
                                    must be made in accordance with the agreed
                                    schedule.
                                  </li>
                                  <li>
                                    Astria reserves the right to suspend or
                                    terminate services if payment is not
                                    received in a timely manner.
                                  </li>
                                </p>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogAction>I Agree</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline">Purchase Policy</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Purchase Policy
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Welcome to Astria Web Design Services! Please
                                  read this Purchase Policy carefully before
                                  making any purchase with Astria. By making a
                                  purchase, you agree to be bound by this
                                  policy. If you do not agree with this policy,
                                  please do not proceed with your purchase.
                                </AlertDialogDescription>
                                <p className="text-muted-foreground text-sm">
                                  Last updated: June 22, 2024
                                </p>
                                <h3 className="text-lg font-bold">
                                  1. Payment Terms
                                </h3>
                                <p className="text-[15px]">
                                  <li>
                                    Payment for services will be specified in
                                    the service agreement. Payments must be made
                                    according to the agreed schedule and terms
                                    outlined in the agreement. Accepted payment
                                    methods will be specified at the time of
                                    contract initiation.
                                  </li>
                                </p>
                                <h3 className="text-lg font-bold">
                                  2. Refund Policy
                                </h3>
                                <p className="text-[15px]">
                                  Due to the customized nature of web design
                                  services, refunds are generally not provided
                                  once work has commenced. Exceptions may be
                                  made at the sole discretion of Astria in cases
                                  where services have not been delivered as
                                  agreed upon.
                                </p>
                                <h3 className="text-lg font-bold">
                                  3. Chargebacks
                                </h3>
                                <p className="text-[15px]">
                                  <li>
                                    Initiating a chargeback without first
                                    contacting Astria to resolve any issues is
                                    considered a violation of this Purchase
                                    Policy. If a chargeback is initiated, Astria
                                    reserves the right to terminate all services
                                    immediately and seek legal action if
                                    necessary. You will be responsible for any
                                    costs associated with the chargeback
                                    process.
                                  </li>
                                </p>
                                <h3 className="text-lg font-bold">
                                  4. Service Modifications
                                </h3>
                                <p className="text-[15px]">
                                  <li>
                                    Any modifications to the agreed-upon
                                    services must be documented and agreed to by
                                    both parties. Additional costs may apply for
                                    modifications beyond the original scope of
                                    work.
                                  </li>
                                </p>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogAction>I Agree</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
