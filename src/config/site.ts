/**
 * Configuración central del sitio.
 * Único lugar para editar datos comerciales, enlaces y mensajes.
 * Los valores vacíos ("") indican datos PENDIENTES de confirmar por el propietario.
 */

export const site = {
  /** Nombre comercial PROVISIONAL. */
  siteName: 'Sandalias y Pantuflas para Evento',
  siteDescription:
    'Sandalias y pantuflas personalizadas para bodas, XV años, graduaciones, cumpleaños y otras celebraciones. Cotiza por WhatsApp.',

  /**
   * PENDIENTE: número de WhatsApp en formato internacional, solo dígitos
   * (sin "+", espacios ni guiones). Ejemplo de formato: 52XXXXXXXXXX.
   * Mientras esté vacío, los botones de WhatsApp no generan enlaces.
   */
  whatsappNumber: '523313838230',

  facebookUrl: 'https://www.facebook.com/profile.php?id=100054371716727',

  /** PENDIENTE: dominio definitivo (ej. "https://midominio.com"). Sin dominio no se emite canonical. */
  siteUrl: '',

  /** Interruptores de funciones opcionales. Desactivarlos no afecta al resto del sitio. */
  features: {
    /** Botón flotante de WhatsApp en móvil. */
    floatingWhatsApp: true,
  },
} as const;

export const whatsappMessages = {
  general: 'Hola, me gustaría obtener información sobre sus productos personalizados para un evento.',
  sandals: 'Hola, me gustaría obtener información sobre las sandalias personalizadas para un evento.',
  slippers: 'Hola, me gustaría obtener información sobre las pantuflas personalizadas para un evento.',
  others: 'Hola, me gustaría conocer los productos que ofrecen para eventos.',
  gallery: 'Hola, vi uno de sus trabajos y me gustaría obtener información para mi evento.',
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
] as const;
