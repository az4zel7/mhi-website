"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import mhiLogo from "@/public/logos/mhi.png";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <Image src={mhiLogo} alt="Milton Hosiery Industries" height={72} priority />
          <span className="name">
            Milton Hosiery Industries
            <span>Since 1973 &middot; Mumbai</span>
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
          <Link
            href="/contact"
            className={`nav-cta${pathname === "/contact" ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
