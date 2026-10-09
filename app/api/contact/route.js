import { NextResponse } from "next/server";

// Delivers wholesale enquiries to the team by email using Resend
// (https://resend.com). No extra package needed — it's a single HTTPS call.
//
// Required environment variables (set in .env.local locally and in your
// hosting dashboard in production — never commit them):
//   RESEND_API_KEY      your Resend API key
//   CONTACT_TO_EMAIL    where enquiries go; comma-separate for several people
// Optional:
//   CONTACT_FROM_EMAIL  e.g. "MHI Website <enquiries@yourdomain.com>".
//                       Must be on a domain you've verified in Resend. Until you
//                       verify one, Resend's test sender below only delivers to
//                       the email you signed up to Resend with.
//
// If these aren't set the route returns 503 — it never pretends an enquiry
// was received when it wasn't. The form then offers WhatsApp as a fallback.

const RESEND_URL = process.env.RESEND_API_URL || "https://api.resend.com/emails";
const DEFAULT_FROM = "MHI Website <onboarding@resend.dev>";

const LIMITS = { name: 120, company: 160, email: 200, phone: 40, brand: 120, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field; bots often do.
  // Pretend success so the bot moves on, but send nothing.
  if (typeof data?.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data?.name, LIMITS.name);
  const company = clean(data?.company, LIMITS.company);
  const email = clean(data?.email, LIMITS.email);
  const phone = clean(data?.phone, LIMITS.phone);
  const brand = clean(data?.brand, LIMITS.brand);
  const message = clean(data?.message, LIMITS.message);

  if (!name || !company || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || to.length === 0) {
    console.error(
      "[contact] Enquiry NOT delivered: RESEND_API_KEY / CONTACT_TO_EMAIL are not set.",
      { name, company, email, phone, brand }
    );
    return NextResponse.json({ error: "Email delivery is not configured" }, { status: 503 });
  }

  const rows = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone],
    ["Brand", brand || "—"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}\n`;
  const html =
    `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">` +
    rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap"><b>Message</b><br>${escapeHtml(
      message
    )}</p>`;

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
        to,
        reply_to: email,
        subject: `Wholesale enquiry — ${brand || "General"} — ${company}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend rejected the enquiry:", res.status, detail);
      return NextResponse.json({ error: "Could not deliver enquiry" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Could not reach Resend:", err);
    return NextResponse.json({ error: "Could not deliver enquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
