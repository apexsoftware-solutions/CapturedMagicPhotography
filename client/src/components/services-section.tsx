import { Heart, Users, Baby, Diamond, User, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Complete wedding day coverage from getting ready to the last dance. Artistic storytelling that captures every emotion and detail of your special day.",
    price: "Starting at $2,500",
  },
  {
    icon: Users,
    title: "Family Sessions",
    description: "Natural, relaxed family portraits that showcase your family's unique personality. Perfect for holiday cards and cherished family memories.",
    price: "Starting at $450",
  },
  {
    icon: Baby,
    title: "Maternity & Newborn",
    description: "Gentle, intimate sessions celebrating new life. From maternity glow to precious first days, capturing these fleeting moments with artistic care.",
    price: "Starting at $650",
  },
  {
    icon: Diamond,
    title: "Engagement Sessions",
    description: "Romantic couple sessions that celebrate your love story. Perfect for save-the-dates and getting comfortable before your wedding day.",
    price: "Starting at $350",
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Professional headshots and personal branding photography. Capturing your authentic self with confidence and style.",
    price: "Starting at $275",
  },
  {
    icon: Palette,
    title: "Custom Packages",
    description: "Special events, milestone celebrations, and unique photography needs. Let's create a custom package perfect for your vision.",
    price: "Contact for Pricing",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl lg:text-6xl text-primary mb-6">
            Services
          </h2>
          <p className="font-serif text-xl text-foreground max-w-3xl mx-auto">
            Comprehensive photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="text-3xl text-primary" size={32} />
                </div>
                <h3 className="font-script text-2xl text-primary mb-4">{service.title}</h3>
                <p className="font-serif text-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-primary font-serif text-lg font-semibold">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
