import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0094D9]">Experience the Difference</h2>
          <p className="text-xl text-slate-300 text-pretty">
            Imagine walking into a room where every step gleams with freshness — clean, glossy, and protected. That's the PPS finish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 bg-[#0094D9] hover:bg-[#007bb5] text-white"
            >
              Get Free Quote Today
            </button>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Call Us Now
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <FaPhoneAlt className="text-[#0094D9] h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Call Us</div>
              <div className="text-sm text-slate-300">+1 (XXX) XXX-XXXX</div>
            </div>

            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <FaEnvelope className="text-[#0094D9] h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Email Us</div>
              <div className="text-sm text-slate-300">info@ppsgroup.com</div>
            </div>

            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <FaMapMarkerAlt className="text-[#0094D9] h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Service Area</div>
              <div className="text-sm text-slate-300">Greater Toronto Area</div>
            </div>
          </div>

          <p className="text-slate-400 pt-8">Don't wait until dullness turns into damage — let PPS Group bring your floors back to life.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
