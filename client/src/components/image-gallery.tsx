import { useState } from "react";
import image1 from "@assets/Brielle Enhanced NR (4)_1749518229764.jpg";
import image2 from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";
import image3 from "@assets/Family Session DSC07537_1749518229765.jpg";
import image4 from "@assets/Brielle Enhanced NR (3)_1749518229764.jpg";
import image5 from "@assets/Family Session (2)_1749518229765.jpg";

const galleryImages = [
  {
    src: image1,
    alt: "motherhood photoshoot of a mum with her baby"
  },
  {
    src: image2,
    alt: "intimate newborn photography session"
  },
  {
    src: image3,
    alt: "artistic black and white family portrait"
  },
  {
    src: image4,
    alt: "gentle newborn session with delicate details"
  },
  {
    src: image5,
    alt: "beautiful rural landscape at golden hour"
  }
];

interface ImageGalleryProps {
  onImageClick?: (src: string, alt: string) => void;
}

export default function ImageGallery({ onImageClick }: ImageGalleryProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden cursor-pointer group"
              onClick={() => onImageClick?.(image.src, image.alt)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}