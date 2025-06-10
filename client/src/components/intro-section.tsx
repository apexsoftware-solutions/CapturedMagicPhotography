export default function IntroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-16">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
            HONEST & POETIC CAPTURES OF YOUR LIFE
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
            MAKING <strong>art</strong> OUT OF <strong>ordinary moments</strong>
          </h3>
          <button
            onClick={() => scrollToSection("services")}
            className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
          >
            VIEW MY OFFERINGS
          </button>
        </div>
      </div>
    </section>
  );
}