import backgroundImage from "@assets/Family Session (1)_1749518229765.jpg";

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
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <div className="font-sans text-sm uppercase tracking-[0.2em] mb-4 opacity-90">
          CAPTURED MAGIC PHOTOGRAPHY
        </div>
        <h1 className="font-script text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
          Your story, <em>authentically</em> told
        </h1>
        <div className="font-sans text-sm uppercase tracking-[0.15em] mb-8 opacity-90">
          BRISTOL FAMILY AND WEDDING PHOTOGRAPHER
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
