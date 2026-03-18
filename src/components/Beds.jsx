import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const BULLETS = [
  "Designed for rest and recovery—supportive and lasting.",
  "Headboards and frames in timber, upholstered, or mixed media.",
  "Options from compact singles to generous king sizes.",
  "Natural and stained finishes to suit any bedroom.",
];

const BENTO_ITEMS = [
  { image: "/bed4.webp", alt: "Bed setting" },
  { image: "/bed5.webp", alt: "Bed detail" },
  { image: "/bed7.webp", alt: "Bedroom" },
  { image: "/bed7.webp", alt: "Frame" },
  { image: "/bed8.webp", alt: "Headboard" },
  { image: "/bed9.webp", alt: "Detail" },
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
