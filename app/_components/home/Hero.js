"use client";

import Image from "next/image";
import React from "react";
import { BorderButton } from "../ui/BorderButton";
import { OutlineButton } from "../ui/OutlineButton";
import { useRouter } from "next/navigation";

export default function Hero() {
  const buyLink = process.env.BUY_MAIA_LINK || "";
  const router = useRouter();
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center p-6"
    >
      <div className="z-10 bg-background-50 flex max-md:flex-col md:justify-beetween rounded-xl h-[647px] w-full overflow-hidden">
        <div className="gap-[25px] h-full flex flex-col items-start justify-center md:pl-[85px] max-md:px-6 max-md:py-20 w-full max-md:order-1">
          <h1 data-aos="fade-right" className="text-5xl text-white">
            I Reads <span className="text-primary">Twitter</span> <br /> to keep
            you ahead
          </h1>
          <div data-aos="fade-up" className="flex items-center gap-[19px]">
            <BorderButton
              onClick={() => window.open(buyLink)}
              className={
                "font-sMedium text-sm flex items-center gap-1.5 h-[35px] w-24"
              }
              borderRadius="8px"
            >
              Buy MAIA
            </BorderButton>
            <OutlineButton onClick={() => router("/docs")}>DOCS</OutlineButton>
          </div>
        </div>
        <Image
          data-aos="fade-up"
          src="/assets/hero.png"
          width={700}
          height={700}
          alt="hero image"
          className="md:h-full w-fit object-contain mr-auto"
        />
      </div>
      <Image
        src="/assets/decoration.png"
        width={700}
        height={700}
        alt="decoration"
        className="absolute z-0 -bottom-[400px] -left-[300px]"
        data-aos="fade-top-right"
      />
    </section>
  );
}
