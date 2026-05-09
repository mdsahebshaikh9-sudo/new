"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  AirVent, 
  Refrigerator, 
  WashingMachine, 
  Wrench, 
  Settings, 
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Flame,
  Wind
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "ac",
    icon: AirVent,
    title: "AC Services",
    description: "Complete air conditioning solutions for your home and office.",
    color: "bg-primary/10 text-primary",
    items: [
      "AC Installation",
      "AC Repair & Maintenance",
      "AC Gas Refilling",
      "AC Cleaning & Servicing",
      "Central AC Systems",
      "Split AC Services",
    ],
  },
  {
    id: "fridge",
    icon: Refrigerator,
    title: "Refrigerator Services",
    description: "Expert refrigerator repair and maintenance services.",
    color: "bg-secondary/10 text-secondary",
    items: [
      "Refrigerator Repair",
      "Compressor Replacement",
      "Thermostat Repair",
      "Gas Refilling",
      "Door Seal Replacement",
      "Deep Freezer Services",
    ],
  },
  {
    id: "washing",
    icon: WashingMachine,
    title: "Washing Machine",
    description: "Professional washing machine repair and installation.",
    color: "bg-primary/10 text-primary",
    items: [
      "Washing Machine Repair",
      "Motor Replacement",
      "Drum Repair",
      "Water Inlet Issues",
      "Drainage Problems",
      "Installation Services",
    ],
  },
  {
    id: "microwave",
    icon: Settings,
    title: "Microwave Repair",
    description: "Fast and reliable microwave oven repair services.",
    color: "bg-secondary/10 text-secondary",
    items: [
      "Microwave Not Heating",
      "Turntable Issues",
      "Door Switch Repair",
      "Control Panel Fix",
      "Magnetron Replacement",
      "General Maintenance",
    ],
  },
  {
    id: "geyser",
    icon: Flame,
    title: "Geyser Services",
    description: "Complete geyser installation and repair solutions.",
    color: "bg-primary/10 text-primary",
    items: [
      "Geyser Installation",
      "Geyser Repair",
      "Thermostat Replacement",
      "Element Replacement",
      "Leak Fixing",
      "Annual Servicing",
    ],
  },
  {
    id: "chimney",
    icon: Wind,
    title: "Chimney Services",
    description: "Professional kitchen chimney installation and maintenance.",
    color: "bg-secondary/10 text-secondary",
    items: [
      "Chimney Installation",
      "Chimney Repair",
      "Filter Cleaning",
      "Motor Replacement",
      "Duct Cleaning",
      "Auto-Clean Service",
    ],
  },
  {
    id: "repair",
    icon: Wrench,
    title: "General Repair",
    description: "Quick and reliable repair services for all appliances.",
    color: "bg-primary/10 text-primary",
    items: [
      "Dishwasher Repair",
      "Water Heater Repair",
      "Cooler Services",
      "RO Water Purifier",
      "Induction Repair",
      "Mixer Grinder Repair",
    ],
  },
  {
    id: "amc",
    icon: ShieldCheck,
    title: "AMC Services",
    description: "Annual maintenance contracts for worry-free appliance care.",
    color: "bg-secondary/10 text-secondary",
    items: [
      "Annual Service Plans",
      "Priority Support",
      "Discounted Repairs",
      "Regular Maintenance",
      "Parts Replacement",
      "24/7 Support",
    ],
  },
];

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Complete Home Appliance Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From installation to repair, we provide comprehensive services for all your home appliances with expert technicians and quality parts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Expandable Items */}
                <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-2 pt-2 border-t border-border">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  className="flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline"
                >
                  {isExpanded ? "Show Less" : "View Services"}
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="#contact">
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
