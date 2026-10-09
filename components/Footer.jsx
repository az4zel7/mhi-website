"use client";

import Link from "next/link";
import Image from "next/image";
import mhiLogo from "@/public/logos/mhi.png";
import { getBrands } from "@/lib/brands";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SITE, waLink } from "@/lib/site";

export default function Footer() {
  const { locale, dict } = useLocale();
  const copyright = dict.footer.copyright.replace("{year}", new Date().getFullYear());
  const brands = getBrands(locale).filter((b) => b.slug !== "milton");

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            {/* The MHI mark is dark blue, so it sits on a white plate like a stencil label. */}
            <span className="footer-plate">
              <Image src={mhiLogo} alt="Milton Hosiery Industries" height={64} />
            </span>
            <p className="footer-name">Milton Hosiery Industries</p>
            <p className="footer-blurb">{dict.footer.tagline}</p>
          </div>

          <div>
            <h4 className="footer-head">{dict.footer.brands}</h4>
            <ul className="footer-list">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/${locale}/products/${b.slug}`}>{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-head">{dict.footer.company}</h4>
            <ul className="footer-list">
              <li>
                <Link href={`/${locale}`}>{dict.nav.home}</Link>
              </li>
              <li>
                <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`}>{dict.nav.contactUs}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-head">{dict.footer.contact}</h4>
            <ul className="footer-list footer-contact">
              <li>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <a href={waLink(dict.whatsapp.greeting)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              {SITE.email && (
                <li>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
              )}
              <li className="footer-address">{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>{copyright}</span>
          <span className="footer-chip">{dict.footer.wholesaleOnly}</span>
        </div>
      </div>
    </footer>
  );
}
