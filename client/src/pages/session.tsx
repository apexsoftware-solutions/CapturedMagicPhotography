import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import newbornImage from "@assets/DSC06818_1758668103121.jpg";
import newbornCollage from "@assets/newborn-collage.jpg";
import familiesImage from "@assets/families-session-hero-new.jpg";

export default function SessionPage() {
  const params = useParams();
  const sessionSlug = params.slug;
  const [scrollY, setScrollY] = useState(0);

  // Capitalize first letter for display
  const sessionTitle = sessionSlug ? sessionSlug.charAt(0).toUpperCase() + sessionSlug.slice(1) : '';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if this is the newborn session page
  const isNewbornSession = sessionSlug === 'newborn';
  // Check if this is the families session page
  const isFamiliesSession = sessionSlug === 'families';

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

      {/* Newborn Hero Section with Parallax */}
      {isNewbornSession && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{ 
              backgroundImage: `url(${newbornImage})`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
              NEWBORN
            </h1>
          </div>
        </section>
      )}

      {/* Families Hero Section with Parallax */}
      {isFamiliesSession && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${familiesImage})`
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
              FAMILIES
            </h1>
          </div>
        </section>
      )}

      {/* Tagline Section - Below Photo */}
      {isNewbornSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-800 mb-16 italic">
              Some of the sweetest photos happen in mama's arms—right where they feel most at peace.
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                There's nothing quite like the first days with a new baby. The tiny sounds. The way their whole body curls against you. The quiet hush that settles over a home when everyone is learning to breathe in rhythm with someone new. These moments are tender and slow and sacred—and they are gone before you know it.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                My newborn sessions are held in the comfort of your home, where you can stay barefoot and relaxed with everything you need close by. There's no need to clean or fuss—just open the door and welcome me into your little world. I'll gently guide when needed, but mostly I'll observe quietly, capturing the way your baby nestles in your arms, the soft glances between you and your spouse, and the sweet chaos of siblings falling in love with the new baby.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                You don't need to be perfect. You don't need matching outfits or tidy rooms. All you need is to be together, just as you are.
              </p>
            </div>


            {/* Closing Paragraph */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-lancelot text-lg leading-relaxed text-gray-700 text-left">
                Whether this is your first baby or your fifth, I would be honored to document the quiet beauty of these early days—so you can return to them again and again, long after the newborn smell has faded.
              </p>
            </div>

            {/* Newborn Photo Collage */}
            <div className="max-w-5xl mx-auto mt-16">
              <img
                src={newbornCollage}
                alt="Beautiful collage of intimate newborn moments - tiny hands, gentle touches, and peaceful sleeping baby"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Families Content Section */}
      {isFamiliesSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-800 mb-16 italic">
              These are the moments that feel like your best day.
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Let me tell you about my favorite kind of session.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Wild littles running with delight as daddy chases them. Soft snuggles in mommy's arms while the youngest soaks in a quiet moment of one-on-one time. A dimpled, chubby hand tangled in her hair, just wanting more contact.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                A couple who has lived life together for years, standing side by side at sunset, watching the last pink lines fade while he plants a kiss on her cheek.
              </p>
              
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                And when the laughter quiets and the session is done, you'll open an album that brings you to tears. You'll hang photos on the wall that remind you—and your children—how good this life really is, even on a grey day later.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                That's what I love giving families.
              </p>
            </div>


          </div>
        </section>
      )}

      {/* Other Sessions - Default Layout */}
      {!isNewbornSession && !isFamiliesSession && (
        <div className="pt-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-script text-5xl lg:text-7xl text-primary mb-8">
              {sessionTitle} Sessions
            </h1>
            <p className="font-sans text-lg text-gray-600 mb-12">
              Coming soon... This page will showcase our beautiful {sessionSlug} photography sessions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}