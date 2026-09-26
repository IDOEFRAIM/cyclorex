import Link from "next/link";
import { Mail, MapPin, Phone, Recycle } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
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
      <div
        aria-hidden
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-forest-light), var(--color-lime), var(--color-clay))",
        }}
      />
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <Recycle className="h-6 w-6 text-lime" strokeWidth={2} />
            <span>{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Recyclage • Innovation • Économie circulaire
          </p>
          <p className="mt-4 text-sm font-medium text-cream/80">
            &ldquo;{company.slogan}&rdquo;
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-lime">
            Navigation
          </h3>
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
          <h3 className="text-sm font-bold uppercase tracking-wider text-lime">
            Découvrir
          </h3>
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
          <h3 className="text-sm font-bold uppercase tracking-wider text-lime">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-lime" />
              {contact.phone ? (
                <a href={`tel:${contact.phone}`} className="hover:text-cream">
                  {contact.phone}
                </a>
              ) : (
                <span className="text-cream/40">Numéro à venir</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-lime" />
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
            {socialIcons.map(({ key, href, Icon, label }, index) =>
              href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 touch-manipulation items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-200 hover:-translate-y-0.5 hover:text-ink ${
                    index % 2 === 0 ? "hover:bg-lime" : "hover:bg-clay hover:text-cream"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ) : (
                <span
                  key={key}
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/5 text-cream/30"
                >
                  <Icon className="h-4 w-4" />
                </span>
              )
            )}
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {company.name}. Tous droits réservés.
          </p>
          <p>{company.workshop}</p>
        </Container>
      </div>
    </footer>
  );
}
