import { useState } from "react";
import { X } from "lucide-react";
import PortfolioSection from "./portfolio-section";

export default function LightboxModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <>
      {/* Render PortfolioSection with lightbox functionality */}
      <div style={{ display: "none" }}>
        <PortfolioSection onImageClick={openLightbox} />
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X size={32} />
            </button>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
