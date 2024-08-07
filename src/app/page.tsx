import Contact from "@/components/Contact";
import { GlobeDemo } from "@/components/globe";
import { LampDemo } from "@/components/lamp";
import { LinkPreviewDemo } from "@/components/linkpreview";
import { MacbookScrollDemo } from "@/components/macbook";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/shootingstars";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <LampDemo/> */}
  {/* <GlobeDemo/> */}
  <ShootingStarsAndStarsBackgroundDemo/>
  <MacbookScrollDemo/>
  <LinkPreviewDemo/>
  <Contact/>
  </> 
  );
}
