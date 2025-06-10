import { useState, useEffect } from "react";
import { Menu, X, Instagram, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

// Threads icon component (custom SVG)
const ThreadsIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.4v-.4C1.5 8.814 2.35 5.96 3.995 3.91 5.852 1.605 8.605.424 12.186.4h.014c2.746 0 5.043.725 6.826 2.155 1.834 1.472 2.974 3.608 2.974 5.845 0 1.247-.4 2.418-1.125 3.295-.725.877-1.79 1.36-2.995 1.36-1.22 0-2.24-.49-2.87-1.38-.63-.89-.63-2.07 0-3.32.315-.625.78-1.1 1.345-1.375.565-.275 1.215-.275 1.78 0 .565.275 1.03.75 1.345 1.375.63 1.25.63 2.43 0 3.32-.63.89-1.65 1.38-2.87 1.38-1.205 0-2.27-.483-2.995-1.36-.725-.877-1.125-2.048-1.125-3.295 0-2.237 1.14-4.373 2.974-5.845C7.143 1.125 9.44.4 12.186.4h.007z"/>
  </svg>
);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2"
          : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* When scrolled - simple centered navigation */}
        {isScrolled && (
          <div className="flex justify-center items-center">
            <div className="flex space-x-8 text-sm font-sans uppercase tracking-wider">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:opacity-70 transition-opacity duration-300"
              >
                ABOUT US
              </button>
              <span className="text-foreground/40">/</span>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:opacity-70 transition-opacity duration-300"
              >
                PRICING
              </button>
              <span className="text-foreground/40">/</span>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:opacity-70 transition-opacity duration-300"
              >
                ENQUIRE
              </button>
            </div>
          </div>
        )}

        {/* When at top - full navigation layout */}
        {!isScrolled && (
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
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <div className="font-serif text-xs text-center leading-tight text-white">
                  <div className="font-semibold">CAPTURED</div>
                  <div className="font-semibold">MAGIC</div>
                </div>
              </div>
            </div>

            {/* Right side social */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="https://www.instagram.com/capturedmagicfxbg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity duration-300">
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
        )}
      </div>

      {/* Mobile Menu - only show when at top of page */}
      {isMenuOpen && !isScrolled && (
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
              ABOUT US
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
