import { Phone, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book a Service",
    description: "Call us or fill the form to schedule a service at your convenient time.",
  },
  {
    icon: ClipboardCheck,
    title: "Get Diagnosis",
    description: "Our technician will inspect and diagnose the issue with your appliance.",
  },
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "We fix the problem using genuine parts and proven techniques.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Check",
    description: "Final testing to ensure everything works perfectly before we leave.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Getting your appliances fixed is easy with our streamlined service process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
