"use client";

import { BridgeEffect } from "../ui/BridgeEffect";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Bridge() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      id="bridge"
      ref={ref}
      className="hidden xl:block max-w-[1440px] mx-auto w-full"
    >
      <div data-aos="fade-up" className="relative h-[400vh]">
        <div className="sticky top-0">
          <div className="relative flex flex-col items-center justify-center min-h-screen w-full py-20 max-2xl:overflow-hidden">
            <Image
              data-aos="fade-up"
              src="/assets/decoration.png"
              width={700}
              height={700}
              alt="decoration"
              className="absolute z-0 -bottom-[180px] max-2xl:-bottom-[100px] -right-[300px]"
            />
            <h1
              data-aos="fade-right"
              className="text-2xl sm:text-3xl md:text-5xl max-w-[895px] text-center px-5 md:px-10 text-white"
            >
              Unveiling Top Tokens with On-Chain Precision and Social Insights.
            </h1>
            <h2
              data-aos="fade-left"
              className="text-foreground-500 md:text-2xl max-w-[895px] text-center px-5 md:px-10 pt-[27px]"
            >
              AI-powered guide, analyzing on-chain data and social trends to
              uncover the best token opportunities
            </h2>
            <div className="pt-[300px] 2xl:pt-[50px]">
              <BridgeEffect
                pathLengths={[
                  pathLengthFirst,
                  pathLengthSecond,
                  pathLengthThird,
                  pathLengthFourth,
                  pathLengthFifth,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
