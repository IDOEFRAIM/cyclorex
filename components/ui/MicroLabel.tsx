import { ReactNode } from "react";

export function MicroLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}
