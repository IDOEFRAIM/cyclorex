"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { inputClass, labelClass } from "@/components/forms/fieldStyles";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Votre message a bien été envoyé"
        description="Merci de nous avoir contactés. L'équipe CYCLOREX RECYCLE vous répondra dès que possible."
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

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Envoyer le message
      </Button>
    </form>
  );
}
