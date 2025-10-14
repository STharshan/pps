import { Sparkles, Shield, Leaf, Clock, Award, Zap } from "lucide-react";

export default function FloorWhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 bg-gradient-to-b from-background to-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The PPS Advantage</h2>
          <p className="text-xl text-muted-foreground">
            We go beyond surface cleaning to deliver flawless results with minimal disruption to your home or business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Sparkles className="h-6 w-6 text-[#0094D9]" />,
              title: "Revive Natural Shine",
              desc: "Restore your floor's original beauty and color with our professional restoration process.",
            },
            {
              icon: <Shield className="h-6 w-6 text-[#0094D9]" />,
              title: "Extend Floor Lifespan",
              desc: "Prevent costly replacements by protecting your floors from wear, scratches, and damage.",
            },
            {
              icon: <Leaf className="h-6 w-6 text-[#0094D9]" />,
              title: "Eco-Safe Products",
              desc: "Low-odor, quick-dry waxes that are safe for your space and the environment.",
            },
            {
              icon: <Clock className="h-6 w-6 text-[#0094D9]" />,
              title: "Minimal Disruption",
              desc: "Quick-dry finishes and flexible scheduling to keep your business running smoothly.",
            },
            {
              icon: <Award className="h-6 w-6 text-[#0094D9]" />,
              title: "Hygienic & Safe",
              desc: "Create slip-resistant surfaces that are both stunning and safe for daily use.",
            },
            {
              icon: <Zap className="h-6 w-6 text-[#0094D9]" />,
              title: "Moisture Protection",
              desc: "Seal and protect against moisture, scuffs, and daily wear for lasting beauty.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground flex flex-col gap-6 border-gray-200 rounded-xl border py-6 shadow-sm relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-[#0094D9]/10 rounded-lg">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
