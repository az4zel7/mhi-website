"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HOVER_INTERVAL_MS = 900;

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

export default function ProductCard({ product, brandAccent, onSelect }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const images = product.images || [];
  const hasImages = images.length > 0;

  const stopCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startCycle = () => {
    if (images.length < 2) return;
    stopCycle();
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, HOVER_INTERVAL_MS);
  };

  useEffect(() => stopCycle, []);

  return (
    <button
      className="p-card"
      onClick={onSelect}
      onMouseEnter={hasImages ? startCycle : undefined}
      onMouseLeave={
        hasImages
          ? () => {
              stopCycle();
              setActiveIndex(0);
            }
          : undefined
      }
      onFocus={hasImages ? startCycle : undefined}
      onBlur={
        hasImages
          ? () => {
              stopCycle();
              setActiveIndex(0);
            }
          : undefined
      }
      aria-haspopup="dialog"
      style={{ "--brand-accent": brandAccent }}
    >
      {hasImages ? (
        <div className="p-media">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={product.name}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 860px) 50vw, 33vw"
              className={`p-media-img${i === activeIndex ? " is-active" : ""}`}
              priority={i === 0}
            />
          ))}
          <span className="p-view-tag">View details</span>
        </div>
      ) : (
        <div
          className="p-swatch"
          style={{ "--swatch-a": product.swatchA, "--swatch-b": product.swatchB }}
        >
          <GarmentMark accent={brandAccent} />
          <span className="p-view-tag">View details</span>
        </div>
      )}
      <div className="p-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </button>
  );
}
