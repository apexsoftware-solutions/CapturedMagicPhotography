import backgroundImage from "@assets/Family Session (3)_1749518229765.jpg";

export default function HeroSection() {
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="font-script text-5xl sm:text-6xl lg:text-8xl mb-6 font-bold">
          Captured Magic
        </h1>
        <p className="font-serif text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Preserving life's most precious moments with timeless elegance and artistic vision
        </p>
        <div className="space-x-6">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-3 rounded-full font-serif text-lg transition-all duration-300"
          >
            Book Session
          </button>
        </div>
      </div>
    </section>
  );
}
