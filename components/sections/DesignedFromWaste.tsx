import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { ProductCategory } from "@/lib/site-config";

export function DesignedFromWaste({ categories }: { categories: ProductCategory[] }) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {categories.map((category, i) => {
        const reversed = i % 2 === 1;
        return (
          <Reveal key={category.title} delay={i * 40}>
            <article
              className={`grid items-center gap-10 border-t border-ink/10 pt-10 sm:gap-16 lg:grid-cols-2 lg:pt-14 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                data-cursor="Voir"
                className="flex aspect-[4/3] items-center justify-center border border-ink/10 bg-white/40"
              >
                <Icon name={category.icon} className="h-20 w-20 text-ink/70 sm:h-28 sm:w-28" />
              </div>

              <div>
                <MicroLabel className="text-clay">{`0${i + 1} / Collection`}</MicroLabel>
                <h3 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
                  {category.title}
                </h3>
                <p className="mt-5 max-w-md leading-relaxed text-ink/65">
                  {category.description}
                </p>

                <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-5">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                      Matière
                    </dt>
                    <dd className="mt-1 text-sm text-ink/70">Pneu recyclé</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                      Origine
                    </dt>
                    <dd className="mt-1 text-sm text-ink/70">Ouagadougou</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                      Seconde vie
                    </dt>
                    <dd className="mt-1 text-sm text-ink/70">{category.items[0]}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
