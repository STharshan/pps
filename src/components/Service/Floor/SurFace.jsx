import { useState } from "react";
import { LucideCircleCheck } from "lucide-react"; // optional, you can import icons from lucide-react

const cardData = [
  {
    title: "Vinyl Composite Tile (VCT)",
    img: "/vct-vinyl-composite-tile-floor.jpg",
    desc: "The most common commercial flooring that benefits greatly from regular strip and wax maintenance.",
    features: ["High-traffic durability", "Cost-effective maintenance", "Long-lasting shine"],
  },
  {
    title: "Linoleum",
    img: "/linoleum-floor-natural-material.jpg",
    desc: "Natural, eco-friendly flooring that requires specialized care to maintain its beauty.",
    features: ["Eco-friendly restoration", "Color preservation" ,"Enhanced durability"],
  },
  {
    title: "Hardwood",
    img: "/hardwood-floor-natural-wood-grain.jpg",
    desc: "Premium wood floors that deserve expert care to protect their natural elegance.",
    features: ["Protects wood grain", "Prevents moisture damage", "Enhances natural beauty"],
  },
    {
    title: "Marble",
    img: "/polished-marble-floor-luxury-stone.jpg",
    desc: "Luxury stone flooring that requires gentle yet effective restoration techniques.",
    features: ["Restores natural luster", "Protects from etching", "Premium finish"],
  },
  {
    title: "Concrete",
    img: "/polished-concrete-floor-industrial.jpg",
    desc: "Industrial and modern concrete floors that benefit from protective sealing.",
    features: ["Dust reduction", "Stain resistance", "Industrial strength"],
  },
  // Add more cards as needed
];

export default function IdealSurfacesSection() {
  // Initialize as empty array to avoid undefined errors
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    // Toggle the card's expanded state
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter((i) => i !== index)); // Remove from the list
    } else {
      setExpandedCards([...expandedCards, index]); // Add to the list
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ideal for These Surfaces
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Our strip and wax service is expertly tailored to restore and protect a wide range of flooring types.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => {
            const isExpanded = expandedCards.includes(index);
            return (
              <div
                key={index}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden cursor-pointer border-gray-200 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64">
                  <img
                    alt={card.title}
                    loading="lazy"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    src={card.img}
                    style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">{card.desc}</p>

                  {/* Features List */}
                  {isExpanded && (
                    <div className="pt-4 border-t space-y-2">
                      {card.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-[#0094D9] flex-shrink-0 mt-0.5"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-sm font-medium text-[#0094D9] hover:text-[#007dc0] transition-colors flex items-center gap-1"
                  >
                    {isExpanded ? "Show less" : "Learn more"}
                    {!isExpanded && (
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
