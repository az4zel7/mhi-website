"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { waLink } from "@/lib/site";
import { EnquiryBar, EnquiryDrawer } from "./EnquiryUI";

// The enquiry list: designs a buyer collects while browsing, sent to you as ONE
// WhatsApp message (or pre-filled into the contact form). It lives in the
// visitor's own browser (localStorage) — nothing is stored on a server.

const KEY = "mhi-enquiry-v1";
const Ctx = createContext(null);

export function useEnquiry() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

export default function EnquiryProvider({ catalogue, children }) {
  const { dict } = useLocale();
  const [items, setItems] = useState([]); // [{ id: "nicy/v-crush-plazo", qty: "300" }]
  const [ready, setReady] = useState(false); // true once localStorage has been read
  const [open, setOpen] = useState(false);

  // Load once. Ignore anything that is no longer in the catalogue.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (Array.isArray(saved)) {
          setItems(
            saved
              .filter((it) => it && typeof it.id === "string" && catalogue[it.id])
              .map((it) => ({ id: it.id, qty: String(it.qty || "").replace(/\D/g, "").slice(0, 6) }))
          );
        }
      }
    } catch {
      /* storage unavailable (private mode etc.) — the list still works for this visit */
    }
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, ready]);

  const has = useCallback((id) => items.some((it) => it.id === id), [items]);
  const add = useCallback(
    (id) => setItems((cur) => (cur.some((it) => it.id === id) || !catalogue[id] ? cur : [...cur, { id, qty: "" }])),
    [catalogue]
  );
  const remove = useCallback((id) => setItems((cur) => cur.filter((it) => it.id !== id)), []);
  const toggle = useCallback(
    (id) => (has(id) ? remove(id) : add(id)),
    [has, add, remove]
  );
  const setQty = useCallback(
    (id, qty) =>
      setItems((cur) =>
        cur.map((it) => (it.id === id ? { ...it, qty: String(qty).replace(/\D/g, "").slice(0, 6) } : it))
      ),
    []
  );
  const clear = useCallback(() => setItems([]), []);

  // The message you receive. Item names are English (what you recognise);
  // the intro/outro follow the visitor's language. `withLinks` adds a link to
  // each design page so you can see the photo.
  const buildText = useCallback(
    ({ withLinks = false } = {}) => {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const lines = items
        .map((it, i) => {
          const c = catalogue[it.id];
          if (!c) return null;
          const qty = it.qty ? ` — ${it.qty} ${dict.enquiry.pcs}` : "";
          const link = withLinks ? `\n   ${origin}${c.hrefEn}` : "";
          return `${i + 1}. ${c.code} · ${c.nameEn} (${c.brand})${qty}${link}`;
        })
        .filter(Boolean)
        .join("\n");
      return `${dict.enquiry.waIntro}\n\n${lines}\n\n${dict.enquiry.waOutro}`;
    },
    [items, catalogue, dict]
  );

  const whatsappHref = useCallback(() => waLink(buildText({ withLinks: true })), [buildText]);

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      ready,
      catalogue,
      has,
      add,
      remove,
      toggle,
      setQty,
      clear,
      buildText,
      whatsappHref,
      open,
      openList: () => setOpen(true),
      closeList: () => setOpen(false),
    }),
    [items, ready, catalogue, has, add, remove, toggle, setQty, clear, buildText, whatsappHref, open]
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      <EnquiryBar />
      <EnquiryDrawer />
    </Ctx.Provider>
  );
}
