"use client";

import { useState } from "react";

const BRAND_OPTIONS = ["Milton", "ANICY", "NICY", "Avron", "Not sure yet / general enquiry"];

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  brand: BRAND_OPTIONS[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

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
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Full name</label>
          <input
            id="f-name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company name</label>
          <input
            id="f-company"
            type="text"
            required
            placeholder="Business name"
            value={form.company}
            onChange={update("company")}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input
            id="f-phone"
            type="tel"
            required
            placeholder="+91 "
            value={form.phone}
            onChange={update("phone")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-brand">Brand you&apos;re interested in</label>
        <select id="f-brand" value={form.brand} onChange={update("brand")}>
          {BRAND_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-message">Message</label>
        <textarea
          id="f-message"
          rows={5}
          required
          placeholder="Tell us about your business and what you're looking for"
          value={form.message}
          onChange={update("message")}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "success" && (
        <p className="form-status success">
          Thanks — your enquiry has been received. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error">
          Something went wrong sending that. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
