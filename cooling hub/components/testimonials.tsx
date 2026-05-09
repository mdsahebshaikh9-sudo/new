import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and reasonably priced.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "We use CoolHub for all our office AC maintenance. Their AMC plan is cost-effective and their response time is incredible.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content: "My refrigerator stopped working and they fixed it the same day. The technician was knowledgeable and explained everything clearly.",
    rating: 5,
  },
  {
    name: "David Williams",
    role: "Property Manager",
    content: "Managing multiple properties, I need reliable service partners. CoolHub has never let me down in 3 years of working together.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg opacity-90 leading-relaxed">
            {"Don't just take our word for it. Here's what our satisfied customers have to say."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
            >
              <Quote className="w-10 h-10 opacity-30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-lg leading-relaxed mb-6 opacity-95">
                {`"${testimonial.content}"`}
              </p>
              
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-70">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
