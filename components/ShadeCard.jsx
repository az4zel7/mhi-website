// A textile-style shade card: every colour a design comes in, numbered and named.
export default function ShadeCard({ colors, dict }) {
  if (!colors || colors.length === 0) return null;
  return (
    <figure className="shade-card">
      <figcaption className="shade-card-head">
        <span>{dict.products.shadeCard}</span>
        <span>
          {colors.length} {dict.products.colours}
        </span>
      </figcaption>
      <ul className="shade-card-grid">
        {colors.map((c, i) => (
          <li key={i}>
            <span className="shade-swatch" style={{ background: c.hex }} />
            <span className="shade-no code">{String(i + 1).padStart(2, "0")}</span>
            <span className="shade-name">{c.name}</span>
          </li>
        ))}
      </ul>
      <p className="shade-card-note">{dict.products.shadeCardNote}</p>
    </figure>
  );
}
