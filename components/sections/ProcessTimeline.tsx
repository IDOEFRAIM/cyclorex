import { Reveal } from "@/components/ui/Reveal";
import { ProcessStep } from "@/lib/site-config";

const accents = ["text-lime-dark", "text-clay", "text-forest-light"];

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((item, index) => (
        <li key={item.step} className="h-full">
          <Reveal delay={index * 70} className="h-full">
            <div className="group relative h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5">
              <span
                className={`text-3xl font-extrabold transition-transform duration-300 group-hover:scale-110 ${accents[index % accents.length]}`}
              >
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
