import useCountUp from "../hooks/useCountUp.js";
import { Stagger, StaggerItem } from "./Motion.jsx";
import { stats } from "../data/site.js";

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value);
  return (
    <StaggerItem className="stat">
      <p className="stat-num" ref={ref}>
        {current}
        <span className="stat-suffix">{suffix}</span>
      </p>
      <p className="stat-label">{label}</p>
    </StaggerItem>
  );
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <Stagger className="container stats-grid" gap={0.1}>
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </Stagger>
    </section>
  );
}
