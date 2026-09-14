"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

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

export default function CallFab() {
  const { dict } = useLocale();

  return (
    <a href="tel:+917045208003" className="call-fab" aria-label={dict.common.callUs}>
      <PhoneIcon />
      <span className="call-fab-label">+91 70452 08003</span>
    </a>
  );
}
