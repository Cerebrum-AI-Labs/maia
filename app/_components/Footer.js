"use client";

import { DISCORD_LINK, TELEGRAM_LINK, X_LINK } from "@/config.js";
import { SparklesCore } from "./ui/Sparkles";
import { Icons } from "./icon/icon";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-row gap-5">
      <button
        onClick={() => window.open(X_LINK)}
        className="text-white hover:text-primary"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1391_606"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path d="M3 3H21V21H3V3Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1391_606)">
            <path
              d="M17.175 3.84375H19.9354L13.9054 10.7532L21 20.1569H15.4457L11.0923 14.4548L6.11657 20.1569H3.35357L9.80271 12.764L3 3.84504H8.69571L12.6249 9.05604L17.175 3.84375ZM16.2043 18.5009H17.7343L7.86 5.41361H6.21943L16.2043 18.5009Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>

      <button
        onClick={() => window.open(TELEGRAM_LINK)}
        className="text-white hover:text-primary"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6651 3.71706L2.93509 10.5541C1.72509 11.0401 1.73209 11.7151 2.71309 12.0161L7.26509 13.4361L17.7971 6.79106C18.2951 6.48806 18.7501 6.65106 18.3761 6.98306L9.8431 14.6841H9.84109L9.8431 14.6851L9.5291 19.3771C9.9891 19.3771 10.1921 19.1661 10.4501 18.9171L12.6611 16.7671L17.2601 20.1641C18.1081 20.6311 18.7171 20.3911 18.9281 19.3791L21.9471 5.15106C22.2561 3.91206 21.4741 3.35106 20.6651 3.71706Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        onClick={() => window.open(DISCORD_LINK)}
        className="text-white hover:text-primary"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5901 5.88991C17.3601 5.31991 16.0501 4.89991 14.6701 4.65991C14.5001 4.95991 14.3001 5.36991 14.1701 5.69991C12.7101 5.47991 11.2601 5.47991 9.83007 5.69991C9.69007 5.36991 9.49007 4.95991 9.32007 4.65991C7.94007 4.89991 6.63007 5.31991 5.40007 5.88991C2.92007 9.62991 2.25007 13.2799 2.58007 16.8699C4.23007 18.0999 5.82007 18.8399 7.39007 19.3299C7.78007 18.7999 8.12007 18.2299 8.42007 17.6399C7.85007 17.4299 7.31007 17.1599 6.80007 16.8499C6.94007 16.7499 7.07007 16.6399 7.20007 16.5399C10.3301 17.9999 13.7201 17.9999 16.8101 16.5399C16.9401 16.6499 17.0701 16.7499 17.2101 16.8499C16.7001 17.1599 16.1501 17.4199 15.5901 17.6399C15.8901 18.2299 16.2301 18.7999 16.6201 19.3299C18.1901 18.8399 19.7901 18.0999 21.4301 16.8699C21.8201 12.6999 20.7601 9.08991 18.6101 5.88991H18.5901ZM8.84007 14.6699C7.90007 14.6699 7.13007 13.7999 7.13007 12.7299C7.13007 11.6599 7.88007 10.7899 8.84007 10.7899C9.80007 10.7899 10.5601 11.6599 10.5501 12.7299C10.5501 13.7899 9.80007 14.6699 8.84007 14.6699ZM15.1501 14.6699C14.2101 14.6699 13.4401 13.7999 13.4401 12.7299C13.4401 11.6599 14.1901 10.7899 15.1501 10.7899C16.1101 10.7899 16.8701 11.6599 16.8601 12.7299C16.8601 13.7899 16.1101 14.6699 15.1501 14.6699Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <footer className="relative flex w-full items-center justify-center">
//       <div className="container flex flex-col items-center justify-center mx-5 md:mx-10 rounded-t-2xl bg-[#111217] px-5 md:px-12 gap-9 xl:gap-20 pt-[22px] pb-16">
//         <h1 className="text-primary text-3xl">MAIA AI</h1>
//         <h2 className="text-white">
//           AI-powered guide, analyzing on-chain data and social trends to uncover
//           the best token opportunities
//         </h2>
//         <Socials />
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  const discordLink = process.env.DISCORD_LINK || "";
  const twitterLink = process.env.TWITTER_LINK || "";
  const telegramLink = process.env.TELEGRAM_LINK || "";
  return (
    <div className="flex flex-col gap-8 pb-[86px] px-6">
      <div
        data-aos="fade-up"
        className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
      >
        <h1 className="md:text-5xl text-3xl font-bold text-center text-white relative z-20 font-oSemibold">
          MAIA AI
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center text-center w-full max-w-[472px] mx-auto text-white gap-9"
      >
        <p data-aos="fade-up">
          AI-powered guide, analyzing on-chain data and social trends to uncover
          the best token opportunities
        </p>
        <div className="flex items-center gap-6">
          <a
            href={twitterLink}
            className="text-foreground-50 hover:text-primary transition-all"
            target="_blank"
          >
            <Icons.xTwitter />
          </a>
          <a
            href={telegramLink}
            className="text-foreground-50 hover:text-primary transition-all"
            target="_blank"
          >
            <Icons.telegram />
          </a>
          <a
            href={discordLink}
            className="text-foreground-50 hover:text-primary transition-all"
            target="_blank"
          >
            <Icons.discord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
