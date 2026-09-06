export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="name">Milton Hosiery Industries</div>
        <div className="muted">Est. 1973, Mumbai — Milton · ANICY · NICY · Avron</div>
        <div className="muted">
          &copy; {new Date().getFullYear()} Milton Hosiery Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
