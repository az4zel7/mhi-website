"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleContext";
import EnquiryButton from "./EnquiryButton";

// One design in a catalogue grid. The photo + text link to the design's own page;
// the add-to-enquiry button sits below it (a button can't live inside a link).
export default function ProductCard({ product, brandSlug, accent, priority = false }) {
  const { locale, dict } = useLocale();
  const images = product.images || [];
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  // ANICY designs have several photos: on devices with a real hover, cycle them.
  const start = useCallback(() => {
    if (images.length < 2 || timer.current) return;
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover)").matches) return;
    timer.current = setInterval(() => setIdx((i) => (i + 1) % images.length), 900);
  }, [images.length]);
  const stop = useCallback(() => {
    clearInterval(timer.current);
    timer.current = null;
    setIdx(0);
  }, []);
  useEffect(() => () => clearInterval(timer.current), []);

  const href = `/${locale}/products/${brandSlug}/${product.slug}`;
  const colourCount = product.colors ? product.colors.length : 0;

  return (
    <article className="p-card" style={{ "--brand-accent": accent }}>
      <Link
        href={href}
        className="p-link"
        onMouseEnter={start}
        onMouseLeave={stop}
        onFocus={start}
        onBlur={stop}
      >
        <div className="p-swatch">
          {images.length > 0 && (
            <Image
              src={images[idx]}
              alt={product.name}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 860px) 50vw, 380px"
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
              priority={priority}
            />
          )}
          <span className="p-code">{product.code}</span>
          {images.length > 1 && (
            <span className="p-dots" aria-hidden="true">
              {images.map((_, i) => (
                <span key={i} className={`p-dot${i === idx ? " active" : ""}`} />
              ))}
            </span>
          )}
          <span className="p-view-tag">{dict.common.viewDetails}</span>
        </div>
        <div className="p-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {colourCount > 0 && (
            <div className="shade-strip" aria-label={`${colourCount} ${dict.products.colorsShort}`}>
              {product.colors.slice(0, 10).map((c, i) => (
                <span key={i} className="shade-chip" style={{ background: c.hex }} title={c.name} />
              ))}
              <span className="shade-count">
                {colourCount} {dict.products.colorsShort}
              </span>
            </div>
          )}
        </div>
      </Link>
      <EnquiryButton id={`${brandSlug}/${product.slug}`} variant="card" />
    </article>
  );
}
