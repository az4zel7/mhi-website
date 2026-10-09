"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { useEnquiry } from "./EnquiryProvider";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  brand: "",
  message: "",
  website: "", // honeypot — must stay empty; see app/api/contact/route.js
};

export default function ContactForm() {
  const { dict } = useLocale();
  const brandOptions = dict.form.brandOptions;
  const [form, setForm] = useState({ ...initialState, brand: brandOptions[0] });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const enquiry = useEnquiry();
  const [fromList, setFromList] = useState(false);
  const filled = useRef(false);

  // If the visitor collected designs in their enquiry list, start the message with them.
  useEffect(() => {
    if (filled.current || !enquiry.ready || enquiry.count === 0) return;
    filled.current = true;
    setFromList(true);
    setForm((f) => (f.message ? f : { ...f, message: enquiry.buildText() }));
  }, [enquiry.ready, enquiry.count, enquiry]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Pre-filled WhatsApp message built from whatever the visitor has typed so far.
  const whatsappHref = () => {
    const lines = [
      form.name && `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.brand && `Brand: ${form.brand}`,
      form.message && `\n${form.message}`,
    ].filter(Boolean);
    return waLink(lines.length ? `Wholesale enquiry\n${lines.join("\n")}` : dict.whatsapp.greeting);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ ...initialState, brand: brandOptions[0] });
      if (fromList) enquiry.clear(); // the list has been sent
      setFromList(false);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">{dict.form.fullName}</label>
          <input
            id="f-name"
            type="text"
            required
            placeholder={dict.form.fullNamePlaceholder}
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="field">
          <label htmlFor="f-company">{dict.form.companyName}</label>
          <input
            id="f-company"
            type="text"
            required
            placeholder={dict.form.companyNamePlaceholder}
            value={form.company}
            onChange={update("company")}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-email">{dict.form.email}</label>
          <input
            id="f-email"
            type="email"
            required
            placeholder={dict.form.emailPlaceholder}
            value={form.email}
            onChange={update("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="f-phone">{dict.form.phone}</label>
          <input
            id="f-phone"
            type="tel"
            required
            placeholder={dict.form.phonePlaceholder}
            value={form.phone}
            onChange={update("phone")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-brand">{dict.form.brandInterest}</label>
        <select id="f-brand" value={form.brand} onChange={update("brand")}>
          {brandOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-message">{dict.form.message}</label>
        <textarea
          id="f-message"
          rows={fromList ? 9 : 3}
          required
          placeholder={dict.form.messagePlaceholder}
          value={form.message}
          onChange={update("message")}
        />
        {fromList && <p className="form-note">{dict.enquiry.formNote}</p>}
      </div>

      {/* Honeypot: hidden from people and screen readers, bots tend to fill it. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input
          id="f-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update("website")}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? dict.form.sending : dict.form.send}
        </button>
        <a
          className="btn btn-whatsapp-outline"
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {dict.form.sendViaWhatsApp}
        </a>
      </div>

      {status === "success" && (
        <p className="form-status success" role="status">
          {dict.form.success}
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          {dict.form.error}
        </p>
      )}
    </form>
  );
}
