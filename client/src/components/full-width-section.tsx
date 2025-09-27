export default function FullWidthSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
          NATURAL AND ARTISTIC FAMILY & NEWBORN PHOTOGRAPHY IN BRISTOL, BATH, THE COTSWOLDS AND BEYOND
        </h2>
        <h3 className="font-sans text-lg mb-12 text-foreground/80">
          Let's create art and tell your <strong>story</strong>
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
          >
            FAQS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
          >
            ENQUIRE
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
          >
            PRICING
          </button>
        </div>
      </div>
    </section>
  );
}