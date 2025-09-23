import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import newbornImage from "@assets/DSC06818_1758668103121.jpg";

export default function SessionPage() {
  const params = useParams();
  const sessionSlug = params.slug;
  const [scrollY, setScrollY] = useState(0);

  // Capitalize first letter for display
  const sessionTitle = sessionSlug ? sessionSlug.charAt(0).toUpperCase() + sessionSlug.slice(1) : '';

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      console.log(`Scroll Y: ${newScrollY}, Transform: translateY(${newScrollY * 0.5}px)`);
      setScrollY(newScrollY);
    };
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
            <h1 className="font-gravity2 font-normal text-[80px] md:text-[100px] lg:text-[120px] leading-tight">
              newborn sessions
            </h1>
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