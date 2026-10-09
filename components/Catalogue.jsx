"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import ProductCard from "./ProductCard";

// A brand's designs: optional filter bar (girls/ladies), and — where designs
// belong to collections — grouped into numbered "chapters" like a printed catalogue.
export default function Catalogue({ products, brandSlug, accent }) {
  const { dict } = useLocale();
  const [cat, setCat] = useState("all");

  const hasCategories = products.some((p) => p.category);
  const filtered = products.filter((p) => cat === "all" || p.category === cat);

  // Chapters keep a fixed number even while a filter hides some of them.
  const order = [];
  products.forEach((p) => {
    if (p.collection && !order.includes(p.collection)) order.push(p.collection);
  });
  const groups = order.length
    ? order
        .map((title, i) => ({ title, n: i + 1, items: filtered.filter((p) => p.collection === title) }))
        .filter((g) => g.items.length > 0)
    : [{ title: null, n: 0, items: filtered }];

  const chips = [
    { key: "all", label: dict.products.categoryAll, n: products.length },
    { key: "girls", label: dict.products.categoryGirls, n: products.filter((p) => p.category === "girls").length },
    { key: "ladies", label: dict.products.categoryLadies, n: products.filter((p) => p.category === "ladies").length },
  ];

  let shown = 0;
  return (
    <div style={{ "--brand-accent": accent }}>
      {hasCategories && (
        <div className="filter-bar">
          <div className="wrap filter-inner">
            <div className="category-filter" role="group">
              {chips.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`category-chip${cat === c.key ? " active" : ""}`}
                  aria-pressed={cat === c.key}
                  onClick={() => setCat(c.key)}
                >
                  {c.label} <span className="chip-n">{c.n}</span>
                </button>
              ))}
            </div>
            <span className="filter-count code">
              {filtered.length} {dict.products.designs}
            </span>
          </div>
        </div>
      )}

      <section className="catalogue">
        <div className="wrap">
          {groups.map((g) => (
            <div className="chapter" key={g.title || "all"}>
              {g.title && (
                <div className="chapter-head">
                  <span className="code">{dict.products.chapter.replace("{n}", String(g.n).padStart(2, "0"))}</span>
                  <h2>{g.title}</h2>
                  <span className="code chapter-count">
                    {g.items.length} {dict.products.designs}
                  </span>
                </div>
              )}
              <div className="product-grid">
                {g.items.map((p) => (
                  <ProductCard key={p.slug} product={p} brandSlug={brandSlug} accent={accent} priority={shown++ < 3} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
