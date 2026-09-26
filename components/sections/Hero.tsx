"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { Spotlight } from "@/components/ui/Spotlight";
import { Tilt } from "@/components/ui/Tilt";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { company } from "@/lib/site-config";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !coreRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(coreRef.current, {
        rotate: 20,
        scale: 0.88,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Spotlight
      className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-cream pb-10 pt-28 sm:justify-between sm:pt-32 lg:pt-36"
    >
      <section ref={sectionRef}>
        <Container size="wide">
          <div className="flex items-start justify-between animate-fade-in-up">
            <MicroLabel className="text-forest-light">
              {company.name}
            </MicroLabel>
            <MicroLabel className="text-ink/40">
              {company.cities.join(" — ")} / BF
            </MicroLabel>
          </div>

          <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-8">
            <div>
              <h1 className="font-display text-[13vw] font-semibold leading-[0.96] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[6.4vw] xl:text-8xl">
                <span className="block overflow-hidden">
                  <span className="block animate-mask-reveal">Donnons une</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block animate-mask-reveal-delay-1">seconde vie</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block animate-mask-reveal-delay-2 text-clay">
                    aux matières.
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-md animate-fade-in-up-delay-4 text-base leading-relaxed text-ink/65">
                {company.name} récupère les pneus usagés de Ouagadougou et les
                transforme en mobilier, objets et ressources durables — une
                matière première là où d&apos;autres voient un déchet.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 animate-fade-in-up-delay-4">
                <Button href="/devis">Demander un devis</Button>
                <TextLink href="/nos-produits">Découvrir nos produits</TextLink>
              </div>

              <div className="mt-10 animate-fade-in-up-delay-4">
                <TrustBadge />
              </div>
            </div>

            <div ref={coreRef} className="mx-auto w-full max-w-[280px] lg:max-w-none">
              <Tilt strength={7}>
                <HeroIllustration />
              </Tilt>
            </div>
          </div>
        </Container>
      </section>

      <Container size="wide">
        <div className="hidden animate-fade-in-up-delay-4 items-center gap-3 sm:flex">
          <span className="h-8 w-px bg-ink/25" aria-hidden />
          <MicroLabel className="text-ink/40">Défiler</MicroLabel>
        </div>
      </Container>
    </Spotlight>
  );
}
