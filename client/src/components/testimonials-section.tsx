import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily & James",
    type: "Wedding Clients",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "Sarah captured our wedding day perfectly. Every photo tells a story and brings back all the emotions we felt. Her artistic eye and gentle approach made us feel so comfortable.",
  },
  {
    name: "The Thompson Family",
    type: "Family Session",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "Our family photos are absolutely stunning! Sarah has such a gift for capturing natural moments. Our kids were so comfortable with her, and it shows in every image.",
  },
  {
    name: "Lisa & David",
    type: "Newborn Session",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "The newborn photos Sarah took of our daughter are treasures we'll keep forever. Her patience and skill created the most beautiful, gentle images during such a special time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl lg:text-6xl text-primary mb-6">
            Kind Words
          </h2>
          <p className="font-serif text-xl text-foreground max-w-3xl mx-auto">
            What my clients say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-foreground leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-sm text-primary">{testimonial.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
