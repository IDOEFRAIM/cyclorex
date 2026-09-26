"use client";

import { ReactNode, useRef } from "react";

export function Tilt({
  children,
  className = "",
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(800px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
