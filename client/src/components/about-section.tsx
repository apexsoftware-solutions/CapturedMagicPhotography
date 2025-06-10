import aboutImage from "@assets/Brielle Enhanced NR (5)_1749518229764.jpg";

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
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
              HEY, I'M AIMEE
            </h2>
            <div className="mb-8">
              <h3 className="font-script text-xl text-foreground/80 mb-4 italic">
                your storytelling family & wedding photographer based out of Bristol, UK
              </h3>
            </div>
            <div className="space-y-6 font-sans text-base leading-relaxed text-foreground">
              <p>
                I've been lucky enough to capture people and their stories for over 5 beautiful years now, and to me it's as simple as this; your life is special and it deserves to be documented. Every story is welcome here.
              </p>
              <p>
                My work was born from my own little family, starting in the early days when my daughter, Sierra, was just a baby. I want to capture all of it, the grit, the love, the passion you have for the people you've dedicated your life to.
              </p>
              <p>
                The way I create is heavily inspired by film, art and the connections between us all. I value <em>real</em> stories over all else. The carefree, organic moments that make your life beautiful. I'll guide you gently through your session, moving with the light and laughing alongside you. No forced smiles here. The best moments happen when you allow yourself to just <em>be</em>.
              </p>
              <p>
                Come as you are, honestly, openly, perfectly you.
              </p>
              <p>
                I can't wait to capture your story, but first, let me introduce myself,
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >
                GET TO KNOW ME
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={aboutImage}
              alt="portrait photoshoot at countryside location"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
