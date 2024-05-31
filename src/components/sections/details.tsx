"use client";

import { Companies } from "@/components/ui/companies";

// icons
import { FaPaintbrush } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

export default function Detail() {
  return (
    <section className="mb-[15vh]">
      <Companies />

      <div className="flex justify-center items-center">
        <div className="flex gap-[1vw] h-min w-max">
          <div className="flex items-center w-[20vw] h-[10vh] bg-card_bg rounded-[12px] border">
            <div className="flex items-center justify-center ml-[0.5vw] w-[2vw] h-[3.8vh] border bg-transparent rounded-[5px]">
              <FaPaintbrush size={15} />
            </div>

            <p className="text-[13px] pl-[12px] font-semibold">
              Craft a winning solution{" "}
              <span className="text-text_gray font-normal">
                that not only draws in <br />
                more customers but also secures a boost on <br />
                your service.
              </span>
            </p>
          </div>

          <div className="flex items-center w-[20vw] h-[10vh] bg-card_bg rounded-[12px] border">
            <div className="flex items-center justify-center ml-[0.5vw] w-[2vw] h-[3.8vh] border bg-transparent rounded-[5px]">
              <FaCloud size={15} />
            </div>

            <p className="text-[13px] pl-[12px] font-semibold">
              Craft an online presence{" "}
              <span className="text-text_gray font-normal">
                that's visually stunning,
                <br /> user-friendly, and drives more engagement to
                <br /> achieve your business goals.
              </span>
            </p>
          </div>

          <div className="flex items-center w-[20vw] h-[10vh] bg-card_bg rounded-[12px] border">
            <div className="flex items-center justify-center ml-[0.5vw] w-[2vw] h-[3.8vh] border bg-transparent rounded-[5px]">
              <IoIosChatboxes size={15} />
            </div>

            <p className="text-[13px] pl-[12px] font-semibold">
              Unlimited components,{" "}
              <span className="text-text_gray font-normal">
                We effortlessly customize <br />
                your site to perfectly reflect your brand and <br />
                engage your audience.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
