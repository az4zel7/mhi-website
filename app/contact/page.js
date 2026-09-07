import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Milton Hosiery Industries",
};

export default function ContactPage() {
  return (
    <div>
      <section className="wrap">
        <h1 style={{ fontSize: "clamp(32px,4.4vw,42px)", maxWidth: "18ch" }}>
          Tell us about your business.
        </h1>
        <p className="about-lede" style={{ marginBottom: "50px" }}>
          This form is the fastest way to reach us for wholesale, distribution
          or institutional supply. We reply directly — no call centre in
          between.
        </p>

        <div className="contact-grid">
          <ContactForm />

          <div className="contact-info">
            <h2>Reach us directly</h2>
            <div className="info-row">
              <div className="k">Office address</div>
              <div className="v placeholder">Add your office address here</div>
            </div>
            <div className="info-row">
              <div className="k">Phone</div>
              <div className="v placeholder">Add your phone number here</div>
            </div>
            <div className="info-row">
              <div className="k">Email</div>
              <div className="v placeholder">Add your email address here</div>
            </div>
            <div className="info-row">
              <div className="k">Business hours</div>
              <div className="v placeholder">Add your business hours here</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
