import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../data/products";

const FONT = "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";

function fmt(n) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getById(productId);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ fontFamily: FONT, paddingTop: "80px" }}
      >
        <p style={{ fontWeight: 300, fontSize: "14px", color: "#737373", letterSpacing: "0.04em" }}>
          Product not found.
        </p>
      </div>
    );
  }

  const gallery = [product.mainImage, ...product.images].filter(
    (img, i, arr) => arr.indexOf(img) === i
  );

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: FONT, paddingTop: "80px" }}
    >
      {/* Breadcrumb */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 pt-8 pb-0">
        <nav className="flex items-center gap-3">
          <Link
            to="/"
            style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.16em", textDecoration: "none" }}
            className="uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
          >
            Home
          </Link>
          <span style={{ fontSize: "11px", color: "#d4d4d4" }}>—</span>
          <Link
            to={`/collection/${product.category}`}
            style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.16em", textDecoration: "none" }}
            className="uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
          >
            {product.categoryLabel}
          </Link>
          <span style={{ fontSize: "11px", color: "#d4d4d4" }}>—</span>
          <span
            style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.16em" }}
            className="uppercase text-neutral-700"
          >
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 pt-10 pb-24 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left — image gallery: thumbnails left, main image right */}
        <div className="w-full lg:w-[55%] flex flex-row gap-3">
          {/* Thumbnail strip — vertical, left side */}
          <div className="flex flex-col gap-2">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  border: "none", padding: 0, cursor: "pointer", background: "none",
                  outline: activeImg === i ? "1px solid #1a1a1a" : "1px solid transparent",
                  outlineOffset: "2px",
                }}
              >
                <div
                  className="overflow-hidden bg-neutral-100"
                  style={{ width: "68px", height: "84px" }}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-200"
                    style={{ opacity: activeImg === i ? 1 : 0.45 }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Main image — fills remaining width */}
          <div className="flex-1 overflow-hidden bg-neutral-100" style={{ aspectRatio: "4/5" }}>
            <img
              src={gallery[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={activeImg}
            />
          </div>
        </div>

        {/* Right — product details */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 lg:self-start">
          {/* Eyebrow */}
          <p
            style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
            className="uppercase text-neutral-400 mb-4"
          >
            Mystique
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 200,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
            className="text-neutral-900 mb-3"
          >
            {product.name}
          </h1>

          {/* Price */}
          <p
            style={{ fontSize: "18px", fontWeight: 300, letterSpacing: "0.02em" }}
            className="text-neutral-700 mb-8"
          >
            {fmt(product.price)}
          </p>

          {/* Thin rule */}
          <div style={{ width: "40px", height: "1px", background: "rgba(0,0,0,0.15)" }} className="mb-8" />

          {/* Short description */}
          <p
            style={{ fontSize: "15px", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.75 }}
            className="text-neutral-600 mb-6"
          >
            {product.description}
          </p>

          {/* Specs row */}
          <div className="flex gap-8 mb-10">
            <div>
              <p style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }} className="uppercase text-neutral-400 mb-1">
                Finish
              </p>
              <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.02em" }} className="text-neutral-800">
                {product.color}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }} className="uppercase text-neutral-400 mb-1">
                Material
              </p>
              <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.02em" }} className="text-neutral-800">
                {product.material}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }} className="uppercase text-neutral-400 mb-1">
                Dimensions
              </p>
              <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.02em" }} className="text-neutral-800">
                {product.dimensions}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <p style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }} className="uppercase text-neutral-400 mb-4">
              Features
            </p>
            <ul className="space-y-3">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0"
                    style={{ marginTop: "8px", width: "4px", height: "4px", background: "#d4d4d4", display: "inline-block" }}
                  />
                  <span style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.7 }} className="text-neutral-700">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            className="w-full group flex items-center justify-between px-8 py-5 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span
              style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase" }}
              className="text-white"
            >
              Enquire Now
            </span>
            <span className="text-white/60 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          {/* Secondary link */}
          <div className="mt-5 text-center">
            <Link
              to={`/collection/${product.category}`}
              style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.16em", textDecoration: "none" }}
              className="uppercase text-neutral-400 hover:text-neutral-800 transition-colors duration-200"
            >
              ← Back to {product.categoryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
