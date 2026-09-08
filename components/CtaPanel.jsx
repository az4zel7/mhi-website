import Link from "next/link";

export default function CtaPanel({ heading, copy, buttonLabel = "Start a wholesale enquiry" }) {
  return (
    <div className="cta-panel">
      <h2>{heading}</h2>
      <p>{copy}</p>
      <Link href="/contact" className="btn btn-primary">
        {buttonLabel}
      </Link>
    </div>
  );
}
