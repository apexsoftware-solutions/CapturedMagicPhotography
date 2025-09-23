import { useParams, Link } from "wouter";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import newbornImage from "@assets/DSC06818_1758668103121.jpg";

export default function SessionPage() {
  const params = useParams();
  const sessionSlug = params.slug;
  const [scrollY, setScrollY] = useState(0);
  const [isIncludedOpen, setIsIncludedOpen] = useState(false);

  // Capitalize first letter for display
  const sessionTitle = sessionSlug ? sessionSlug.charAt(0).toUpperCase() + sessionSlug.slice(1) : '';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if this is the newborn session page
  const isNewbornSession = sessionSlug === 'newborn';

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

      {/* Tagline Section - Below Photo */}
      {isNewbornSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-gravity2 font-normal text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800 mb-16">
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

            {/* What's Included Dropdown */}
            <div className="max-w-3xl mx-auto mt-12">
              <button
                onClick={() => setIsIncludedOpen(!isIncludedOpen)}
                className="flex items-center justify-between w-full text-left py-4 border-b border-gray-200 hover:border-gray-400 transition-colors duration-200"
                data-testid="button-whats-included"
              >
                <h3 className="font-sans text-xl font-medium text-gray-800 uppercase tracking-wide">
                  What's included
                </h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-600 transition-transform duration-200 ${isIncludedOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isIncludedOpen && (
                <div className="py-6 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-3 font-sans text-lg leading-relaxed text-gray-700">
                    <p>— A 1.5–2 hour in-home session at your pace</p>
                    <p>— Up to 90 hand-edited, high-resolution images in a private gallery</p>
                    <p>— Full printing rights</p>
                    <p>— Natural, unposed portraits of your baby and family, with plenty of room for feeding, rocking, or changing as needed</p>
                    <p>— Gentle guidance on what to wear and how to prepare, if you'd like it</p>
                  </div>
                </div>
              )}
            </div>

            {/* Closing Paragraph */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-sans text-lg leading-relaxed text-gray-700 text-left">
                Whether this is your first baby or your fifth, I would be honored to document the quiet beauty of these early days—so you can return to them again and again, long after the newborn smell has faded.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Other Sessions - Default Layout */}
      {!isNewbornSession && (
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