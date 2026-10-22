# CLAUDE.md --- Sandalias y Pantuflas para Evento

## 1. Propósito del proyecto

Desarrollar una página web empresarial, elegante, rápida y adaptable
para un negocio dedicado a la venta de sandalias y pantuflas
personalizadas para eventos, además de otros productos para
celebraciones.

La página debe presentar el negocio y sus productos, mostrar fotografías
reales de trabajos anteriores y facilitar que las personas soliciten
información o una cotización por WhatsApp.

**Nombre comercial actual:** `Sandalias y Pantuflas para Evento`
(provisional; no asumir que es el nombre definitivo).

**Objetivo principal:** convertir visitas en conversaciones de WhatsApp.

**Objetivos secundarios:** - Mostrar los productos y trabajos realizados
de forma atractiva. - Transmitir confianza mediante una presentación
breve del negocio. - Permitir explorar fotografías filtrándolas por tipo
de evento. - Facilitar el acceso a la página de Facebook del negocio. -
Tener una base sencilla de mantener y publicar con dominio propio.

Este documento es la fuente de verdad para las decisiones técnicas y de
producto. Si una decisión no está especificada, elegir la alternativa
más sencilla, accesible, segura y mantenible, sin inventar datos
comerciales.

## 2. Reglas importantes para Claude

1.  Lee este archivo completo antes de implementar cambios.
2.  No inventes el número de WhatsApp, precios, ubicación, horarios,
    experiencia, tiempos de entrega, cantidades mínimas, políticas
    comerciales ni afirmaciones sobre la calidad.
3.  Usa valores configurables y marcadores explícitos para la
    información pendiente.
4.  No sustituyas fotografías reales del negocio por imágenes generadas
    o de stock en la versión final. Si las fotos reales todavía no están
    integradas, usa placeholders locales claramente identificados y
    documenta qué imágenes faltan.
5.  No agregues funciones que no se hayan solicitado, como carrito,
    pagos en línea, cuentas de usuario, base de datos o panel
    administrativo.
6.  No añadas dependencias si la plataforma nativa o Astro pueden
    resolverlo de forma sencilla.
7.  Mantén el diseño visual aprobado: elegante, sofisticado, cálido,
    editorial y centrado en las fotografías.
8.  Evita cambios destructivos y no sobrescribas trabajo existente sin
    revisarlo.
9.  Ejecuta las comprobaciones disponibles después de los cambios y
    reporta honestamente sus resultados.
10. No afirmes que el dominio está disponible, que el sitio está
    desplegado o que las pruebas pasan si no se verificó.

## 3. Público y propuesta de valor

Público objetivo: personas que organizan bodas, XV años, graduaciones,
cumpleaños y otras fiestas y que buscan sandalias o pantuflas
personalizadas para su evento.

La página debe ayudar al visitante a responder rápidamente: - ¿Qué
productos ofrece el negocio? - ¿Para qué tipos de evento pueden
servir? - ¿Cómo son los trabajos anteriores? - ¿Cómo puedo pedir
información o cotizar?

Tono de comunicación: amable, claro, profesional y cercano. Evitar
frases exageradas, afirmaciones no verificadas y lenguaje demasiado
corporativo.

## 4. Identidad visual aprobada

### 4.1 Paleta de colores

Usar estos valores como punto de partida consistente:

-   Marfil / fondo principal: `#F8F5EF`
-   Arena: `#E4D5C2`
-   Champán / acento: `#A68B70`
-   Café oscuro / texto y elementos principales: `#302A26`
-   Blanco: `#FFFFFF`
-   Color de texto secundario: elegir un tono con contraste suficiente
    frente al fondo, validándolo con herramientas de accesibilidad.

No usar el champán claro como texto pequeño sobre marfil si no alcanza
el contraste requerido. Priorizar legibilidad sobre estética.

### 4.2 Dirección de diseño

-   Estética elegante, sofisticada, cálida y editorial.
-   Espacios en blanco generosos y jerarquía visual clara.
-   Títulos con una tipografía serif elegante y textos de interfaz con
    una sans-serif legible.
-   Fotografías grandes y de alta calidad como protagonistas.
-   Bordes discretos, sombras sutiles y animaciones limitadas.
-   Evitar exceso de adornos dorados, degradados llamativos, sombras
    pesadas y efectos innecesarios.
-   Mantener consistencia entre botones, tarjetas, filtros, navegación y
    enlaces.
-   Respetar `prefers-reduced-motion`.
-   Diseño responsive para móvil, tableta y escritorio.

### 4.3 Fotografía

El negocio cuenta con muchas fotografías de trabajos anteriores. Las
fotografías reales deben ser la fuente principal de imágenes.

-   No usar imágenes externas remotas como contenido permanente de la
    galería.
-   No hotlinkear fotografías de otras páginas.
-   Organizar los archivos locales con nombres descriptivos, en
    minúsculas y sin espacios, por ejemplo
    `sandalias-boda-marfil-01.webp`.
-   Optimizar imágenes y usar WebP o AVIF cuando el flujo de trabajo lo
    permita; conservar originales fuera de los assets optimizados.
-   Proporcionar dimensiones explícitas o `aspect-ratio` para evitar
    saltos de diseño.
-   Añadir texto alternativo útil y contextual; si una imagen es
    puramente decorativa, usar alt vacío.
-   No inventar detalles de la imagen en el texto alternativo.
-   La imagen principal debe tener prioridad de carga; aplicar lazy
    loading a imágenes que estén fuera de la primera pantalla.
-   Confirmar que el negocio tenga permiso para publicar las fotografías
    y que no se expongan datos personales de clientes sin autorización.

## 5. Estructura y contenido de la página

La primera versión será una **landing page de una sola página**, con
navegación por anclas y secciones ordenadas.

### 5.1 Encabezado / navegación

-   Nombre provisional: `Sandalias y Pantuflas para Evento`.
-   Enlaces a Inicio, Productos, Galería, Nosotros y Contacto.
-   Navegación compacta en pantallas pequeñas, con botón accesible para
    abrir/cerrar el menú.
-   El menú móvil debe poder usarse con teclado, tener nombres
    accesibles y comunicar su estado expandido.
-   Evitar que la navegación fija tape el contenido al saltar a una
    sección; usar `scroll-margin-top` si corresponde.

### 5.2 Portada principal (hero)

Composición aprobada: **una fotografía grande con texto elegante**; no
usar un collage como portada principal.

Contenido inicial editable: - Etiqueta:
`DETALLES PARA MOMENTOS ESPECIALES` - Título:
`Cada celebración merece un detalle único.` - Descripción:
`Sandalias y pantuflas personalizadas para acompañar tus momentos más especiales.` -
CTA principal: `Cotizar por WhatsApp`

Usar una fotografía real destacada del negocio. La imagen puede
colocarse al lado del texto en escritorio o en una composición apilada
en móvil, siempre manteniendo el carácter editorial. La elección final
debe privilegiar legibilidad y protagonismo del producto.

### 5.3 Productos

Mostrar tres grupos: 1. Sandalias personalizadas. 2. Pantuflas
personalizadas. 3. Otros productos para eventos.

Cada tarjeta debe incluir: - Fotografía real representativa. - Nombre
del grupo. - Descripción breve sin promesas no verificadas. - CTA que
abra WhatsApp con un mensaje relacionado con el producto.

No mostrar precios, tallas, materiales, opciones de personalización,
cantidades mínimas ni tiempos de entrega hasta que el dueño los
confirme.

### 5.4 Galería de trabajos

La galería debe tener filtros interactivos por tipo de evento: - Todos -
Bodas - XV años - Graduaciones - Cumpleaños y fiestas

Requisitos: - La opción "Todos" está seleccionada inicialmente. - Los
filtros actualizan las imágenes sin recargar la página. - Una imagen
puede tener más de una categoría si los datos la justifican. - Los
filtros deben ser accesibles por teclado y anunciar de manera
comprensible cuál está seleccionado. - Mostrar un estado vacío si una
categoría no tiene imágenes. - Al seleccionar una fotografía, abrir un
visor/lightbox accesible para ampliarla. - El visor debe permitir cerrar
con botón visible y tecla Escape; el foco debe administrarse
correctamente y no escapar del diálogo mientras esté abierto. - Si se
implementan controles de anterior/siguiente, deben tener etiquetas
accesibles y respetar el orden de la galería. - No cargar todos los
archivos en resolución original de forma innecesaria. - La cuadrícula
debe adaptarse al ancho disponible: normalmente dos columnas en móvil
cuando las imágenes se lean bien y tres o cuatro en pantallas grandes. -
Si JavaScript falla, el contenido principal de la galería debe seguir
siendo comprensible; evitar que toda la sección dependa de una
interacción compleja.

Categorías iniciales: - `bodas` - `xv-anos` - `graduaciones` -
`cumpleanos` - Se puede agregar `otros` para trabajos que no encajen en
las categorías principales.

Los filtros representan tipos de evento, no tipos de producto. Si en el
futuro se requiere filtrar por producto, documentarlo como ampliación
separada.

### 5.5 Sobre el negocio

La preferencia actual es una **presentación breve centrada en los
productos**, no una biografía extensa.

Usar un texto editable y prudente, por ejemplo: \> Creamos detalles
personalizados para acompañar celebraciones especiales. Explora nuestros
trabajos y contáctanos para conversar sobre las opciones para tu evento.

Este texto es una propuesta inicial que el dueño debe validar. No
afirmar años de experiencia, fabricación artesanal, producción local,
calidad premium, rapidez o garantías sin confirmación.

### 5.6 Contacto

-   Invitación clara a consultar o cotizar.
-   Botón principal de WhatsApp.
-   Enlace a la página de Facebook proporcionada.
-   No mostrar dirección, correo, horarios ni teléfono si no se han
    confirmado.
-   No crear formulario que almacene datos personales en esta primera
    versión.

Facebook oficial proporcionado:
`https://www.facebook.com/profile.php?id=100054371716727`

Abrir enlaces externos en una pestaña nueva solo si mejora la
experiencia; cuando se use `target="_blank"`, añadir
`rel="noopener noreferrer"`.

### 5.7 Pie de página

Incluir: - Nombre comercial provisional. - Navegación secundaria. -
Enlace a Facebook. - CTA o enlace de contacto. - Año actual generado
dinámicamente si resulta apropiado y compatible con el enfoque estático;
alternativamente, mantenerlo como valor fácil de actualizar.

No agregar enlaces de redes sociales que no estén confirmados.

## 6. WhatsApp y CTA

El número de WhatsApp está pendiente y lo configurará el propietario más
adelante. No inventar uno.

Crear una única configuración centralizada para: - Nombre del negocio. -
Número de WhatsApp en formato internacional solo con dígitos, sin `+`,
espacios ni guiones para formar el enlace. - URL de Facebook. - Mensajes
prellenados.

Usar un marcador explícito como `WHATSAPP_NUMBER: ""` y una validación
que impida generar un enlace `wa.me` inválido si está vacío. Mientras el
número no se haya configurado, los CTA deben mostrar un estado de
configuración pendiente en desarrollo o quedar ocultos/deshabilitados en
producción; nunca deben enlazar a un número ficticio.

Construir los enlaces usando `https://wa.me/NUMERO?text=...`,
codificando el texto con `encodeURIComponent`.

Mensaje inicial abierto aprobado:
`Hola, me gustaría obtener información sobre sus productos personalizados para un evento.`

Mensajes contextuales opcionales: - Sandalias:
`Hola, me gustaría obtener información sobre las sandalias personalizadas para un evento.` -
Pantuflas:
`Hola, me gustaría obtener información sobre las pantuflas personalizadas para un evento.` -
Otros productos:
`Hola, me gustaría conocer los productos que ofrecen para eventos.` -
Galería:
`Hola, vi uno de sus trabajos y me gustaría obtener información para mi evento.`

El mensaje debe seguir siendo abierto: no obligar a proporcionar tipo de
evento, fecha ni cantidad antes de poder conversar. No añadir un
formulario de cotización.

Crear una función helper centralizada para generar URLs de WhatsApp y
usarla en todos los componentes, evitando duplicar lógica.

## 7. Stack tecnológico aprobado

### Tecnologías principales

-   **Astro**: framework principal para generar una página estática
    rápida.
-   **TypeScript**: configuración y datos estructurados con tipos.
-   **Tailwind CSS**: sistema de estilos utilitario para implementar la
    identidad visual y responsive design.
-   **Lucide**: iconos SVG consistentes y ligeros, solo donde aporten
    claridad.
-   **Git y GitHub**: control de versiones y repositorio del proyecto.
-   **Cloudflare Pages**: opción preferida de despliegue para el sitio
    estático, sujeto a verificar compatibilidad, límites y configuración
    vigente cuando se publique.
-   **Dominio propio**: se elegirá y registrará después de revisar
    disponibilidad, precio inicial y renovación.

### Decisiones de arquitectura

-   Preferir componentes Astro para el contenido estático.
-   Usar JavaScript del lado del cliente únicamente donde haga falta:
    filtros de galería, visor de imágenes y menú móvil.
-   No añadir React en la primera versión; Astro con JavaScript nativo
    es suficiente para la interacción prevista.
-   No usar base de datos, API, backend, autenticación ni CMS en la
    primera versión.
-   No añadir una librería de animación, carrusel o lightbox pesada si
    una implementación accesible y pequeña puede cubrir los requisitos.
-   Evitar dependencias que requieran mantenimiento sin aportar valor
    claro.

Las versiones concretas de dependencias deben ser las versiones estables
compatibles disponibles al crear el proyecto. Guardar el lockfile del
gestor de paquetes. No fijar versiones inventadas en este documento.

## 8. Arquitectura sugerida

Una estructura inicial posible:

``` text
sandalias-web/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── sandalias/
│   │   ├── pantuflas/
│   │   └── eventos/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest       # solo si se decide mantenerlo
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── MobileMenu.astro
│   │   ├── Hero.astro
│   │   ├── ProductCard.astro
│   │   ├── Products.astro
│   │   ├── Gallery.astro
│   │   ├── GalleryFilters.astro
│   │   ├── Lightbox.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── WhatsAppLink.astro
│   │   └── Footer.astro
│   ├── config/
│   │   └── site.ts
│   ├── data/
│   │   └── gallery.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── tests/                     # si se incorpora una herramienta de pruebas
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json          # si se usa npm
├── tsconfig.json
├── README.md
└── CLAUDE.md
```

Esta estructura es una guía, no una obligación de crear componentes
vacíos. Mantener la solución simple y evitar fragmentar elementos
triviales. Si la estructura generada por Astro cambia según la versión
estable, respetar la configuración oficial vigente.

### 8.1 Configuración centralizada

`src/config/site.ts` debe contener los valores editables del negocio,
por ejemplo: - `siteName` - `siteDescription` - `whatsappNumber` -
`facebookUrl` - `siteUrl` (pendiente hasta definir dominio) -
`contactMessage`

Los datos faltantes deben tener un valor vacío, `undefined` o un
marcador explícito claramente identificado. No deben propagarse valores
falsos a producción.

### 8.2 Datos de la galería

Mantener las fotografías y sus metadatos en una estructura tipada
centralizada. Cada elemento debe incluir, según corresponda: - `id`
estable. - `src` local. - `alt` descriptivo. - `categories` como lista
de categorías permitidas. - `featured` opcional para destacar
trabajos. - `productType` opcional si es útil para contenido futuro.

Validar que cada ruta de imagen exista y que las categorías sean
válidas. No almacenar datos personales innecesarios en los metadatos.

## 9. Convenciones de desarrollo

-   Utilizar TypeScript donde aporte seguridad de tipos.
-   Preferir nombres descriptivos en inglés para archivos, componentes y
    variables; el contenido visible al usuario debe estar en español.
-   Componentes Astro con nombres en PascalCase.
-   Usar una única fuente de verdad para colores, configuración
    comercial, URLs y mensajes de contacto.
-   Evitar componentes monolíticos; separar secciones cuando mejore la
    legibilidad o la reutilización.
-   No duplicar lógica de WhatsApp, navegación o filtros.
-   Mantener la semántica HTML correcta: `header`, `nav`, `main`,
    `section`, `footer`, botones para acciones y enlaces para
    navegación.
-   No usar elementos clicables no semánticos como sustitutos de botones
    o enlaces.
-   No usar `any` sin una razón clara y documentada.
-   No dejar `console.log`, código muerto, imports sin usar ni TODOs que
    no estén documentados.
-   Mantener los textos comerciales y datos de contacto fuera de los
    componentes cuando sea razonable.
-   No guardar secretos en el frontend ni en el repositorio.
-   No es necesario usar variables de entorno para el número de WhatsApp
    en una web pública estática, pero sí centralizar la configuración.
    Recordar que cualquier valor incluido en el bundle público será
    visible para los visitantes.
-   Actualizar este documento si una decisión de arquitectura cambia de
    forma deliberada.

## 10. Requisitos responsive

Diseñar desde móvil y ampliar a pantallas mayores.

-   Evitar scroll horizontal en todos los tamaños comunes.
-   Menú móvil con control visible, accesible y con estado correcto.
-   Imágenes con `width: 100%`, proporciones definidas y `object-fit`
    adecuado.
-   Tarjetas de productos que se apilen en móvil y se distribuyan en
    columnas en escritorio.
-   Galería con dos columnas en móvil cuando el contenido lo permita;
    tres o cuatro en escritorio.
-   Botones suficientemente grandes para interacción táctil.
-   CTA de WhatsApp accesible sin cubrir texto, imágenes, controles ni
    pie de página.
-   Tipografía fluida con límites razonables; evitar títulos que
    desborden.
-   Probar en anchuras de aproximadamente 320, 375, 768, 1024 y 1440
    píxeles.
-   Comprobar orientación vertical y horizontal en móvil.

## 11. Accesibilidad

Buscar conformidad práctica con WCAG 2.2 nivel AA en los componentes que
implementemos.

-   Contraste suficiente para texto normal, texto grande, controles y
    estados.
-   Navegación completa por teclado.
-   Indicadores de foco visibles.
-   Orden de tabulación lógico.
-   Estructura correcta de encabezados sin saltos arbitrarios.
-   Texto alternativo útil para fotografías de productos.
-   Etiquetas accesibles en botones de icono.
-   Filtros con estado seleccionado comunicable mediante tecnología
    asistiva.
-   El visor de imágenes debe gestionar foco, Escape y cierre accesible.
-   No comunicar estados únicamente con color.
-   Respetar `prefers-reduced-motion`.
-   Enlaces externos y botones deben explicar su propósito.
-   No usar animaciones que distraigan o impidan interactuar.
-   Revisar contraste con una herramienta automatizada y comprobar
    manualmente teclado y lector de pantalla cuando sea posible.

## 12. SEO y metadatos

Incluir: - Un único título principal (`h1`) claro. - Título SEO único y
descripción meta en español. - `lang="es-MX"` en el documento. - URLs
canónicas cuando se conozca el dominio definitivo. - Open Graph básico
para compartir la página, con una imagen real optimizada cuando esté
disponible. - Favicon. - `robots.txt` apropiado para el entorno
publicado. - Sitemap XML si corresponde a la configuración final; para
un sitio de una sola página puede generarse con una solución sencilla. -
Textos alternativos y nombres descriptivos de imágenes. - Contenido útil
que describa los productos y eventos sin repetir palabras clave
artificialmente. - Enlaces internos por anclas con nombres claros. - No
añadir datos estructurados de negocio con dirección, teléfono, horario o
valoraciones sin datos reales verificados. - No prometer posicionamiento
ni resultados de SEO. - `siteUrl` y canonical deben configurarse antes
de la publicación definitiva.

## 13. Rendimiento

-   Mantener la web estática y evitar JavaScript innecesario.
-   Optimizar las fotografías para web; no entregar imágenes enormes si
    no se requieren.
-   Definir dimensiones para evitar CLS (cambios de diseño durante la
    carga).
-   Lazy loading para imágenes fuera de la primera pantalla.
-   No aplicar lazy loading a la imagen principal si debe priorizarse.
-   Cargar fuentes de manera eficiente; preferir pocas familias y pocos
    pesos.
-   Evitar dependencias grandes para interacciones simples.
-   Minimizar solicitudes externas y evitar incrustaciones sociales
    pesadas.
-   Comprobar métricas Core Web Vitals con herramientas como Lighthouse
    o PageSpeed Insights después de publicar.
-   Establecer metas de rendimiento razonables y reportar resultados
    reales, no asumirlos.

## 14. Privacidad y seguridad

-   No recopilar datos personales mediante formularios en la primera
    versión.
-   No incorporar analítica, píxeles publicitarios ni cookies no
    esenciales sin una decisión explícita.
-   Los enlaces a WhatsApp abren un servicio externo y deben explicarse
    mediante una etiqueta clara.
-   No incrustar publicaciones de Facebook si un enlace sencillo es
    suficiente.
-   No incluir tokens, claves ni credenciales en el código fuente.
-   Mantener `.env` fuera del repositorio si se llegara a utilizar en
    herramientas locales.
-   Crear `.gitignore` para `node_modules/`, `dist/`, `.astro/`, `.env`,
    `.env.*` y archivos locales del editor, conservando las excepciones
    estándar necesarias como `.env.example` si existe.
-   Revisar los cambios antes de publicar para evitar archivos
    personales, originales privados o información accidental.
-   Si más adelante se incorpora un formulario o analítica, reevaluar
    aviso de privacidad y requisitos legales aplicables en México.

## 15. Pruebas y criterios de aceptación

Antes de considerar terminada la implementación, comprobar lo siguiente.

### Funcionalidad

-   Todos los enlaces de navegación llevan a la sección correcta.
-   El menú móvil abre y cierra correctamente y funciona con teclado.
-   Cada filtro de galería muestra solo las imágenes correspondientes.
-   "Todos" restaura la galería completa.
-   La galería tiene un estado vacío comprensible si no hay imágenes en
    una categoría.
-   El visor de imágenes abre y cierra correctamente, incluyendo la
    tecla Escape.
-   Todos los CTA usan el generador centralizado de WhatsApp.
-   El mensaje prellenado está codificado correctamente.
-   Si el número de WhatsApp no está configurado, no se crea un enlace
    inválido ni se muestra un número falso.
-   El enlace de Facebook apunta a la URL proporcionada.
-   No existen enlaces rotos, errores de consola ni recursos de imágenes
    faltantes.

### Visual y responsive

-   La portada conserva el diseño de fotografía grande con texto
    elegante.
-   La paleta y la tipografía son consistentes.
-   Las imágenes se ven correctamente recortadas y no se deforman.
-   La página funciona a 320 px y en tamaños de escritorio amplios.
-   No hay desbordamiento horizontal ni botones tapados por el CTA
    flotante.

### Calidad

-   La compilación de producción termina sin errores.
-   Las comprobaciones de TypeScript disponibles pasan.
-   Las pruebas automatizadas que se hayan configurado pasan.
-   Lighthouse o una herramienta equivalente se ejecuta y sus resultados
    se revisan.
-   Accesibilidad básica comprobada con teclado y revisión de contraste.
-   Metadatos y enlaces sociales revisados.
-   La página se revisa en al menos un navegador Chromium y otro
    navegador cuando sea posible.

No afirmar que las comprobaciones pasan sin haberlas ejecutado. Si no
hay infraestructura de pruebas configurada, documentar qué se verificó
manualmente y qué falta.

## 16. Comandos de desarrollo

Los comandos exactos deben coincidir con `package.json`. En una
configuración típica con npm y Astro, se espera algo similar a:

``` bash
npm install
npm run dev
npm run build
npm run preview
```

Si se añade un script de comprobación de tipos, pruebas o lint,
documentarlo en el `README.md` y usarlo antes de finalizar cambios. No
añadir herramientas de lint o pruebas automáticamente sin evaluar su
utilidad y configuración.

## 17. Git y control de versiones

-   Inicializar Git si el proyecto aún no tiene repositorio.
-   Crear un `.gitignore` apropiado antes del primer commit.
-   No subir `node_modules`, `dist`, `.astro`, `.env` ni archivos
    privados.
-   Utilizar mensajes de commit claros, por ejemplo:
    -   `feat: add responsive landing page layout`
    -   `feat: implement event gallery filters`
    -   `feat: add WhatsApp contact links`
    -   `fix: improve mobile navigation accessibility`
    -   `docs: document deployment process`
-   No reescribir historia compartida ni ejecutar comandos destructivos
    sin autorización.
-   No publicar el repositorio ni el sitio sin que el propietario decida
    qué contenido será público.

## 18. Despliegue y dominio propio

El destino preferido es Cloudflare Pages para el sitio estático, sujeto
a comprobar la documentación y disponibilidad vigentes al momento del
despliegue.

Proceso esperado: 1. Verificar localmente el build de producción. 2.
Crear o elegir un repositorio de GitHub. 3. Configurar el despliegue
desde el repositorio. 4. Confirmar el comando de build y la carpeta de
salida generada por Astro (normalmente `dist` en la configuración
estática). 5. Desplegar primero una URL de prueba. 6. Verificar la
página publicada, enlaces, imágenes, filtros, WhatsApp y Facebook. 7.
Elegir un dominio después de revisar disponibilidad, precio inicial,
renovación y condiciones del registrador. 8. Configurar el dominio
personalizado según las instrucciones oficiales del proveedor. 9.
Configurar HTTPS y comprobar la resolución DNS. 10. Actualizar
`siteUrl`, canonical, Open Graph y sitemap con el dominio real. 11.
Hacer una comprobación final desde celular y computadora.

No comprar un dominio, modificar DNS ni publicar información privada sin
aprobación del propietario. No asumir que un nombre de dominio está
disponible hasta comprobarlo en el registrador.

## 19. Datos pendientes

Mantener estos datos como pendientes hasta recibir confirmación:

-   Nombre comercial definitivo: pendiente. El nombre actual es
    provisional.
-   Número de WhatsApp: pendiente; el propietario lo configurará.
-   Dominio: pendiente de elección y comprobación de disponibilidad.
-   Fotografías definitivas para portada y galería: seleccionar entre
    los archivos reales del negocio.
-   Texto final de presentación del negocio: pendiente de validación.
-   Detalles específicos de productos, materiales, tallas,
    personalizaciones y precios: no confirmados.
-   Horarios, ubicación, correo y condiciones de entrega: no
    confirmados.
-   Otros perfiles sociales: no confirmados; Facebook sí está
    disponible.
-   Aviso de privacidad: evaluar según el contenido final y las
    funciones implementadas.

Facebook proporcionado:
`https://www.facebook.com/profile.php?id=100054371716727`

## 20. Fuera del alcance de la primera versión

No implementar sin aprobación adicional: - Tienda en línea, carrito o
pagos. - Registro de clientes o cuentas de usuario. - Base de datos o
backend. - Panel administrativo/CMS. - Sistema de pedidos, inventario o
seguimiento. - Formularios que almacenen datos. - Integraciones de
analítica o publicidad. - Chat en vivo. - Precios o cotizadores
automáticos. - Multiidioma. - PWA o funcionamiento offline.

## 21. Entregables finales

Al terminar el desarrollo, entregar: 1. Código fuente organizado. 2.
Página responsive con todas las secciones aprobadas. 3. Galería con
filtros por tipo de evento y visor accesible. 4. Enlaces de WhatsApp
preparados para configurar el número. 5. Enlace de Facebook integrado.
6. SEO básico, metadatos y favicon. 7. `.gitignore` apropiado. 8.
`README.md` con instalación, desarrollo, configuración y despliegue. 9.
Este `CLAUDE.md` actualizado si las decisiones cambian. 10. Resumen de
pruebas ejecutadas, resultados y pendientes. 11. Instrucciones para
configurar el número de WhatsApp, seleccionar el dominio y publicar el
sitio.

## 22. Orden recomendado de implementación

1.  Inspeccionar el repositorio y verificar el entorno actual.
2.  Inicializar o ajustar Astro, TypeScript y Tailwind CSS.
3.  Crear la configuración central del sitio y los datos tipados de la
    galería.
4.  Implementar layout, tipografía, paleta y navegación.
5.  Construir la portada editorial y las tarjetas de productos.
6.  Implementar filtros de galería y visor de imágenes accesible.
7.  Añadir presentación breve, contacto, WhatsApp y Facebook.
8.  Incorporar fotografías reales y optimizarlas.
9.  Añadir metadatos SEO, favicon y `robots.txt`.
10. Ejecutar build, comprobaciones y pruebas responsive/accesibilidad.
11. Corregir problemas y revisar enlaces.
12. Documentar el resultado en `README.md` y preparar el despliegue.
13. Publicar solo después de aprobación y de configurar los datos
    reales.

**Criterio de finalización:** la página debe ser visualmente coherente
con el diseño aprobado, rápida, accesible, responsive, fácil de mantener
y funcional sin depender de datos comerciales inventados.
