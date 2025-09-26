import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import newbornImage from "@assets/DSC05225_1758845092286.jpeg";
import newbornCollage from "@assets/newborn-collage.jpg";
import familiesImage from "@assets/families-session-hero-new.jpg";
import couplesImage from "@assets/couples-session-hero.jpg";
import yourStoryImage from "@assets/DSC03025_1758844287458.jpeg";
import mommyMeImage from "@assets/DSC09432_1758844759151.jpeg";
import maternityImage from "@assets/DSC09702_1758845275898.jpeg";

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

  // Scroll to top when session page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sessionSlug]);

  // Check if this is the newborn session page
  const isNewbornSession = sessionSlug === 'newborn';
  // Check if this is the families session page
  const isFamiliesSession = sessionSlug === 'families';
  // Check if this is the couples session page
  const isCouplesSession = sessionSlug === 'couples';
  // Check if this is the your story session page
  const isYourStorySession = sessionSlug === 'our-story';
  // Check if this is the mommy and me session page
  const isMommyMeSession = sessionSlug === 'mommy-and-me';
  // Check if this is the maternity session page
  const isMaternitySession = sessionSlug === 'maternity';

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

      {/* Newborn Hero Section - Full Width Scaling */}
      {isNewbornSession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={newbornImage}
              alt="Beautiful newborn photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  NEWBORN
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Families Hero Section - Full Width Scaling */}
      {isFamiliesSession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={familiesImage}
              alt="Beautiful family photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  FAMILIES
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tagline Section - Below Photo */}
      {isNewbornSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
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

            {/* Recent Newborn Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Newborn Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some beautiful newborn moments</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/5ChO4h9oA6sIG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Amelia & Adeline
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/iWKGyYIOugchY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Twins
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/IGgmHXVlumhea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Newborn Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/pkCGDrQwlD8QQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Brielle
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/O0u9jawxbz3y4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Baby Archer
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/8EvboNluGOK9B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Twins First Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/2Ih1cTznUyozG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Micah
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Families Content Section */}
      {isFamiliesSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
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

            {/* Recent Family Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Family Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some of our favorite family moments</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/8sfSa5Ux8sywe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Fall Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/4KtDyilUtcQLZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Rains Family Photos 2024
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/TAPgt9kDYGu6S" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Family Mini 2024
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/cZr1HVNjF5ld7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Yant Family Photos '25
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/fNc2YHedn8cb4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Family Mini 2025
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/7qvu0AmKdJxo0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Yants 2024
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Couples Hero Section - Full Width Scaling */}
      {isCouplesSession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={couplesImage}
              alt="Beautiful couples photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  COUPLES
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Couples Content Section */}
      {isCouplesSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
              Love lived out in ordinary days
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Every family begins with two individuals who decide that they will belong to one another and walk through life side by side. This is the beginning of your story. The story of your family starts here.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                I love these sessions because they feel like stepping into a book that has only just begun. We don't know yet what twists and turns the story will take, but we know this moment—this chapter—is Chapter One.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                I love young couples, with their glow of youth and excitement, standing at the threshold of all that's ahead. I love couples in the thick of it—with littles tugging at their hands, busy schedules, and very full plates—taking a pause to remember how much they love each other in the middle of it all. And I love couples who are more seasoned, their story tested and proven, their love deepened through years of shared life.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                To an outside eye, their love may seem quieter. But what I see is strength—friendship, forgiveness, and faithfulness built through countless days of choosing one another, of saying "I love you" not just in words, but in the way they live.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                If you choose a couples session, it won't be about performance or posed smiles. It will be about presence. A simple remembering of who you are together—today, in this season—and keeping that memory safe for tomorrow.
              </p>
            </div>

            {/* Closing Tagline */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 italic text-center">
                Marriage is the backbone of a family. These sessions are a chance to remember where your story began, to pause and honor the love that holds it all together.
              </p>
            </div>

            {/* Recent Couples Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Couples Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some beautiful couples moments</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/LPskwdZcDS1hk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Anniversary Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/lHjS1pFib5AA6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Save the Date
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/mli55JdN5amy2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Spring Mini '24
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Your Story Hero Section - Full Width Scaling */}
      {isYourStorySession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={yourStoryImage}
              alt="Beautiful family lifestyle photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  YOUR STORY
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Your Story Content Section */}
      {isYourStorySession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
              Because one day, you'll want to relive this chapter.
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Every family has a story—made up of the little things you do together, day after day, season after season.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Maybe it's a cozy autumn afternoon with tea and story time, a summer day spent playing on the beach, or a picnic under the shade of your favorite tree. Maybe it's baking in the kitchen with little helpers beside you, building forts in the living room, or wandering barefoot through the garden.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                These sessions are relaxed and unhurried, leaving plenty of room for laughter, play, and the quiet in-between moments. They aren't about stiff poses or forced smiles—they're about you. The way you look at each other. The way your child's hand fits perfectly in yours. The joy of doing something you already love, together.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Your Story Sessions are designed to take your favorite memories with your favorite people and hold onto them in the most beautiful way—so when the season passes, you'll always have more than just the memory. You'll have the feeling, the connection, and the proof of the life you built together.
              </p>
            </div>

            {/* Closing Tagline */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 italic text-center">
                The simple, beautiful moments you'll never want to forget.
              </p>
            </div>

            {/* Recent Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some beautiful story sessions</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/qrnWVQWnQMGy6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Beach
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/ScVWorVtg5pUA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Long Summer Afternoon
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/jjhBKf1538Jgn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Breedlove Newborn Home Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/JnirKe14AuDvm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Family Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Mommy & Me Hero Section - Full Width Scaling */}
      {isMommyMeSession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={mommyMeImage}
              alt="Beautiful mommy and me photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  MOMMY & ME
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mommy & Me Content Section */}
      {isMommyMeSession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
              The time with this little one is something you cherish, guard, and will remember with fondness for the rest of your life.
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                So often, it's mama holding the camera. Capturing the first steps, the messy faces, the sleepy snuggles. Always watching, always recording. But rarely in the frame herself.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                And yet—it is mama who is most present. In the rhythms of the day, in the tiny routines no one else sees. In the folding of clothes, the brushing of curls, the steady arms that carry everything.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                These sessions are a way to honor that. A way to slow down and turn the camera toward the heart of the home. Toward you.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                We can stay in the quiet comfort of your house—on the bed, in the kitchen, curled up in a chair—or we can step into the soft golden light outdoors, letting your little one run barefoot while you gather them in again and again. There's no pressure to perform. Just space to be together.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                I'll gently guide you, but mostly I'll follow the way your love already flows—because that's the part worth remembering. The way you held them. The way they clung to you. The way you were, in all the ways they'll never forget.
              </p>
            </div>

            {/* Closing Tagline */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 italic text-center">
                You love them so much—let me get some pictures that show it.
              </p>
            </div>

            {/* Recent Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Mommy & Me Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some beautiful moments between mama and baby</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/YyuRlrUN4zoUE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Eliza Baby Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/9HO2pdK7Eij9N" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Eden
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/DqG1UgSN3YuLf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Mommy and Me Summer '24
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/CmQTYSpxjJXOe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Morning Snuggles
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/fyPFVNL5bIfUb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Springtime
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/34M0G3Fp7tJ2B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Giggles and Hugs
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/PWDjScc9BA801" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Cherry Blossom Mini Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/fHQD0YvX0bwt8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Mommy and Me
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Maternity Hero Section - Full Width Scaling */}
      {isMaternitySession && (
        <section className="relative w-full">
          <div className="relative w-full">
            <img
              src={maternityImage}
              alt="Beautiful maternity photography session"
              className="w-full h-auto object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] opacity-90 font-light">
                  MATERNITY
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Maternity Content Section */}
      {isMaternitySession && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-600 mb-12 italic">
              You're growing a whole person. That's worth remembering.
            </p>
            
            {/* Content Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                There's a hush to this season. A sense of quiet preparation, even when life feels loud. You're growing a baby—but you're also growing into a mother again (or for the very first time). And that matters. These days deserve to be remembered.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                My maternity sessions are peaceful, unhurried, and shaped gently around you. Whether we walk through golden fields, curl up at home with bare feet and soft fabrics, or chase toddlers in the late light, the goal is always the same: to hold onto the beauty of what is already here.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                You don't have to be used to being in front of a camera. In fact, most of the mothers I photograph start by telling me they're awkward or unsure. But with a little guidance and a quiet rhythm, something lovely unfolds. I'll gently coach you, offer soft direction when needed, and keep the energy light and encouraging—so what we capture feels honest, full of connection, and surprisingly effortless.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                I look for real moments—the way your hands settle on your belly, the smile you give your little one, the way your spouse glances at you when you're not looking. These are the details that matter. These are the things you'll want to remember.
              </p>
            </div>

            {/* Closing Tagline */}
            <div className="max-w-3xl mx-auto mt-12">
              <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 italic text-center">
                Soft and relaxed sessions, with space for snuggles, joy, and the quiet beauty of waiting.
              </p>
            </div>

            {/* Recent Sessions Gallery Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">Recent Maternity Sessions</h3>
                <p className="font-sans text-lg text-gray-600">Take a peek into some beautiful maternity moments</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://rosegoldphotography.pic-time.com/LObzvQqX2WQG2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Kimber
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/7E1DQfBp2kh4V" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Maternity
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/0znOFu78q44hL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Maternity Family Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/nlpqHMvlJZjLi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Maternity Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
                
                <a 
                  href="https://rosegoldphotography.pic-time.com/zyAQ6rjXobOS4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="font-serif text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    Maternity Session
                  </div>
                  <div className="font-sans text-sm text-gray-500 mt-1">View Session →</div>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Other Sessions - Default Layout */}
      {!isNewbornSession && !isFamiliesSession && !isCouplesSession && !isYourStorySession && !isMommyMeSession && !isMaternitySession && (
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