"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

// Floating "chat on WhatsApp" button, shown on every page.
export default function WhatsAppButton() {
  const { dict } = useLocale();
  return (
    <a
      className="wa-float"
      href={waLink(dict.whatsapp.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.common.whatsapp}
    >
      <WhatsAppIcon size={26} />
      <span>{dict.common.whatsapp}</span>
    </a>
  );
}
