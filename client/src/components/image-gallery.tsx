import { useState } from "react";
import image1 from "@assets/Brielle Enhanced NR (4)_1749518229764.jpg";
import image2 from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";
import image3 from "@assets/Family Session DSC07537_1749518229765.jpg";
import image4 from "@assets/Brielle Enhanced NR (3)_1749518229764.jpg";
import image5 from "@assets/Family Session (2)_1749518229765.jpg";
import image6 from "@assets/test5_1749524606286.jpeg";

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
  },
  {
    src: image6,
    alt: "professional family photography session"
  }
];

interface ImageGalleryProps {
  onImageClick?: (src: string, alt: string) => void;
}

export default function ImageGallery({ onImageClick }: ImageGalleryProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-8 gap-1 auto-rows-[150px]">
          {/* Row 1 */}
          {/* Image 1 - Large square */}
          <div
            className="col-span-3 row-span-2 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[0].src, galleryImages[0].alt)}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 2 - Medium rectangle */}
          <div
            className="col-span-2 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[1].src, galleryImages[1].alt)}
          >
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 3 - Tall rectangle */}
          <div
            className="col-span-3 row-span-3 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[2].src, galleryImages[2].alt)}
          >
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Row 2 continues */}
          {/* Image 4 - Small square */}
          <div
            className="col-span-1 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[3].src, galleryImages[3].alt)}
          >
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 5 - Small square */}
          <div
            className="col-span-1 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[4].src, galleryImages[4].alt)}
          >
            <img
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Row 3 */}


          

          {/* Row 4 */}
          {/* Image 2 repeated */}
          <div
            className="col-span-3 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[1].src, galleryImages[1].alt)}
          >
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}