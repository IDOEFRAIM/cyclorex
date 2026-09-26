"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const readyRef = useRef(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const canHover =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover) return;

    document.documentElement.classList.add("custom-cursor-active");

    const move = (event: PointerEvent) => {
      if (!readyRef.current) {
        readyRef.current = true;
        setReady(true);
      }
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!ready) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: label ? 72 : 10,
        height: label ? 72 : 10,
        backgroundColor: "#f7f1e1",
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {label ? (
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
          {label}
        </span>
      ) : null}
    </motion.div>
  );
}
