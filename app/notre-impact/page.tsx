import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImpactCard } from "@/components/sections/ImpactCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { impactObjectives } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Notre impact",
  description:
    "L'impact environnemental, urbain, économique et social visé par CYCLOREX RECYCLE à travers la valorisation des pneus usagés.",
};

export default function NotreImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre impact"
        title="Transformer un problème environnemental en opportunité"
        subtitle="CYCLOREX poursuit sept objectifs qui guident chacune de ses actions, de la collecte des pneus jusqu'à la commercialisation des produits finis."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactObjectives.map((objective, index) => (
              <Reveal key={objective.title} delay={(index % 3) * 80}>
                <ImpactCard
                  objective={{ ...objective, title: `Objectif ${index + 1} — ${objective.title}` }}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Transparence"
              title="Des indicateurs d'impact en construction"
              subtitle="CYCLOREX RECYCLE est une startup en phase de développement. Le nombre de pneus recyclés, de clients accompagnés et de partenaires engagés sera publié ici dès que ces données seront disponibles et vérifiées — nous préférons la transparence à des chiffres approximatifs."
            />
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
