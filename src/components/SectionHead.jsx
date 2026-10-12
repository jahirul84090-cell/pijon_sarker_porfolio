import { Stagger, StaggerItem } from "./Motion.jsx";

export default function SectionHead({ kicker, title, sub, align = "center" }) {
  return (
    <Stagger as="header" className={`section-head ${align === "left" ? "is-left" : ""}`} gap={0.1}>
      <StaggerItem as="p" className="kicker">
        {kicker}
      </StaggerItem>
      <StaggerItem as="h2">{title}</StaggerItem>
      {sub && (
        <StaggerItem as="p" className="section-sub">
          {sub}
        </StaggerItem>
      )}
    </Stagger>
  );
}
