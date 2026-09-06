"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BRANDS } from "@/lib/brands";

export default function BrandTabs() {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get("brand");
  const [active, setActive] = useState(
    BRANDS.some((b) => b.slug === initialBrand) ? initialBrand : BRANDS[0].slug
  );

  useEffect(() => {
    if (initialBrand && BRANDS.some((b) => b.slug === initialBrand)) {
      setActive(initialBrand);
    }
  }, [initialBrand]);

  const brand = BRANDS.find((b) => b.slug === active);

  return (
    <>
      <div className="tabs">
        {BRANDS.map((b) => (
          <button
            key={b.slug}
            className={`tab-btn${b.slug === active ? " active" : ""}`}
            style={b.slug === active ? { "--brand-accent": b.accent } : undefined}
            onClick={() => setActive(b.slug)}
          >
            {b.name}
          </button>
        ))}
      </div>

      <div className="brand-panel" style={{ "--brand-accent": brand.accent }}>
        <div className="brand-head">
          {brand.logo ? (
            <Image src={brand.logo} alt={brand.name} width={160} height={60} style={{ height: "60px", width: "auto" }} />
          ) : (
            <div className="wordmark-lg">{brand.name}</div>
          )}
          <div className="brand-meta">
            <div className="seg-tag">
              {brand.segment} &middot; {brand.statusDetail}
            </div>
            {brand.description && <p>{brand.description}</p>}
          </div>
        </div>

        {brand.comingSoon ? (
          <div className="avron-teaser">
            <div className="tag">{brand.comingSoon.tag}</div>
            <h3>{brand.comingSoon.heading}</h3>
            <p>{brand.comingSoon.copy}</p>
          </div>
        ) : (
          <div className="product-grid">
            {brand.products.map((product) => (
              <div className="p-card" key={product.name}>
                <div
                  className="p-swatch"
                  style={{ "--swatch-a": product.swatchA, "--swatch-b": product.swatchB }}
                >
                  <span className="ph-label">Photo pending</span>
                </div>
                <div className="p-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
