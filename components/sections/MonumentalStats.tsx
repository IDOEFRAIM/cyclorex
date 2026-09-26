"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { CountUp } from "@/components/ui/CountUp";
import { company } from "@/lib/site-config";
import { gsap } from "@/lib/gsap";

const stats = [
  { index: "01", value: <>{company.founded}</>, label: "Fondation" },
  { index: "02", value: <CountUp value={company.teamSize} />, label: "Équipe" },
  { index: "03", value: <CountUp value={company.cities.length} />, label: "Flux de matière · villes" },
];

export function MonumentalStats() {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const els = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      els.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="border-y border-ink/10 bg-cream py-16 sm:py-24">
      <Container size="wide">
        <MicroLabel className="text-ink/40">Ouagadougou, Burkina Faso — 2026</MicroLabel>
        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {stats.map((stat, i) => (
            <div
              key={stat.index}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className="flex flex-col gap-2 py-7 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:py-9"
            >
              <span className="font-mono text-xs text-ink/35">{stat.index}</span>
              <span className="font-display text-[18vw] font-semibold leading-none tracking-tight text-ink sm:text-8xl lg:text-9xl">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 sm:text-right">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
