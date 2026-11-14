# Sandalias y Pantuflas para Evento

Landing page estática (Astro + Tailwind CSS 4 + TypeScript) para un negocio de sandalias y pantuflas personalizadas para eventos. Los requisitos están en `INSTRUCTIONS.md`.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run check` | Comprobación de tipos (`astro check`) |
| `npm run build` | Compila el sitio estático en `dist/` |
| `npm run preview` | Sirve localmente el build |

## Configuración (`src/config/site.ts`)

Todos los datos comerciales están en un solo archivo:

- **`whatsappNumber`** — Formato internacional solo con dígitos, sin `+` ni espacios (México: `52` + 10 dígitos).
  Si queda vacío: en `npm run dev` los botones muestran *“WhatsApp pendiente de configurar”*; en producción no se muestran. Nunca se genera un enlace inválido.
- **`siteUrl`** — `https://sandaliasypantuflasatuspies.com`. Activa canonical, `og:url`, `og:image` (1200×630) y los datos estructurados. Si cambia, actualizar también `site` en `astro.config.mjs` y la línea `Sitemap` en `public/robots.txt`.
- **`business`** — dirección y teléfono del negocio. Alimentan el JSON-LD (`ShoeStore`) para Google y la dirección del pie de página.
- **`features.floatingWhatsApp`** — `true`/`false` activa el botón flotante de WhatsApp en móvil. Es independiente del resto del sitio.
- **`whatsappMessages`** — mensajes prellenados por contexto.

Todos los enlaces de WhatsApp se generan con `buildWhatsAppUrl()` en `src/lib/whatsapp.ts`.

## Fotografías

- Optimizadas por Astro desde `src/assets/images/` (AVIF/WebP en varios tamaños).
- Las fotos que no alcanzan un ancho solicitado no se amplían: `fitWidths()` evita generar archivos duplicados.
- Galería y metadatos: `src/data/gallery.ts` (orden alternado sandalia/pantufla). Para agregar una foto: copiarla a `src/assets/images/` con nombre descriptivo, importarla y añadir su entrada con `alt` y `categories` (`bodas`, `xv-anos`, `graduaciones`, `cumpleanos`, `otros`).
- Los filtros sin fotos (hoy, Graduaciones) se ocultan solos y aparecen en cuanto se agregue una foto de esa categoría.
- La foto marcada `featured: true` se usa en la portada.
- Pendiente: foto para “Otros productos”. Por ahora la tarjeta muestra un recuadro que dice “Fotografía pendiente”.

## Despliegue (Cloudflare Pages)

1. Subir el repositorio a GitHub.
2. En Cloudflare Pages, conectar el repositorio. Comando de build: `npm run build`. Carpeta de salida: `dist`.
3. La versión de Node se toma de `.node-version` (Node 24; Astro 7 exige ≥ 22.23.4).
4. Revisar la URL de prueba y después configurar el dominio propio.

### Seguridad

- Astro agrega en cada página un `<meta>` Content-Security-Policy con hashes de sus scripts y estilos (`security.csp` en `astro.config.mjs`). Por eso no se deben usar atributos `style="..."` ni scripts externos sin agregarlos a la política.
- `public/_headers` define HSTS, `frame-ancestors`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y caché inmutable para `/_astro/*`.
- En Cloudflare, desactivar funciones que inyectan scripts (Rocket Loader, Email Address Obfuscation) o la CSP las bloqueará. Web Analytics requiere agregar `https://static.cloudflareinsights.com` a la política.
