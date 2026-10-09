import { Archivo, Khand, Hind, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryProvider from "@/components/EnquiryProvider";
import { getCatalogueIndex } from "@/lib/brands";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { locales } from "@/lib/i18n/config";

// Type system (see globals.css for how each is used):
//  - Archivo (variable, with its width axis) for headlines. Latin only.
//  - Khand sits right after it in the font stack and supplies the Devanagari
//    glyphs, so Hindi/Marathi headlines get a matching condensed face.
//  - Hind for body text; it was designed for Latin + Devanagari together.
//  - IBM Plex Mono for item codes, labels and small print.
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const khand = Khand({
  subsets: ["devanagari", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-khand",
  display: "swap",
});

const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hind",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

export const metadata = {
  title: "Milton Hosiery Industries — Wholesale Apparel Brands",
  description:
    "Milton Hosiery Industries designs and owns Milton, ANICY, NICY and Avron. Family-run since 1973 in Mumbai. Wholesale, distribution and institutional enquiries welcome.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${archivo.variable} ${khand.variable} ${hind.variable} ${plexMono.variable}`}>
      <body>
        <LocaleProvider locale={locale} dict={dict}>
          <EnquiryProvider catalogue={getCatalogueIndex(locale)}>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </EnquiryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
