import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import ShadeCard from "@/components/ShadeCard";
import ProductActions from "@/components/ProductActions";
import CtaPanel from "@/components/CtaPanel";
import { catalogueBrands, getProduct, productHref } from "@/lib/brands";
import { getDictionary } from "@/lib/i18n/getDictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return catalogueBrands().flatMap((b) => b.products.map((p) => ({ brand: b.slug, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, brand, slug } = await params;
  const hit = getProduct(brand, slug, locale);
  if (!hit) return {};
  return {
    title: `${hit.product.name} (${hit.product.code}) — ${hit.brand.name} | Milton Hosiery Industries`,
    description: hit.product.description,
  };
}

export default async function ProductPage({ params }) {
  const { locale, brand: brandSlug, slug } = await params;
  const hit = getProduct(brandSlug, slug, locale);
  if (!hit || brandSlug === "milton") notFound();
  const { brand, product, prev, next } = hit;
  const dict = getDictionary(locale);
  const t = dict.products;

  // The long text often begins with the short one; show the short one as a lead
  // line and only the remainder below, so nothing is repeated.
  const lead = product.description || "";
  let rest = product.details || "";
  if (rest.startsWith(lead)) rest = rest.slice(lead.length);
  rest = rest.replace(/^[\s.,;:—–-]+/, "").trim(); // drop the full stop left behind by the split
  if (rest === lead) rest = "";

  const category =
    product.category === "girls" ? t.categoryGirls : product.category === "ladies" ? t.categoryLadies : null;

  const spec = [
    [t.itemCode, product.code],
    [t.brand, brand.name],
    product.collection && [t.collection, product.collection],
    category && [t.category, category],
    product.colors && [t.colours, String(product.colors.length)],
    [t.supply, t.wholesaleOnly],
  ].filter(Boolean);

  return (
    <div style={{ "--brand-accent": brand.accent }}>
      <section className="detail">
        <div className="wrap">
          <nav className="crumbs code" aria-label="Breadcrumb">
            <Link href={`/${locale}/products`}>{t.allBrands}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/products/${brand.slug}`}>{brand.name}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.code}</span>
          </nav>

          <div className="detail-grid">
            <Gallery images={product.images || []} alt={product.name} />

            <div className="detail-info">
              <div className="detail-tags">
                <span className="tag detail-code">{product.code}</span>
                {product.collection && <span className="code detail-collection">{product.collection}</span>}
              </div>
              <h1>{product.name}</h1>
              <p className="detail-lead">{lead}</p>
              {rest && <p className="detail-body">{rest}</p>}

              <ShadeCard colors={product.colors} dict={dict} />

              <ProductActions
                id={`${brand.slug}/${product.slug}`}
                name={product.name}
                code={product.code}
                brandName={brand.name}
              />

              <dl className="spec">
                {spec.map(([k, v]) => (
                  <div className="spec-row" key={k + v}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="detail-pn">
            {prev ? (
              <Link href={productHref(locale, brand.slug, prev.slug)} className="pn pn-prev">
                <span className="code">← {t.prev}</span>
                <span className="pn-name">
                  {prev.code} · {prev.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={productHref(locale, brand.slug, next.slug)} className="pn pn-next">
                <span className="code">{t.next} →</span>
                <span className="pn-name">
                  {next.code} · {next.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <p className="detail-back">
            <Link href={`/${locale}/products/${brand.slug}`} className="btn btn-outline">
              ← {t.backTo.replace("{brand}", brand.name)}
            </Link>
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: "0", paddingBottom: "110px" }}>
        <CtaPanel
          heading={dict.products.ctaHeading}
          copy={dict.products.ctaCopy}
          buttonLabel={dict.common.startEnquiry}
          href={`/${locale}/contact`}
        />
      </section>
    </div>
  );
}
