export default function SectionHead({ kicker, title, sub, align = "center" }) {
  return (
    <header className={`section-head reveal ${align === "left" ? "is-left" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </header>
  );
}
