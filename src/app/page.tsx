"use client";

import Particles from "@/components/magicui/particles";

// sections
import { Footer } from "@/components/magicui/footer";
import { Page } from "../components/home";
import Header  from "@/components/custom-comps/header"
import "./style.css";

export default function Home() {
  return (
    <><Header />
      <Page />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
      <Footer />
    </>
  );
}
