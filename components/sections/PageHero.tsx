import { Container } from "@/components/ui/Container";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #f7f1e1 0px, #f7f1e1 2px, transparent 2px, transparent 14px)",
        }}
      />
      <Container className="relative">
        <MicroLabel className="animate-fade-in-up text-clay">{eyebrow}</MicroLabel>
        <span aria-hidden className="mb-5 mt-4 block h-px w-14 animate-fade-in-up bg-gold" />
        <h1 className="max-w-3xl animate-fade-in-up-delay-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl animate-fade-in-up-delay-2 text-lg leading-relaxed text-cream/80">
            {subtitle}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
