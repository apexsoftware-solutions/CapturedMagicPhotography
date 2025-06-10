import { useState } from "react";
import image1 from "@assets/Brielle Enhanced NR (4)_1749518229764.jpg";
import image2 from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";
import image3 from "@assets/Family Session DSC07537_1749518229765.jpg";
import image4 from "@assets/Brielle Enhanced NR (3)_1749518229764.jpg";
import image5 from "@assets/Family Session (2)_1749518229765.jpg";
import image6 from "@assets/test5_1749524606286.jpeg";
import familySessionNewImg from "@assets/Family Session_1749567960547.jpg";
import cherryBlossomImg from "@assets/Cherry Blossom Mini Session_1749568020409.jpg";
import autumnMiniImg from "@assets/Autumn Mini 2024_1749568024891.jpg";
import rainsFamilyImg from "@assets/Rains Family Photo 2024_1749568035923.jpg";

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
    src: familySessionNewImg,
    alt: "adorable child in green dress outdoor session"
  },
  {
    src: cherryBlossomImg,
    alt: "two children running through cherry blossoms"
  },
  {
    src: autumnMiniImg,
    alt: "intimate autumn mini session couple embrace"
  },
  {
    src: rainsFamilyImg,
    alt: "mother and daughter embrace golden hour"
  }
];

interface ImageGalleryProps {
  onImageClick?: (src: string, alt: string) => void;
}

export default function ImageGallery({ onImageClick }: ImageGalleryProps) {
  return (
    <section className="py-24">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-8 gap-2 auto-rows-[180px]">
          {/* Row 1 */}
          {/* Cherry Blossom - Featured large image */}
          <div
            className="col-span-4 row-span-2 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[6].src, galleryImages[6].alt)}
          >
            <img
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Family Session (child) - Portrait orientation */}
          <div
            className="col-span-2 row-span-3 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[5].src, galleryImages[5].alt)}
          >
            <img
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Brielle Enhanced - Small square */}
          <div
            className="col-span-2 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[0].src, galleryImages[0].alt)}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Row 2 */}
          {/* Newborn session - Medium rectangle */}
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

          {/* Family Session DSC - Medium rectangle */}
          <div
            className="col-span-2 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[2].src, galleryImages[2].alt)}
          >
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Row 3 */}
          {/* Rains Family - Large featured */}
          <div
            className="col-span-3 row-span-2 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[8].src, galleryImages[8].alt)}
          >
            <img
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Brielle Enhanced - Small square */}
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

          {/* Family Session - Small square */}
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

          {/* Row 4 */}
          {/* Autumn Mini Session - Medium rectangle */}
          <div
            className="col-span-3 row-span-1 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick?.(galleryImages[7].src, galleryImages[7].alt)}
          >
            <img
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}