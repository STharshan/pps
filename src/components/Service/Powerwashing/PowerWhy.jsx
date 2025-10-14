import React from "react";
import { Sparkles, Shield, Leaf, Clock, Award, Users } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Instant Curb Appeal",
    description:
      "Revive your property's appearance and make a lasting impression.",
    imageSrc: "/clean-bright-building-exterior-after-power-washing.jpg",
    icon: <Sparkles className="h-16 w-16 text-white" />,
  },
  {
    id: 2,
    title: "Prevents Damage",
    description:
      "Removes mold, algae, and grime that can deteriorate surfaces over time.",
    imageSrc: "/surface-protection-from-mold-and-algae-removal.jpg",
    icon: <Shield className="h-16 w-16 text-white" />,
  },
  {
    id: 3,
    title: "Eco-Friendly Cleaning",
    description: "Uses only water — no toxic or abrasive chemicals.",
    imageSrc: "/eco-friendly-green-water-cleaning.jpg",
    icon: <Leaf className="h-16 w-16 text-white" />,
  },
  {
    id: 4,
    title: "Boosts Safety",
    description:
      "Eliminates slippery buildup from moss and algae, reducing fall hazards.",
    imageSrc: "/safe-clean-walkway-without-moss-or-algae.jpg",
    icon: <Clock className="h-16 w-16 text-white" />,
  },
  {
    id: 5,
    title: "Long-Lasting Results",
    description:
      "Regular power washing protects surfaces and reduces future maintenance costs.",
    imageSrc: "/durable-clean-surface-long-lasting-results.jpg",
    icon: <Award className="h-16 w-16 text-white" />,
  },
  {
    id: 6,
    title: "Professional Team",
    description:
      "Experienced technicians with commercial-grade equipment and expertise.",
    imageSrc: "/professional-power-washing-team-with-equipment.jpg",
    icon: <Users className="h-16 w-16 text-white" />,
  },
];

const WhyPowerWashingMatters = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0094D9]">
            Why Power Washing Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional power washing delivers results that go beyond surface-level cleaning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden group-hover:bg-transparent">
                <img
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  src={card.imageSrc}
                  className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 w-full h-full"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9] to-blue-700 transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0094D9] transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPowerWashingMatters;
