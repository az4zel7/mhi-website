"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { useEnquiry } from "./EnquiryProvider";

// "+ Add to enquiry list" / "✓ In your enquiry list" toggle.
export default function EnquiryButton({ id, variant = "card" }) {
  const { dict } = useLocale();
  const { has, toggle } = useEnquiry();
  const on = has(id);
  return (
    <button
      type="button"
      className={`enq-btn enq-btn-${variant}${on ? " on" : ""}`}
      aria-pressed={on}
      onClick={() => toggle(id)}
    >
      <span className="enq-btn-mark" aria-hidden="true">
        {on ? "✓" : "+"}
      </span>
      {on ? dict.enquiry.added : dict.enquiry.add}
    </button>
  );
}
