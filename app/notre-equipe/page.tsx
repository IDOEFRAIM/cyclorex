import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { company, teamFunctions } from "@/lib/site-config";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Découvrez l'équipe de CYCLOREX RECYCLE, portée par son fondateur BORO Ariel Stanislas et une équipe de 6 personnes à Ouagadougou.",
};

export default function NotreEquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Une équipe jeune, portée par une vision entrepreneuriale"
        subtitle={`CYCLOREX RECYCLE est actuellement porté par une équipe de ${company.teamSize} personnes.`}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Reveal>
          <Container className="grid gap-10 rounded-3xl border border-ink/10 bg-white p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-forest/10 text-forest">
              <User className="h-14 w-14" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink">{company.founder}</h2>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay-dark">
                {company.founderRole}
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Le fondateur porte la vision stratégique de CYCLOREX RECYCLE et
                coordonne le développement de l&apos;entreprise. Son parcours
                combine entrepreneuriat, engagement environnemental, leadership
                jeunesse et innovation.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                À travers CYCLOREX, son ambition est de contribuer concrètement
                à la résolution des problèmes environnementaux tout en
                démontrant que les déchets peuvent devenir une source de valeur
                et d&apos;opportunités.
              </p>
            </div>
          </Container>
        </Reveal>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="L'équipe"
              title="Des fonctions réparties autour de six pôles"
              subtitle="Les intitulés définitifs et les noms des membres pourront être ajoutés ultérieurement."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamFunctions.map((role, index) => (
              <Reveal key={role} delay={index * 60}>
                <div className="rounded-xl border border-ink/10 bg-cream px-5 py-4 text-sm font-medium text-ink/75 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  {role}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
