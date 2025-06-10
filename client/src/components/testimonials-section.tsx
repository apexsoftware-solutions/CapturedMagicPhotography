import testimonialsImage from "@assets/Brielle Enhanced NR (3)_1749518229764.jpg";

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={testimonialsImage}
              alt="intimate family moment"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
                L O V E N O T E S
              </h2>
            </div>
            <div className="space-y-8">
              <blockquote className="font-sans text-base leading-relaxed text-foreground">
                From the second you meet her, Aimee puts you at ease. Her personality is magic and she makes you feel like you've known her forever<strong>.</strong> She captured such a wide array of details and moments that I will <strong>cherish forever</strong>. Her ability to capture <strong>natural</strong>, <strong>candid</strong> and <strong>fun</strong> moments is a true art and completely down to her gorgeous personality. Thank you so much Aimee for capturing my family, such wonderful memories we'll have on our walls <strong>forever</strong>!
              </blockquote>
              <div className="font-serif text-lg">
                <strong>- Kirstin and family</strong>
              </div>
            </div>
            <div className="mt-12">
              <button className="border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300">
                CAPTURE YOUR STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
