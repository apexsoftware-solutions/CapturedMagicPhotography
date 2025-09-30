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
            <p className="font-sans text-xl leading-relaxed text-foreground mb-6 italic">
              When I was a teenager, my great-grandmother often called me old-fashioned. She said it with a smile, telling me that was why she loved being around me—that I reminded her of the girls she grew up with. Now that I'm older, I think that quality has only grown stronger.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I am guided by a strong sense of duty and a deep desire to honor my Lord and Savior, Jesus Christ, in everything I do. I love being married to Jeff, and I work to keep the spark, the friendship, and the trust alive in our marriage. Together, we are raising our children to choose what is right, to grow strong in character, and—most importantly—to become adults who love Jesus even more than we do.
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
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              A fun fact about me: I am the oldest daughter in a family of twelve kids, and the only girl at the "boy" end of the family. I was VERY much a tomboy for a while, and it took many patient talks from my parents to get me to behave in any way like a lady. But I was also born with a STRONG maternal instinct. It started with my siblings—I loved helping Mom with the babies. I babysat often and had a running series of made-up stories I would tell my younger siblings before bedtime.
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

          {/* Photography Journey */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Photography has always been a love of mine, even before I was a teen. My motive for taking pictures then was to document my little siblings' childhood, to be able to save happy moments where love was abundant even though life was messy.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I used to spend any birthday money I got from my grandma on the old Kodak disposable cameras. I LOVED the feeling of having a little camera in my pocket. I was always trying to be ready for those sweet, natural moments to snap a picture of one of my "babies" (a.k.a. youngest siblings).
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
              This has followed me into adulthood (shocking as it may seem to hear coming from a photographer's website blog post, lol).
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              The photos I love the most are the ones with connection in them—spark, emotion, love. The photos that show how you feel about someone.
            </p>
          </div>

          {/* Photography Style */}
          <div>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I tried for a year or so to be the photographer who gets the "perfect" shot that makes the main subject look even better than they do in real life. But I found no fulfillment in that, and it was short-lived.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              So I pivoted. I started leaning into what I myself loved:
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Moments snuggled up with my littles on the couch, their messy morning hair and sleepy eyes. Relaxing into a full embrace when my husband walks in the door and feeling my whole body breathe a deep sigh of contentment. The peek-a-boos and tickle fights. The fleeting newborn stage when everything slows down for a month and I soak up the precious new baby we were just blessed with.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              I love this life, and I am so thankful for the beautiful people in it.
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
