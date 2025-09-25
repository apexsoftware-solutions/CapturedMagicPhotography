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
        className="absolute inset-0 bg-cover bg-left lg:bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 leading-tight tracking-wide font-thin text-center" style={{fontFamily: 'Gravity2, cursive'}}>
          Capturing the magic <em>in the ordinary</em>
        </h1>
        <div className="font-sans text-sm uppercase tracking-[0.15em] mb-8 opacity-90">FREDERICKSBURG, VA FAMILY PHOTOGRAPHER</div>
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
