import Image from "next/image";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import { Card, Icon } from "../ui/Card";

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 flex relative max-w-[1440px] mx-auto w-full"
    >
      <div
        data-aos="fade-up"
        className="z-10 container mx-auto px-4 grid md:grid-cols-3 gap-6"
      >
        {FEATURE_ITEMS.map((item, index) => (
          <Card key={index} description={item.description} title={item.title}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName={item.constainerClassName}
              colors={item.colors}
            />
          </Card>
        ))}
      </div>
      <Image
        data-aos="fade-right"
        src="/assets/decoration.png"
        width={700}
        height={700}
        alt="decoration"
        className="absolute z-0 top-0 -left-[300px]"
      />
    </section>
  );
}

const FEATURE_ITEMS = [
  {
    title: "Smart Assistance",
    description: "Seamlessly handle tasks, reminders, and schedules.",
    constainerClassName: "bg-emerald-900",
  },
  {
    title: "Conversational AI",
    description: "Human-like interaction, always ready to chat",
    constainerClassName: "bg-black",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    title: "Powerful Insights",
    description: "Analyze data and provide actionable solutions",
    constainerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
  },
];
