"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BRANDS } from "@/lib/brands";
import ProductModal from "@/components/ProductModal";
import ProductCard from "@/components/ProductCard";

// Products page shows only ANICY, NICY and Avron as tabs — Milton isn't a
// standalone product line here. It still appears on the Home page brand strip.
const TAB_BRANDS = BRANDS.filter((b) => b.slug !== "milton");

export default function ProductTabs() {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get("brand");
  const [active, setActive] = useState(
    TAB_BRANDS.some((b) => b.slug === initialBrand) ? initialBrand : TAB_BRANDS[0].slug
  );
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (initialBrand && TAB_BRANDS.some((b) => b.slug === initialBrand)) {
      setActive(initialBrand);
    }
  }, [initialBrand]);

  const brand = TAB_BRANDS.find((b) => b.slug === active);

  return (
    <>
      <div className="segmented-nav-wrap">
        <div className="wrap">
          <div className="segmented-nav">
            {TAB_BRANDS.map((b) => (
              <button
                key={b.slug}
                className={`segment${b.slug === active ? " active" : ""}`}
                style={b.slug === active ? { "--brand-accent": b.accent } : undefined}
                onClick={() => {
                  setActive(b.slug);
                  setSelectedProduct(null);
                }}
              >
                {b.logo && (
                  <Image
                    src={b.logo}
                    alt=""
                    width={80}
                    height={30}
                    style={{ height: "22px", width: "auto" }}
                  />
                )}
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section
        className="brand-hero"
        style={{ "--brand-accent": brand.accent, "--brand-accent-soft": `${brand.accent}1A` }}
      >
        <div className="blob brand-hero-blob" />
        <div className="wrap brand-hero-inner">
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              width={200}
              height={76}
              style={{ height: "72px", width: "auto" }}
            />
          ) : (
            <div className="wordmark-lg">{brand.name}</div>
          )}
          <div className="seg-tag">
            {brand.segment} &middot; {brand.statusDetail}
          </div>
          {brand.description && <p className="brand-hero-desc">{brand.description}</p>}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: "50px" }}>
        {brand.comingSoon ? (
          <div className="avron-teaser">
            <div className="tag">{brand.comingSoon.tag}</div>
            <h3>{brand.comingSoon.heading}</h3>
            <p>{brand.comingSoon.copy}</p>
          </div>
        ) : (
          <div className="product-grid">
            {brand.products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                brandAccent={brand.accent}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          brandName={brand.name}
          accent={brand.accent}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
