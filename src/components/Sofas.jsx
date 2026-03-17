import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Two-seaters, three-seaters and modular—for living and lounging.",
  "Deep seats and soft arms; fabric or leather upholstery.",
  "Frames built for daily use and long-term comfort.",
  "Neutral palettes that work with our chairs and tables.",
];

const BENTO_ITEMS = [
  { image: "/product13.jpg", alt: "Sofa" },
  { image: "/product9.jpg", alt: "Sofa setting" },
  { image: "/product10.jpg", alt: "Living room" },
  { image: "/product12.jpg", alt: "Sectional" },
  { image: "/product1.jpeg", alt: "Detail" },
  { image: "/product4.jpg", alt: "Sofa detail" },
];

export default function Sofas() {
  return (
    <ShowcaseSection
      title="Our Sofas"
      bullets={BULLETS}
      bentoItems={BENTO_ITEMS}
      textOnLeft={false}
      categorySlug="sofas"
    />
  );
}
