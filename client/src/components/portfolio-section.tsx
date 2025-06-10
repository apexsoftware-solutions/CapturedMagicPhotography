import { useState } from "react";
import { Search, Heart, Users, Baby, Mountain, Blocks, Camera } from "lucide-react";

import image1 from "@assets/Family Session (1)_1749518229765.jpg";
import image2 from "@assets/Family Session (2)_1749518229765.jpg";
import image3 from "@assets/Family Session (3)_1749518229765.jpg";
import image4 from "@assets/Family Session DSC07537_1749518229765.jpg";
import image5 from "@assets/Family Session DSC08301_1749518229765.jpg";
import image6 from "@assets/Family Session_1749518229765.jpg";

const portfolioImages = [
  {
    src: image1,
    alt: "Romantic couple session in golden field at sunset",
    category: "Romantic Session",
    icon: Heart,
  },
  {
    src: image2,
    alt: "Beautiful rural landscape with silo at golden hour",
    category: "Landscape",
    icon: Mountain,
  },
  {
    src: image3,
    alt: "Serene countryside field at dusk",
    category: "Landscape",
    icon: Mountain,
  },
  {
    src: image4,
    alt: "Artistic black and white family portrait walking in field",
    category: "Artistic",
    icon: Camera,
  },
  {
    src: image5,
    alt: "Golden rural landscape with silo",
    category: "Landscape",
    icon: Mountain,
  },
  {
    src: image6,
    alt: "Sweet child portrait in natural outdoor setting",
    category: "Children",
    icon: Blocks,
  },
];

interface PortfolioSectionProps {
  onImageClick: (src: string, alt: string) => void;
}

export default function PortfolioSection({ onImageClick }: PortfolioSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-accent/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl lg:text-6xl text-primary mb-6">
            Portfolio
          </h2>
          <p className="font-serif text-xl text-foreground max-w-3xl mx-auto">
            A collection of treasured moments, from intimate family sessions to romantic wedding celebrations
          </p>
        </div>

        <div className="mb-20">
          <h3 className="font-script text-3xl text-primary mb-8 text-center">Featured Work</h3>

          {/* Main Featured Image */}
          <div className="mb-12">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
              onClick={() => onImageClick(portfolioImages[0].src, portfolioImages[0].alt)}
            >
              <img
                src={portfolioImages[0].src}
                alt={portfolioImages[0].alt}
                className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 photo-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Search className="mx-auto text-3xl mb-2" size={32} />
                  <p className="font-serif text-lg">{portfolioImages[0].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => onImageClick(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 photo-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <image.icon className="mx-auto text-2xl mb-1" size={24} />
                    <p className="font-serif">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-full font-serif text-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}
