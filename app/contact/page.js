import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Milton Hosiery Industries",
};

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6.5 3h3l1.5 4.5-2 1.5a11.5 11.5 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 1.1-.9 2-2 2C10.6 19 5 13.4 5 6c0-1.1.9-2 1.5-3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="M4.5 7 12 13l7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="wrap contact-hero">
        <h1 style={{ fontSize: "clamp(26px,3.2vw,36px)", maxWidth: "20ch" }}>
          Tell us about your business.
        </h1>
        <p className="about-lede" style={{ marginTop: "10px", marginBottom: "28px", fontSize: "15.5px" }}>
          This form is the fastest way to reach us for wholesale, distribution
          or institutional supply. We reply directly — no call centre in
          between.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <ContactForm />
          </div>

          <div className="contact-panel">
            <div className="blob contact-panel-blob" />
            <h2>Reach us directly</h2>
            <p className="contact-panel-sub">
              Prefer to skip the form? Call or write to us directly.
            </p>

            <div className="contact-item">
              <span className="contact-icon">
                <PinIcon />
              </span>
              <div>
                <div className="contact-item-label">Office address</div>
                <div className="contact-item-value">
                  Shroff Mansion, 3rd Bhoiwada Ln, Marine Lines East,
                  Panjarpole, Bhuleshwar, Mumbai, Maharashtra 400002
                </div>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <PhoneIcon />
              </span>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">
                  <a href="tel:+917045208003">+91 70452 08003</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <MailIcon />
              </span>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value placeholder">
                  Add your email address here
                </div>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <ClockIcon />
              </span>
              <div>
                <div className="contact-item-label">Business hours</div>
                <div className="contact-item-value">10:00 AM – 7:30 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
