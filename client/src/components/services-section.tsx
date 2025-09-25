import familyImage from "@assets/DSC06012_websize_1749561206339.jpg";
import coupleImage from "@assets/Family Session (1)_1749518229765.jpg";
import maternityImage from "@assets/IMG_3298_1749572272844.jpg";
import newbornImage from "@assets/Brielle Enhanced NR (1)_1749518229763.jpg";
import ourStoryImage from "@assets/Family Session (2)_1749518229765.jpg";
import collageImage from "@assets/Image 6-9-25 at 9.46 PM_1749520147087.jpeg";
import { Link } from "wouter";

const sessions = [
  {
    image: familyImage,
    title: "Families",
    slug: "families",
    alt: "family photoshoot at countryside location",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  },
  {
    image: coupleImage,
    title: "couples",
    slug: "couples",
    alt: "couples photoshoot in beautiful landscape",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  },
  {
    image: newbornImage,
    title: "newborn",
    slug: "newborn",
    alt: "gentle newborn photoshoot",
    positionX: 100, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  },
  {
    image: maternityImage,
    title: "maternity",
    slug: "maternity",
    alt: "intimate maternity photoshoot",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 110     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  },
  {
    image: ourStoryImage,
    title: "our story",
    slug: "our-story",
    alt: "couple's story photoshoot capturing their journey together",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-12 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Explore the sessions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {sessions.map((session, index) => (
            <Link key={index} href={`/session/${session.slug}`}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={session.image}
                    alt={session.alt}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ 
                      objectPosition: `${session.positionX}% ${session.positionY}%`,
                      transform: `scale(${session.scale / 100})`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-script text-3xl text-white text-center px-6 py-3 group-hover:opacity-80 transition-all duration-300 font-light border-b border-white pb-2">
                      {session.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
