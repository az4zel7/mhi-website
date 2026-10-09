"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleContext";

// Photo viewer for a design page. The photos sit in a horizontal scroll-snap strip,
// so on a phone you simply swipe; arrows, thumbnails and the keyboard work too.
export default function Gallery({ images, alt }) {
  const { dict } = useLocale();
  const track = useRef(null);
  const [i, setI] = useState(0);
  const many = images.length > 1;

  const goTo = useCallback((n) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
    setI(n);
  }, []);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const n = Math.round(el.scrollLeft / el.clientWidth);
    if (n !== i) setI(n);
  };

  const onKey = (e) => {
    if (!many) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(Math.min(images.length - 1, i + 1));
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(Math.max(0, i - 1));
    }
  };

  return (
    <div className="gal">
      <div className="gal-stage">
        <div
          className="gal-track"
          ref={track}
          onScroll={onScroll}
          onKeyDown={onKey}
          tabIndex={many ? 0 : -1}
          role="group"
          aria-roledescription="carousel"
          aria-label={alt}
        >
          {images.map((src, k) => (
            <div className="gal-slide" key={src} aria-label={dict.products.photo.replace("{n}", k + 1).replace("{total}", images.length)}>
              <Image
                src={src}
                alt={k === 0 ? alt : `${alt} (${k + 1})`}
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: "contain" }}
                priority={k === 0}
              />
            </div>
          ))}
        </div>
        {many && (
          <>
            <button type="button" className="gal-arrow gal-prev" onClick={() => goTo(Math.max(0, i - 1))} disabled={i === 0} aria-label={dict.products.prevPhoto}>
              ←
            </button>
            <button type="button" className="gal-arrow gal-next" onClick={() => goTo(Math.min(images.length - 1, i + 1))} disabled={i === images.length - 1} aria-label={dict.products.nextPhoto}>
              →
            </button>
            <span className="gal-count code" aria-hidden="true">
              {i + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {many && (
        <div className="gal-thumbs">
          {images.map((src, k) => (
            <button
              type="button"
              key={src}
              className={`gal-thumb${k === i ? " active" : ""}`}
              onClick={() => goTo(k)}
              aria-label={dict.products.photo.replace("{n}", k + 1).replace("{total}", images.length)}
              aria-current={k === i}
            >
              <Image src={src} alt="" fill sizes="72px" style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
