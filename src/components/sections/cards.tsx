import NumberTicker from "../magicui/number-ticker";
import RadialGradient from "@/components/magicui/radial-gradient";
import { Moving } from "@/components/moving";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";

export default function CardSection() {
  return (
    <section className="w-full pt-20">
      <div className="overflow-x-hidden absolute blur-3xl -z-50 h-full w-full rounded-lg bg-transparent">
        <RadialGradient
          className="overflow-x-hidden absolute -z-50 blur-3xl -translate-y-20 left-0 right-0 -translate-x-[61vw]"
          from="#FF7D7D"
          size={330}
        />
      </div>
      <div className="overflow-hidden absolute blur-3xl -z-50 h-full w-full rounded-lg bg-transparent">
        <RadialGradient
          className="overflow-hidden -z-50 blur-3xl translate-y-20 left-0 right-0 translate-x-[61vw]"
          from="#FF7D7D"
          size={370}
        />
      </div>
      <div className="justify-center text-center items-center">
        <div className="backdrop-blur-xl border rounded-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>🤔 Why should you choose Eclipse?</span>{" "}
          </TextShimmer>
        </div>
        <h1 className="font-bold text-center text-6xl pt-[2vh] pb-10">
          Revolutionize your design <br />
          experience with Eclipse
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 gap-y-2 justify-center">
        <div className="border-[1.7px] hover:border-white/15 transition-all bg-card_bg w-[22.3vw] h-[48vh] rounded-[13px] backdrop-blur-xl">
          <h1 className="pl-6 pt-5 font-medium text-[24px]">Customer Growth</h1>
          <p className="font-regular pl-6 pt-1 text-[14px] text-text_gray">
            Our designs attract and captive your audience. With <br />
            visually stunning and user-friendly layouts, we help your website
            stand out.
          </p>
          <svg
            width="400"
            height="600"
            viewBox="0 0 321 382"
            fill="none"
            className="w-full h-auto block"
          >
            <path
              d="M216 50C216 50 221.696 42.1432 226.443 39C233.89 34.07 240.55 40.5274 248.238 37.5C257.131 33.9979 257.553 24.7539 265.946 21C274.667 17.0994 282.247 25.3609 290.011 19.5C296.306 14.7474 300 1 300 1"
              stroke="#2A2A2A"
              stroke-opacity="0.76"
            />
            <g filter="url(#filter0_d_22_26)">
              <path
                d="M21 149.669C23.0309 151.123 35.4608 146.665 44.3245 135.145C66.2503 119.619 66.7177 153.677 80.2464 149.669C93.7752 145.662 96.5742 130.137 108.237 130.638C119.9 131.138 137.22 103.721 147.89 104.092C162.599 104.604 163.324 91.8042 172.614 79.5504C178.889 71.2737 188.009 92.5726 198.738 86.0615C209.468 79.5504 205.737 58.0137 216 50"
                stroke="url(#paint0_linear_22_26)"
              />
            </g>
            <g filter="url(#filter1_d_22_26)">
              <circle cx="216" cy="50" r="4" fill="#ACE6FF" />
            </g>
            <circle cx="216" cy="50" r="8" fill="#525252" fill-opacity="0.2" />
            <defs>
              <filter
                id="filter0_d_22_26"
                x="0.808985"
                y="29.706"
                width="236.399"
                height="141.694"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="10.2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.657258 0 0 0 0 0.657258 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_22_26"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_22_26"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_22_26"
                x="191.1"
                y="25.1"
                width="50.8"
                height="50.8"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_22_26"
                />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="8.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.592125 0 0 0 0 0.592125 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_22_26"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_22_26"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_22_26"
                x1="49.9235"
                y1="119.118"
                x2="233.124"
                y2="87.6962"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBE71" />
                <stop offset="0.5" stop-color="#FF7777" />
                <stop offset="1" stop-color="#35708A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Second Card */}
        <div className="flex flex-col gap-3">
          <div className="border-[1.7px] hover:border-white/15 transition-all bg-card_bg w-[60.3vw] h-[27vh] rounded-[13px]">
            <h1 className="pl-6 pt-5 font-medium text-[24px]">Join Our Team</h1>
            <p className="font-regular pl-6 pt-1 text-[14px] text-text_gray">
              Explore career opportunities with Eclipse. Check our <br />
              current job openings for more information.
            </p>
            <Moving />
          </div>
          <div className="flex gap-3">
            {/* Third Card */}
            <div className="hover:border-white/15 transition-all border-[1.7px] bg-card_bg w-[21vw] p-4 rounded-[13px] backdrop-blur-xl">
              <h1 className="leading-tight tracking-normal font-semibold text-[52px] bg-custom-gradient bg-clip-text text-transparent">
                Our Resolute
                <br /> Commitment
                <br /> to Detail
              </h1>
              <BorderBeam card={true} size={150} duration={8} delay={2} />
            </div>
            {/* Fourth Card */}
            <div className="hover:border-white/15 transition-all border-[1.7px] bg-card_bg w-[19vw] h-[17vh] rounded-[13px] backdrop-blur-xl">
              <h1 className="pl-6 pt-6 leading-[6vh] tracking-normal font-semibold text-[52px] bg-custom-gradient bg-clip-text text-transparent">
                <NumberTicker value={45} />%
              </h1>
              <p className="font-regular pl-6 pt-4 text-[14px] text-start text-text_gray">
                <NumberTicker value={45} />% Increase in Engagement. <br />
                Boost your audience interaction with Eclipse.
              </p>
            </div>
            {/* Fifth Card */}
            <div className="hover:border-white/15 transition-all border-[1.7px] bg-card_bg w-[19vw] h-[17vh] rounded-[13px] backdrop-blur-xl">
              <h1 className="pl-6 pt-6 leading-[6vh] tracking-normal font-semibold text-[52px] bg-custom-gradient bg-clip-text text-transparent">
                <NumberTicker value={30} />%
              </h1>
              <p className="font-regular pl-6 pt-4 text-[14px] text-start text-text_gray">
                <NumberTicker value={30} />% Increase in Conversion Rates.{" "}
                <br />
                We can insure a boost in conversion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
