import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Entry, hallway and living—consoles that hold keys, art and light.",
  "Slim profiles with drawers or open shelving.",
  "Timber, lacquer and metal in neutral tones.",
  "Designed to pair with mirrors and table lamps.",
];

const BENTO_ITEMS = [
  { image: "/console4.jpeg", alt: "Console" },
  { image: "/console5.jpeg", alt: "Console detail" },
  { image: "/console4.jpeg", alt: "Entry console" },
  { image: "/console4.jpeg", alt: "Hallway" },
  { image: "/console5.jpeg", alt: "Detail" },
  { image: "/console6.jpeg", alt: "Console setting" },
];

export default function Consoles() {
  return (
    <ShowcaseSection
      title="Our Consoles"
      bullets={BULLETS}
      bentoItems={BENTO_ITEMS}
      textOnLeft={true}
      categorySlug="consoles"
    />
  );
}
