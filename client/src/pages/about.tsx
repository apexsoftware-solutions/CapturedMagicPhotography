import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import aboutHeaderImage from "@assets/kimberly-headshot.jpg";

// New lifestyle images
import morningCoffee from "@assets/DSC01281_1759240262830.jpg";
import homeReading from "@assets/DSC01401_1759240262830.jpg";
import motherKidsCuddle from "@assets/DSC01335_1759240262830.jpg";
import mountainCouple from "@assets/DSC01839_1759240262830.jpg";
import outdoorPortrait from "@assets/DSC00346_1759240262830.jpg";
import familyBookTime from "@assets/DSC01351_1759240262830.jpg";
import couchReading from "@assets/DSC01321_1759240262830.jpg";
import musicBook from "@assets/DSC00240_1759240262830.jpg";
import indoorPortrait from "@assets/DSC00229_1759240262830.jpg";
import tireSwingMoment from "@assets/DSC01062_1759240262830.jpg";
import babyChicks from "@assets/DSC00788_1759240262830.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-300 font-sans text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            BACK TO HOME
          </Link>
        </div>
      </div>
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-foreground/80">
            ABOUT ME
          </h1>
          <h2 className="font-script text-3xl lg:text-4xl text-foreground mb-8 italic leading-relaxed">
            I'm Kimberly
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto"></div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Headshot Photo */}
          <div className="mb-12">
            <img
              src={aboutHeaderImage}
              alt="Kimberly, photographer and mother"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Personal Introduction */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I'm a photographer, a mother of three, and a firm believer that the quietest moments often turn out to be the most meaningful ones. I live just outside Fredericksburg, Virginia, where life hums along with garden chores, schoolwork at the kitchen table, and the endless, sacred work of raising children.
            </p>
            
            {/* Morning coffee moment */}
            <div className="my-6 grid md:grid-cols-2 gap-3 items-center">
              <img
                src={morningCoffee}
                alt="Quiet morning moment with coffee"
                className="w-full h-auto rounded-lg shadow-sm"
              />
              <img
                src={homeReading}
                alt="Reading and learning at home"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-foreground">
              I come from a large, joyfully chaotic homeschool family—twelve children in all—and as the oldest girl, I was a second pair of hands from the beginning. I grew up holding babies, calming tantrums, folding laundry with a baby on my hip, and learning how to be gentle and strong at the same time. That early life taught me to notice people, to serve with love, and to find beauty in the everyday.
            </p>
          </div>

          {/* First Image - The tenderness she learned growing up */}
          <div className="mb-12">
            <img
              src={motherKidsCuddle}
              alt="Mother embracing her children with tenderness"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Current Life */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Now, I homeschool my own children and spend weekends capturing photographs of other families in their own beautiful, ordinary rhythm. I work mostly in the evenings or on Saturdays when my husband is home—he's my greatest support, he is a wedding videographer so we often do weddings together, we love being together!
            </p>
            
            {/* Marriage and work as photographer */}
            <div className="my-6 grid md:grid-cols-2 gap-3">
              <img
                src={mountainCouple}
                alt="Marriage and partnership - couple on mountain overlook"
                className="w-full h-auto rounded-lg shadow-sm"
              />
              <img
                src={outdoorPortrait}
                alt="Kimberly as photographer in her element"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I photograph newborns, children, couples, and families—especially in the in-between moments. A little girl tangled in her mother's skirt. A toddler asleep on his father's shoulder. The way a grandmother lights up when she holds her grandson. These are the things I love to preserve.
            </p>
          </div>

          {/* Photography Style */}
          <div>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              My style is gentle, natural, and led by emotion rather than expectation. I don't ask your children to perform or pose. I follow their lead and capture the love that's already there.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              If your life is full of crumbs and cuddles, if your days are sweet but a little messy, if you want photos that feel like memory and not just image—I'd be honored to photograph you.
            </p>
            
            {/* LARGEST CLUSTER - The variety of moments she captures */}
            <div className="my-6">
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <img
                  src={familyBookTime}
                  alt="Family reading together - capturing tender moments"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={couchReading}
                  alt="Cozy family reading time"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <img
                  src={musicBook}
                  alt="Music and hymns at the piano"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={indoorPortrait}
                  alt="Warm, genuine portraits"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={tireSwingMoment}
                  alt="Playful childhood moments on the tire swing"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-3">
                <img
                  src={babyChicks}
                  alt="Simple homestead life with baby chicks"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12 border-t border-gray-100">
            <h3 className="font-sans text-2xl md:text-3xl tracking-[0.1em] font-light text-foreground mb-6">
              Ready to tell your story?
            </h3>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-8">
              I would love to learn about your family and create something beautiful together.
            </p>
            <Link
              href="/"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-block border border-foreground hover:bg-foreground hover:text-white text-foreground px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
