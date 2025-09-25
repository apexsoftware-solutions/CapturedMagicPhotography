import { useEffect, useState, useRef } from "react";
import collageImage from "@assets/Family Session DSC07537_1749518229765.jpg";

export default function CollageSection() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when section is in viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        // Calculate how much the section has scrolled into view
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const maxOffset = rect.height * 0.3; // Adjust this multiplier for parallax intensity
        setParallaxOffset(scrollProgress * maxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-background">
      {/* Header content with container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-2 pb-16">
        <div className="text-center mb-16">
          <p className="font-serif text-3xl max-w-2xl mx-auto leading-relaxed text-foreground">
            Those ordinary moments become tomorrow's memories—I'm here to help you keep them.
          </p>
        </div>
      </div>
      {/* Full-width parallax image with text overlay */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={collageImage}
          alt="Beautiful collage of family photography sessions"
          className="w-full h-[120%] object-cover absolute top-0 left-0"
          style={{
            transform: `translateY(-${parallaxOffset}px)`
          }}
          onError={(e) => {
            console.error('Image failed to load:', e);
            console.log('Image source:', collageImage);
          }}
          onLoad={() => console.log('Image loaded and should be visible:', collageImage)}
        />
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white -mt-12">
            <h2 className="font-gravity2 font-normal mt-[2px] mb-[2px] text-[120px] md:text-[140px] lg:text-[160px] pt-[3px] pb-[3px] bg-[#ffffff00]">
              Your story awaits
            </h2>
            <p className="text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase font-light bg-[#ababab85] pl-[4px] pr-[4px]">Let's create something beautiful together</p>
          </div>
        </div>

      </div>
      {/* Bottom spacing */}
      <div className="py-20"></div>
    </section>
  );
}