"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LampDemo } from "@/components/lamp";
import { GlobeDemo } from "@/components/globe";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative w-full">
      {/* <GlobeDemo/> */}
    <LampDemo/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
