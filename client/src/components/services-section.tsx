import familyImage from "@assets/Family Session_1749518229765.jpg";
import coupleImage from "@assets/Family Session (1)_1749518229765.jpg";
import maternityImage from "@assets/Brielle Enhanced NR (2)_1749518229764.jpg";
import newbornImage from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";

const sessions = [
  {
    image: familyImage,
    title: "Families",
    alt: "family photoshoot at countryside location"
  },
  {
    image: coupleImage,
    title: "couples",
    alt: "couples photoshoot in beautiful landscape"
  },
  {
    image: maternityImage,
    title: "maternity",
    alt: "intimate maternity photoshoot"
  },
  {
    image: newbornImage,
    title: "newborn",
    alt: "gentle newborn photoshoot"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Explore the sessions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={session.image}
                  alt={session.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-center group-hover:opacity-70 transition-opacity duration-300">
                {session.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
