import React from "react";
import HeroSection from "../components/HeroSection";
import EssenceStatement from "../components/EssenceStatement";
import StudioScrollReveal from "../components/StudioScrollReveal";
import WhatWeDo from "../components/WhatWeDo";
import ShopByCollection from "../components/ShopByCollection";
import OurProjects from "../components/OurProjects";
import DiningSet from "../components/DiningSet";
import Beds from "../components/Beds";
import Tables from "../components/Tables";
import Chairs from "../components/Chairs";
import Consoles from "../components/Consoles";
import Sofas from "../components/Sofas";
import ClientStory from "../components/ClientStory";
import DiningSetShowcase from "../components/DiningSetShowcase";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EssenceStatement />
      <ShopByCollection />
      <StudioScrollReveal />
      <WhatWeDo />
      {/* <OurProjects /> */}
      <DiningSetShowcase />
      {/* <DiningSet /> */}
      <Beds />
      <Tables />
      <Chairs />
      {/* <Consoles /> */}
      <Sofas />
      <ClientStory />
    </>
  );
}

