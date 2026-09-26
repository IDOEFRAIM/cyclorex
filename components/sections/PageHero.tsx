import { Container } from "@/components/ui/Container";
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
    <section className="relative overflow-hidden bg-forest py-14 text-cream sm:py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #f7f1e1 0px, #f7f1e1 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-clay/15 blur-3xl"
      />
      <Container className="relative">
        <span className="mb-4 inline-block animate-fade-in-up text-xs font-bold uppercase tracking-[0.2em] text-lime">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl animate-fade-in-up-delay-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
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
