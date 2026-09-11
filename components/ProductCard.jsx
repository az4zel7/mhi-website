"use client";

import { useState, useRef, useCallback } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";

function GarmentMark({ accent }) {
  return (
    <svg
      className="garment-mark"
      viewBox="0 0 64 64"
      fill="none"
      style={{ "--mark-color": accent }}
      aria-hidden="true"
    >
      <path
        d="M22 8 L14 16 L18 22 L22 19 V54 H42 V19 L46 22 L50 16 L42 8 C42 12 38 15 32 15 C26 15 22 12 22 8Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const HOVER_CYCLE_MS = 700;

export default function ProductCard({ product, accent, onSelect }) {
  const { dict } = useLocale();
  const hasPhotos = Array.isArray(product.images) && product.images.length > 0;
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startCycle = useCallback(() => {
    if (!hasPhotos || product.images.length < 2) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % product.images.length);
    }, HOVER_CYCLE_MS);
  }, [hasPhotos, product.images]);

  const stopCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  }, []);

  return (
    <button
      className="p-card"
      onClick={() => onSelect(product)}
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
      aria-haspopup="dialog"
      style={{ "--brand-accent": accent }}
    >
      {hasPhotos ? (
        <div className="p-swatch p-swatch-photo">
          <img src={product.images[index]} alt={product.name} loading="lazy" />
          {product.images.length > 1 && (
            <div className="p-dots">
              {product.images.map((_, i) => (
                <span key={i} className={`p-dot${i === index ? " active" : ""}`} />
              ))}
            </div>
          )}
          <span className="p-view-tag">{dict.common.viewDetails}</span>
          {product.price && <span className="p-price-tag">₹{product.price}</span>}
        </div>
      ) : (
        <div
          className="p-swatch"
          style={{ "--swatch-a": product.swatchA, "--swatch-b": product.swatchB }}
        >
          <GarmentMark accent={accent} />
          <span className="p-view-tag">{dict.common.viewDetails}</span>
        </div>
      )}
      <div className="p-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </button>
  );
}
