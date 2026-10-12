import useCountUp from "../hooks/useCountUp.js";
import { stats } from "../data/site.js";

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value);
  return (
    <div className="stat" ref={ref}>
      <p className="stat-num">
        {current}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="container stats-grid">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
