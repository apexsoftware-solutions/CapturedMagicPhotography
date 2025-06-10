import aboutImage from "@assets/Family Session_1749518229765.jpg";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-script text-4xl lg:text-6xl text-primary mb-8">
              Hello, I'm Sarah
            </h2>
            <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground">
              <p>
                For over a decade, I've had the privilege of capturing love stories and precious family moments. 
                My approach combines artistic vision with genuine emotion, creating timeless images that tell your unique story.
              </p>
              <p>
                Based in the heart of the countryside, I draw inspiration from natural light and authentic moments. 
                Whether it's the gentle touch between newlyweds or the joyful laughter of a growing family, 
                I believe every moment deserves to be preserved with care and artistry.
              </p>
              <p>
                My work has been featured in several wedding publications, but what matters most to me is the 
                trust my clients place in me to document their most treasured memories.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-serif text-lg transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Sarah - Wedding and Family Photographer"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-lg">
                <p className="font-script text-2xl text-primary">
                  "Capturing magic in <br />every moment"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
