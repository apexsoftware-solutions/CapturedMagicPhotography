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
        <div className="relative">
          <h2 className="font-sans text-3xl lg:text-4xl font-light mb-8 text-foreground text-center">About Me</h2>
          <div className="space-y-6 font-sans text-base leading-relaxed text-foreground">
            <img
              src={aboutImage}
              alt="mother embracing young child in warm indoor family session"
              className="float-right ml-6 mb-4 w-32 sm:w-40 lg:w-48 h-auto object-cover"
            />
            <p>
              Hello, I'm Kimberly—a photographer, mother, and old fashioned homemaker. I live in Fredericksburg, Virginia, where I raise three little ones, homeschool Charlotte Mason style. I spend my days noticing the beauty tucked into the folds of our ordinary family life.
            </p>
            <p>
              My sessions are soft and simple. A little light, a little laughter, a little stillness. I don't chase perfection—I look for the truth of love as it really is, right now.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 clear-right">
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
      </div>
    </section>
  );
}
