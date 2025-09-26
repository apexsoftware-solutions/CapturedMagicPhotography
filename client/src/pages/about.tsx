import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import aboutImage1 from "@assets/IMG_0843_1749571537894.jpg";
import aboutImage2 from "@assets/IMG_3279_1749571542677.jpg";
import aboutImage3 from "@assets/kimberly-headshot.jpg";

// New lifestyle images
import morningCoffee from "@assets/DSC01280_1758850014329.jpg";
import mountainCouple from "@assets/DSC01839_1758850017945.jpg";
import tireSwingMoment from "@assets/DSC01062_1758850023277.jpg";
import homeschoolSetup from "@assets/DSC01225_1758850026261.jpg";
import familyCuddles from "@assets/DSC01362_1758850029208.jpg";
import couchReading from "@assets/DSC01321_1758850031426.jpg";
import chickenCoop from "@assets/DSC00776_1758850033848.jpg";
import laundryLine from "@assets/DSC00951_1758850039563.jpg";
import childLaundry from "@assets/DSC00966_1758850046546.jpg";
import familyHug from "@assets/DSC00984_1758850050276.jpg";
import workingMom from "@assets/DSC01198_1758850053289.jpg";
import tableLessons from "@assets/DSC01148_1758850056058.jpg";
import bookshelfDetail from "@assets/DSC00159_1758850062637.jpg";
import bakingTime from "@assets/IMG_9199_1758850084337.jpg";
import kitchenHelpers from "@assets/IMG_9193_1758850089863.jpg";
import youngReader from "@assets/DSC00072_1758850092576.jpg";
import libraryMoment from "@assets/DSC00074_1758850098478.jpg";
import toyBlocks from "@assets/DSC00157_1758850101878.jpg";

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
              src={aboutImage3}
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
            <div className="my-8 grid md:grid-cols-2 gap-6 items-center">
              <img
                src={morningCoffee}
                alt="Quiet morning moment with coffee"
                className="w-full h-auto rounded-lg shadow-sm"
              />
              <img
                src={homeschoolSetup}
                alt="Homeschool workspace with vintage charm"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-foreground">
              I come from a large, joyfully chaotic homeschool family—twelve children in all—and as the oldest girl, I was a second pair of hands from the beginning. I grew up holding babies, calming tantrums, folding laundry with a baby on my hip, and learning how to be gentle and strong at the same time. That early life taught me to notice people, to serve with love, and to find beauty in the everyday.
            </p>
          </div>

          {/* First Image */}
          <div className="mb-12">
            <img
              src={aboutImage1}
              alt="Mother and child embracing in warm natural light"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Current Life */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Now, I homeschool my own children and spend weekends capturing photographs of other families in their own beautiful, ordinary rhythm. I work mostly in the evenings or on Saturdays when my husband is home—he's my greatest support, he is a wedding videographer so we often do weddings together, we love being together!
            </p>
            
            {/* Homeschool and family life images */}
            <div className="my-8">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <img
                  src={tableLessons}
                  alt="Homeschool lessons at the kitchen table"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={couchReading}
                  alt="Family reading time together"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={libraryMoment}
                  alt="Reading with children by the bookshelf"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={mountainCouple}
                  alt="Marriage and partnership - couple on mountain overlook"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={workingMom}
                  alt="Balancing work and motherhood"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-foreground">
              I photograph newborns, children, couples, and families—especially in the in-between moments. A little girl tangled in her mother's skirt. A toddler asleep on his father's shoulder. The way a grandmother lights up when she holds her grandson. These are the things I love to preserve.
            </p>
          </div>

          {/* Second Image */}
          <div className="mb-12">
            <img
              src={aboutImage2}
              alt="Quiet family moments captured naturally"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Photography Style */}
          <div className="mb-12">
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              My style is gentle, natural, and led by emotion rather than expectation. I don't ask your children to perform or pose. I follow their lead and capture the love that's already there.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              If your life is full of crumbs and cuddles, if your days are sweet but a little messy, if you want photos that feel like memory and not just image—I'd be honored to photograph you.
            </p>
            
            {/* Daily life and beautiful ordinary moments */}
            <div className="my-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={chickenCoop}
                  alt="Homestead life - mother and daughter with chickens"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={tireSwingMoment}
                  alt="Playful childhood moments"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <img
                  src={laundryLine}
                  alt="Simple daily rhythms - hanging laundry"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={childLaundry}
                  alt="Children helping with daily tasks"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={youngReader}
                  alt="Quiet learning moments"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={bakingTime}
                  alt="Kitchen moments and baking together"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={kitchenHelpers}
                  alt="Family cooking and kitchen life"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              
              <img
                src={familyHug}
                alt="The heart of family - mother embracing her three children"
                className="w-full h-auto rounded-lg shadow-sm mb-6"
              />
              
              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src={familyCuddles}
                  alt="Tender family moments"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={bookshelfDetail}
                  alt="Learning and literature in daily life"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <img
                  src={toyBlocks}
                  alt="Simple childhood pleasures"
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