export default function Section({ id, eyebrow, title, children, className = "", variant = "default" }) {
  const classes = ["section", variant === "hero" ? "hero-section" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}