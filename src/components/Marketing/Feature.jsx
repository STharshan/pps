"use client";
import React from "react";
import {
  MessageSquare,
  Camera,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function FeaturesSection() {
  const brand = "#0094D9";

  const features = [
    {
      id: 1,
      title: "Client Portal & Direct Communication",
      description:
        "Instant access to our management team through our integrated portal. No more phone tag or delayed responses. Your clients can reach us directly for anything they need, anytime.",
      icon: <MessageSquare className="h-7 w-7" />,
      image: "/modern-chat-interface-messaging-portal-with-notifi.jpg",
      points: [
        "Real-time messaging with management",
        "Instant notifications and updates",
        "Document sharing and requests",
        "Service history at your fingertips",
      ],
      reverse: false,
    },
    {
      id: 2,
      title: "Picture-Based CRM Tracking",
      description:
        "Visual proof of every job completed. Our CRM captures before and after photos, ensuring quality control and giving your clients complete confidence in our service.",
      icon: <Camera className="h-7 w-7" />,
      image: "/before-and-after-cleaning-photos-comparison-grid-i.jpg",
      points: [
        "Before & after photo documentation",
        "Quality assurance verification",
        "Service area tracking",
        "Issue resolution with visual proof",
      ],
      reverse: true,
    },
    {
      id: 3,
      title: "Timesheet Management with Evidence",
      description:
        "Complete transparency with clock in/out tracking. We solve the accountability problem that plagues other cleaning agencies. Every shift is documented with GPS verification and photo evidence.",
      icon: <Clock className="h-7 w-7" />,
      image: "/digital-timesheet-clock-in-out-interface-with-loca.jpg",
      points: [
        "GPS-verified clock in/out",
        "Photo evidence at each location",
        "Real-time attendance tracking",
        "Automated timesheet reports",
      ],
      reverse: false,
    },
    {
      id: 4,
      title: "Performance Tracking & Analytics",
      description:
        "Data-driven insights into every aspect of your service. Track team performance, client satisfaction, and service quality metrics to continuously improve and exceed expectations.",
      icon: <TrendingUp className="h-7 w-7" />,
      image: "/analytics-dashboard-with-performance-charts-and-me.jpg",
      points: [
        "Team performance metrics",
        "Client satisfaction scores",
        "Service completion rates",
        "Quality control analytics",
      ],
      reverse: true,
    },
  ];

  return (
    <section id="features" className="py-15 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0094D9] leading-tight">
            Our technology investment means better service for you
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We didn't settle for off-the-shelf solutions. We built custom
            software in-house to give our customers the exceptional service they
            deserve.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-32">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  feature.reverse ? "lg:order-2" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{ backgroundColor: brand, color: "white" }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold text-[#0094D9]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Points */}
                <div className="space-y-3 pt-4">
                  {feature.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#0094D9]/20 flex items-center justify-center">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: brand }}
                        ></div>
                      </div>
                      <span className="text-[#1C3B45]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative ${
                  feature.reverse ? "lg:order-1" : ""
                }`}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#E5E7EB]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Soft Glow */}
                <div className="absolute -z-10 inset-0 bg-[#0094D9]/10 blur-3xl transform scale-110"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}