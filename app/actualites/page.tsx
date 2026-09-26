import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Newspaper } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Les actualités, participations et étapes du développement de CYCLOREX RECYCLE.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Le parcours de CYCLOREX RECYCLE"
        subtitle="Formations, sélections, concours et étapes clés : cette page rassemblera progressivement les actualités de CYCLOREX."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="max-w-2xl">
          <ul className="space-y-4">
            {experiences.map((experience, index) => (
              <li key={experience.title}>
                <Reveal delay={index * 80}>
                  <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                    <Newspaper className="mt-1 h-5 w-5 shrink-0 text-clay" />
                    <div>
                      <h3 className="font-bold text-ink">{experience.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-ink/50">
            Prochaines actualités bientôt disponibles.
          </p>
        </Container>
      </section>
    </>
  );
}
