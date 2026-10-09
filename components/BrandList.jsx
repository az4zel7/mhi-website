import Link from "next/link";
import Image from "next/image";

// Photos shown beside each brand. Zoomed in to drop the logo/labels printed into
// the NICY photos (see --zs / --zo in globals.css).
const THUMBS = {
  anicy: ["/products/anicy/3/1.jpg", "/products/anicy/6/1.jpg", "/products/anicy/5/1.jpg"],
  nicy: [
    "/products/nicy/ladies-mario-rib-plazo/1.jpg",
    "/products/nicy/ladies-jacquard-palazzo/1.jpg",
    "/products/nicy/v-crush-plazo/1.jpg",
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

// The brands as a catalogue "contents" list. Used on the home page and /products.
export default function BrandList({ brands, locale }) {
  return (
    <ol className="brand-list">
      {brands.map((brand, i) => {
        const thumbs = THUMBS[brand.slug];
        const isLink = brand.slug !== "milton"; // Milton has no catalogue page
        const dark = brand.slug === "avron";
        const Row = isLink ? Link : "div";
        const rowProps = isLink ? { href: `/${locale}/products/${brand.slug}` } : {};
        return (
          <li key={brand.slug}>
            <Row
              {...rowProps}
              className={`brand-row${isLink ? " is-link" : ""}${dark ? " dark" : ""}`}
              style={{ "--row-accent": brand.accent }}
            >
              <span className="brand-num">{String(i + 1).padStart(2, "0")}</span>

              <span className="brand-logo">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={80}
                    style={{ height: "auto", maxHeight: "60px", width: "auto", maxWidth: "200px" }}
                  />
                ) : (
                  <span className="brand-wordmark">{brand.name}</span>
                )}
              </span>

              <span className="brand-text">
                <span className="brand-blurb">{brand.homeBlurb}</span>
                {/* Brands without photos show their status in the dashed stamp instead. */}
                {thumbs && <span className="status">{brand.status}</span>}
              </span>

              <span className="brand-media">
                {thumbs ? (
                  thumbs.map((src) => (
                    <span className="brand-thumb zoom" key={src} style={{ "--zs": 1.6, "--zo": "50% 40%" }}>
                      <Image src={src} alt="" fill sizes="110px" style={{ objectFit: "cover" }} />
                    </span>
                  ))
                ) : (
                  <span className="brand-stamp">{brand.status}</span>
                )}
              </span>

              <span className="brand-arrow" aria-hidden="true">
                {isLink && <Arrow />}
              </span>
            </Row>
          </li>
        );
      })}
    </ol>
  );
}
