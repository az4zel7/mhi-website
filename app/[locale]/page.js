import Link from "next/link";
import Image from "next/image";
import CtaPanel from "@/components/CtaPanel";
import { getBrands, getFeaturedProducts } from "@/lib/brands";
import { getDictionary } from "@/lib/i18n/getDictionary";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </svg>
  );
}
function ClockHistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z" strokeLinejoin="round" />
      <path d="M3.5 12 12 16.5 20.5 12M3.5 16l8.5 4.5 8.5-4.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
function FamilyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M3.5 20v-1.5A5.5 5.5 0 0 1 9 13a5.5 5.5 0 0 1 5.2 3.7M14 20v-1.2a4.3 4.3 0 0 1 6.5-3.7" strokeLinecap="round" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const brands = getBrands(locale);
  const featured = getFeaturedProducts(locale);

  const STAT_ICONS = [CalendarIcon, ClockHistoryIcon, LayersIcon, FamilyIcon];

  return (
    <div>
      <section className="hero">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow-line">{dict.home.eyebrow}</div>
              <h1 className="hero-title">{dict.home.title}</h1>
              <p className="hero-copy">{dict.home.copy}</p>
              <div className="hero-actions">
                <Link href={`/${locale}/contact`} className="btn btn-primary">
                  {dict.common.startEnquiry}
                </Link>
                <Link href={`/${locale}/products`} className="btn btn-outline">
                  {dict.common.seeOurBrands}
                </Link>
              </div>
            </div>
            <div className="hero-panel">
              <div className="label">{dict.home.panelLabel}</div>
              <div className="figure">{dict.home.panelFigure}</div>
              <p>{dict.home.panelCopy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0, paddingBottom: "56px" }}>
        <div className="stats-strip">
          {dict.home.stats.map((stat, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div className="stat-item" key={i}>
                <span className="stat-icon">
                  <Icon />
                </span>
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
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
            <h2>{dict.home.sectionHeading}</h2>
            <p>{dict.home.sectionCopy}</p>
          </div>
          <div className="swatch-strip">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/${locale}/products?brand=${brand.slug}`}
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
        <div className="section-head">
          <div className="eyebrow-line">{dict.home.featuredEyebrow}</div>
          <h2>{dict.home.featuredHeading}</h2>
          <p>{dict.home.featuredCopy}</p>
        </div>
        <div className="featured-grid">
          {featured.map(({ brandSlug, brandName, accent, product }, i) => (
            <Link
              key={i}
              href={`/${locale}/products?brand=${brandSlug}`}
              className="featured-card"
              style={{ "--brand-accent": accent }}
            >
              <div className="featured-media">
                {product.images?.[0] && (
                  <img src={product.images[0]} alt={product.name} loading="lazy" />
                )}
                <span className="featured-brand-tag">{brandName}</span>
              </div>
              <div className="featured-info">
                <h3>{product.name}</h3>
                <span className="featured-cta">
                  {dict.common.viewDetails}
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="featured-more">
          <Link href={`/${locale}/products`} className="btn btn-outline">
            {dict.home.featuredCtaLabel}
          </Link>
        </div>
      </section>

      <section className="wrap">
        <div className="split">
          <div>
            <h2>{dict.home.retailersHeading}</h2>
            <p>{dict.home.retailersCopy}</p>
          </div>
          <div>
            <h2>{dict.home.institutionalHeading}</h2>
            <p>{dict.home.institutionalCopy}</p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line">{dict.home.testimonialsEyebrow}</div>
            <h2>{dict.home.testimonialsHeading}</h2>
            <p>{dict.home.testimonialsCopy}</p>
          </div>
          <div className="testimonial-grid">
            {dict.home.testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote-mark">&ldquo;</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-person">
                  <span className="testimonial-avatar">{t.name.charAt(0)}</span>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-note">
            <span className="tag-edit">{dict.about.tagLabels.placeholder}</span>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0, paddingBottom: "110px" }}>
        <CtaPanel
          heading={dict.home.ctaHeading}
          copy={dict.home.ctaCopy}
          buttonLabel={dict.common.startEnquiry}
          href={`/${locale}/contact`}
        />
      </section>
    </div>
  );
}
