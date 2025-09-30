import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ImageGallery, { slideshowImages } from "@/components/image-gallery";
import IntroSection from "@/components/intro-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CollageSection from "@/components/collage-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LightboxModal from "@/components/lightbox-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "", isOpen: false, index: 0 });

  const openLightbox = (src: string, alt: string, index: number) => {
    setLightboxImage({ src, alt, isOpen: true, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage({ src: "", alt: "", isOpen: false, index: 0 });
    document.body.style.overflow = "auto";
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = lightboxImage.index === 0 ? slideshowImages.length - 1 : lightboxImage.index - 1;
    setLightboxImage({
      src: slideshowImages[newIndex].src,
      alt: slideshowImages[newIndex].alt,
      isOpen: true,
      index: newIndex
    });
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (lightboxImage.index + 1) % slideshowImages.length;
    setLightboxImage({
      src: slideshowImages[newIndex].src,
      alt: slideshowImages[newIndex].alt,
      isOpen: true,
      index: newIndex
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ImageGallery onImageClick={openLightbox} />
      <IntroSection />
      <AboutSection />
      <CollageSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Custom Lightbox */}
      {lightboxImage.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full w-full p-4 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors duration-300 z-10"
              data-testid="button-close-lightbox"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300 z-10"
              data-testid="button-previous-lightbox"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            {/* Image */}
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300 z-10"
              data-testid="button-next-lightbox"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              {lightboxImage.index + 1} / {slideshowImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
