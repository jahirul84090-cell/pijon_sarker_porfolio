import { m } from "motion/react";
import { ease, fadeUp, viewport } from "../lib/motion.js";

/** Fades and slides its content up the first time it scrolls into view. */
export function Reveal({ as = "div", delay = 0, y = 28, className, children, ...props }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease, delay }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Container that reveals its <StaggerItem> children one after another. */
export function Stagger({ as = "div", gap = 0.08, delay = 0, className, children, ...props }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className, children, ...props }) {
  const Tag = m[as];
  return (
    <Tag className={className} variants={fadeUp} {...props}>
      {children}
    </Tag>
  );
}
