import { useEffect, useState } from "react";
import collageImage from "@assets/Family Session DSC07537_1749518229765.jpg";

export default function CollageSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background">
      {/* Header content with container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Moments beautifully captured</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every session tells a unique story. From intimate family moments to joyful celebrations, 
            each photograph preserves the essence of your most precious memories.
          </p>
        </div>
      </div>

      {/* Full-width parallax image with text overlay */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={collageImage}
          alt="Beautiful collage of family and wedding photography sessions"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Image failed to load:', e);
            console.log('Image source:', collageImage);
          }}
          onLoad={() => console.log('Image loaded and should be visible:', collageImage)}
        />
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 italic">
              Your story awaits
            </h2>
            <p className="text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase font-light">
              Let's create something beautiful together
            </p>
          </div>
        </div>

      </div>

      {/* Bottom spacing */}
      <div className="py-20"></div>
    </section>
  );
}