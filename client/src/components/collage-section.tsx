import collageImage from "@assets/Family Session DSC07537_1749518229765.jpg";

export default function CollageSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Moments beautifully captured</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every session tells a unique story. From intimate family moments to joyful celebrations, 
            each photograph preserves the essence of your most precious memories.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src={collageImage}
              alt="Beautiful collage of family and wedding photography sessions"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white bg-black/30 backdrop-blur-sm px-8 py-6 rounded-lg">
              <h3 className="font-script text-4xl lg:text-5xl mb-4">
                Your story awaits
              </h3>
              <p className="font-sans text-sm uppercase tracking-[0.15em] opacity-90">
                Let's create something beautiful together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}