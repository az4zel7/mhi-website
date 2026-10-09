import Link from "next/link";
import Image from "next/image";

// Tabs across the top of the catalogue: one link per brand.
export default function BrandNav({ brands, active, locale, label }) {
  return (
    <div className="segmented-nav-wrap">
      <div className="wrap">
        <nav className="segmented-nav" aria-label={label}>
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/${locale}/products/${b.slug}`}
              className={`segment${active === b.slug ? " active" : ""}`}
              style={{ "--brand-accent": b.accent }}
              aria-current={active === b.slug ? "page" : undefined}
            >
              {b.logo && <Image src={b.logo} alt="" height={26} width={52} style={{ height: "26px", width: "auto" }} />}
              <span>{b.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
