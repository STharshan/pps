import React from 'react';
import { Droplet, Shield, Sparkles } from 'lucide-react'; // Updated imports
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
    <section className="relative h-[130vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 opacity-20 mt-0">
        <img
          alt="Power washing background"
          decoding="async"
          data-nimg="fill"
          className="object-cover"
          src="/power-washing-cleaning-exterior-building-facade.jpg"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: 0,
            color: 'transparent',
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mt-40">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-sm font-medium">Professional Power Washing Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#0094D9]">Restore. Refresh. Renew.</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 text-balance">The Power of a Deep Clean</p>
          <p className="text-lg mb-12 text-blue-50/90 max-w-2xl mx-auto text-pretty">
            Transform your property with high-pressure cleaning that removes years of dirt, grime, and buildup — safely and effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <HashLink to="#get">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-10 rounded-md px-8 py-6 bg-[#0094D9] hover:bg-[#007BB5] text-lg"
            >
              Get Free Quote
            </button>
            </HashLink>
            <HashLink to="#process">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              View Our Work
            </button>
            </HashLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Droplet className="h-8 w-8 text-[#0094D9] mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="h-8 w-8 text-[#0094D9] mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-blue-100">Eco-Friendly</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="h-8 w-8 text-[#0094D9] mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-blue-100">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
