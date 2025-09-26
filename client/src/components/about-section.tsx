import aboutImage from "@assets/about-image-updated.jpg";
import { Link } from "wouter";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-8 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-[2fr_1fr] lg:grid-cols-[3fr_2fr] gap-4 lg:gap-16 items-center">
          <div>
            <h2 className="font-sans text-2xl lg:text-3xl font-light mb-6 text-foreground">About Me</h2>
            <div className="space-y-5 font-sans text-sm lg:text-base leading-relaxed text-foreground">
              <p>
                Hello, I'm Kimberly—a photographer, mother, and old fashioned homemaker. I live in Fredericksburg, Virginia, where I raise three little ones, homeschool Charlotte Mason style. I spend my days noticing the beauty tucked into the folds of our ordinary family life.
              </p>
              <p>
                My sessions are soft and simple. A little light, a little laughter, a little stillness. I don't chase perfection—I look for the truth of love as it really is, right now.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >
                CAN'T GET ENOUGH? READ MORE
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-block border border-foreground/40 hover:border-foreground text-foreground/70 hover:text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >REACH OUT</button>
            </div>
          </div>

          <div>
            <div className="pl-2 lg:pl-8">
              <img
                src={aboutImage}
                alt="mother embracing young child in warm indoor family session"
                className="w-full max-w-[100px] sm:max-w-[140px] lg:max-w-lg mx-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
