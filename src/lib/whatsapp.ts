import { site, whatsappMessages, type WhatsAppMessageKey } from '../config/site';

/** Devuelve el número normalizado si es válido (8–15 dígitos), o null si falta o es inválido. */
export function getWhatsAppNumber(raw: string = site.whatsappNumber): string | null {
  const digits = raw.trim();
  return /^\d{8,15}$/.test(digits) ? digits : null;
}

/**
 * Genera la URL de WhatsApp. Devuelve null si el número no está configurado,
 * para que nunca se cree un enlace wa.me inválido.
 */
export function buildWhatsAppUrl(message: WhatsAppMessageKey = 'general'): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessages[message])}`;
}
