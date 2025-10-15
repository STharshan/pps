import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Driveways & Walkways",
    description:
      "Remove oil stains, tire marks, and years of accumulated dirt from concrete and asphalt surfaces.",
    imageSrc: "/clean-driveway-after-power-washing.jpg",
    detail:
      "Our high-pressure cleaning restores the original appearance of your driveway and walkways, improving curb appeal and safety by removing slippery substances.",
  },
  {
    id: 2,
    title: "Patios, Decks & Paving Stones",
    description: "Eliminate moss, algae, and weathering from outdoor living spaces.",
    imageSrc: "/clean-patio-deck-after-power-washing.jpg",
    detail:
      "We carefully adjust pressure settings to clean delicate surfaces like wood decks and interlocking pavers without causing damage, revealing their natural beauty.",
  },
  {
    id: 3,
    title: "Fences, Walls & Brickwork",
    description: "Strip away dirt, mildew, and discoloration from vertical surfaces.",
    imageSrc: "/clean-brick-wall-fence-after-power-washing.jpg",
    detail:
      "Whether it's vinyl fencing, painted walls, or exposed brick, our team uses the right technique to clean without stripping paint or damaging mortar.",
  },
  {
    id: 4,
    title: "Exterior Building Facades",
    description: "Restore the professional appearance of commercial and residential buildings.",
    imageSrc: "/clean-building-facade-after-power-washing.jpg",
    detail:
      "From stucco to siding, we remove pollution, bird droppings, and weather stains to make your building look freshly painted.",
  },
  {
    id: 5,
    title: "Windows, Signage & Shopfronts",
    description: "Crystal-clear cleaning for glass and storefront surfaces.",
    imageSrc: "/clean-storefront-windows-after-power-washing.jpg",
    detail:
      "We use controlled pressure and specialized techniques to clean windows and signage without streaking or damage, ensuring maximum visibility and appeal.",
  },
];

const IdealSurfaces = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0094D9]">
            Ideal for These Surfaces
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional power washing for every exterior surface
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-card border-gray-200 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between"
                onClick={() => handleCardClick(card.id)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {card.description}
                  </p>
                </div>
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
                  className="lucide lucide-chevron-down h-6 w-6 text-muted-foreground flex-shrink-0 ml-4"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 max-h-0 opacity-0 ${
                  expandedCard === card.id ? "max-h-[500px] opacity-100" : ""
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <img
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      src={card.imageSrc}
                      className="object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
                  <p className="text-muted-foreground text-pretty">{card.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealSurfaces;
