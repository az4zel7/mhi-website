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
              <div className="v">
                Shroff Mansion, 3rd Bhoiwada Ln, Marine Lines East,
                Panjarpole, Bhuleshwar, Mumbai, Maharashtra 400002
              </div>
            </div>
            <div className="info-row">
              <div className="k">Phone</div>
              <div className="v">
                <a href="tel:+917045208003">+91 70452 08003</a>
              </div>
            </div>
            <div className="info-row">
              <div className="k">Email</div>
              <div className="v placeholder">Add your email address here</div>
            </div>
            <div className="info-row">
              <div className="k">Business hours</div>
              <div className="v">10:00 AM – 7:30 PM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
