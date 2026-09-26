import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-ink py-14 text-cream sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
          Vous avez des pneus usagés ? Vous voulez équiper un espace avec du
          mobilier recyclé ?
        </h2>
        <p className="max-w-xl text-cream/70">
          Ne les jetez pas. Contactez-nous, découvrez nos créations, ou
          rejoignez-nous en tant que partenaire.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/nos-produits" variant="primary">
            Nos produits
          </Button>
          <Button href="/devis" variant="accent">
            Demander un devis
          </Button>
          <Button href="/partenaires" variant="outline-light">
            Devenir partenaire
          </Button>
          <Button href="/contact" variant="outline-light">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}
