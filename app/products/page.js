import { Suspense } from "react";
import CtaPanel from "@/components/CtaPanel";
import ProductTabs from "@/components/ProductTabs";

export const metadata = {
  title: "Products — Milton Hosiery Industries",
};

export default function ProductsPage() {
  return (
    <div>
      <Suspense fallback={null}>
        <ProductTabs />
      </Suspense>

      <section className="wrap" style={{ paddingTop: "20px", paddingBottom: "110px" }}>
        <CtaPanel
          heading="Interested in stocking one of our brands?"
          copy="Let us know which brand, your business type and expected volumes."
        />
      </section>
    </div>
  );
}
