import { CheckCircle2 } from "lucide-react";

export function FormSuccess({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-lime/30 bg-lime/10 p-10 text-center">
      <CheckCircle2 className="h-12 w-12 text-lime-dark" strokeWidth={1.5} />
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-ink/65">{description}</p>
    </div>
  );
}
