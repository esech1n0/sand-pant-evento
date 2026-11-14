// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio definitivo: debe coincidir con site.siteUrl en src/config/site.ts.
  site: 'https://sandaliasypantuflasatuspies.com',
  integrations: [sitemap()],
  // El sitio no usa bloques de código; Shiki (inline styles) es incompatible con la CSP.
  markdown: { syntaxHighlight: false },
  security: {
    // Astro genera en cada página un <meta> CSP con los hashes de sus scripts y estilos.
    // Las cabeceras que no pueden ir en <meta> (frame-ancestors, HSTS, etc.) están en public/_headers.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
