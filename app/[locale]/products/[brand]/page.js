import { notFound } from "next/navigation";
import BrandNav from "@/components/BrandNav";
import BrandHeader from "@/components/BrandHeader";
import Catalogue from "@/components/Catalogue";
import CtaPanel from "@/components/CtaPanel";
import { catalogueBrands } from "@/lib/brands";
import { getDictionary } from "@/lib/i18n/getDictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return catalogueBrands().map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, brand: slug } = await params;
  const brand = catalogueBrands(locale).find((b) => b.slug === slug);
  if (!brand) return {};
  return {
    title: `${brand.name} — ${brand.segment} | Milton Hosiery Industries`,
    description: brand.description || brand.homeBlurb,
  };
}

export default async function BrandPage({ params }) {
  const { locale, brand: slug } = await params;
  const dict = getDictionary(locale);
  const brands = catalogueBrands(locale);
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  return (
    <div>
      <BrandNav brands={brands} active={brand.slug} locale={locale} label={dict.nav.products} />
      <BrandHeader brand={brand} count={brand.products.length} dict={dict} />

      {brand.products.length > 0 ? (
        <Catalogue products={brand.products} brandSlug={brand.slug} accent={brand.accent} />
      ) : (
        brand.comingSoon && (
          <section className="wrap">
            <div className="avron-teaser">
              <span className="tag">{brand.comingSoon.tag}</span>
              <h3>{brand.comingSoon.heading}</h3>
              <p>{brand.comingSoon.copy}</p>
            </div>
          </section>
        )
      )}

      <section className="wrap" style={{ paddingTop: "20px", paddingBottom: "110px" }}>
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
