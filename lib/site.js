// Single place for contact details used across the site.
// Edit here — Header, Footer, Contact page, WhatsApp button and the enquiry
// form all read from this file.

export const SITE = {
  name: "Milton Hosiery Industries",

  // Shown on the page and used for tel: links.
  phoneDisplay: "+91 70452 08003",
  phoneTel: "+917045208003",

  // WhatsApp number in international format, digits only (no +, spaces, dashes).
  // TODO: confirm this is the number you want customers to WhatsApp. It is
  // currently the same as the phone number above.
  whatsapp: "917045208003",

  // Public email address. Leave as "" to hide the email row on the Contact page
  // (nothing is shown until you add a real address).
  email: "",

  address:
    "Shroff Mansion, 3rd Bhoiwada Ln, Marine Lines East, Panjarpole, Bhuleshwar, Mumbai, Maharashtra 400002",
};

// Build a wa.me link with a pre-filled message.
export function waLink(message = "") {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${SITE.whatsapp}${text}`;
}
