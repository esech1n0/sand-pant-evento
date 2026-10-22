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

- **`whatsappNumber`** — PENDIENTE. Formato internacional solo con dígitos, sin `+` ni espacios (México: `52` + 10 dígitos).
  Mientras esté vacío: en `npm run dev` los botones muestran *“WhatsApp pendiente de configurar”*; en producción no se muestran. Nunca se genera un enlace inválido.
- **`siteUrl`** — PENDIENTE. Al definir el dominio, se activan el canonical, `og:url` y `og:image`. Agregar también la línea `Sitemap` en `public/robots.txt`.
- **`features.floatingWhatsApp`** — `true`/`false` activa el botón flotante de WhatsApp en móvil. Es independiente del resto del sitio.
- **`whatsappMessages`** — mensajes prellenados por contexto.

Todos los enlaces de WhatsApp se generan con `buildWhatsAppUrl()` en `src/lib/whatsapp.ts`.

## Fotografías

- Optimizadas por Astro desde `src/assets/images/` (AVIF/WebP en varios tamaños).
- Los originales sin procesar se conservan en `assets/images/`.
- Galería y metadatos: `src/data/gallery.ts` (orden alternado sandalia/pantufla). Para agregar una foto: copiarla a `src/assets/images/` con nombre descriptivo, importarla y añadir su entrada con `alt` y `categories` (`bodas`, `xv-anos`, `graduaciones`, `cumpleanos`, `otros`).
- La foto marcada `featured: true` se usa en la portada.
- Pendiente: foto para “Otros productos”. Por ahora la tarjeta muestra un recuadro que dice “Fotografía pendiente”.

## Despliegue (Cloudflare Pages)

1. Subir el repositorio a GitHub.
2. En Cloudflare Pages, conectar el repositorio. Comando de build: `npm run build`. Carpeta de salida: `dist`.
3. Verificar que la versión de Node coincida con `engines` en `package.json`.
4. Revisar la URL de prueba y después configurar el dominio propio.
5. Configurar `siteUrl` y volver a desplegar.
