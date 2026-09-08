"use client";

import { useEffect } from "react";
import ProductCarousel from "@/components/ProductCarousel";

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

export default function ProductModal({ product, brandName, accent, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  const hasImages = (product.images || []).length > 0;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        {hasImages ? (
          <div className="modal-media">
            <ProductCarousel
              images={product.images}
              alt={product.name}
              accent={accent}
            />
          </div>
        ) : (
          <div
            className="modal-swatch"
            style={{ "--swatch-a": product.swatchA, "--swatch-b": product.swatchB }}
          >
            <GarmentMark accent={accent} />
            <span className="ph-label">Photo pending</span>
          </div>
        )}
        <div className="modal-body">
          <div className="modal-brand-tag" style={{ background: accent }}>
            {brandName}
          </div>
          <h3 id="product-modal-title">{product.name}</h3>
          <p className="modal-summary">{product.description}</p>
          {product.details && <p className="modal-details">{product.details}</p>}
        </div>
      </div>
    </div>
  );
}
