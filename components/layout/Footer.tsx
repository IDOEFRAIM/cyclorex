import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { TextLink } from "@/components/ui/TextLink";
import {
  company,
  contact,
  footerSecondaryNav,
  mainNav,
  social,
} from "@/lib/site-config";

const socialIcons = [
  { key: "facebook", href: social.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "instagram", href: social.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "tiktok", href: social.tiktok, Icon: TiktokIcon, label: "TikTok" },
  { key: "linkedin", href: social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container size="wide" className="py-20 sm:py-28">
        <MicroLabel className="text-clay">Parlons de votre projet</MicroLabel>
        <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          Repensons
          <br />
          le déchet.
        </h2>
        <div className="mt-10">
          <TextLink href="/contact" dark size="lg">
            Parlons
          </TextLink>
        </div>
      </Container>

      <Container
        size="wide"
        className="grid gap-10 border-t border-cream/10 py-14 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="lg:col-span-1">
          <p className="font-display text-base font-semibold tracking-tight">
            {company.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/50">
            Recyclage — Innovation — Économie circulaire
          </p>
          <div className="mt-5">
            <TrustBadge light />
          </div>
        </div>

        <div>
          <MicroLabel className="text-cream/40">Navigation</MicroLabel>
          <ul className="mt-4 space-y-2">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <MicroLabel className="text-cream/40">Découvrir</MicroLabel>
          <ul className="mt-4 space-y-2">
            {footerSecondaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <MicroLabel className="text-cream/40">Contact</MicroLabel>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream/40" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-cream/40" />
              {contact.whatsapp ? (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  {contact.whatsapp}
                </a>
              ) : (
                <span className="text-cream/40">WhatsApp à venir</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-cream/40" />
              {contact.phone ? (
                <a href={`tel:${contact.phone}`} className="hover:text-cream">
                  {contact.phone}
                </a>
              ) : (
                <span className="text-cream/40">Numéro à venir</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-cream/40" />
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="hover:text-cream">
                  {contact.email}
                </a>
              ) : (
                <span className="text-cream/40">Email à venir</span>
              )}
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ key, href, Icon, label }) =>
              href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-clay hover:text-clay"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span
                  key={key}
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/10 text-cream/20"
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              )
            )}
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container size="wide" className="flex flex-col items-center justify-between gap-2 text-xs text-cream/40 sm:flex-row">
          <p>
            © {year} {company.name}. Tous droits réservés.
          </p>
          <p className="font-mono">{company.workshop}</p>
        </Container>
      </div>
    </footer>
  );
}
