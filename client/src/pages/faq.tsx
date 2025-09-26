import { Link } from "wouter";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-serif text-2xl tracking-wide text-foreground hover:text-accent transition-colors">
              Captured Magic Photography
            </Link>
            <Link 
              href="/" 
              className="font-sans text-sm uppercase tracking-wider text-foreground hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* FAQ Content */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-sans text-4xl md:text-5xl tracking-[0.1em] font-light text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
              Everything you need to know about working together to capture your family's story.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-12">
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
          <div className="text-center pt-16 border-t border-gray-100 mt-16">
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