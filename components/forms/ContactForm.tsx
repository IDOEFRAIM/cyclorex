"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { inputClass, labelClass } from "@/components/forms/fieldStyles";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [waLink, setWaLink] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      `Nom : ${data.get("name")}`,
      data.get("phone") ? `Téléphone : ${data.get("phone")}` : null,
      `Email : ${data.get("email")}`,
      `Message : ${data.get("message")}`,
    ].filter(Boolean);
    const message = `Nouveau message — CYCLOREX RECYCLE\n\n${fields.join("\n")}`;

    const link = buildWhatsAppLink(message);
    setWaLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (waLink) {
    return (
      <FormSuccess
        title="Votre message est prêt"
        description="Nous avons préparé votre message sur WhatsApp. Si la fenêtre ne s'est pas ouverte automatiquement, cliquez ci-dessous pour l'envoyer à l'équipe CYCLOREX RECYCLE."
        whatsappHref={waLink}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Nom
          </label>
          <input id="contact-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Téléphone
          </label>
          <input id="contact-phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </div>

      <Button type="submit" variant="accent" className="w-full sm:w-auto">
        Envoyer sur WhatsApp
      </Button>
    </form>
  );
}
