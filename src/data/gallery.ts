import type { ImageMetadata } from 'astro';

import sandaliasXv01 from '../assets/images/sandalias-xv-anos-01.jpg';
import sandaliasBoda01 from '../assets/images/sandalias-boda-01.jpg';
import sandaliasBoda03 from '../assets/images/sandalias-boda-03.jpg';
import sandaliasXv02 from '../assets/images/sandalias-xv-anos-02.jpg';
import sandaliasCumple01 from '../assets/images/sandalias-cumpleanos-01.jpg';
import pantuflasBoda01 from '../assets/images/pantuflas-boda-01.jpg';
import pantuflasBoda02 from '../assets/images/pantuflas-boda-02.jpg';
import pantuflasBoda03 from '../assets/images/pantuflas-boda-03.jpg';
import pantuflasXv01 from '../assets/images/pantuflas-xv-anos-01.jpg';
import pantuflasXv02 from '../assets/images/pantuflas-xv-anos-02.jpg';
import pantufla01 from '../assets/images/pantufla-01.jpg';
import pantufla02 from '../assets/images/pantufla-02.jpg';

export const galleryCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'xv-anos', label: 'XV años' },
  { id: 'graduaciones', label: 'Graduaciones' },
  { id: 'cumpleanos', label: 'Cumpleaños y fiestas' },
] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number]['id'], 'todos'> | 'otros';
export type ProductType = 'sandalias' | 'pantuflas' | 'otros';

export interface GalleryItem {
  id: string;
  src: ImageMetadata;
  alt: string;
  categories: GalleryCategory[];
  productType?: ProductType;
  featured?: boolean;
}

/**
 * Fotografías reales del negocio. Orden alternado: sandalia, pantufla.
 * Los textos alternativos evitan nombres de clientes por privacidad.
 * Nota: la foto de "XVI años" se clasifica en Cumpleaños y fiestas.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'sandalias-xv-anos-01',
    src: sandaliasXv01,
    alt: 'Sandalias blancas personalizadas con letras doradas para unos XV años, sobre una mesa decorada con rosas y velas',
    categories: ['xv-anos'],
    productType: 'sandalias',
    featured: true,
  },
  {
    id: 'pantuflas-boda-01',
    src: pantuflasBoda01,
    alt: 'Pantuflas negras con moño e iniciales personalizadas para una boda, sobre una mesa de madera',
    categories: ['bodas'],
    productType: 'pantuflas',
  },
  {
    id: 'sandalias-boda-01',
    src: sandaliasBoda01,
    alt: 'Sandalias personalizadas para una boda',
    categories: ['bodas'],
    productType: 'sandalias',
  },
  {
    id: 'pantuflas-boda-02',
    src: pantuflasBoda02,
    alt: 'Pantuflas personalizadas para una boda',
    categories: ['bodas'],
    productType: 'pantuflas',
  },
  {
    id: 'sandalias-boda-03',
    src: sandaliasBoda03,
    alt: 'Sandalias blancas personalizadas con iniciales y nombres para una boda',
    categories: ['bodas'],
    productType: 'sandalias',
  },
  {
    id: 'pantuflas-boda-03',
    src: pantuflasBoda03,
    alt: 'Pantuflas blancas personalizadas con diseño de novios para una boda',
    categories: ['bodas'],
    productType: 'pantuflas',
  },
  {
    id: 'sandalias-xv-anos-02',
    src: sandaliasXv02,
    alt: 'Sandalias blancas con tiras doradas personalizadas para unos XV años',
    categories: ['xv-anos'],
    productType: 'sandalias',
  },
  {
    id: 'pantuflas-xv-anos-01',
    src: pantuflasXv01,
    alt: 'Pantuflas personalizadas para unos XV años',
    categories: ['xv-anos'],
    productType: 'pantuflas',
  },
  {
    id: 'sandalias-cumpleanos-01',
    src: sandaliasCumple01,
    alt: 'Sandalias personalizadas para una fiesta de cumpleaños',
    categories: ['cumpleanos'],
    productType: 'sandalias',
  },
  {
    id: 'pantuflas-xv-anos-02',
    src: pantuflasXv02,
    alt: 'Pantuflas personalizadas para unos XV años',
    categories: ['xv-anos'],
    productType: 'pantuflas',
  },
  {
    id: 'pantufla-01',
    src: pantufla01,
    alt: 'Pantuflas negras con diseño de moño elegante para eventos',
    categories: ['bodas', 'xv-anos'],
    productType: 'pantuflas',
  },
  {
    id: 'pantufla-02',
    src: pantufla02,
    alt: 'Pantuflas blancas de toalla con moño para eventos y descanso',
    categories: ['bodas', 'xv-anos'],
    productType: 'pantuflas',
  },
];

/**
 * Filtros que se muestran en la galería: "Todos" más las categorías con al menos una foto.
 * Una categoría vacía (p. ej. Graduaciones) aparece sola en cuanto se le agregue una foto.
 */
export const visibleGalleryCategories = galleryCategories.filter(
  (cat) => cat.id === 'todos' || galleryItems.some((item) => item.categories.includes(cat.id)),
);

/** Ancho máximo de la versión ampliada del visor. */
export const LIGHTBOX_WIDTH = 1280;

/**
 * Quita los anchos mayores que la foto original (evita generar archivos duplicados)
 * y agrega el ancho original si quedó por debajo del mayor solicitado.
 */
export function fitWidths(src: ImageMetadata, widths: number[]): number[] {
  const fitting = widths.filter((w) => w < src.width);
  if (fitting.length < widths.length) fitting.push(src.width);
  return fitting;
}

export const heroImage =galleryItems.find((item) => item.featured) ?? galleryItems[0];

export function findGalleryItem(id: string): GalleryItem {
  const item = galleryItems.find((entry) => entry.id === id);
  if (!item) throw new Error(`Imagen de galería no encontrada: ${id}`);
  return item;
}
