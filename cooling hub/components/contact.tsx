"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9117910085",
    href: "tel:+919117910085",
  },
  {
    icon: Mail,
    title: "Email",
    value: "coolinghubexperts@gmail.com",
    href: "mailto:coolinghubexperts@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Opposite Terapanth Bhawan, RB Lane, Forbesganj",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 8AM - 8PM",
    href: "#",
  },
];

const serviceTypes = [
  "AC Installation",
  "AC Repair",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Microwave Repair",
  "Geyser Repair",
  "Chimney Service",
  "Other Appliance",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Get a Free Quote Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Fill out the form below and our team will get back to you within 30 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.title}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-accent rounded-2xl p-6 text-accent-foreground">
              <h4 className="text-lg font-semibold mb-2">Emergency Service</h4>
              <p className="text-sm opacity-90 mb-4">
                Need urgent repair? Call our 24/7 emergency hotline for immediate assistance.
              </p>
              <a
                href="tel:+919117910085"
                className="inline-flex items-center gap-2 bg-background/20 px-4 py-2 rounded-lg font-medium hover:bg-background/30 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9117910085
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    {"We've received your request. Our team will contact you shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about the problem you're facing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
