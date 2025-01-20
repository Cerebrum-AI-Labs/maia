"use client"
import { useEffect } from "react";
import Analyzer from "./_components/home/Analyzer";
import Bridge from "./_components/home/Bridge";
import Chains from "./_components/home/Chains";
import Features from "./_components/home/Features";
import Hero from "./_components/home/Hero";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(function () {
    Aos.init({
      duration: 1000,
      once: true,
    });
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <Chains />
        <Bridge />
        <Analyzer />
        <Features />
      </main>
    </>
  );
}
