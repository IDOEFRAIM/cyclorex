import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DevisForm } from "@/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis personnalisé pour du mobilier, des pots de fleurs ou une création sur mesure en pneus recyclés auprès de CYCLOREX RECYCLE.",
};

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Fabrication sur commande"
        title="Demander un devis"
        subtitle="Vous souhaitez équiper votre maison, votre entreprise ou un espace événementiel ? Décrivez votre projet, nous revenons vers vous avec une proposition personnalisée."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="max-w-2xl">
          <Reveal className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
            <DevisForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
