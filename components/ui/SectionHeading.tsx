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
        <span
          className={`mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-lime" : "text-forest-light"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
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
