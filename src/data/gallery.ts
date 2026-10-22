import type { ImageMetadata } from 'astro';

import sandaliasXv01 from '../assets/images/sandalias-xv-anos-01.jpg';
import sandaliasBoda01 from '../assets/images/sandalias-boda-01.jpg';
import sandaliasBoda02 from '../assets/images/sandalias-boda-02.jpg';
import sandaliasCumple01 from '../assets/images/sandalias-cumpleanos-01.jpg';
import pantuflasBoda01 from '../assets/images/pantuflas-boda-01.jpg';
import pantuflasBoda02 from '../assets/images/pantuflas-boda-02.jpg';
import pantuflasXv01 from '../assets/images/pantuflas-xv-anos-01.jpg';
import pantuflasXv02 from '../assets/images/pantuflas-xv-anos-02.jpg';

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
    id: 'sandalias-boda-02',
    src: sandaliasBoda02,
    alt: 'Sandalias personalizadas para una boda',
    categories: ['bodas'],
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
];

export const heroImage = galleryItems.find((item) => item.featured) ?? galleryItems[0];

export function findGalleryItem(id: string): GalleryItem {
  const item = galleryItems.find((entry) => entry.id === id);
  if (!item) throw new Error(`Imagen de galería no encontrada: ${id}`);
  return item;
}
