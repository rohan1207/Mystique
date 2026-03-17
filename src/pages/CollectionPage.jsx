import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getByCategory,
  CATEGORY_META,
  PRICE_RANGES,
  FINISH_OPTIONS,
  MATERIAL_OPTIONS,
} from "../data/products";

const FONT = "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";

function fmt(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function FilterBlock({ title, options, active, toggle }) {
  return (
    <div className="mb-8">
      <p
        style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }}
        className="uppercase text-neutral-400 mb-4"
      >
        {title}
      </p>
      <ul className="space-y-2.5">
        {options.map((opt) => {
          const key = typeof opt === "string" ? opt : opt.label;
          const isActive = active.includes(key);
          return (
            <li key={key}>
              <button
                onClick={() => toggle(key)}
                className="flex items-center gap-3 w-full text-left group"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <span
                  className="shrink-0 transition-colors duration-200"
                  style={{
                    width: "10px", height: "10px",
                    border: `1px solid ${isActive ? "#1a1a1a" : "#d4d4d4"}`,
                    background: isActive ? "#1a1a1a" : "transparent",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "13px", fontWeight: isActive ? 400 : 300,
                    letterSpacing: "0.01em",
                    color: isActive ? "#1a1a1a" : "#737373",
                  }}
                  className="transition-colors duration-200 group-hover:text-neutral-900"
                >
                  {key}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function CollectionPage() {
  const { categorySlug } = useParams();
  const meta = CATEGORY_META[categorySlug];
  const allProducts = getByCategory(categorySlug);

  const [activePrice, setActivePrice] = useState([]);
  const [activeFinish, setActiveFinish] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState([]);

  const toggle = (setter) => (key) => {
    setter((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const priceOk =
        activePrice.length === 0 ||
        activePrice.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        });
      const finishOk =
        activeFinish.length === 0 || activeFinish.includes(p.color);
      const materialOk =
        activeMaterial.length === 0 || activeMaterial.includes(p.material);
      return priceOk && finishOk && materialOk;
    });
  }, [allProducts, activePrice, activeFinish, activeMaterial]);

  const hasFilters =
    activePrice.length > 0 || activeFinish.length > 0 || activeMaterial.length > 0;

  const clearAll = () => {
    setActivePrice([]);
    setActiveFinish([]);
    setActiveMaterial([]);
  };

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: FONT }}>
        <p style={{ fontWeight: 300, fontSize: "14px", color: "#737373", letterSpacing: "0.04em" }}>
          Collection not found.
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: FONT, paddingTop: "80px" }}
    >
      {/* Page header */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 pt-12 pb-8 border-b border-neutral-100">
        <p
          style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
          className="uppercase text-neutral-400 mb-3"
        >
          Mystique
        </p>
        <div className="flex items-end justify-between">
          <h1
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 200,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
            className="text-neutral-900"
          >
            {meta.label}
          </h1>
          <p
            style={{ fontSize: "12px", fontWeight: 300, letterSpacing: "0.08em" }}
            className="text-neutral-400 mb-1"
          >
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 flex gap-12 lg:gap-16 pt-10 pb-24">
        {/* Left sidebar — filters */}
        <aside className="w-48 lg:w-56 shrink-0">
          <div className="sticky top-28">
            {hasFilters && (
              <button
                onClick={clearAll}
                className="mb-8 flex items-center gap-2 group"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <span
                  style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.16em" }}
                  className="uppercase text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200"
                >
                  Clear filters
                </span>
              </button>
            )}

            <FilterBlock
              title="Price"
              options={PRICE_RANGES}
              active={activePrice}
              toggle={toggle(setActivePrice)}
            />
            <FilterBlock
              title="Finish"
              options={FINISH_OPTIONS}
              active={activeFinish}
              toggle={toggle(setActiveFinish)}
            />
            <FilterBlock
              title="Material"
              options={MATERIAL_OPTIONS}
              active={activeMaterial}
              toggle={toggle(setActiveMaterial)}
            />
          </div>
        </aside>

        {/* Product grid */}
        <main className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p style={{ fontSize: "13px", fontWeight: 300, color: "#a3a3a3", letterSpacing: "0.04em" }}>
                No pieces match the selected filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  className="group"
                >
                  {/* Image */}
                  <div
                    className="w-full overflow-hidden bg-neutral-100"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="pt-4 space-y-1">
                    <p
                      style={{ fontSize: "12px", fontWeight: 300, letterSpacing: "0.18em" }}
                      className="uppercase text-neutral-900"
                    >
                      {product.name}
                    </p>
                    <p
                      style={{ fontSize: "12px", fontWeight: 300, letterSpacing: "0.06em" }}
                      className="text-neutral-400"
                    >
                      {product.color}
                    </p>
                    <p
                      style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.02em" }}
                      className="text-neutral-800 pt-1"
                    >
                      {fmt(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
