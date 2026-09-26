export function ComingSoon({ label = "Bientôt disponible" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/50">
      {label}
    </span>
  );
}
