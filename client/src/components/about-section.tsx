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
          <h2 className="font-sans text-3xl lg:text-4xl font-light mb-8 text-foreground">About Me</h2>
          <div className="space-y-6 font-sans text-base leading-relaxed text-foreground">
            <img
              src={aboutImage}
              alt="mother embracing young child in warm indoor family session"
              className="float-right ml-6 mb-4 w-32 sm:w-40 lg:w-48 h-auto object-cover"
            />
            <p>
              Hello, I'm Kimberly—photographer, wife, and crunchy homeschooling mom. I love the calm, the happy, the sweet, and even the goofy moments that weave their way through my days.
            </p>
            <p>
              I'm a Christian. For me, that simply means this: I am a sinner who recognized my need for a Savior. I trusted in Jesus—the One who died on the cross and rose from the dead—to pay for my sins and rescue me. John 3:16  My relationship with Him is the center of my life.
            </p>
            <p>
              Most of my days are spent at home with my children, but I knew I could never set photography aside completely—I love it too much. It's the work that helps cover the unexpected bills and, more importantly, the gift that lets us take at least one family vacation together each year.
            </p>
            <p>
              My sessions are very natural, and from the heart, I am good at reading people, and use natural things to get my shots, games with wild kids, snuggles with tired babies, and closeness with any relationship. I have a hundred little prompts and "scenes" up my sleeve and find it very easy to switch it up to keep the session flowing naturally and painlessly.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 clear-right">
            <Link
              href="/about"
              className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 text-center"
            >
              MORE ABOUT ME
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
