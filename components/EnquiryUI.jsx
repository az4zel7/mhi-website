"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useEnquiry } from "./EnquiryProvider";
import WhatsAppIcon from "./WhatsAppIcon";

// Floating bar that appears once the visitor has added a design.
export function EnquiryBar() {
  const { dict } = useLocale();
  const { count, ready, open, openList } = useEnquiry();
  if (!ready || count === 0 || open) return null;
  return (
    <button type="button" className="enq-bar" onClick={openList}>
      <span className="enq-bar-count">{count}</span>
      <span className="enq-bar-label">{dict.enquiry.barLabel}</span>
      <span className="enq-bar-cta">{dict.enquiry.barCta} →</span>
    </button>
  );
}

// Slide-in panel: review the list, set quantities, send.
export function EnquiryDrawer() {
  const { locale, dict } = useLocale();
  const { open, items, catalogue, remove, setQty, clear, closeList, whatsappHref } = useEnquiry();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeList();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeList]);

  if (!open) return null;
  const t = dict.enquiry;

  return (
    <div className="enq-overlay" onClick={closeList}>
      <aside
        className="enq-panel"
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="enq-head">
          <h2>{t.title}</h2>
          <button ref={closeRef} type="button" className="enq-close" onClick={closeList} aria-label={t.close}>
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className="enq-empty">{t.empty}</p>
        ) : (
          <ul className="enq-list">
            {items.map((it) => {
              const c = catalogue[it.id];
              if (!c) return null;
              return (
                <li className="enq-item" key={it.id}>
                  <Link href={c.href} className="enq-thumb" onClick={closeList} tabIndex={-1} aria-hidden="true">
                    {c.image && <Image src={c.image} alt="" fill sizes="64px" style={{ objectFit: "cover" }} />}
                  </Link>
                  <div className="enq-info">
                    <span className="code">
                      {c.code} · {c.brand}
                    </span>
                    <Link href={c.href} className="enq-name" onClick={closeList}>
                      {c.name}
                    </Link>
                    <label className="enq-qty">
                      <span>
                        {t.qty} <em>{t.qtyHint}</em>
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        value={it.qty}
                        onChange={(e) => setQty(it.id, e.target.value)}
                        placeholder="—"
                      />
                    </label>
                  </div>
                  <button type="button" className="enq-remove" onClick={() => remove(it.id)} aria-label={`${t.remove}: ${c.name}`}>
                    ×
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="enq-foot">
            <p className="enq-hint">{t.hint}</p>
            <a className="btn-whatsapp" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {t.sendWhatsApp}
            </a>
            <Link href={`/${locale}/contact`} className="btn btn-outline" onClick={closeList}>
              {t.sendForm}
            </Link>
            <button type="button" className="enq-clear" onClick={clear}>
              {t.clear}
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
