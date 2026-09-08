import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = { variable: "" };
const inter = { variable: "" };

export const metadata = {
  title: "Milton Hosiery Industries — Wholesale Apparel Brands",
  description:
    "Milton Hosiery Industries designs and owns Milton, ANICY, NICY and Avron. Family-run since 1973 in Mumbai. Wholesale, distribution and institutional enquiries welcome.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
