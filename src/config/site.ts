/**
 * Configuración central del sitio.
 * Único lugar para editar datos comerciales, enlaces y mensajes.
 * Los valores vacíos ("") indican datos PENDIENTES de confirmar por el propietario.
 */

export const site = {
  siteName: 'A Tus Pies - Sandalias y Pantuflas',
  siteDescription:
    'Sandalias y pantuflas personalizadas para bodas, XV años, graduaciones, cumpleaños y otras celebraciones. Cotiza por WhatsApp.',

  whatsappNumber: '523313838230',

  facebookUrl: 'https://www.facebook.com/profile.php?id=100054371716727',

  /** Dominio definitivo. Debe coincidir con `site` en astro.config.mjs. */
  siteUrl: 'https://sandaliasypantuflasatuspies.com',

  /** Datos de la ficha del negocio (JSON-LD LocalBusiness). */
  business: {
    streetAddress: 'Av. Francisco Javier Mina 277-B',
    neighborhood: 'San Juan de Dios',
    postalCode: '44360',
    locality: 'Guadalajara',
    region: 'Jalisco',
    country: 'MX',
    /** Teléfono en formato E.164 (mismo número que WhatsApp). */
    telephone: '+523313838230',
    areaServed: 'Guadalajara',
  },

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
