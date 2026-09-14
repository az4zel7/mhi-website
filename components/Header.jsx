"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import mhiLogo from "@/public/logos/mhi.png";
import { useLocale } from "@/lib/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BrandsMenu from "@/components/BrandsMenu";

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

export default function Header() {
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  const [open, setOpen] = useState(false);

  const withLocale = (path) => `/${locale}${path}`;

  const NAV_ITEMS = [
    { href: withLocale(""), label: dict.nav.home },
    { href: withLocale("/about"), label: dict.nav.about },
  ];
  const contactHref = withLocale("/contact");
  const homeHref = withLocale("");
  const productsHref = withLocale("/products");
  const isProductsActive = pathname === productsHref;

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-note">{dict.footer.tagline}</span>
          <a href="tel:+917045208003" className="topbar-call">
            <PhoneIcon />
            +91 70452 08003
          </a>
        </div>
      </div>
      <header className="site-nav">
        <div className="wrap nav-inner">
          <Link href={homeHref} className="brand-mark" onClick={() => setOpen(false)}>
            <Image src={mhiLogo} alt="Milton Hosiery Industries" height={72} priority />
            <span className="name">
              Milton Hosiery Industries
              <span>{dict.nav.tagline}</span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            &#9776;
          </button>

          <nav className={`links${open ? " open" : ""}`}>
            <Link
              href={NAV_ITEMS[0].href}
              className={pathname === NAV_ITEMS[0].href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {NAV_ITEMS[0].label}
            </Link>
            <Link
              href={NAV_ITEMS[1].href}
              className={pathname === NAV_ITEMS[1].href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {NAV_ITEMS[1].label}
            </Link>

            <span className="brands-menu-desktop">
              <BrandsMenu active={isProductsActive} />
            </span>
            <BrandsMenu mobile onNavigate={() => setOpen(false)} />

            <LanguageSwitcher onNavigate={() => setOpen(false)} />
            <Link
              href={contactHref}
              className={`nav-cta${pathname === contactHref ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {dict.nav.contactUs}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
