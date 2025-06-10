import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Left side menu */}
          <div className="hidden lg:flex space-x-8 text-sm font-sans uppercase tracking-wider">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:opacity-70 transition-opacity duration-300"
            >
              ABOUT US
            </button>
            <span className="text-white/40">/</span>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:opacity-70 transition-opacity duration-300"
            >
              PRICING
            </button>
            <span className="text-white/40">/</span>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:opacity-70 transition-opacity duration-300"
            >
              ENQUIRE
            </button>
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <div className="font-serif text-xs text-center leading-tight text-white">
                <div className="font-semibold">CAPTURED</div>
                <div className="font-semibold">MAGIC</div>
              </div>
            </div>
          </div>

          {/* Right side social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-white hover:opacity-70 transition-opacity duration-300">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white hover:opacity-70 transition-opacity duration-300">
              <Facebook size={16} />
            </a>
            <div className="w-6 h-6 border border-white/20 rounded-sm flex items-center justify-center">
              <ShoppingBag size={12} className="text-white" />
            </div>
            <span className="text-xs text-white">0</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:opacity-70 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-accent">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 font-sans text-sm uppercase tracking-wider text-foreground"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 font-sans text-sm uppercase tracking-wider text-foreground"
            >
              ABOUT AIMEE
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 font-sans text-sm uppercase tracking-wider text-foreground"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 font-sans text-sm uppercase tracking-wider text-foreground"
            >
              PRICING
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 font-sans text-sm uppercase tracking-wider text-foreground"
            >
              ENQUIRE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
