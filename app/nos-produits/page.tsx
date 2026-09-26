import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/sections/ProductCard";
import { productCategories, targetClients } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nos produits",
  description:
    "Mobilier, pots de fleurs, décoration et fabrication sur commande : découvrez les créations de CYCLOREX RECYCLE à partir de pneus recyclés.",
};

export default function NosProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos produits"
        title="Des pneus usagés à des produits désirables"
        subtitle="Tables, chaises, fauteuils, pots de fleurs, décoration et créations sur mesure : CYCLOREX transforme les pneus usagés en objets utiles et esthétiques."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {productCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <ProductCard category={category} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Sur mesure"
              title="Une fabrication adaptée à vos besoins"
              subtitle="Dimensions, couleurs, style, utilisation, espace disponible : chaque commande peut être personnalisée."
              align="center"
            />
            <div className="mt-8 flex justify-center">
              <Button href="/devis" variant="accent">
                Demander un devis
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nos clients cibles"
              title="À qui s'adressent nos créations"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {targetClients.map((client, index) => (
              <Reveal key={client.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <h3 className="text-sm font-bold text-forest">{client.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {client.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
