export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Illustration d'un pneu recyclé qui tourne, transformé en fauteuil végétal"
    >
      <circle cx="200" cy="200" r="180" fill="var(--color-clay)" opacity="0.1" />
      <circle cx="200" cy="200" r="150" fill="var(--color-forest-light)" opacity="0.14" />

      {/* Three recycling arrows orbiting slowly behind the tire */}
      <g
        className="animate-spin-slow origin-center"
        style={{ animationDirection: "reverse", animationDuration: "26s" }}
      >
        {[0, 120, 240].map((angle) => (
          <path
            key={angle}
            d="M200 54a146 146 0 0 1 118 60"
            fill="none"
            stroke="var(--color-lime)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.55"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
      </g>

      {/* Tire, rotating like a wheel in motion */}
      <g className="animate-spin-slow origin-center">
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="26"
        />
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="26"
          strokeDasharray="2 22"
          strokeLinecap="round"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <circle
            key={angle}
            cx={200 + 130 * Math.cos((angle * Math.PI) / 180)}
            cy={200 + 130 * Math.sin((angle * Math.PI) / 180)}
            r="5"
            fill="var(--color-clay)"
          />
        ))}
      </g>

      <circle cx="200" cy="200" r="72" fill="var(--color-cream)" />
      <circle cx="200" cy="200" r="72" fill="none" stroke="var(--color-forest)" strokeWidth="4" />

      {/* Leaf growing from the recycled tire, gently floating */}
      <g className="animate-float origin-center">
        <path
          d="M200 150c26 0 46 20 46 46 0 30-46 70-46 70s-46-40-46-70c0-26 20-46 46-46Z"
          fill="var(--color-lime)"
        />
        <path
          d="M200 176v72"
          stroke="var(--color-forest)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M200 196c-14-10-28-8-34-2M200 216c14-10 28-8 34-2"
          stroke="var(--color-forest)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
