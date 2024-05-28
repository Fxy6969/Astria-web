import NumberTicker from "../magicui/number-ticker";
import RadialGradient from "@/components/magicui/radial-gradient";
import { Moving } from "@/components/custom-comps/moving";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
// icons
import { MdShowChart } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";

export default function CardSection() {
  return (
    <section className="w-full pt-20">
      {/* <div className="overflow-x-hidden absolute blur-3xl -z-50 h-full w-full rounded-lg bg-transparent">
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
      </div> */}
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

      <div className="flex flex-wrap justify-center gap-2">
        <div className="group flex flex-col justify-center items-center border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[37rem] h-[22rem] rounded-[13px] rounded-tl-[53px] backdrop-blur-xl p-6">
          <div className="relative group-hover:-translate-y-0 transition-transform duration-500 ease-in-out">
            <img
              className="group-hover:opacity-0 transition-opacity duration-500"
              src="./card_1.png"
              width="350"
              height="240"
              alt="Card image 01"
            />
            <img
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              src="./card_1_after.png"
              width="350"
              height="240"
              alt="Card image 01 displaying on hover"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="mx-auto text-[12px] blur-xl text-text_red text-center mt-[-40px]">
              User Growth
            </p>

            <div className="flex items-center justify-center">
              <MdShowChart className="mr-2 text-text_red" />
              <p className="text-[12px] text-text_red text-center">
                User Growth
              </p>
            </div>
          </div>
          <p className="font-medium text-[24px] text-center mt-[-10px]">
            Customer Growth
          </p>
          <p className="text-[14px] text-text_gray text-center">
            Our designs attract and captivate your audience. With
            <br /> visually stunning and user-friendly layouts, we help
            <br /> your website stand out.
          </p>
        </div>

        <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[37rem] h-[22rem] rounded-[13px] rounded-tr-[53px] backdrop-blur-xl">
          <div className="group pt-7 flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[265px] rounded-2xl border transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-[50px]">
              <BorderBeam card={true} size={150} duration={6} delay={2} />
              <div className="z-[-1] absolute bottom-0 w-full h-5/3 md:h-[2rem] blur-[15vh] bg-custom-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex space-x-2 items-center mb-0.5">
                      <div className="text-2xl font-bold text-slate-200 mb-1">
                        17,479
                      </div>
                      <div className="text-xs font-medium text-emerald-500">
                        +48%
                      </div>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="4"
                      fill="none"
                    >
                      <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-5">
                <img
                  className=""
                  src="./card_2.png"
                  width="380"
                  height="173"
                  alt="Card image 01"
                />
              </div>
              {/* <div className="z-[1] absolute bottom-0 w-full h-5/3 md:h-[10rem] bg-gradient-to-b from-transparent to-70% to-card_bg_darker"></div> */}
            </div>
          </div>
          <p className="mx-auto text-[12px] blur-xl text-text_red text-center mt-[3px]">
            \n Boost
          </p>
          <div className="flex items-center justify-center">
            <MdAdsClick className="mr-2 text-text_red" />
            <p className="text-[12px] text-text_red text-center">Boost</p>
          </div>
          <p className="font-medium text-[24px] text-center mt-[-6px]">
            Conversion Rates
          </p>
          <p className="text-[14px] text-text_gray text-center">
            Our designs boost your conversion rates. With visually
            <br /> appealing and intuitive layouts, we turn visitors into
            customers, <br />
            helping your website achieve its goals.
          </p>
        </div>
        <div className="w-full flex justify-center gap-2">
          <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[25.7rem] h-[22rem] rounded-[13px] rounded-bl-[53px] backdrop-blur-xl"></div>
          <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[22rem] h-[22rem] rounded-[13px] backdrop-blur-xl"></div>
          <div className="group border-[1.7px] hover:border-white/25 hover:border-1 transition-all bg-card_bg w-[25.7rem] h-[22rem] rounded-[13px] rounded-br-[53px] backdrop-blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
