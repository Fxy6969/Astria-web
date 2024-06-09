import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { FaDiscord } from "react-icons/fa";
import { ChevronRight, HeartHandshake } from "lucide-react";
import RadialGradient from "@/components/magicui/radial-gradient";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "#card-section",
        name: "Features",
      },
      {
        href: "/pricing-section",
        name: "Pricing",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
      {
        href: "eclipse-support@gmail.com",
        name: "Support",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        href: "/discord",
        name: "About Us",
      },
      {
        href: "/discord",
        name: "Careers",
      },
      {
        href: "/discord",
        name: "Contact",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        href: "/discord",
        name: "Community",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/privacy",
        name: "Privacy Policy",
      },
      {
        href: "/terms",
        name: "Terms of Service",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "/",
    name: "Discord",
    icon: <FaDiscord className="size-4" />,
  },
  {
    href: "/",
    name: "Twitter",
    icon: <TwitterLogoIcon className="size-4" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t backdrop-blur-[100px]">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="gap-4 p-4 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Eclipse
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-6">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group inline-flex cursor-pointer items-center justify-start gap-1 text-gray-400 duration-200 hover:text-gray-600 hover:opacity-90 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <a href="/" className="cursor-pointer">
              Eclipse Designs
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
