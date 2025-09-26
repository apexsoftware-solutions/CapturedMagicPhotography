import testimonialsImage from "@assets/DSC04852_1758849034580.jpg";

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <img
              src={testimonialsImage}
              alt="intimate family moment"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="mb-12">
              <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-8 text-foreground/80">
                L O V E N O T E S
              </h2>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <blockquote className="font-sans text-lg leading-relaxed text-foreground">
                  "Kimberly is the absolute best! When we arrived to our photo session, she made us feel so relaxed and at ease. She truly embraces our chaos with multiple little kids. It's quick and painless and you almost wonder if it's possible she has enough for one good photo. Imagine our surprise when we have the most beautiful pictures that capture every little moment that makes our family special- the snuggles, giggles, joy, smiles, and love. Our photos are timeless and authentic and we will treasure them for years to come. I recommend Captured Magic to all my friends, and I will only go to Kimberly for our family photos."
                </blockquote>
                <div className="font-serif text-xl">
                  <strong>- Rebecca VanSant</strong>
                </div>
              </div>

              <div className="space-y-4">
                <blockquote className="font-sans text-lg leading-relaxed text-foreground">
                  "Kimberly has photographed different seasons our lives, and every time I am blown away by how she manages to capture such beautiful snapshots of our family. Amidst a crying baby and toddler chaos, she has a magical talent of putting everyone at ease and creating the timeless photos every parent wants. My daughter has gone from resisting photos to begging "again, again!" because of the creative games Kimberly plays with her. You are truly getting the best of the best with Kimberly, from her welcoming personality to her eye for beautiful, candid shots. Thank you Kimberly for the gorgeous memories of our family, we will treasure them always."
                </blockquote>
                <div className="font-serif text-xl">
                  <strong>- Emma Schumacher</strong>
                </div>
              </div>

              <div className="space-y-4">
                <blockquote className="font-sans text-lg leading-relaxed text-foreground">
                  "I usually dread photo sessions because I never feel photogenic and end up looking so awkward, and my husband isn't a fan either. But Kimberly completely changed that for us! She somehow made it fun and exciting even for our grumpy 2-year-old, and the whole session felt more like a family snuggle than a photoshoot. The pictures turned out absolutely beautiful—I'll always be coming back to her for our family photos."
                </blockquote>
                <div className="font-serif text-xl">
                  <strong>- Melody Castellanos</strong>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <button className="border-2 border-foreground hover:bg-foreground hover:text-white text-foreground px-10 py-4 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300">
                CAPTURE YOUR STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
