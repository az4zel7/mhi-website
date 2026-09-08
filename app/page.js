import Link from "next/link";
import Image from "next/image";
import CtaPanel from "@/components/CtaPanel";
import { BRANDS } from "@/lib/brands";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow-line">Family-run since 1973</div>
              <h1 className="hero-title">
                Apparel brands built for how people actually get dressed.
              </h1>
              <p className="hero-copy">
                Milton Hosiery Industries designs and owns a portfolio of
                apparel brands out of Mumbai — now run by the second
                generation of the family that started it. We work with a
                small group of trusted manufacturing partners to bring each
                brand to retailers, distributors and institutional buyers
                across the country.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a wholesale enquiry
                </Link>
                <Link href="/products" className="btn btn-outline">
                  See our brands
                </Link>
              </div>
            </div>
            <div className="hero-panel">
              <div className="label">What we do</div>
              <div className="figure">Brand &amp; distribution</div>
              <p>
                We design, name and market each brand ourselves. Production
                runs through a small set of contract manufacturing partners —
                we don&apos;t operate our own factory floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C 320,90 480,0 720,20 C 960,40 1120,90 1440,30 L1440,80 L0,80 Z"
            fill="#EEF4FC"
          />
        </svg>
      </div>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>One company, four distinct brands.</h2>
            <p>
              Each brand has its own name, audience and product range. We keep
              them separate on purpose — a distributor stocking ANICY and a
              boutique stocking NICY are reaching very different customers.
            </p>
          </div>
          <div className="swatch-strip">
            {BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/products?brand=${brand.slug}`}
                className={`swatch${brand.slug === "avron" ? " muted" : ""}`}
              >
                <div className="logo-box">
                  {brand.logo ? (
                    <Image src={brand.logo} alt={brand.name} width={120} height={30} style={{ height: "30px", width: "auto" }} />
                  ) : (
                    <span className="wordmark">{brand.name}</span>
                  )}
                </div>
                <div className="seg">{brand.homeBlurb}</div>
                <div className="status">{brand.status}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="wave" style={{ transform: "rotate(180deg)" }} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C 320,90 480,0 720,20 C 960,40 1120,90 1440,30 L1440,80 L0,80 Z"
            fill="#EEF4FC"
          />
        </svg>
      </div>

      <section className="wrap">
        <div className="split">
          <div>
            <h2>For retailers &amp; distributors</h2>
            <p>
              We supply through wholesale channels only — there&apos;s no
              direct-to-consumer store to compete with your shelf. Tell us
              which brand and volumes you&apos;re interested in and we&apos;ll
              get back to you with terms.
            </p>
          </div>
          <div>
            <h2>For institutional buyers</h2>
            <p>
              If you&apos;re buying in bulk for uniforms, hospitality or
              another institutional use, our team can work with you directly
              on specification and lead times.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0, paddingBottom: "110px" }}>
        <CtaPanel
          heading="Ready to talk stock?"
          copy="Send us a short note about your business and what you're looking for — we usually reply within a couple of working days."
        />
      </section>
    </div>
  );
}
