import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Entry, hallway and living—consoles that hold keys, art and light.",
  "Slim profiles with drawers or open shelving.",
  "Timber, lacquer and metal in neutral tones.",
  "Designed to pair with mirrors and table lamps.",
];

const BENTO_ITEMS = [
  { image: "/product13.jpg", alt: "Console" },
  { image: "/product9.jpg", alt: "Console detail" },
  { image: "/product10.jpg", alt: "Entry console" },
  { image: "/product12.jpg", alt: "Hallway" },
  { image: "/product1.jpeg", alt: "Detail" },
  { image: "/product4.jpg", alt: "Console setting" },
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
