import { CheckCircle, Award, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "All our technicians are factory-trained and certified professionals.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize customer satisfaction with every service call.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Same-day service available for urgent repair needs.",
  },
];

const benefits = [
  "Factory-trained technicians",
  "Genuine spare parts only",
  "Transparent pricing",
  "90-day service warranty",
  "24/7 customer support",
  "No hidden charges",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Your Trusted Partner for Home Appliance Care
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience, CoolHub has been the go-to service provider for thousands of homes and businesses. We specialize in AC, refrigerator, washing machine, and all major home appliance repairs.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our team of certified technicians uses the latest diagnostic tools and genuine spare parts to ensure your appliances run efficiently for years to come.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Stats Banner */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-90">Services Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
