import handsImage from "@assets/Family Session (5)_1749523168826.jpg";
import childImage from "@assets/Family Session DSC06856_1749523172272.jpg";
import flowersImage from "@assets/Family Session (4)_1749523175905.jpg";

export default function IntroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [handsImage, childImage, flowersImage];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div key={index} className="flex-1 relative">
            <img
              src={image}
              alt={`Family moment ${index + 1}`}
              className="w-full h-full object-cover opacity-10"
              style={{ aspectRatio: '3/4', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
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