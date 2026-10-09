import Link from "next/link";
import Image from "next/image";
import BrandList from "@/components/BrandList";
import CtaPanel from "@/components/CtaPanel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getBrands, findByImage } from "@/lib/brands";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { SITE, waLink } from "@/lib/site";

// Hero photo plates. `zoom` crops in on NICY photos to drop the logo and design
// number that are printed into the top of those images.
const PLATES = [
  { id: "a", brand: "anicy", src: "/products/anicy/3/1.jpg", pos: "50% 70%" },
  // zs = zoom factor, zo = zoom origin. Origin at the left edge also crops out the
  // "FREE SIZE" label printed at the bottom right of this photo.
  { id: "b", brand: "nicy", src: "/products/nicy/ladies-mario-rib-plazo/1.jpg", zoom: true, zs: 1.4, zo: "0% 88%" },
  { id: "c", brand: "nicy", src: "/products/nicy/2-button-plazo/1.jpg", zoom: true },
];

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const h = dict.home;
  const brands = getBrands(locale);
  const bySlug = Object.fromEntries(brands.map((b) => [b.slug, b]));

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="eyebrow-line">{h.eyebrow}</div>
              <h1 className="hero-title">{h.title}</h1>
              <p className="hero-copy">{h.copy}</p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={waLink(dict.whatsapp.greeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={20} />
                  {dict.common.enquireWhatsApp}
                </a>
                <Link href={`/${locale}/products`} className="btn btn-outline">
                  {dict.common.seeOurBrands}
                </Link>
              </div>
              <p className="hero-call">
                {h.callPrefix} <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </p>
            </div>

            <div className="plates" role="group" aria-label={h.plateLabel}>
              {PLATES.map((pl, i) => {
                const hit = findByImage(bySlug[pl.brand], pl.src);
                return (
                  <figure
                    key={pl.id}
                    className={`plate plate-${pl.id}${pl.zoom ? " zoom" : ""}`}
                    style={pl.zs ? { "--zs": pl.zs, "--zo": pl.zo } : undefined}
                  >
                    <Image
                      src={pl.src}
                      alt={hit ? hit.product.name : ""}
                      fill
                      sizes="(max-width: 920px) 45vw, 260px"
                      style={{ objectFit: "cover", objectPosition: pl.pos || "50% 50%" }}
                      priority={i === 0}
                    />
                    {hit && (
                      <figcaption className="plate-cap">
                        <span className="code">{hit.code}</span>
                        <span className="plate-name">{hit.product.name}</span>
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LEDGER: the numbers ---------- */}
      <section className="ledger-band">
        <div className="wrap">
          <dl className="ledger">
            {h.ledger.map((item) => (
              <div className="ledger-cell" key={item.label}>
                <dt className="ledger-fig">{item.fig}</dt>
                <dd className="ledger-label">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- BRANDS: catalogue contents ---------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>{h.sectionHeading}</h2>
            <p>{h.sectionCopy}</p>
          </div>

          <BrandList brands={brands} locale={locale} />
        </div>
      </section>

      {/* ---------- WHO WE SUPPLY + HOW AN ORDER WORKS ---------- */}
      <section className="section-alt">
        <div className="wrap">
          <div className="supply-grid">
            <div className="supply-cols">
              <div className="supply-col">
                <h2>{h.retailersHeading}</h2>
                <p>{h.retailersCopy}</p>
              </div>
              <div className="supply-col">
                <h2>{h.institutionalHeading}</h2>
                <p>{h.institutionalCopy}</p>
              </div>
            </div>

            <div className="slip">
              <div className="slip-head">
                <span>{h.slipTag}</span>
                <span>MHI · 1973</span>
              </div>
              <h3 className="slip-title">{h.slipTitle}</h3>
              <ol className="slip-rows">
                {h.slipSteps.map((s, i) => (
                  <li className="slip-row" key={s.k}>
                    <span className="slip-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="slip-k">{s.k}</span>
                      <span className="slip-v">{s.v}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="wrap" style={{ paddingTop: "96px", paddingBottom: "110px" }}>
        <CtaPanel
          heading={h.ctaHeading}
          copy={h.ctaCopy}
          buttonLabel={dict.common.startEnquiry}
          href={`/${locale}/contact`}
        />
      </section>
    </div>
  );
}
