import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProductCard } from "@/components/sections/ProductCard";
import { ImpactCard } from "@/components/sections/ImpactCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import {
  company,
  impactObjectives,
  processSteps,
  productCategories,
  targetClients,
} from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-cream py-12 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="mb-4 inline-block animate-fade-in-up text-xs font-bold uppercase tracking-[0.2em] text-forest-light">
              {company.sector}
            </span>
            <h1 className="animate-fade-in-up-delay-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Donnons une seconde vie aux déchets.
            </h1>
            <p className="mt-6 max-w-xl animate-fade-in-up-delay-2 text-lg leading-relaxed text-ink/70">
              CYCLOREX RECYCLE transforme les pneus usagés en produits utiles,
              esthétiques et durables, tout en contribuant à une économie
              circulaire au Burkina Faso.
            </p>
            <div className="mt-8 flex animate-fade-in-up-delay-2 flex-wrap gap-4">
              <Button href="/nos-produits" variant="primary">
                Découvrir nos produits
              </Button>
              <Button href="/devis" variant="accent">
                Demander un devis
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <HeroIllustration />
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-white py-8 sm:py-10">
        <Container className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-8">
          <Fact value={company.founded} label="Année de création" accent="forest" />
          <Fact value={`${company.teamSize}`} label="Membres de l'équipe" accent="clay" />
          <Fact
            value={`${company.cities.length}`}
            label="Villes d'intervention"
            accent="forest"
          />
          <Fact value="Pissy" label="Atelier à Ouagadougou" accent="clay" />
        </Container>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-clay/10 blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Qui sommes-nous"
              title="Une matière première là où d'autres voient un déchet"
              subtitle="CYCLOREX RECYCLE est une startup burkinabè spécialisée dans la récupération et la valorisation des pneus usagés. Nous transformons des pneus destinés à devenir des déchets en objets utiles, esthétiques et durables : mobilier, fauteuils, chaises, tables et pots de fleurs."
            />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-ink/70">
            <p className="leading-relaxed">
              Notre approche repose sur l&apos;économie circulaire : récupérer
              une matière considérée comme un déchet, la transformer et lui
              donner une nouvelle valeur.
            </p>
            <p className="leading-relaxed">
              CYCLOREX RECYCLE ambitionne ainsi de contribuer à
              l&apos;assainissement des villes, à la réduction des déchets et
              au développement d&apos;activités économiques locales autour du
              recyclage.
            </p>
            <Button href="/a-propos" variant="outline">
              En savoir plus sur notre histoire
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-clay/10 blur-3xl"
        />
        <Container className="relative max-w-3xl">
          <Reveal>
            <p className="text-2xl font-semibold italic leading-snug sm:text-3xl">
              &laquo;&nbsp;Et si ce que nous appelons &laquo;&nbsp;déchet&nbsp;&raquo;
              était en réalité une nouvelle ressource&nbsp;?&nbsp;&raquo;
            </p>
            <p className="mt-6 max-w-xl text-cream/80">
              Chez CYCLOREX RECYCLE, nous récupérons les pneus usagés et leur
              donnons une seconde vie à travers des produits utiles, esthétiques
              et durables.
            </p>
            <div className="mt-8">
              <Button href="/a-propos" variant="primary">
                Découvrir CYCLOREX
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Notre processus"
              title="Récupérer, transformer, valoriser"
              subtitle="Une chaîne de valorisation complète, du pneu abandonné au produit fini."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
          <div className="mt-10">
            <Button href="/nos-solutions" variant="outline">
              Découvrir notre chaîne de valorisation
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nos produits"
              title="Des pneus usagés à des objets désirables"
              subtitle="Mobilier, pots de fleurs, décoration et fabrication sur commande."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <ProductCard category={category} index={index} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/nos-produits" variant="outline">
              Voir tous nos produits
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nos clients"
              title="À qui s'adresse CYCLOREX RECYCLE"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {targetClients.map((client, index) => (
              <span
                key={client.title}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                  index % 2 === 0
                    ? "border-forest/15 bg-forest/5 text-forest"
                    : "border-clay/20 bg-clay/8 text-clay-dark"
                }`}
              >
                {client.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Notre impact"
              title="Un impact environnemental, urbain, économique et social"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactObjectives.slice(0, 3).map((objective, index) => (
              <Reveal key={objective.title} delay={index * 80}>
                <ImpactCard objective={objective} index={index} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/notre-impact" variant="outline">
              Découvrir notre impact
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function Fact({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "forest" | "clay";
}) {
  return (
    <div>
      <div
        className={`text-2xl font-extrabold sm:text-3xl ${
          accent === "forest" ? "text-forest" : "text-clay-dark"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/50">
        {label}
      </div>
    </div>
  );
}
