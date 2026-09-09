"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import mhiLogo from "@/public/logos/mhi.png";
import { useLocale } from "@/lib/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  const [open, setOpen] = useState(false);

  const withLocale = (path) => `/${locale}${path}`;

  const NAV_ITEMS = [
    { href: withLocale(""), label: dict.nav.home },
    { href: withLocale("/about"), label: dict.nav.about },
    { href: withLocale("/products"), label: dict.nav.products },
  ];
  const contactHref = withLocale("/contact");
  const homeHref = withLocale("");

  return (
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
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
  );
}
