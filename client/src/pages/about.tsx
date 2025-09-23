import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import aboutImage1 from "@assets/IMG_0843_1749571537894.jpg";
import aboutImage2 from "@assets/IMG_3279_1749571542677.jpg";
import aboutImage3 from "@assets/about-image-new.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-300 font-sans text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            BACK TO HOME
          </Link>
        </div>
      </div>
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
            OUR STORY
          </h1>
          <h2 className="font-script text-3xl lg:text-4xl text-foreground mb-8 italic leading-relaxed">
            The heart behind Captured Magic Photography
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto"></div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Opening */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Photography found us in the most beautiful way – through our own love story and the journey of building our family. What started as a desire to document our own precious moments has grown into a passion for preserving the stories of families just like ours.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              We believe that every family's story deserves to be told with authenticity, warmth, and artistry. Our approach isn't about perfect poses or forced smiles – it's about capturing the real, unscripted moments that make your family uniquely yours.
            </p>
          </div>

          {/* First Image */}
          <div className="mb-12">
            <img
              src={aboutImage1}
              alt="Mother and child embracing in warm natural light"
              className="w-full h-auto rounded-lg shadow-sm"
            />
            <p className="text-sm text-foreground/60 font-sans italic mt-4 text-center">
              The quiet moments between mother and child – these are the treasures we seek to preserve
            </p>
          </div>

          {/* Our Philosophy */}
          <div className="mb-12">
            <h3 className="font-sans text-xl uppercase tracking-wider text-foreground mb-6">MY PHILOSOPHY</h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Every session with us is designed to feel natural and comfortable. We guide you gently through moments that feel authentic to your family's dynamic. Whether it's the way your toddler reaches for you when they're tired, or how your partner looks at you when you're laughing together – these are the moments that matter.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              Our work is heavily inspired by the golden hour light, the changing seasons, and the beautiful landscapes of Virginia. We love incorporating natural elements that speak to your family's story and create images that feel timeless rather than trendy.
            </p>
          </div>

          {/* Second Image */}
          <div className="mb-12">
            <img
              src={aboutImage2}
              alt="Mother and child reading together on couch in natural light"
              className="w-full h-auto rounded-lg shadow-sm"
            />
            <p className="text-sm text-foreground/60 font-sans italic mt-4 text-center">
              Everyday moments like story time become heirlooms when captured with intention
            </p>
          </div>

          {/* Our Journey */}
          <div className="mb-12">
            <h3 className="font-sans text-xl uppercase tracking-wider text-foreground mb-6">
              OUR JOURNEY
            </h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              We started this journey over five years ago, and each session has taught us something new about the art of storytelling through photography. We've learned that the best photographs happen when families feel completely at ease – when children can be children, when parents can simply be present with each other.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              Based in the heart of Virginia, we've had the privilege of documenting families across Fredericksburg and the surrounding areas. From the historic charm of downtown to the rolling hills of the countryside, we know all the perfect spots that will complement your family's unique story.
            </p>
          </div>

          {/* Third Image */}
          <div className="mb-12">
            <img
              src={aboutImage3}
              alt="Intimate family moment in warm indoor setting"
              className="w-full h-auto rounded-lg shadow-sm"
            />
            <p className="text-sm text-foreground/60 font-sans italic mt-4 text-center">
              Creating space for authentic connection in every frame
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-12">
            <h3 className="font-sans text-xl uppercase tracking-wider text-foreground mb-6">
              WHAT SETS US APART
            </h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              We understand that every family is different. Some families are naturally affectionate and expressive, while others show love in quieter ways. Some children are natural performers, while others are more reserved. We adapt our approach to honor your family's authentic dynamic.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Our sessions feel more like a gentle adventure than a traditional photo shoot. We might explore a field together, build sandcastles at the beach, or simply snuggle up at home with your favorite books. The goal is always the same – to create an experience that feels true to who you are as a family.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              When you receive your gallery, you'll find images that tell the complete story of your session – the laughter, the quiet moments, the in-between expressions that happen when everyone forgets about the camera. These are the photographs that will become treasured family heirlooms.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12 border-t border-gray-100">
            <h3 className="font-script text-2xl text-foreground mb-6 italic">
              Ready to tell your story?
            </h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-8">
              We would love to learn about your family and create something beautiful together.
            </p>
            <Link
              href="/"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}