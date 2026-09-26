type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex flex-col items-center" : ""}>
          <span
            className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${
              light ? "text-lime" : "text-forest-light"
            }`}
          >
            {eyebrow}
          </span>
          <span
            aria-hidden
            className={`mt-3 mb-3 block h-px w-10 ${light ? "bg-gold" : "bg-gold-dark/60"}`}
          />
        </div>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/80" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
