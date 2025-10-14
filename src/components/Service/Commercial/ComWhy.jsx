import React from "react";
import {
    CircleCheck,
    Users,
    Leaf,
    Award,
    Clock,
    MapPin,
} from "lucide-react";

export default function ComWhyChooseSection() {
    const cards = [
        {
            title: "Customised Cleaning Plans",
            description:
                "Flexible schedules and programs based on your facility's specific needs.",
            details:
                "We work with you to create a cleaning program that fits your budget, schedule, and specific requirements.",
            icon: <CircleCheck className="h-6 w-6" />,
            image: "/customized-cleaning-schedule-planning-on-tablet.jpg",
        },
        {
            title: "Reliable & Trained Staff",
            description:
                "Background-checked, uniformed teams trained in WHMIS safety protocols.",
            details:
                "Every team member undergoes thorough background checks and comprehensive safety training.",
            icon: <Users className="h-6 w-6" />,
            image: "/professional-cleaning-staff-in-uniform-with-safety.jpg",
        },
        {
            title: "Eco-Friendly Products",
            description:
                "Advanced equipment and environmentally safe cleaning solutions.",
            details:
                "All our cleaning agents are non-toxic, biodegradable, and compliant with Canadian environmental regulations.",
            icon: <Leaf className="h-6 w-6" />,
            image: "/eco-friendly-green-cleaning-products-and-equipment.jpg",
        },
        {
            title: "Quality Assurance",
            description:
                "Regular audits and site inspections ensure consistent high standards.",
            details:
                "Our quality control team conducts regular inspections and provides detailed reporting.",
            icon: <Award className="h-6 w-6" />,
            image: "/quality-inspection-checklist-and-audit-process.jpg",
        },
        {
            title: "Flexible Scheduling",
            description:
                "Daily, weekly, or monthly cleaning with minimal disruption.",
            details:
                "Choose from evening, overnight, or weekend services to avoid disrupting your business operations.",
            icon: <Clock className="h-6 w-6" />,
            image: "/flexible-scheduling-calendar-showing-different-tim.jpg",
        },
        {
            title: "Trusted Across the GTA",
            description:
                "Serving Toronto, Markham, Mississauga, Brampton, Oshawa, and Pickering.",
            details:
                "We proudly maintain offices, retail spaces, and commercial buildings throughout the Greater Toronto Area.",
            icon: <MapPin className="h-6 w-6" />,
            image: "/greater-toronto-area-map-with-service-locations-ma.jpg",
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-muted/30">
            <div className="container max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Why Choose <span style={{ color: "#0094D9" }}>PPS Group</span>
                    </h2>
                    <p className="text-lg text-muted-foreground text-pretty">
                        We deliver comprehensive commercial cleaning services with a
                        commitment to excellence, safety, and environmental responsibility.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    className="object-cover absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    style={{
                                        background: "linear-gradient(to bottom right, #0094D933, #0094D915)",
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:text-white"
                                        style={{
                                            backgroundColor: "#0094D91A",
                                            color: "#0094D9",
                                        }}
                                    >
                                        <div className="group-hover:text-white group-hover:bg-[#0094D9] rounded-lg p-2 transition-colors">
                                            {card.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hidden on hover details (can be expanded via JS if desired) */}
                                <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                                    <p className="text-sm text-muted-foreground pt-3 border-t">
                                        {card.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
