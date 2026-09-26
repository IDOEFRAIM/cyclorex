import { Reveal } from "@/components/ui/Reveal";
import { MicroLabel } from "@/components/ui/MicroLabel";

const pillars = [
  {
    number: "01",
    title: "Environnement",
    copy: "Réduire l'abandon et la combustion des pneus usagés, et contribuer à l'assainissement des espaces urbains de Ouagadougou.",
  },
  {
    number: "02",
    title: "Social",
    copy: "Développer, progressivement, des emplois et des compétences pour les jeunes dans la collecte, la transformation et le design.",
  },
  {
    number: "03",
    title: "Économie",
    copy: "Faire de la valorisation des déchets une activité économique viable, innovante et ancrée dans l'économie circulaire.",
  },
];

export function ImpactPillars() {
  return (
    <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
      {pillars.map((pillar, i) => (
        <Reveal key={pillar.title} delay={i * 90}>
          <div>
            <MicroLabel className="text-clay">{pillar.number}</MicroLabel>
            <div className="line-grow mt-4 h-px bg-ink/15" />
            <h3 className="mt-6 font-display text-3xl font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink/60">{pillar.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
