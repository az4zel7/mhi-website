import CtaPanel from "@/components/CtaPanel";

export const metadata = {
  title: "About — Milton Hosiery Industries",
};

const TIMELINE = [
  {
    year: "1973",
    description: "Founded in Mumbai with our first product, Milton Nylon Trunks.",
    confirmed: true,
  },
  {
    year: "19XX",
    description: "Add a milestone — e.g. second generation joins the business.",
    confirmed: false,
  },
  {
    year: "19XX",
    description: "Add a milestone — e.g. ANICY launches.",
    confirmed: false,
  },
  {
    year: "20XX",
    description: "Add a milestone — e.g. NICY launches.",
    confirmed: false,
  },
  {
    year: "Soon",
    description: "Avron launches — our newest, premium men's performance brand.",
    confirmed: true,
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="wrap about-hero" style={{ paddingBottom: 0 }}>
        <div className="eyebrow-line">Our story</div>
        <h1>Fifty years of dressing everyday India, one brand at a time.</h1>
        <p className="about-lede">
          Milton Hosiery Industries was founded in 1973 in Mumbai. Today
          it&apos;s run by the second generation of the founding family, and
          it has grown from a single product into a small portfolio of
          brands, each built for a different customer.
        </p>
      </section>

      <section className="wrap">
        <div className="split">
          <div>
            <h2>How the company works</h2>
            <p>
              We are a brand and distribution company, not a factory. Our
              team designs each brand&apos;s products and range, and
              production is carried out by four to eight external
              manufacturing partners we work with closely on quality and
              consistency.
            </p>
            <div className="model-note">
              <strong>What this means for buyers:</strong> you&apos;re working
              with the people who own and stand behind the brand, with the
              flexibility of a small, hands-on team rather than a large
              factory bureaucracy.
            </div>
          </div>
          <div>
            <h2>A small team by design</h2>
            <p>
              Milton Hosiery Industries is run by a small team, which is part
              of why our brands stay closely managed and consistent. It also
              means we&apos;re able to respond directly and personally to
              wholesale enquiries, rather than routing you through layers of
              sales staff.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>Milestones</h2>
            <p>
              The key moments in our history. Rows marked &ldquo;placeholder&rdquo;
              need your confirmed dates and details before this page goes
              live — see <code>app/about/page.js</code> to edit the{" "}
              <code>TIMELINE</code> array.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div className={`t-row${item.confirmed ? "" : " placeholder"}`} key={i}>
                <div className="yr">{item.year}</div>
                <div className="desc">
                  {item.description}
                  <span className="tag-edit">
                    {item.confirmed ? "confirmed" : "placeholder"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "110px" }}>
        <CtaPanel
          heading="Want to know more before you order?"
          copy="Happy to walk you through our brands, minimum order quantities and lead times directly."
          buttonLabel="Get in touch"
        />
      </section>
    </div>
  );
}
