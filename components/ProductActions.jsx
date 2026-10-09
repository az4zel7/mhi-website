"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { waLink } from "@/lib/site";
import EnquiryButton from "./EnquiryButton";
import WhatsAppIcon from "./WhatsAppIcon";

// Buttons on a design page: add to the enquiry list, or WhatsApp about this one
// design right away. The WhatsApp message includes the page link so the photo
// is one tap away on your phone.
export default function ProductActions({ id, name, code, brandName }) {
  const { dict } = useLocale();
  const message = dict.whatsapp.productEnquiry
    .replace("{product}", `${name} · ${code}`)
    .replace("{brand}", brandName);
  const [href, setHref] = useState(waLink(message));

  useEffect(() => {
    setHref(waLink(`${message}\n${window.location.href}`));
  }, [message]);

  return (
    <div className="detail-actions">
      <EnquiryButton id={id} variant="detail" />
      <a className="btn-whatsapp" href={href} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {dict.common.enquireWhatsApp}
      </a>
    </div>
  );
}
