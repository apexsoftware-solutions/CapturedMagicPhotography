export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-script text-3xl text-secondary mb-4">
            Captured Magic Photography
          </div>
          <p className="font-serif text-gray-300 mb-6">
            Preserving life's most precious moments with timeless elegance
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-serif text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-serif text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-serif text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-serif text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-serif text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          <div className="border-t border-gray-600 pt-8">
            <p className="font-sans text-gray-400">
              © 2024 Captured Magic Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
