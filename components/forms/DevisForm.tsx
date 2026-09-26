"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { inputClass, labelClass } from "@/components/forms/fieldStyles";
import { productTypeOptions } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function DevisForm() {
  const [waLink, setWaLink] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      `Nom / Entreprise : ${data.get("name")}`,
      `Téléphone / WhatsApp : ${data.get("phone")}`,
      data.get("email") ? `Email : ${data.get("email")}` : null,
      `Produit souhaité : ${data.get("product")}`,
      data.get("quantity") ? `Quantité : ${data.get("quantity")}` : null,
      data.get("dimensions") ? `Dimensions : ${data.get("dimensions")}` : null,
      data.get("color") ? `Couleur / personnalisation : ${data.get("color")}` : null,
      data.get("date") ? `Date souhaitée : ${data.get("date")}` : null,
      data.get("message") ? `Message : ${data.get("message")}` : null,
    ].filter(Boolean);
    const message = `Nouvelle demande de devis — CYCLOREX RECYCLE\n\n${fields.join("\n")}`;

    const link = buildWhatsAppLink(message);
    setWaLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (waLink) {
    return (
      <FormSuccess
        title="Votre demande est prête"
        description="Nous avons préparé votre message sur WhatsApp. Si la fenêtre ne s'est pas ouverte automatiquement, cliquez ci-dessous pour l'envoyer à l'équipe CYCLOREX RECYCLE."
        whatsappHref={waLink}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-name" className={labelClass}>
            Nom / Entreprise
          </label>
          <input id="devis-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="devis-phone" className={labelClass}>
            Téléphone / WhatsApp
          </label>
          <input
            id="devis-phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-email" className={labelClass}>
            Email
          </label>
          <input id="devis-email" name="email" type="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="devis-product" className={labelClass}>
            Type de produit souhaité
          </label>
          <select id="devis-product" name="product" required className={inputClass}>
            <option value="">Sélectionnez un produit</option>
            {productTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-quantity" className={labelClass}>
            Quantité
          </label>
          <input id="devis-quantity" name="quantity" className={inputClass} />
        </div>
        <div>
          <label htmlFor="devis-dimensions" className={labelClass}>
            Dimensions souhaitées
          </label>
          <input id="devis-dimensions" name="dimensions" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-color" className={labelClass}>
            Couleur / personnalisation
          </label>
          <input id="devis-color" name="color" className={inputClass} />
        </div>
        <div>
          <label htmlFor="devis-date" className={labelClass}>
            Date souhaitée
          </label>
          <input id="devis-date" name="date" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="devis-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="devis-message"
          name="message"
          rows={5}
          className={inputClass}
        />
      </div>

      <Button type="submit" variant="accent" className="w-full sm:w-auto">
        Envoyer ma demande sur WhatsApp
      </Button>
    </form>
  );
}
