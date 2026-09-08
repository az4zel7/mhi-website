// Single source of truth for brand info used across Home and Products pages.
// Update descriptions, status, product lists, and accent colors here.

export const BRANDS = [
  {
    slug: "milton",
    name: "Milton",
    logo: null, // no logo file supplied yet — falls back to text wordmark
    accent: "#003B89",
    segment: "Everyday essentials",
    status: "Established",
    statusDetail: "Established 1973",
    homeBlurb: "Everyday essentials — the line we started with in 1973.",
    description:
      "Our original line, and still the foundation of the business — everyday hosiery and innerwear essentials, built for reliability over trend cycles.",
    products: [
      {
        name: "Nylon trunks",
        description: "The product Milton started with. Classic fit, everyday wear.",
        details:
          "Placeholder detail copy — replace with real specs. Typically covers fabric composition, available sizes, fit notes, colourways, and minimum order quantity for wholesale buyers.",
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: "Vests",
        description: "Everyday innerwear staple, sold across general trade.",
        details:
          "Placeholder detail copy — replace with real specs. Typically covers fabric composition, available sizes, fit notes, colourways, and minimum order quantity for wholesale buyers.",
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: "Everyday socks",
        description: "Value-tier hosiery for daily wear.",
        details:
          "Placeholder detail copy — replace with real specs. Typically covers fabric composition, available sizes, pack sizes, colourways, and minimum order quantity for wholesale buyers.",
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
    ],
  },
  {
    slug: "anicy",
    name: "ANICY",
    logo: "/logos/anicy.png",
    accent: "#0C2C55",
    segment: "Men's performance wear",
    status: "Active",
    statusDetail: "Leading brand",
    homeBlurb: "Men's performance wear. Our leading brand today.",
    description:
      "Our leading and most established growth brand — performance-oriented menswear designed for daily activity, sold through general and modern trade.",
    products: [
      {
        name: "4-Way Track Pant",
        description: "A versatile full-length track pant with a clean athletic silhouette, elasticated drawstring waist and practical side pockets.",
        details: "A versatile full-length track pant with a clean athletic silhouette, elasticated drawstring waist and practical side pockets. Designed with a streamlined fit that works equally well for workouts, running and everyday activewear.",
        images: ["/products/anicy/1/2.jpg", "/products/anicy/1/1.jpg", "/products/anicy/1/3.jpg", "/products/anicy/1/4.jpg", "/products/anicy/1/5.jpg", "/products/anicy/1/6.jpg"],
      },
      {
        name: "4-Way Bermuda",
        description: "A clean athletic bermuda with a relaxed knee-length profile, elastic drawstring waistband and secure zippered side pocket.",
        details: "A clean athletic bermuda with a relaxed knee-length profile, elastic drawstring waistband and secure zippered side pocket. Its lightweight-looking construction makes it ideal for training, sports and casual outdoor wear.",
        images: ["/products/anicy/2/1.jpg", "/products/anicy/2/2.jpg", "/products/anicy/2/3.jpg", "/products/anicy/2/4.jpg", "/products/anicy/2/5.jpg"],
      },
      {
        name: "4-Way Imported Track Pant — Belt Elastic",
        description: "A sleek tapered track pant featuring a structured elastic waistband, side pockets and a minimal athletic finish.",
        details: "A sleek tapered track pant featuring a structured elastic waistband, side pockets and a minimal athletic finish. The smooth surface and narrow-leg silhouette give it a more refined performance look.",
        images: ["/products/anicy/3/1.jpg", "/products/anicy/3/2.jpg", "/products/anicy/3/3.jpg", "/products/anicy/3/4.jpg", "/products/anicy/3/5.jpg", "/products/anicy/3/6.jpg"],
      },
      {
        name: "4-Way Imported Track Pant — Machine Elastic",
        description: "A streamlined tapered track pant with a comfortable gathered waistband, practical zippered side pockets and a clean low-profile finish.",
        details: "A streamlined tapered track pant with a comfortable gathered waistband, practical zippered side pockets and a clean low-profile finish. Built for an understated sporty look that transitions easily from training to everyday wear.",
        images: ["/products/anicy/4/1.jpg", "/products/anicy/4/2.jpg", "/products/anicy/4/3.jpg", "/products/anicy/4/4.jpg", "/products/anicy/4/5.jpg", "/products/anicy/4/6.jpg"],
      },
      {
        name: "4-Way Imported Bermuda",
        description: "A modern athletic bermuda with a relaxed fit, elastic drawstring waist and deep side pockets.",
        details: "A modern athletic bermuda with a relaxed fit, elastic drawstring waist and deep side pockets. Its clean styling and flexible silhouette make it suitable for gym sessions, outdoor activities and everyday casual wear.",
        images: ["/products/anicy/5/1.jpg", "/products/anicy/5/2.jpg", "/products/anicy/5/3.jpg", "/products/anicy/5/4.jpg", "/products/anicy/5/5.jpg"],
      },
      {
        name: "4-Way Heavy Track Pant — Belt Elastic",
        description: "A robust full-length track pant with a tapered athletic cut, drawstring waist and zipped side pockets.",
        details: "A robust full-length track pant with a tapered athletic cut, drawstring waist and zipped side pockets. The heavier construction gives the silhouette a more substantial feel while retaining the flexibility expected from activewear.",
        images: ["/products/anicy/6/1.jpg", "/products/anicy/6/2.jpg", "/products/anicy/6/3.jpg", "/products/anicy/6/4.jpg", "/products/anicy/6/5.jpg", "/products/anicy/6/6.jpg"],
      },
      {
        name: "4-Way Heavy Track Pant — Machine Elastic",
        description: "A heavier-duty track pant with a clean tapered profile and elasticated waistband.",
        details: "A heavier-duty track pant with a clean tapered profile and elasticated waistband. Finished with practical side storage and a minimalist sporty appearance, making it suited to training as well as everyday movement.",
        images: ["/products/anicy/7/1.jpg", "/products/anicy/7/2.jpg", "/products/anicy/7/3.jpg", "/products/anicy/7/4.jpg", "/products/anicy/7/5.jpg", "/products/anicy/7/6.jpg"],
      },
      {
        name: "4-Way Cargo Track Pant",
        description: "A functional cargo-inspired track pant combining a tapered athletic silhouette with multiple utility pockets.",
        details: "A functional cargo-inspired track pant combining a tapered athletic silhouette with multiple utility pockets. The side cargo compartments add practicality without losing the clean, modern activewear aesthetic.",
        images: ["/products/anicy/8/1.jpg", "/products/anicy/8/2.jpg", "/products/anicy/8/3.jpg", "/products/anicy/8/4.jpg", "/products/anicy/8/5.jpg", "/products/anicy/8/6.jpg"],
      },
    ],

  },
  {
    slug: "nicy",
    name: "NICY",
    logo: "/logos/nicy.png",
    accent: "#D8362B",
    segment: "Girls' & ladies' wear",
    status: "Active",
    statusDetail: "Fastest-growing",
    homeBlurb: "Girls' and ladies' wear — our fastest-growing brand.",
    description:
      "Our fastest-growing brand — everyday innerwear and hosiery for girls and women, built on comfort and consistent sizing across the range.",
    products: [
      { name: "Ladies' innerwear", description: "Everyday comfort fit across standard sizing.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric composition, size range, fit notes, colourways, and minimum order quantity for wholesale buyers.", swatchA: "#fbe1de", swatchB: "#f0b0a9" },
      { name: "Girls' vests", description: "Soft-touch fabric for younger age groups.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric softness, age/size range, colourways, and minimum order quantity for wholesale buyers.", swatchA: "#fce7e4", swatchB: "#f3bdb6" },
      { name: "Everyday hosiery", description: "Socks and hosiery essentials for daily wear.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, pack sizes, colourways, and minimum order quantity for wholesale buyers.", swatchA: "#f8d9d5", swatchB: "#eba49b" },
      { name: "Camisoles", description: "Layering camisole in everyday fabric blend.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, colourways, and minimum order quantity.", swatchA: "#fbe1de", swatchB: "#f0b0a9" },
      { name: "Girls' leggings", description: "Stretch leggings for everyday and school wear.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric stretch, age/size range, colourways, and minimum order quantity.", swatchA: "#fce7e4", swatchB: "#f3bdb6" },
      { name: "Ladies' briefs — pack of 3", description: "Value multi-pack in everyday comfort fit.", details: "Placeholder detail copy — replace with real specs. Typically covers pack composition, fabric blend, sizes, and minimum order quantity.", swatchA: "#f8d9d5", swatchB: "#eba49b" },
      { name: "Ankle socks — girls'", description: "Soft ankle socks for daily school and play wear.", details: "Placeholder detail copy — replace with real specs. Typically covers cushioning, pack sizes, colourways, and minimum order quantity.", swatchA: "#fbe1de", swatchB: "#f0b0a9" },
      { name: "Thermal innerwear", description: "Cold-weather base layer for everyday warmth.", details: "Placeholder detail copy — replace with real specs. Typically covers insulation type, fabric blend, sizes, and minimum order quantity.", swatchA: "#fce7e4", swatchB: "#f3bdb6" },
      { name: "Ladies' slip", description: "Everyday full slip in breathable fabric.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, colourways, and minimum order quantity.", swatchA: "#f8d9d5", swatchB: "#eba49b" },
      { name: "Girls' bloomers", description: "Everyday comfort bloomers for younger age groups.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric softness, age/size range, and minimum order quantity.", swatchA: "#fbe1de", swatchB: "#f0b0a9" },
      { name: "Knee-high socks", description: "Extra coverage hosiery for daily wear.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, colourways, and minimum order quantity.", swatchA: "#fce7e4", swatchB: "#f3bdb6" },
      { name: "Ladies' tank top", description: "Everyday layering tank in soft-touch fabric.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, colourways, and minimum order quantity.", swatchA: "#f8d9d5", swatchB: "#eba49b" },
    ],
  },
  {
    slug: "avron",
    name: "Avron",
    logo: "/logos/avron.png",
    accent: "#5b6470",
    segment: "Premium men's performance wear",
    status: "Launching soon",
    statusDetail: "In development",
    homeBlurb: "Premium men's performance wear.",
    description: null,
    comingSoon: {
      tag: "Launching soon",
      heading: "Our newest brand — a premium step up in men's performance wear.",
      copy: "Avron is currently in development, with packaging and launch details being finalised. Full product listings will go live closer to launch — check back soon, or ask us directly for early details.",
    },
    products: [],
  },
];

export const getBrand = (slug) => BRANDS.find((b) => b.slug === slug);
