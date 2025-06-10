import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ImageGallery from "@/components/image-gallery";
import IntroSection from "@/components/intro-section";
import AboutSection from "@/components/about-section";
import FullWidthSection from "@/components/full-width-section";
import ServicesSection from "@/components/services-section";
import CollageSection from "@/components/collage-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LightboxModal from "@/components/lightbox-modal";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "", isOpen: false });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt, isOpen: true });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage({ src: "", alt: "", isOpen: false });
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ImageGallery onImageClick={openLightbox} />
      <IntroSection />
      <AboutSection />
      <FullWidthSection />
      <ServicesSection />
      <CollageSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Custom Lightbox */}
      {lightboxImage.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors duration-300 z-10"
            >
              ×
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
