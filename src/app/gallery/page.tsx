import CTA from "@/components/gallery/CTA";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import Hero from "@/components/gallery/Hero";
import PhotoGallery from "@/components/gallery/PhotoGallery";



export default function GalleryPage() {
  return (
    <main>
      <Hero />
      <GalleryCategories />
      <PhotoGallery />
      <CTA />
    </main>
  );
}