import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Return Arrow - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <button 
            className="flex items-center gap-2 bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-return-home"
          >
            <ArrowLeft size={20} className="text-gray-700" />
            <span className="font-sans text-sm text-gray-700">Back to Home</span>
          </button>
        </Link>
      </div>

      {/* FAQ Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-sans text-lg uppercase tracking-[0.2em] mb-6 text-foreground/80">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground mb-8 italic leading-relaxed">
            Everything you need to know
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto"></div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* FAQ Items */}
          <div className="space-y-12 mb-16">
            {/* What should we wear? */}
            <div className="border-b border-gray-100 pb-8">
              <h2 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-light text-foreground mb-6">
                What should we wear?
              </h2>
              <div className="font-sans text-lg leading-relaxed text-foreground space-y-4">
                <p>Soft, simple clothing photographs beautifully.</p>
                <p>Think neutrals, layers, and textures you can move and snuggle in.</p>
                <p>Timeless pieces always age well—especially when these photos are shared with grandparents or passed down one day.</p>
                <p>You don't need anything fancy—just something that feels like you.</p>
              </div>
            </div>

            {/* What if my kids don't cooperate? */}
            <div className="border-b border-gray-100 pb-8">
              <h2 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-light text-foreground mb-6">
                What if my kids don't cooperate?
              </h2>
              <div className="font-sans text-lg leading-relaxed text-foreground space-y-4">
                <p>They're not supposed to.</p>
                <p>They're kids!</p>
                <p>We'll pause, play, shift plans if we need to.</p>
                <p>This isn't about getting them to perform—it's about capturing the way you love them through it all.</p>
                <p>Even the snack breaks and upside-down moments.</p>
              </div>
            </div>

            {/* What if my house isn't photo-ready? */}
            <div className="border-b border-gray-100 pb-8">
              <h2 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-light text-foreground mb-6">
                What if my house isn't photo-ready?
              </h2>
              <div className="font-sans text-lg leading-relaxed text-foreground space-y-4">
                <p>I promise—it doesn't need to be.</p>
                <p>We'll find the light, clear a corner if we need to, and focus on the love, not the laundry.</p>
                <p>Some of my favorite images have been taken in the middle of real life.</p>
                <p>And don't worry—I know how to sweep and wipe spaghetti off the walls too. :)</p>
              </div>
            </div>

            {/* How far in advance should I book? */}
            <div className="border-b border-gray-100 pb-8">
              <h2 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-light text-foreground mb-6">
                How far in advance should I book?
              </h2>
              <div className="font-sans text-lg leading-relaxed text-foreground space-y-4">
                <p>As soon as you know you'd like a session, reach out.</p>
                <p>I only take on a limited number each month to keep space for my own family, so I recommend booking 1–2 months ahead when you can.</p>
                <p>But if you suddenly realize Grandma, the cousins, and Uncle Joe are all going to be in town this weekend—don't panic.</p>
                <p>Family gatherings are special, and I'll do my best to make room when I can.</p>
              </div>
            </div>

            {/* What if it rains? */}
            <div className="pb-8">
              <h2 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-light text-foreground mb-6">
                What if it rains?
              </h2>
              <div className="font-sans text-lg leading-relaxed text-foreground space-y-4">
                <p>We'll watch the forecast together and decide what feels best.</p>
                <p>Sometimes we reschedule.</p>
                <p>Sometimes we lean into it and dance barefoot in the drizzle.</p>
                <p>Either way, we'll make something beautiful.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-16 border-t border-gray-100">
            <h3 className="font-sans text-2xl md:text-3xl tracking-[0.1em] font-light text-foreground mb-6">
              Still have questions?
            </h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-8">
              I'd love to chat more about your session and answer any other questions you might have.
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
              data-testid="button-contact-faq"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}