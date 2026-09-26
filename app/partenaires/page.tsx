import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { financingNeeds, partnershipTypes } from "@/lib/site-config";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Devenir partenaire",
  description:
    "CYCLOREX RECYCLE est ouvert à de nouvelles collaborations : collecte, technique, financement, commercial et institutionnel.",
};

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Construisons ensemble une économie plus circulaire"
        subtitle="Vous souhaitez contribuer à donner une seconde vie aux déchets ? CYCLOREX RECYCLE est actuellement ouvert à de nouvelles collaborations."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Types de partenariats"
              title="Des collaborations à toutes les échelles"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((type, index) => (
              <Reveal key={type.title} delay={index * 70}>
                <div
                  className={`h-full rounded-2xl border-t-4 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5 ${
                    index % 2 === 0 ? "border-forest" : "border-clay"
                  }`}
                >
                  <h3 className="text-base font-bold text-ink">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {type.description}
                  </p>
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
              eyebrow="Pourquoi nous accompagner"
              title="Ce dont nous avons besoin pour grandir"
              subtitle="CYCLOREX RECYCLE est une startup en phase de développement. Notre objectif est de passer progressivement d'une production encore limitée à une capacité de transformation plus importante."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {financingNeeds.map((need, index) => (
              <span
                key={need}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${
                  index % 2 === 0
                    ? "bg-forest/8 text-forest"
                    : "bg-clay/10 text-clay-dark"
                }`}
              >
                <Check className="h-4 w-4" />
                {need}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="max-w-2xl">
          <Reveal>
            <SectionHeading
              eyebrow="Formulaire"
              title="Proposer un partenariat"
              align="center"
            />
            <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
              <PartnerForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
