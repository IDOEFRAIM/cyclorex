import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site-config";

export function WhatsAppButton() {
  const href = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`
    : "/contact";

  return (
    <Link
      href={href}
      target={contact.whatsapp ? "_blank" : undefined}
      rel={contact.whatsapp ? "noopener noreferrer" : undefined}
      aria-label="Contacter CYCLOREX RECYCLE sur WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 touch-manipulation items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" fill="white" strokeWidth={0} />
    </Link>
  );
}
