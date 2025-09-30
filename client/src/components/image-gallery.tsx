import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import firstSlideImage from "@assets/first-slideshow-image.jpg";
import slide2 from "@assets/slideshow-img_9429.jpg";
import slide3 from "@assets/slideshow-img_9438.jpg";
import slide4 from "@assets/slideshow-img_9432.jpg";
import slide5 from "@assets/slideshow-img_9659.jpg";
import slide6 from "@assets/slideshow-img_9913.jpg";
import slide7 from "@assets/slideshow-img_9880.jpg";
import slide8 from "@assets/slideshow-img_9607.jpg";
import slide9 from "@assets/slideshow-img_9419.jpg";
import slide10 from "@assets/slideshow-img_9427.jpg";
import slide11 from "@assets/slideshow-img_9439.jpg";
import slide12 from "@assets/slideshow-img_9423.jpg";
import slide13 from "@assets/slideshow-img_9933.jpg";
import slide14 from "@assets/slideshow-img_9414.jpg";
import slide15 from "@assets/slideshow-img_9946.jpg";
import slide16 from "@assets/slideshow-img_9495.jpg";
import slide17 from "@assets/slideshow-img_9634.jpg";
import slide18 from "@assets/slideshow-img_9746.jpg";
import slide19 from "@assets/slideshow-img_9882.jpg";
import slide20 from "@assets/slideshow-img_9413.jpg";
import slide21 from "@assets/slideshow-img_9531.jpg";

interface SlideshowImage {
  src: string;
  alt: string;
}

// Slideshow photos
const slideshowImages: SlideshowImage[] = [
  {
    src: firstSlideImage,
    alt: "Beautiful family photography collage featuring candid moments of joy, laughter, and connection between parents and children in natural outdoor settings"
  },
  {
    src: slide2,
    alt: "Tender newborn photography collage showcasing intimate moments between parents and baby, peaceful sleeping portraits, and gentle family connections"
  },
  {
    src: slide3,
    alt: "Romantic couples and maternity photography in golden field settings with natural light and authentic emotional connections"
  },
  {
    src: slide4,
    alt: "Mother and children golden hour photography featuring playful moments, genuine laughter, and warm family connections in natural outdoor light"
  },
  {
    src: slide5,
    alt: "Family lifestyle photography collage with golden hour lighting, showcasing authentic moments between parents and children in beautiful natural settings"
  },
  {
    src: slide6,
    alt: "Joyful family photography with baby featuring celebration moments, tender embraces, and natural family dynamics in warm golden light"
  },
  {
    src: slide7,
    alt: "Maternity and family photography on country paths showcasing expectant families, sibling moments, and natural outdoor family connections"
  },
  {
    src: slide8,
    alt: "Family photography session with architectural elements featuring father-child bonds, family group portraits, and candid joyful moments"
  },
  {
    src: slide9,
    alt: "Indoor newborn and family lifestyle photography capturing everyday moments, nursery scenes, and intimate family connections at home"
  },
  {
    src: slide10,
    alt: "Creek and water family adventure photography showcasing children playing, family exploration, and natural outdoor family bonding experiences"
  },
  {
    src: slide11,
    alt: "Romantic couple photography in natural field settings with dreamy lighting and authentic emotional connections between partners"
  },
  {
    src: slide12,
    alt: "Intimate newborn and maternity photography featuring tender family moments, baby details, and the beauty of new life and motherhood"
  },
  {
    src: slide13,
    alt: "Expectant family maternity photography showcasing the anticipation of new life, sibling excitement, and family love in golden hour light"
  },
  {
    src: slide14,
    alt: "Lifestyle library photography session featuring reading, learning, and quiet family moments in beautiful natural indoor lighting"
  },
  {
    src: slide15,
    alt: "Autumn family photography with warm seasonal colors, showcasing multi-generational family connections and joyful group dynamics"
  },
  {
    src: slide16,
    alt: "Golden hour family photography in open fields featuring children's natural curiosity, family adventures, and authentic outdoor connections"
  },
  {
    src: slide17,
    alt: "Intimate bedroom family photography showcasing comfortable family moments, sibling bonds, and the warmth of home life"
  },
  {
    src: slide18,
    alt: "Large family group photography capturing multi-generational connections, genuine laughter, and the joy of extended family gatherings"
  },
  {
    src: slide19,
    alt: "Creek adventure family photography featuring children's wonder, family exploration, and natural outdoor play in beautiful settings"
  },
  {
    src: slide20,
    alt: "Joyful family photography showcasing authentic laughter, parent-child connections, and the pure happiness of family life"
  },
  {
    src: slide21,
    alt: "Autumn family photography in warm tones featuring intimate family moments, seasonal beauty, and natural family connections"
  }
];

interface ImageGalleryProps {
  onImageClick?: (src: string, alt: string, index: number) => void;
}

// Export the slideshow images array so the lightbox can access all images
export { slideshowImages };

export default function ImageGallery({ onImageClick }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying || slideshowImages.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  // Pause auto-play on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // If no images yet, show placeholder
  if (slideshowImages.length === 0) {
    return (
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="relative h-[60vh] bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-xl font-sans">
              Photo slideshow coming soon...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div 
          className="relative h-[60vh] overflow-hidden rounded-lg shadow-lg group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Current Image */}
          <div 
            className="w-full h-full cursor-pointer"
            onClick={() => onImageClick?.(slideshowImages[currentIndex].src, slideshowImages[currentIndex].alt, currentIndex)}
          >
            <img
              src={slideshowImages[currentIndex].src}
              alt={slideshowImages[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>

          {/* Navigation Arrows - Only visible on hover */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            data-testid="button-previous-slide"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} className="text-white drop-shadow-lg" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            data-testid="button-next-slide"
            aria-label="Next image"
          >
            <ChevronRight size={32} className="text-white drop-shadow-lg" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white/80' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                data-testid={`dot-indicator-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
          </div>
        </div>

      </div>
    </section>
  );
}