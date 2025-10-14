import React from "react";
import { Phone, ArrowRight, CircleCheck } from "lucide-react";

export default function ComHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                <CircleCheck className="h-4 w-4" />
                Trusted Across the GTA
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Creating Healthier, Safer, and More Productive{" "}
              <span className="text-primary">Workplaces</span>
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Comprehensive commercial cleaning services across the Greater Toronto Area. 
              We deliver tailored janitorial programs designed around your business hours and budget.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 gap-2 group">
                <Phone className="h-5 w-5" />
                Get Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6">
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-clean-corporate-office-space-with-glass-win.jpg"
                alt="Professional commercial cleaning service"
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CircleCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Eco-Friendly Products</div>
                  <div className="text-sm text-muted-foreground">Safe for your team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
