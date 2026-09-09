import CtaPanel from "@/components/CtaPanel";
import { getDictionary } from "@/lib/i18n/getDictionary";

export const metadata = {
  title: "About — Milton Hosiery Industries",
};

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div>
      <section className="wrap about-hero" style={{ paddingBottom: 0 }}>
        <div className="eyebrow-line">{dict.about.eyebrow}</div>
        <h1>{dict.about.title}</h1>
        <p className="about-lede">{dict.about.lede}</p>
      </section>

      <section className="wrap">
        <div className="split">
          <div>
            <h2>{dict.about.howHeading}</h2>
            <p>{dict.about.howCopy}</p>
            <div className="model-note">
              <strong>{dict.about.noteStrong}</strong> {dict.about.noteRest}
            </div>
          </div>
          <div>
            <h2>{dict.about.teamHeading}</h2>
            <p>{dict.about.teamCopy}</p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>{dict.about.milestonesHeading}</h2>
            <p>{dict.about.milestonesCopy}</p>
          </div>
          <div className="timeline">
            {dict.about.timeline.map((item, i) => (
              <div className={`t-row${item.tag !== "confirmed" ? " placeholder" : ""}`} key={i}>
                <div className="yr">{item.year}</div>
                <div className="desc">
                  {item.desc}
                  <span className="tag-edit">{dict.about.tagLabels[item.tag]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "110px" }}>
        <CtaPanel
          heading={dict.about.ctaHeading}
          copy={dict.about.ctaCopy}
          buttonLabel={dict.common.getInTouch}
          href={`/${locale}/contact`}
        />
      </section>
    </div>
  );
}
