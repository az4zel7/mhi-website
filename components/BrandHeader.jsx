import Image from "next/image";

// The top of a brand's catalogue page. Each brand gets its own "room":
//   ANICY  navy, with the sharp wedge from its logo as a cut-away bottom edge
//   NICY   white, with the red swoosh from its logo along the bottom
//   Avron  dark graphite, with chrome for its silver mark
export default function BrandHeader({ brand, count, dict }) {
  const showCount = count > 0;
  return (
    <header className={`room room-${brand.slug}`} style={{ "--brand-accent": brand.accent }}>
      <div className="wrap room-inner">
        <div className="room-main">
          <h1 className="room-logo">
            {brand.logo ? (
              <Image src={brand.logo} alt={brand.name} width={260} height={130} priority style={{ height: "auto", maxHeight: "104px", width: "auto", maxWidth: "260px" }} />
            ) : (
              brand.name
            )}
          </h1>
          <span className="seg-tag">
            {brand.segment} · {brand.statusDetail}
          </span>
          {brand.description && <p className="room-desc">{brand.description}</p>}
        </div>
        {showCount && (
          <div className="room-count" aria-label={`${count} ${dict.products.designs}`}>
            <span className="room-count-fig">{String(count).padStart(2, "0")}</span>
            <span className="room-count-label">{dict.products.designs}</span>
          </div>
        )}
      </div>
      {brand.slug === "nicy" && (
        <svg className="room-swoosh" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 78 C 380 8, 1060 8, 1440 70 C 1060 34, 380 34, 0 78 Z" />
        </svg>
      )}
    </header>
  );
}
