import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Designed for rest and recovery—supportive and lasting.",
  "Headboards and frames in timber, upholstered, or mixed media.",
  "Options from compact singles to generous king sizes.",
  "Natural and stained finishes to suit any bedroom.",
];

const BENTO_ITEMS = [
  { image: "/bed.avif", alt: "Bed setting" },
  { image: "/product9.jpg", alt: "Bed detail" },
  { image: "/product10.jpg", alt: "Bedroom" },
  { image: "/product12.jpg", alt: "Frame" },
  { image: "/product13.jpg", alt: "Headboard" },
  { image: "/product4.jpg", alt: "Detail" },
];

export default function Beds() {
  return (
    <ShowcaseSection
      title="Our Beds"
      bullets={BULLETS}
      bentoItems={BENTO_ITEMS}
      textOnLeft={false}
      categorySlug="beds"
    />
  );
}
