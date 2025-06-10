import familyImage from "@assets/DSC06012_websize_1749561206339.jpg";
import coupleImage from "@assets/Family Session (1)_1749518229765.jpg";
import maternityImage from "@assets/IMG_3298_1749572272844.jpg";
import newbornImage from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";
import collageImage from "@assets/Image 6-9-25 at 9.46 PM_1749520147087.jpeg";

const sessions = [
  {
    image: familyImage,
    title: "Families",
    alt: "family photoshoot at countryside location",
    positionX: 100, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 100  // Vertical position: 0 = top, 50 = center, 100 = bottom
  },
  {
    image: coupleImage,
    title: "couples",
    alt: "couples photoshoot in beautiful landscape",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50  // Vertical position: 0 = top, 50 = center, 100 = bottom
  },
  {
    image: maternityImage,
    title: "maternity",
    alt: "intimate maternity photoshoot",
    positionX: 0, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 0  // Vertical position: 0 = top, 50 = center, 100 = bottom
  },
  {
    image: newbornImage,
    title: "newborn",
    alt: "gentle newborn photoshoot",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50  // Vertical position: 0 = top, 50 = center, 100 = bottom
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-12 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Explore the sessions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={session.image}
                  alt={session.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: `${session.positionX}% ${session.positionY}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-script text-3xl text-white text-center px-6 py-3 group-hover:opacity-80 transition-all duration-300 font-light border-b border-white pb-2">
                    {session.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
