import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { collectionSources, processSteps } from "@/lib/site-config";
import { Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos solutions",
  description:
    "Découvrez la chaîne de valorisation des pneus usagés de CYCLOREX RECYCLE : collecte, tri, préparation, transformation, création et valorisation.",
};

export default function NosSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos solutions"
        title="Transformer le problème en opportunité"
        subtitle="CYCLOREX RECYCLE met en place une chaîne de valorisation des pneus usagés : récupérer → trier → préparer → transformer → créer → valoriser."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="D'où viennent nos pneus"
              title="Une collecte auprès de sources variées"
              subtitle="Les pneus sont récupérés auprès de différentes sources afin d'éviter qu'ils ne soient abandonnés dans l'environnement — une pratique déjà observée dans les initiatives locales de valorisation des pneus à Ouagadougou."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collectionSources.map((source, index) => (
              <Reveal key={source} delay={index * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <Truck className="h-5 w-5 shrink-0 text-lime-dark" />
                  <span className="text-sm font-medium text-ink/80">{source}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Notre processus"
              title="Les six étapes de la valorisation"
            />
          </Reveal>
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Reveal>
          <Container
            size="wide"
            className="grid gap-10 rounded-3xl bg-forest px-8 py-14 text-cream sm:px-14 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime">
                Solutions personnalisées
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Fabrication sur commande
              </h2>
              <p className="mt-5 leading-relaxed text-cream/80">
                CYCLOREX peut développer des produits personnalisés selon les
                dimensions, les couleurs, le style, l&apos;utilisation,
                l&apos;espace disponible et les besoins du client.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button href="/devis" variant="accent">
                Demander un devis
              </Button>
            </div>
          </Container>
        </Reveal>
      </section>

    </>
  );
}
