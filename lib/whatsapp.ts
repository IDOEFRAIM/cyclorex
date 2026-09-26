import { contact } from "@/lib/site-config";

export function buildWhatsAppLink(message: string) {
  const digits = (contact.whatsapp ?? "").replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
