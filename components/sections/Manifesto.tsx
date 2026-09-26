"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Manifesto() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = wordRef.current;
    if (!node || prefersReducedMotion()) return;

    // Tease the provocation ("une fin.") before the reveal flips it to the real word.
    node.textContent = "une fin.";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap
          .timeline({ delay: 0.3 })
          .to(node, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" })
          .call(() => {
            node.textContent = "un commencement.";
          })
          .to(node, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-24 text-cream sm:py-32">
      <Container className="max-w-4xl">
        <MicroLabel className="text-clay">Manifeste</MicroLabel>
        <p className="mt-8 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Le déchet n&apos;est pas une fin.
          <br />
          Il est{" "}
          <span ref={wordRef} className="inline-block italic text-lime">
            un commencement.
          </span>
        </p>
        <p className="mt-10 max-w-xl text-cream/60">
          Chaque objet que nous façonnons commence par ce renversement de
          regard : ce qui semblait terminé n&apos;était qu&apos;en attente
          d&apos;une nouvelle forme.
        </p>
      </Container>
    </section>
  );
}
