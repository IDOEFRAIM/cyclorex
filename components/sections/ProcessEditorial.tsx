import { Reveal } from "@/components/ui/Reveal";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { TextLink } from "@/components/ui/TextLink";
import { ProcessStep } from "@/lib/site-config";

export function ProcessEditorial({ steps }: { steps: ProcessStep[] }) {
  return (
    <div>
      <MicroLabel className="text-ink/40">
        Notre chaîne de valorisation
      </MicroLabel>

      <ol className="mt-8 border-t border-ink/10">
        {steps.map((step, i) => (
          <Reveal key={step.step} delay={i * 50}>
            <li
              className="
                grid
                grid-cols-[2.75rem_1fr]
                gap-x-4
                gap-y-4
                border-b border-ink/10
                py-6

                sm:grid-cols-[4rem_1fr_2fr]
                sm:gap-x-10
                sm:gap-y-0
                sm:py-8
              "
            >
              {/* Numéro */}
              <span
                className="
                  font-display
                  text-2xl
                  leading-none
                  text-clay
                  sm:text-3xl
                "
              >
                {step.step}
              </span>

              {/* Titre */}
              <h3
                className="
                  self-center
                  font-display
                  text-xl
                  font-semibold
                  leading-tight
                  text-ink
                  sm:text-2xl
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  col-span-2
                  max-w-xl
                  text-sm
                  leading-7
                  text-ink/60

                  sm:col-span-1
                  sm:max-w-none
                  sm:text-base
                  sm:leading-relaxed
                "
              >
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-8">
        <TextLink href="/nos-solutions">
          Voir le détail de notre chaîne
        </TextLink>
      </div>
    </div>
  );
}

