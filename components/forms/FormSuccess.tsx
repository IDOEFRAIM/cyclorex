import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FormSuccess({
  title,
  description,
  whatsappHref,
}: {
  title: string;
  description: string;
  whatsappHref?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-lime/30 bg-lime/10 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
        <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
      </span>
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-ink/65">{description}</p>
      {whatsappHref ? (
        <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="accent">
          Ouvrir WhatsApp
        </Button>
      ) : null}
    </div>
  );
}
