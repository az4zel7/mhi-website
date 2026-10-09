import { redirect } from "next/navigation";
import BrandList from "@/components/BrandList";
import CtaPanel from "@/components/CtaPanel";
import { catalogueBrands, getBrands } from "@/lib/brands";
import { getDictionary } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: `${dict.nav.products} — Milton Hosiery Industries` };
}

export default async function ProductsIndex({ params, searchParams }) {
  const { locale } = await params;
  const sp = await searchParams;

  // Old links looked like /products?brand=nicy — send them to the new URL.
  const legacy = typeof sp?.brand === "string" ? sp.brand : null;
  if (legacy && catalogueBrands().some((b) => b.slug === legacy)) {
    redirect(`/${locale}/products/${legacy}`);
  }

  const dict = getDictionary(locale);
  return (
    <div>
      <section>
        <div className="wrap">
          <div className="section-head">
            <h1>{dict.home.sectionHeading}</h1>
            <p>{dict.home.sectionCopy}</p>
          </div>
          <BrandList brands={getBrands(locale)} locale={locale} />
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
