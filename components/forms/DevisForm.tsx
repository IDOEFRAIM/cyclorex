"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { inputClass, labelClass } from "@/components/forms/fieldStyles";
import { productTypeOptions } from "@/lib/site-config";

export function DevisForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Votre demande a bien été enregistrée"
        description="Merci pour votre demande de devis. L'équipe CYCLOREX RECYCLE reviendra vers vous dès que possible."
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
        Envoyer ma demande
      </Button>
    </form>
  );
}
