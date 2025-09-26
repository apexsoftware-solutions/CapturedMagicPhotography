import familyImage from "@assets/families-session-cover.jpg";
import coupleImage from "@assets/Family Session (1)_1749518229765.jpg";
import maternityImage from "@assets/IMG_3298_1749572272844.jpg";
import newbornImage from "@assets/newborn-session-cover.jpg";
import ourStoryImage from "@assets/our-story-session-cover.jpg";
import mommyAndMeImage from "@assets/mommy-and-me-session-cover.jpg";
import collageImage from "@assets/Image 6-9-25 at 9.46 PM_1749520147087.jpeg";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    image: mommyAndMeImage,
    title: "Mommy & Me",
    slug: "mommy-and-me",
    alt: "tender mother and child photoshoot capturing intimate bonding moments",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  },
  {
    image: ourStoryImage,
    title: "Your Story",
    slug: "our-story",
    alt: "couple's story photoshoot capturing their journey together",
    positionX: 50, // Horizontal position: 0 = far left, 50 = center, 100 = far right
    positionY: 50, // Vertical position: 0 = top, 50 = center, 100 = bottom
    scale: 100     // Scale: 100 = default fit, 120 = 20% larger, 80 = 20% smaller
  }
];

export default function ServicesSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const additionalSessions = [
    "Senior Sessions",
    "Engagement Sessions",
    "Weddings",
    "Birthing Sessions"
  ];

  return (
    <section id="services" className="pt-12 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Explore the sessions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
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
                    <h3 className="font-sans text-2xl md:text-3xl uppercase tracking-[0.2em] opacity-90 font-light text-white text-center px-6 py-3 group-hover:opacity-80 transition-all duration-300 border-b border-white pb-2">
                      {session.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Don't see what you're looking for section */}
        <div className="text-center mt-12 mb-8">
          <p className="font-sans text-lg text-gray-700 mb-4">
            Don't see what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300 font-sans text-gray-700"
                data-testid="button-see-more"
              >
                See More
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    {additionalSessions.map((session, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200 font-sans text-gray-700 cursor-pointer"
                      >
                        {session}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a
              href="/faq"
              className="px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300 font-sans text-gray-700"
              data-testid="link-faq-homepage"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
