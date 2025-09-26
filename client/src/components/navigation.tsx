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
        {/* When scrolled - simple centered navigation - Desktop only */}
        {isScrolled && (
          <div className="hidden lg:flex justify-center items-center">
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
              <a
                href="/faq"
                className="text-foreground hover:opacity-70 transition-opacity duration-300"
              >
                FAQ
              </a>
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
                  <div className="absolute top-full left-0 pt-4 z-50">
                    <div className="flex flex-col space-y-3 text-sm font-sans uppercase tracking-wider animate-in fade-in slide-in-from-top-2 duration-200">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-left text-white hover:opacity-70 transition-opacity duration-300 transform hover:translate-x-1 transition-transform"
                      >
                        FAMILIES
                      </button>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-left text-white hover:opacity-70 transition-opacity duration-300 transform hover:translate-x-1 transition-transform"
                      >
                        COUPLES
                      </button>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-left text-white hover:opacity-70 transition-opacity duration-300 transform hover:translate-x-1 transition-transform"
                      >
                        MATERNITY
                      </button>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-left text-white hover:opacity-70 transition-opacity duration-300 transform hover:translate-x-1 transition-transform"
                      >
                        NEWBORN
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-white/40">/</span>
              <a
                href="/faq"
                className="text-white hover:opacity-70 transition-opacity duration-300"
              >
                FAQ
              </a>
              <span className="text-white/40">/</span>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:opacity-70 transition-opacity duration-300"
              >
                ENQUIRE
              </button>
            </div>


            {/* Right side social and info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-sans uppercase tracking-wider">
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/capturedmagicfxbg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity duration-300">
                  <Instagram size={18} />
                </a>
                <a href="https://www.threads.com/@capturedmagicfxbg" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity duration-300">
                  <img src={threadsIconWhite} alt="Threads" className="w-4 h-4" />
                </a>
              </div>
              <span className="text-white/40">/</span>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:opacity-70 transition-opacity duration-300"
              >
                PORTFOLIO
              </button>
            </div>

          </div>
        )}

        {/* Mobile hamburger button - always visible on mobile */}
        <div className="lg:hidden absolute right-6">
          <button
            className="text-white hover:opacity-70 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
      {/* Mobile Menu - always available */}
      {isMenuOpen && (
        <div className="lg:hidden flex justify-end pr-6 pt-4">
          <div className="bg-background border border-accent rounded-lg shadow-lg w-fit animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-3 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-left py-2 px-2 font-sans text-sm uppercase tracking-wider text-foreground hover:bg-accent/20 rounded transition-colors duration-200"
                data-testid="button-home-mobile"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-left py-2 px-2 font-sans text-sm uppercase tracking-wider text-foreground hover:bg-accent/20 rounded transition-colors duration-200"
                data-testid="button-about-mobile"
              >ABOUT ME</button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-left py-2 px-2 font-sans text-sm uppercase tracking-wider text-foreground hover:bg-accent/20 rounded transition-colors duration-200"
                data-testid="button-pricing-mobile"
              >
                SESSIONS
              </button>
              <a
                href="/faq"
                className="block text-left py-2 px-2 font-sans text-sm uppercase tracking-wider text-foreground hover:bg-accent/20 rounded transition-colors duration-200"
                data-testid="link-faq-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-left py-2 px-2 font-sans text-sm uppercase tracking-wider text-foreground hover:bg-accent/20 rounded transition-colors duration-200"
                data-testid="button-enquire-mobile"
              >
                ENQUIRE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
