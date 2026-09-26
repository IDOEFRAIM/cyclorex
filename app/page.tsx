import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { Hero } from "@/components/sections/Hero";
import { MaterialJourney } from "@/components/sections/MaterialJourney";
import { MonumentalStats } from "@/components/sections/MonumentalStats";
import { ProcessEditorial } from "@/components/sections/ProcessEditorial";
import { DesignedFromWaste } from "@/components/sections/DesignedFromWaste";
import { Manifesto } from "@/components/sections/Manifesto";
import { ImpactPillars } from "@/components/sections/ImpactPillars";
import {
  processSteps,
  productCategories,
  targetClients,
} from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <MicroLabel className="text-clay">Qui sommes-nous</MicroLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Une matière première là où d&apos;autres voient un déchet.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center space-y-5 text-ink/65">
            <p className="leading-relaxed">
              CYCLOREX RECYCLE est une startup burkinabè spécialisée dans la
              récupération et la valorisation des pneus usagés. Notre approche
              repose sur l&apos;économie circulaire : récupérer une matière
              considérée comme un déchet, la transformer et lui donner une
              nouvelle valeur.
            </p>
            <p className="leading-relaxed">
              Nous ambitionnons de contribuer à l&apos;assainissement des
              villes, à la réduction des déchets et au développement
              d&apos;activités économiques locales autour du recyclage.
            </p>
            <div className="pt-2">
              <TextLink href="/a-propos">Notre histoire</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <MaterialJourney />

      <MonumentalStats />

      <section className="py-20 sm:py-28 lg:py-32">
        <Container>
          <Reveal>
            <MicroLabel className="text-clay">Exposition</MicroLabel>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Conçu depuis le déchet.
            </h2>
          </Reveal>
          <div className="mt-16">
            <DesignedFromWaste categories={productCategories} />
          </div>
          <Reveal delay={200}>
            <p className="mt-16 border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/45">
              {targetClients.map((c) => c.title).join(" · ")}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Notre processus"
              title="Récupérer, transformer, valoriser."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessEditorial steps={processSteps} />
          </div>
        </Container>
      </section>

      <Manifesto />

      <section className="py-20 sm:py-28 lg:py-32">
        <Container>
          <Reveal>
            <MicroLabel className="text-clay">Notre impact</MicroLabel>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              Trois axes, une seule transformation.
            </h2>
          </Reveal>
          <div className="mt-16">
            <ImpactPillars />
          </div>
          <Reveal delay={180} className="mt-14">
            <TextLink href="/notre-impact">Voir l&apos;ensemble de nos objectifs</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
