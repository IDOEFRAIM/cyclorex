import { Award } from "lucide-react";

export function TrustBadge({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        light
          ? "border-gold/40 bg-cream/5"
          : "border-gold-dark/25 bg-gold/8"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          light ? "bg-gold/20 text-gold" : "bg-gold/20 text-gold-dark"
        }`}
      >
        <Award className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span
        className={`text-xs font-semibold leading-tight ${
          light ? "text-cream/90" : "text-ink/80"
        }`}
      >
        Parcours entrepreneurial
        <span className="block text-[11px] font-normal uppercase tracking-wide opacity-70">
          Tony Elumelu Foundation (TEF)
        </span>
      </span>
    </div>
  );
}
