import { Icon } from "@/components/icons";
import { ImpactObjective } from "@/lib/site-config";

const accents = [
  "bg-lime/20 text-lime-dark",
  "bg-clay/12 text-clay-dark",
  "bg-forest/10 text-forest",
];

export function ImpactCard({
  objective,
  index = 0,
}: {
  objective: ImpactObjective;
  index?: number;
}) {
  const accent = accents[index % accents.length];

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${accent}`}
      >
        <Icon name={objective.icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-ink">{objective.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {objective.description}
        </p>
      </div>
    </div>
  );
}
