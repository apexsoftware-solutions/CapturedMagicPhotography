import { useState, useEffect } from "react";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import threadsIconWhite from "@assets/Threads icon_1749566558658.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSessionsDropdownOpen, setIsSessionsDropdownOpen] = useState(false);

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
              <div 
                className="relative"
                onMouseEnter={() => setIsSessionsDropdownOpen(true)}
                onMouseLeave={() => setIsSessionsDropdownOpen(false)}
              >
                <button className="text-white hover:opacity-70 transition-opacity duration-300 flex items-center gap-1">
                  SESSIONS
                  <ChevronDown size={12} />
                </button>
                {isSessionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-black/5 transition-colors duration-300"
                    >
                      FAMILIES
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-black/5 transition-colors duration-300"
                    >
                      COUPLES
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-black/5 transition-colors duration-300"
                    >
                      MATERNITY
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-black/5 transition-colors duration-300"
                    >
                      NEWBORN
                    </button>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-black/5 transition-colors duration-300"
                      >
                        ENQUIRE
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
                <img src={threadsIconWhite} alt="Threads" className="w-4 h-4" />
              </a>
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
