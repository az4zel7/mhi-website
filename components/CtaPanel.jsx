"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SITE, waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

// Closing call-to-action. WhatsApp first (that's how most wholesale buyers
// reach us), the form second, and the phone number as a plain link.
export default function CtaPanel({ heading, copy, buttonLabel, href }) {
  const { locale, dict } = useLocale();
  return (
    <div className="cta-panel">
      <h2>{heading}</h2>
      <p>{copy}</p>
      <div className="cta-actions">
        <a
          className="btn btn-light"
          href={waLink(dict.whatsapp.greeting)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={20} />
          {dict.common.enquireWhatsApp}
        </a>
        <Link href={href || `/${locale}/contact`} className="btn btn-outline-light">
          {buttonLabel}
        </Link>
      </div>
      <p className="cta-call">
        {dict.home.callPrefix} <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
      </p>
    </div>
  );
}
