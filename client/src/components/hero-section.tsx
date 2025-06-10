import { useEffect, useState } from "react";
import backgroundImage from "@assets/Greyson DSC06423_1749519922111.jpg";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <div className="font-sans text-sm uppercase tracking-[0.2em] mb-4 opacity-90">
          CAPTURED MAGIC PHOTOGRAPHY
        </div>
        <h1 className="font-gravity text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight tracking-wide font-thin text-center">
          Your story, <em>authentically</em> told
        </h1>
        <div className="font-sans text-sm uppercase tracking-[0.15em] mb-8 opacity-90">
          FREDERICKSBURG, VA FAMILY AND WEDDING PHOTOGRAPHERS
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-block border border-white hover:bg-white hover:text-black text-white px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
        >
          ENQUIRE
        </button>
      </div>
    </section>
  );
}
