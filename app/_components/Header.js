"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BorderButton } from "./ui/BorderButton";
import { Icons } from "./icon/icon";
import { OutlineButton } from "./ui/OutlineButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/Sheet";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const handleIsScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);

  const githubLink = process.env.GITHUB_LINK;
  return (
    <header
      data-aos="slide-down"
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between duration-300 ${
        isScroll
          ? "bg-background/50 backdrop-blur-sm max-md:py-8 max-md:px-10 px-16 py-4"
          : "bg-background/0 max-md:py-4 max-md:px-10 p-16 "
      } `}
    >
      <Link href={"/"}>
        <h1 className="font-oSemibold text-primary text-[32px]">MAIA</h1>
      </Link>
      <nav className="flex items-center gap-6 max-md:hidden">
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-foreground-50 hover:text-primary transition-all text-sm"
          >
            {item.label}
          </Link>
        ))}
        <BorderButton
          onClick={() => window.open(githubLink)}
          className={
            "font-sMedium text-sm flex items-center gap-1.5 h-[35px] w-24"
          }
        >
          <Icons.github /> Github
        </BorderButton>
      </nav>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </header>
  );
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const githubLink = process.env.GITHUB_LINK;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <OutlineButton className={"px-0 w-[35px]"}>
          <Icons.menu />
        </OutlineButton>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-10">
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>
                <h1 className="font-oSemibold text-primary text-[32px] text-left">
                  MAIA
                </h1>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-foreground-50 hover:text-primary transition-all text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <BorderButton
              onClick={() => window.open(githubLink)}
              className={
                "font-sMedium text-sm flex items-center gap-1.5 h-[35px] w-24"
              }
            >
              <Icons.github /> Github
            </BorderButton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const NAV_ITEMS = [
  { label: "Analyzer", href: "#analyzer" },
  { label: "Fatures", href: "#features" },
];
