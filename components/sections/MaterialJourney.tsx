import { Container } from "@/components/ui/Container";
import { MicroLabel } from "@/components/ui/MicroLabel";

const stages = [
  {
    number: "00",
    label: "Déchet",
    copy: "Des pneus abandonnés ou brûlés, considérés comme un problème urbain.",
  },
  {
    number: "01",
    label: "Collecte",
    copy: "Récupérés auprès des vulcanisateurs, garages et particuliers de Ouagadougou.",
  },
  {
    number: "02",
    label: "Transformation",
    copy: "Nettoyés, découpés, associés à d'autres matériaux dans l'atelier de Pissy.",
  },
  {
    number: "03",
    label: "Création",
    copy: "Façonnés en mobilier et en objets, pièce par pièce.",
  },
  {
    number: "04",
    label: "Valeur",
    copy: "Une ressource utile, esthétique et économique, prête pour une seconde vie.",
  },
];

/**
 * Positions FIXES.
 *
 * Important :
 * On ne calcule plus Math.cos(), Math.sin(), etc.
 * pendant le rendu React.
 *
 * Cela évite les différences SSR / Client.
 */
const fragmentLayouts = [
  [
    ["100", "20", "0"],
    ["150", "35", "40"],
    ["175", "80", "80"],
    ["165", "135", "120"],
    ["120", "165", "160"],
    ["65", "160", "210"],
    ["25", "125", "250"],
    ["25", "70", "290"],
    ["55", "30", "330"],
  ],

  [
    ["95", "14", "15"],
    ["150", "30", "55"],
    ["182", "75", "95"],
    ["165", "125", "135"],
    ["120", "175", "180"],
    ["65", "162", "230"],
    ["20", "125", "270"],
    ["18", "68", "310"],
    ["55", "25", "350"],
  ],

  [
    ["92", "8", "30"],
    ["150", "25", "70"],
    ["188", "70", "110"],
    ["168", "125", "150"],
    ["115", "182", "200"],
    ["55", "165", "250"],
    ["12", "120", "290"],
    ["12", "62", "330"],
    ["52", "18", "370"],
  ],

  [
    ["90", "4", "45"],
    ["152", "20", "85"],
    ["190", "65", "125"],
    ["170", "125", "165"],
    ["115", "188", "215"],
    ["48", "170", "265"],
    ["5", "115", "305"],
    ["8", "55", "345"],
    ["52", "12", "385"],
  ],

  [
    ["90", "0", "60"],
    ["155", "15", "100"],
    ["195", "60", "140"],
    ["175", "125", "180"],
    ["112", "195", "230"],
    ["42", "175", "280"],
    ["0", "110", "320"],
    ["5", "48", "360"],
    ["50", "8", "400"],
  ],
] as const;

/**
 * Progression fixe du cercle.
 */
const ringOffsets = [
  "490",
  "367.5",
  "245",
  "122.5",
  "0",
] as const;

function MaterialRing({ stage }: { stage: number }) {
  const layout = fragmentLayouts[stage];

  return (
    <div className="relative aspect-square w-[300px] shrink-0 sm:w-[360px] xl:w-[420px]">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {/* Cercle */}
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="var(--color-lime)"
          strokeWidth="1.5"
          strokeDasharray="490"
          strokeDashoffset={ringOffsets[stage]}
        />

        {/* Ressource uniquement sur la dernière étape */}
        {stage === 4 && (
          <text
            x="100"
            y="105"
            textAnchor="middle"
            className="font-display text-[15px] italic"
            fill="var(--color-cream)"
          >
            Ressource
          </text>
        )}

        {/* Fragments */}
        {layout.map(([x, y, rotation], index) => (
          <polygon
            key={index}
            points="94,80 106,83 103,96 91,93"
            fill="var(--color-clay)"
            opacity="0.9"
            transform={`translate(${x}, ${y}) rotate(${rotation})`}
          />
        ))}
      </svg>
    </div>
  );
}

export function MaterialJourney() {
  return (
    <section className="bg-forest text-cream">
      {/* =====================================================
          DESKTOP
          ===================================================== */}

      <div className="hidden lg:block">
        {stages.map((stage, index) => (
          <article
            key={stage.label}
            className="
              relative
              flex
              min-h-screen
              items-center
              overflow-hidden
            "
          >
            {/* Ligne horizontale */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-1/2
                h-px
                -translate-y-1/2
                bg-cream/10
              "
            />

            <Container size="wide">
              <div className="grid grid-cols-[1fr_auto] items-center gap-12 xl:gap-20">
                {/* =================================================
                    CONTENU
                    ================================================= */}

                <div className="relative">
                  <MicroLabel className="text-lime">
                    {index === 0
                      ? "Le parcours de la matière"
                      : `Étape ${stage.number}`}
                  </MicroLabel>

                  {/* Grand numéro décoratif */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      select-none
                      font-display
                      text-[11vw]
                      leading-none
                      text-cream/[0.08]
                      xl:text-[180px]
                    "
                  >
                    {stage.number}
                  </span>

                  <div className="relative mt-24">
                    <span className="font-mono text-sm text-clay">
                      {stage.number}
                    </span>

                    <h2
                      className="
                        mt-3
                        font-display
                        text-6xl
                        font-semibold
                        leading-none
                        xl:text-7xl
                      "
                    >
                      {stage.label}
                    </h2>

                    <p
                      className="
                        mt-6
                        max-w-md
                        text-lg
                        leading-relaxed
                        text-cream/65
                      "
                    >
                      {stage.copy}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    RING
                    ================================================= */}

                <MaterialRing stage={index} />
              </div>
            </Container>
          </article>
        ))}
      </div>

      {/* =====================================================
          MOBILE / TABLET
          ===================================================== */}

      <div className="lg:hidden">
        <Container>
          <div className="py-16 sm:py-20">
            <MicroLabel className="text-lime">
              Le parcours de la matière
            </MicroLabel>

            <ol className="mt-10 border-t border-cream/15">
              {stages.map((stage) => (
                <li
                  key={stage.label}
                  className="border-b border-cream/15 py-8"
                >
                  <div className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3">
                    <span className="font-mono text-sm text-clay">
                      {stage.number}
                    </span>

                    <h3
                      className="
                        font-display
                        text-3xl
                        font-semibold
                        leading-tight
                        sm:text-4xl
                      "
                    >
                      {stage.label}
                    </h3>

                    <p
                      className="
                        col-span-2
                        max-w-lg
                        text-sm
                        leading-7
                        text-cream/65
                        sm:text-base
                      "
                    >
                      {stage.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </div>
    </section>
  );
}