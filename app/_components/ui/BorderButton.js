"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/app/_lib/utils/uiUtils.js";

export function BorderButton({
  borderRadius = "8px",
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  shadowAnimation = true,
  darken = false,
  movingAnimation = true,
  ...otherProps
}) {
  return (
    <button
      className="relative group w-fit transition-transform duration-300 active:scale-95"
      {...otherProps}
    >
      {shadowAnimation && (
        <span className="pointer-events-none absolute -inset-0 z-10 transform-gpu rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-lg transition-all duration-300 group-hover:opacity-90 group-active:opacity-40" />
      )}

      <div
        className={cn(
          "bg-transparent relative text-sm p-[1px] overflow-hidden z-20",
          containerClassName
        )}
        style={{
          borderRadius: borderRadius,
        }}
      >
        {movingAnimation && (
          <div
            className="absolute inset-0"
            style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
          >
            <MovingBorder duration={duration} rx="30%" ry="30%">
              <div
                className={cn(
                  "h-20 w-20 opacity-[0.8] bg-[radial-gradient(theme(colors.primary.DEFAULT)_30%,transparent_60%)]",
                  borderClassName
                )}
              />
            </MovingBorder>
          </div>
        )}

        <div
          className={cn(
            "relative bg-primary border border-background text-black backdrop-blur-xl flex items-center justify-center w-full h-full antialiased font-sMedium text-lg",
            `${
              darken
                ? "group-hover:bg-black group-hover:border-primary-600 group-hover:text-white transition-colors duration-300"
                : ""
            }`,
            className
          )}
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}
        >
          {children}
        </div>
      </div>
    </button>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (pathRef.current && pathRef.current.getBBox().width > 0) {
      const length = pathRef.current.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current && pathRef.current.getBBox().width > 0
      ? pathRef.current.getPointAtLength(val).x
      : 0
  );

  const y = useTransform(progress, (val) =>
    pathRef.current && pathRef.current.getBBox().width > 0
      ? pathRef.current.getPointAtLength(val).y
      : 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
