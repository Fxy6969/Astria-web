"use client";
import { Page } from "../components/home";
import Particles from "@/components/magicui/particles";
import { Footer } from "@/components/magicui/footer";

import "./style.css";

export default function Home() {
  return (
    <>
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
