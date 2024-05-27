import Marquee from "@/components/magicui/marquee";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { SphereMask } from "@/components/magicui/sphere-mask";

const companies = ["Discord", "GitHub", "Instagram"];

const payments = ["PayPal", "Stripe", "Coinbase"];

export function Companies() {
  return (
    <section id="companies">
      <SphereMask />
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative mt-10 mb-[15vh]">
          <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>We are available on</span>{" "}
            </TextShimmer>
          </div>
          <Marquee className="max-w-full [--duration:20s]">
            {companies.map((logo, idx) => (
              <img
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                className="h-10 w-28 dark:brightness-0 dark:invert"
                alt={logo}
              />
            ))}
          </Marquee>
          <Marquee className="max-w-full [--duration:20s]">
            {payments.map((logo, idx) => (
              <img
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                className="h-10 w-28 dark:brightness-0 dark:invert"
                alt={logo}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-back"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-back"></div>
        </div>
      </div>
    </section>
  );
}
