"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Recycle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream transition-shadow duration-300 ${
        scrolled ? "border-ink/10 shadow-sm" : "border-transparent"
      }`}
    >
      <Container size="wide" className="flex h-18 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-semibold tracking-tight text-forest"
        >
          <Recycle className="h-6 w-6 text-lime-dark" strokeWidth={2} />
          <span>
            CYCLOREX <span className="text-lime-dark">RECYCLE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {mainNav.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap py-1 text-sm font-medium transition-colors ${
                  active ? "text-forest" : "text-ink/70 hover:text-forest"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-clay transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Button href="/devis" variant="accent">
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full text-ink transition-colors active:bg-ink/10 xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-18 bottom-0 bg-ink/40 transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-cream shadow-lg transition-[grid-template-rows] duration-300 xl:hidden ${
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr] border-b-0 shadow-none"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`touch-manipulation rounded-lg px-3 py-3.5 text-base font-medium transition-colors active:bg-forest/10 ${
                    active ? "bg-forest/5 text-forest" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-3">
              <Button href="/devis" variant="accent" className="w-full">
                Demander un devis
              </Button>
              <Button href="/partenaires" variant="outline" className="w-full">
                Devenir partenaire
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
