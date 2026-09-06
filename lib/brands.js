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
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: "Vests",
        description: "Everyday innerwear staple, sold across general trade.",
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: "Everyday socks",
        description: "Value-tier hosiery for daily wear.",
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
        name: "Performance briefs",
        description: "Everyday performance fit for active wear.",
        swatchA: "#dbe6f7",
        swatchB: "#9fb9e0",
      },
      {
        name: "Sports vests",
        description: "Breathable fabric for daily training and gym use.",
        swatchA: "#dbe6f7",
        swatchB: "#9fb9e0",
      },
      {
        name: "Ankle socks",
        description: "Cushioned sports socks sold in multi-packs.",
        swatchA: "#dbe6f7",
        swatchB: "#9fb9e0",
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
      {
        name: "Ladies' innerwear",
        description: "Everyday comfort fit across standard sizing.",
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: "Girls' vests",
        description: "Soft-touch fabric for younger age groups.",
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: "Everyday hosiery",
        description: "Socks and hosiery essentials for daily wear.",
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
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
