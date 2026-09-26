import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import {
  company,
  environmentalDimensions,
  experiences,
  whyCyclorex,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L'histoire, la mission et la vision de CYCLOREX RECYCLE, startup burkinabè de valorisation des pneus usagés.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Notre histoire, notre mission, notre vision"
        subtitle="Ne plus considérer le pneu usagé uniquement comme un déchet, mais comme une matière première capable de devenir un nouveau produit."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Notre histoire" title="Pourquoi CYCLOREX RECYCLE ?" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-ink/70">
            <p className="leading-relaxed">
              Dans les rues et espaces urbains, les pneus usagés peuvent
              devenir des déchets difficiles à gérer lorsqu&apos;ils sont
              abandonnés ou brûlés. À Ouagadougou, le problème des pneus usagés
              est documenté depuis plusieurs années. Des initiatives locales
              ont déjà montré qu&apos;ils pouvaient être transformés en
              fauteuils, poubelles, pots de fleurs, tables et autres objets
              utiles.
            </p>
            <p className="leading-relaxed">
              C&apos;est dans cette réalité qu&apos;est née CYCLOREX RECYCLE.
              Nous voulons contribuer à rendre nos villes plus propres tout en
              créant une activité économique fondée sur l&apos;innovation, la
              créativité et l&apos;économie circulaire.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Le problème"
              title="Les pneus usagés, un défi environnemental et urbain"
              subtitle="Ils peuvent être abandonnés dans les rues, les espaces vacants, les dépotoirs ou autour des garages et vulcanisateurs, ou brûlés de manière anarchique — ce qui contribue à la pollution de l'environnement. CYCLOREX veut agir sur plusieurs dimensions :"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {environmentalDimensions.map((dimension, index) => (
              <Reveal key={dimension.title} delay={index * 70}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-ink/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                      index % 2 === 0 ? "bg-forest/8 text-forest" : "bg-clay/10 text-clay-dark"
                    }`}
                  >
                    <Icon name={dimension.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      {dimension.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {dimension.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest py-14 text-cream sm:py-20 lg:py-28">
        <Container className="relative max-w-3xl">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Notre vision
            </span>
            <span aria-hidden className="block font-display text-6xl leading-none text-gold/50">
              &ldquo;
            </span>
            <p className="-mt-4 font-display text-2xl italic leading-snug sm:text-3xl">
              Faire de CYCLOREX RECYCLE une entreprise africaine de référence
              dans la valorisation des déchets et l&apos;économie circulaire,
              capable de transformer des matières considérées comme inutiles en
              produits à forte valeur économique, sociale et environnementale.
            </p>
            <p className="mt-6 leading-relaxed text-cream/80">
              À long terme, CYCLOREX souhaite développer ses capacités de
              collecte et de transformation, créer davantage d&apos;emplois
              verts, développer de nouveaux produits et étendre progressivement
              ses activités à d&apos;autres villes et marchés africains.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pourquoi CYCLOREX"
              title="Ce qui nous distingue"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whyCyclorex.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Nos premières expériences"
              title="Un parcours entrepreneurial qui commence"
              align="center"
            />
          </Reveal>
          <div className="mt-10 space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="rounded-2xl border border-ink/10 p-6 text-left"
              >
                <h3 className="text-base font-bold text-forest">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/50">
            D&apos;autres formations, sélections, concours et programmes
            rejoindront progressivement le parcours de {company.name}.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/notre-equipe" variant="outline">
              Rencontrer notre équipe
            </Button>
          </div>
        </Container>
      </section>

    </>
  );
}
