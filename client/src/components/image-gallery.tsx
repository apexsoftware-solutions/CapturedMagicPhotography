import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideshowImage {
  src: string;
  alt: string;
}

// Placeholder for when photos are added
const slideshowImages: SlideshowImage[] = [
  // New photos will be added here
];

interface ImageGalleryProps {
  onImageClick?: (src: string, alt: string) => void;
}

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
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div 
          className="relative h-[60vh] overflow-hidden rounded-lg shadow-lg group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Current Image */}
          <div 
            className="w-full h-full cursor-pointer"
            onClick={() => onImageClick?.(slideshowImages[currentIndex].src, slideshowImages[currentIndex].alt)}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            data-testid="button-previous-slide"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            data-testid="button-next-slide"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
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

        {/* Image Counter */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 font-sans">
            {currentIndex + 1} of {slideshowImages.length}
          </p>
        </div>
      </div>
    </section>
  );
}