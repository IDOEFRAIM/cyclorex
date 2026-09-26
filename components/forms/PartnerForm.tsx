"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { inputClass, labelClass } from "@/components/forms/fieldStyles";
import { partnershipFormTypes } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PartnerForm() {
  const [waLink, setWaLink] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const types = data.getAll("partnershipType").join(", ");
    const fields = [
      `Nom / Organisation : ${data.get("name")}`,
      data.get("orgType") ? `Type d'organisation : ${data.get("orgType")}` : null,
      data.get("phone") ? `Téléphone : ${data.get("phone")}` : null,
      `Email : ${data.get("email")}`,
      types ? `Type de partenariat souhaité : ${types}` : null,
      data.get("message") ? `Message : ${data.get("message")}` : null,
    ].filter(Boolean);
    const message = `Nouvelle proposition de partenariat — CYCLOREX RECYCLE\n\n${fields.join("\n")}`;

    const link = buildWhatsAppLink(message);
    setWaLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (waLink) {
    return (
      <FormSuccess
        title="Votre proposition est prête"
        description="Nous avons préparé votre proposition de partenariat sur WhatsApp. Si la fenêtre ne s'est pas ouverte automatiquement, cliquez ci-dessous pour l'envoyer à l'équipe CYCLOREX RECYCLE."
        whatsappHref={waLink}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelClass}>
            Nom / Organisation
          </label>
          <input id="partner-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="partner-type" className={labelClass}>
            Type d&apos;organisation
          </label>
          <input id="partner-type" name="orgType" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-phone" className={labelClass}>
            Téléphone
          </label>
          <input id="partner-phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="partner-email" className={labelClass}>
            Email
          </label>
          <input
            id="partner-email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Type de partenariat souhaité</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {partnershipFormTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2.5 rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink/80"
            >
              <input
                type="checkbox"
                name="partnershipType"
                value={type}
                className="h-4 w-4 rounded border-ink/30 text-forest focus:ring-forest/30"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="partner-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={5}
          className={inputClass}
        />
      </div>

      <Button type="submit" variant="accent" className="w-full sm:w-auto">
        Envoyer sur WhatsApp
      </Button>
    </form>
  );
}
