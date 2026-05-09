"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const features = [
  "Same Day Service Available",
  "Certified Technicians",
  "90-Day Warranty",
];

const appliances = [
  { src: "/images/ac-unit.jpg", alt: "Air Conditioner", label: "AC Services" },
  { src: "/images/refrigerator.jpg", alt: "Refrigerator", label: "Fridge Repair" },
  { src: "/images/washing-machine.jpg", alt: "Washing Machine", label: "Washer Repair" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Trusted by 10,000+ Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Expert Home Appliance{" "}
              <span className="text-secondary">Repair & Services</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              From AC installation to refrigerator repair, we provide comprehensive home appliance services with certified technicians and guaranteed satisfaction.
            </p>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base bg-secondary hover:bg-secondary/90 text-white">
                <Link href="#contact">
                  Book a Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                <a href="tel:+919117910085">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Appliance Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large AC Image */}
              <div className="col-span-2 relative group">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image
                    src="/images/ac-unit.jpg"
                    alt="Air Conditioner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-bold">AC Services</p>
                    <p className="text-sm text-white/80">Installation & Repair</p>
                  </div>
                </div>
              </div>
              
              {/* Refrigerator Image */}
              <div className="relative group">
                <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image
                    src="/images/refrigerator.jpg"
                    alt="Refrigerator"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold">Fridge Repair</p>
                    <p className="text-xs text-white/80">All Brands</p>
                  </div>
                </div>
              </div>
              
              {/* Washing Machine Image */}
              <div className="relative group">
                <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image
                    src="/images/washing-machine.jpg"
                    alt="Washing Machine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold">Washer Repair</p>
                    <p className="text-xs text-white/80">Expert Service</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-white/70 mt-1 text-sm">Happy Customers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <div className="text-3xl font-bold text-secondary">15+</div>
            <div className="text-white/70 mt-1 text-sm">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-white/70 mt-1 text-sm">Expert Technicians</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <div className="text-3xl font-bold text-secondary">24/7</div>
            <div className="text-white/70 mt-1 text-sm">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
