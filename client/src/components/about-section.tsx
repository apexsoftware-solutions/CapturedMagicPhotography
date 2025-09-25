import aboutImage from "@assets/about-image-new.jpg";
import { Link } from "wouter";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">HELLO, I'M KIMBERLY</h2>
            <div className="space-y-6 font-sans text-base leading-relaxed text-foreground">
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
