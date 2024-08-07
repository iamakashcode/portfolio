"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[30rem] flex-col px-4">
      <h2 className="text-4xl md:text-5xl pb-12 text-gray-50">About Me</h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-6xl mx-auto mb-10 text-center">Hello, I'm 
        <LinkPreview url="https://www.linkedin.com/in/akash-sachan03/" className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-blue-500 to-red-500"> Akash Sachan 
        </LinkPreview>, a passionate web developer with a strong foundation in digital marketing. My journey began with web development, where I mastered creating dynamic, responsive websites. Over time, I expanded my expertise to include SEO, Google Ads, and social media marketing, offering a well-rounded digital skill set to my clients.</p>

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-6xl mx-auto mb-10 text-center">In 2021, I launched
        <LinkPreview url="https:/akashcode.com" className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-blue-500 to-white"> Akash Code 
        </LinkPreview>, a website designing company known for delivering high-quality web solutions. Two years later, I founded 
        <LinkPreview url="https:/desirediv.com" className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-red-500 to-gray-900"> Desire Div 
        </LinkPreview>, broadening our services to include SEO, Google Ads, graphic designing, and app development. This expansion reflects my commitment to providing comprehensive digital services that help businesses thrive online.</p>
        


      {/* <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://akashcode.com" className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-blue-500 to-white">
          Akash Code
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://desirediv.com" className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-red-400 to-black">
          Desire Div
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p> */}
      {/* <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p> */}
    </div>
  );
}
