"use client";

import { cn } from "@/app/_lib/utils/uiUtils.js";
import { useEffect, useState } from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  showStroke = true,
}) {
  const [responsiveRadius, setResponsiveRadius] = useState(radius);
  const [responsiveDuration, setResponsiveDuration] = useState(duration);
  const [responsiveDelay, setResponsiveDelay] = useState(delay);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 680) {
        setResponsiveRadius(radius * 0.6);
        setResponsiveDuration(duration);
        setResponsiveDelay(delay);
      } else if (width < 1024) {
        setResponsiveRadius(radius * 0.8);
        setResponsiveDuration(duration);
        setResponsiveDelay(delay);
      } else {
        setResponsiveRadius(radius);
        setResponsiveDuration(duration);
        setResponsiveDelay(delay);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [radius, duration, delay]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className={showStroke ? "stroke-[#272727] stroke-[1px]" : ""}
            cx="50%"
            cy="50%"
            r={responsiveRadius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={{
          "--duration": responsiveDuration,
          "--radius": responsiveRadius,
          "--delay": -responsiveDelay,
        }}
        className={cn(
          "absolute z-20 flex size-full transform-gpu animate-orbit items-center justify-center [animation-delay:calc(var(--delay)*1000ms)]",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
