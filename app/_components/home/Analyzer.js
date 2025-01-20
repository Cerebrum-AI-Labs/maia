"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import LoadingLottie from "../../../data/lotties/Loading.json";

const {
  PlaceholdersAndVanishInput,
} = require("../ui/PlaceholdersAndVanishInput");

const Analyzer = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const placeholders = ["Enter token Contact address"];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await fetch("/api/token", {
      method: "POST",
      body: JSON.stringify({ address: value }),
    });

    const newData = await response.json();
    setData(newData.result);
    setIsLoading(false);
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
  };

  return (
    <section
      id="analyzer"
      className="min-h-screen flex flex-col justify-center items-center px-6 gap-[27px] max-w-[1440px] mx-auto w-full"
    >
      <h2
        data-aos="fade-right"
        className="text-center text-3xl sm:text-5xl text-white font-oSemibold uppercase"
      >
        MAIA Analyzer
      </h2>
      <div
        data-aos="fade-up"
        className="h-[429px] max-w-[711px] w-full bg-[#11141D] flex items-center justify-center border-2 border-primary rounded-2xl"
      >
        {isLoading ? (
          <Lottie options={lottieOptions} />
        ) : data ? (
          <div className="h-full p-8 hide-scroll overflow-y-auto overflow-x-hidden w-full">
            <Chat result={data} />
          </div>
        ) : (
          <Image
            src="/assets/hero.png"
            alt="analyzer"
            width={700}
            height={700}
            className="size-[205px] rounded-full object-cover"
          />
        )}
      </div>
      <div data-aos="fade-up" className="max-w-[711px] w-full">
        <PlaceholdersAndVanishInput
          className="w-full"
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
};

const Chat = ({ result }) => {
  return (
    <div className="flex items-end gap-2">
      <div className="max-w-6 w-full h-6">
        <Image
          src={`/assets/hero.png`}
          alt="image"
          width={500}
          height={500}
          className="size-full object-cover rounded-full"
        />
      </div>
      <div className="p-[10px] break-words rounded-2xl bg-background-100 text-white max-w-full bg-background-50 whitespace-pre-wrap w-full">
        {result}
      </div>
    </div>
  );
};

export default Analyzer;
