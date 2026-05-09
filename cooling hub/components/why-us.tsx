import { 
  Shield, 
  Clock, 
  BadgeCheck, 
  Banknote, 
  Headphones, 
  Sparkles 
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Same Day Service",
    description: "We understand urgency. Most repairs are completed within the same day of booking.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    description: "Our technicians are factory-trained and certified with years of hands-on experience.",
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All our repairs come with a 90-day warranty on parts and labor for your peace of mind.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "No hidden charges. You get a detailed quote before any work begins.",
  },
  {
    icon: Sparkles,
    title: "Genuine Parts",
    description: "We use only original manufacturer parts to ensure optimal performance and longevity.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer support team is available round the clock for emergencies.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            The CoolHub Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We go above and beyond to deliver exceptional service that keeps your appliances running smoothly.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                <div className="relative bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary/60 mb-1">0{index + 1}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
