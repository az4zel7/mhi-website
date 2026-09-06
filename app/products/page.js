import { Suspense } from "react";
import CtaPanel from "@/components/CtaPanel";
import BrandTabs from "@/components/BrandTabs";

export const metadata = {
  title: "Products — Milton Hosiery Industries",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="wrap" style={{ paddingBottom: 0 }}>
        <div className="eyebrow-line">Our portfolio</div>
        <h1 style={{ fontSize: "clamp(32px,4.4vw,46px)", maxWidth: "18ch" }}>
          Four brands, four different customers.
        </h1>
        <p className="about-lede" style={{ marginBottom: "44px" }}>
          Browse each brand below. Product photography shown here is
          placeholder — swap in real catalog images before launch (see{" "}
          <code>lib/brands.js</code>).
        </p>

        <Suspense fallback={null}>
          <BrandTabs />
        </Suspense>
      </section>

      <section className="wrap" style={{ paddingTop: "70px", paddingBottom: "110px" }}>
        <CtaPanel
          heading="Interested in stocking one of our brands?"
          copy="Let us know which brand, your business type and expected volumes."
        />
      </section>
    </div>
  );
}
