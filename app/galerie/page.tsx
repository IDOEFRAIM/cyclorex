import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImageOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Photos de la collecte, de l'atelier de Pissy, de la fabrication et des produits finis de CYCLOREX RECYCLE.",
};

const galleryCategories = [
  "Pneus collectés",
  "Atelier de Pissy",
  "Équipe",
  "Fabrication",
  "Produits terminés",
  "Avant / Après",
  "Livraison aux clients",
  "Événements & concours",
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/gallery/${file}`);
  } catch {
    return [];
  }
}

export default function GaleriePage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="En images"
        subtitle="Pneus collectés, atelier de Pissy, fabrication, produits terminés et participations aux événements : la galerie s'enrichit au fil de l'activité de CYCLOREX."
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            {galleryCategories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                  index % 2 === 0
                    ? "border-forest/15 bg-forest/5 text-forest"
                    : "border-clay/20 bg-clay/8 text-clay-dark"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          {images.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src, index) => (
                <Reveal key={src} delay={(index % 6) * 60}>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
                    <Image
                      src={src}
                      alt="Photo CYCLOREX RECYCLE"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-ink/20 bg-white py-20 text-center">
              <ImageOff className="h-10 w-10 text-ink/30" strokeWidth={1.5} />
              <p className="max-w-md text-sm text-ink/50">
                Les photos de l&apos;atelier, de la collecte et des produits
                seront ajoutées ici prochainement.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
