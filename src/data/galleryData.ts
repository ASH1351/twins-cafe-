export interface GalleryItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  category: 'exterior' | 'menu' | 'ambience' | 'culinary' | 'placeholder';
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
  isAuthenticAsset: boolean;
  badge: string;
  aspect?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-storefront',
    title: 'Storefront & Al Fresco Patio',
    bengaliTitle: 'ক্যাফে এন্ট্রান্স ও আউটডোর সিটিং',
    category: 'exterior',
    categoryLabel: 'Authentic Storefront',
    src: '/images/twins_cafe_storefront.png',
    alt: 'Real storefront of TWINS CAFE & RESTAURANT with black and gold signage and outdoor seating in City Center Durgapur',
    description: 'Actual photograph showcasing the prominent golden TWINS CAFE & RESTAURANT signage, modern full-height glass frontage, cozy outdoor umbrella seating, and floral balcony.',
    isAuthenticAsset: true,
    badge: 'Verified Storefront Asset',
    aspect: 'col-span-12 md:col-span-8 aspect-[16/10]'
  },
  {
    id: 'gallery-menu-card',
    title: 'Original In-House Menu Card',
    bengaliTitle: 'অরিজিনাল মেনু কার্ড',
    category: 'menu',
    categoryLabel: 'Authentic Menu Card',
    src: '/images/twins_cafe_menu_original.png',
    alt: 'Real printed menu photograph of Twins Cafe & Restaurant showing Chinese Soups and Main Courses',
    description: 'Actual high-resolution photograph of the cafe’s physical printed menu card detailing authentic prices for Chinese Soups (Sweet Corn, Hot & Sour, Manchow) and Main Courses.',
    isAuthenticAsset: true,
    badge: 'Verified Menu Asset',
    aspect: 'col-span-12 md:col-span-4 aspect-[4/5]'
  },
  {
    id: 'gallery-outdoor-detail',
    title: 'Outdoor Patio Dining Ambience',
    bengaliTitle: 'আউটডোর প্যাটিও ডাইনিং',
    category: 'ambience',
    categoryLabel: 'Cafe Architecture',
    src: '/images/twins_cafe_storefront.png',
    alt: 'Outdoor dining tables with umbrella shade and red patterned round tables',
    description: 'Detailed view of the welcoming outdoor patio setup with red circular tables, comfortable ergonomic chairs, and shaded umbrella canopies for pleasant Durgapur evenings.',
    isAuthenticAsset: true,
    badge: 'Authentic Exterior Feature',
    aspect: 'col-span-12 md:col-span-6 aspect-[16/11]'
  },
  {
    id: 'gallery-interior-vibe',
    title: 'Artistic Murals & Indoor Seating',
    bengaliTitle: 'আধুনিক অন্দরমহল ও শিল্পকর্ম',
    category: 'ambience',
    categoryLabel: 'Interior Atmosphere',
    src: '/images/twins_cafe_storefront.png',
    alt: 'Interior dining area visible through glass with musical and artistic wall mural',
    description: 'Inviting indoor dining room visible through the glass facade, highlighting the artistic piano and music wall art, cozy lighting, and contemporary seating arrangement.',
    isAuthenticAsset: true,
    badge: 'Authentic Interior View',
    aspect: 'col-span-12 md:col-span-6 aspect-[16/11]'
  }
];
