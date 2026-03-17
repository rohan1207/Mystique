import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Dining, lounge, accent and task—seating for every moment.",
  "Frames in timber or metal; upholstery in fabric or leather.",
  "Ergonomic support and lasting comfort.",
  "Standalone or paired with our tables and sofas.",
];

const BENTO_ITEMS = [
  { image: "/product1.jpeg", alt: "Chair" },
  { image: "/product9.jpg", alt: "Dining chair" },
  { image: "/product10.jpg", alt: "Lounge chair" },
  { image: "/product12.jpg", alt: "Accent chair" },
  { image: "/product13.jpg", alt: "Seating" },
  { image: "/product4.jpg", alt: "Detail" },
];

export default function Chairs() {
  return (
    <ShowcaseSection
      title="Our Chairs"
      bullets={BULLETS}
      bentoItems={BENTO_ITEMS}
      textOnLeft={false}
      categorySlug="chairs"
    />
  );
}
