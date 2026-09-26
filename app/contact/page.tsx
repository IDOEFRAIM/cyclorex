import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { ContactForm } from "@/components/forms/ContactForm";
import { company, contact, social } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez CYCLOREX RECYCLE à Ouagadougou, Burkina Faso : téléphone, WhatsApp, email et formulaire de contact.",
};

const socialLinks = [
  { key: "facebook", href: social.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "instagram", href: social.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "tiktok", href: social.tiktok, Icon: TiktokIcon, label: "TikTok" },
  { key: "linkedin", href: social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle={`${company.founder} — ${company.founderRole}. « ${company.slogan} »`}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <SectionHeading eyebrow="Coordonnées" title="Où nous trouver" />

            <div className="space-y-4">
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Localisation" accent="clay">
                <p className="text-ink/70">{contact.address}</p>
                <p className="mt-1 text-sm text-ink/50">
                  Zone d&apos;intervention : {company.cities.join(" · ")}
                </p>
              </ContactRow>

              <ContactRow icon={<Phone className="h-5 w-5" />} label="Téléphone" accent="forest">
                {contact.phone ? (
                  <a href={`tel:${contact.phone}`} className="text-forest hover:underline">
                    {contact.phone}
                  </a>
                ) : (
                  <ComingSoon />
                )}
              </ContactRow>

              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" accent="forest">
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-forest hover:underline"
                  >
                    {contact.email}
                  </a>
                ) : (
                  <ComingSoon />
                )}
              </ContactRow>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-ink/50">
                Réseaux sociaux
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ key, href, Icon, label }) =>
                  href ? (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors hover:bg-forest hover:text-cream"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      key={key}
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/25"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  )
                )}
              </div>
              {!socialLinks.some((s) => s.href) && (
                <p className="mt-3 text-xs text-ink/40">
                  Les liens seront ajoutés dès que les comptes professionnels
                  seront disponibles.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
            <h3 className="mb-6 text-lg font-bold text-ink">Envoyez-nous un message</h3>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
  accent = "forest",
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  accent?: "forest" | "clay";
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          accent === "forest" ? "bg-forest/8 text-forest" : "bg-clay/10 text-clay-dark"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide text-ink/40">
          {label}
        </div>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}
