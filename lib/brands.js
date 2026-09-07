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
      { name: "Performance briefs", description: "Everyday performance fit for active wear.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric technology (moisture-wicking, stretch), available sizes, fit, colourways, and minimum order quantity.", swatchA: "#dbe6f7", swatchB: "#9fb9e0" },
      { name: "Sports vests", description: "Breathable fabric for daily training and gym use.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric technology, breathability rating, available sizes, colourways, and minimum order quantity.", swatchA: "#e4edfb", swatchB: "#aec4e8" },
      { name: "Ankle socks", description: "Cushioned sports socks sold in multi-packs.", details: "Placeholder detail copy — replace with real specs. Typically covers cushioning, arch support, pack sizes, colourways, and minimum order quantity.", swatchA: "#d3e0f3", swatchB: "#93aed9" },
      { name: "Trunks — everyday fit", description: "All-day comfort trunk in a relaxed everyday fit.", details: "Placeholder detail copy — replace with real specs. Typically covers waistband type, fabric blend, sizes, colourways, and minimum order quantity.", swatchA: "#dbe6f7", swatchB: "#9fb9e0" },
      { name: "Compression tee", description: "Base-layer tee for training and daily wear.", details: "Placeholder detail copy — replace with real specs. Typically covers compression level, fabric technology, sizes, and minimum order quantity.", swatchA: "#e4edfb", swatchB: "#aec4e8" },
      { name: "Boxer briefs", description: "Everyday boxer brief with a tailored fit.", details: "Placeholder detail copy — replace with real specs. Typically covers waistband, fabric blend, sizes, colourways, and minimum order quantity.", swatchA: "#d3e0f3", swatchB: "#93aed9" },
      { name: "Crew socks", description: "Mid-calf socks for daily and sport use.", details: "Placeholder detail copy — replace with real specs. Typically covers cushioning, pack sizes, colourways, and minimum order quantity.", swatchA: "#dbe6f7", swatchB: "#9fb9e0" },
      { name: "Training shorts", description: "Lightweight shorts built for movement.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric weight, inseam length, sizes, and minimum order quantity.", swatchA: "#e4edfb", swatchB: "#aec4e8" },
      { name: "Thermal vest", description: "Cold-weather base layer vest.", details: "Placeholder detail copy — replace with real specs. Typically covers insulation type, fabric blend, sizes, and minimum order quantity.", swatchA: "#d3e0f3", swatchB: "#93aed9" },
      { name: "Sports briefs — pack of 3", description: "Value multi-pack for everyday training.", details: "Placeholder detail copy — replace with real specs. Typically covers pack composition, fabric blend, sizes, and minimum order quantity.", swatchA: "#dbe6f7", swatchB: "#9fb9e0" },
      { name: "No-show socks", description: "Low-cut socks for sneakers and trainers.", details: "Placeholder detail copy — replace with real specs. Typically covers heel-grip design, pack sizes, colourways, and minimum order quantity.", swatchA: "#e4edfb", swatchB: "#aec4e8" },
      { name: "Sleeveless training tee", description: "Breathable cut for high-intensity workouts.", details: "Placeholder detail copy — replace with real specs. Typically covers fabric technology, sizes, colourways, and minimum order quantity.", swatchA: "#d3e0f3", swatchB: "#93aed9" },
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
