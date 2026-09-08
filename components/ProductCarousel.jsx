"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_INTERVAL_MS = 2800;

export default function ProductCarousel({ images, alt, accent }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const count = images.length;

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (count < 2) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_INTERVAL_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const goTo = (i) => {
    setIndex(((i % count) + count) % count);
    restartAutoplay();
  };

  if (count === 0) {
    return (
      <div className="carousel">
        <div className="carousel-empty" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} — photo ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className={`carousel-img${i === index ? " is-active" : ""}`}
            priority={i === 0}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous photo"
            onClick={() => goTo(index - 1)}
          >
            &#8249;
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next photo"
            onClick={() => goTo(index + 1)}
          >
            &#8250;
          </button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${i === index ? " is-active" : ""}`}
                style={i === index ? { background: accent } : undefined}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
