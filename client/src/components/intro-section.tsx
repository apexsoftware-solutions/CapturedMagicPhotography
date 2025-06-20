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
    <section className="py-32 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div key={index} className="flex-1 relative">
            <img
              src={image}
              alt={`Family moment ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '3/4', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-12">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-white/90 drop-shadow-lg">
            HONEST & POETIC CAPTURES OF YOUR LIFE
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-white drop-shadow-xl">
            MAKING <strong className="text-white">art</strong> OUT OF <strong className="text-white">ordinary moments</strong>
          </h3>
          <h4 className="font-sans text-lg mb-8 text-white/90 drop-shadow-lg">
            Let's create art and tell your <strong className="text-white">story</strong>
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              FAQS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}