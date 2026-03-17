import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Coffee, console, dining and desk—one material language.",
  "Solid timber and stone tops, metal or wood bases.",
  "Sizes and heights for living, dining and work.",
  "Clean lines and timeless proportions.",
];

const BENTO_ITEMS = [
  { image: "/product12.jpg", alt: "Table setting" },
  { image: "/product9.jpg", alt: "Coffee table" },
  { image: "/product10.jpg", alt: "Dining table" },
  { image: "/product13.jpg", alt: "Console" },
  { image: "/product1.jpeg", alt: "Detail" },
  { image: "/product4.jpg", alt: "Table detail" },
];

export default function Tables() {
  return (
    <ShowcaseSection
      title="Our Tables"
      bullets={BULLETS}
      bentoItems={BENTO_ITEMS}
      textOnLeft={true}
      categorySlug="tables"
    />
  );
}
