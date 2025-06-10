import aboutImage from "@assets/IMG_0843_1749569934112.jpg";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
              HEY, WE'RE KIMBERLY & JEFF
            </h2>
            <div className="mb-8">
              <h3 className="font-script text-xl text-foreground/80 mb-4 italic">
                your storytelling family & wedding photographers based in Fredericksburg, VA
              </h3>
            </div>
            <div className="space-y-6 font-sans text-base leading-relaxed text-foreground">
              <p>
                We've been capturing people and their stories for over 5 beautiful years. To us it's simple: your life is special and deserves to be documented. Every story is welcome here.
              </p>
              <p>
                We value <em>real</em> stories over all else. The carefree, organic moments that make your life beautiful. We'll guide you gently through your session, moving with the light and laughing alongside you. The best moments happen when you allow yourself to just <em>be</em>.
              </p>
              <p>
                Come as you are, honestly, openly, perfectly you.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >
                GET TO KNOW US
              </button>
              <button
                className="inline-block border border-foreground/40 hover:border-foreground text-foreground/70 hover:text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >
                CAN'T GET ENOUGH? READ MORE
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={aboutImage}
              alt="mother embracing young child in warm indoor family session"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
