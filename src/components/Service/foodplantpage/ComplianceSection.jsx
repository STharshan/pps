"use client";
import React from "react";
import {
  Shield,
  ClipboardCheck,
  FileCheck,
  CircleCheck,
} from "lucide-react";

export default function ComplianceSection() {
  const complianceData = [
    {
      title: "HACCP Standards",
      desc: "Full compliance with Hazard Analysis and Critical Control Points protocols.",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Critical control point monitoring",
        "Hazard analysis documentation",
        "Corrective action procedures",
        "Verification and validation",
      ],
    },
    {
      title: "CFIA Aligned",
      desc: "Canadian Food Inspection Agency compliant sanitation practices.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      items: [
        "Food safety regulations compliance",
        "Inspection-ready documentation",
        "Traceability systems",
        "Preventive control plans",
      ],
    },
    {
      title: "ISO 22000",
      desc: "International food safety management system certification.",
      icon: <FileCheck className="w-6 h-6" />,
      items: [
        "Food safety management systems",
        "Communication protocols",
        "Prerequisite programs",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section
      id="compliance"
      className="py-20 bg-white relative overflow-hidden px-6 sm:px-8 lg:px-12"
    >
      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0094D9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#36AFE7]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== Left: Image & Stats ===== */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/food-safety-compliance-certification-documents-and.jpg"
                alt="Compliance and certification"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>

              {/* Stats Boxes */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {[
                  { label: "Compliant", value: "100%" },
                  { label: "Certifications", value: "3" },
                  { label: "Response", value: "24h" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 bg-white/90 backdrop-blur-sm border border-[#0094D9]/20 rounded-lg p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-bold text-[#0094D9] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right: Content ===== */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Commitment to{" "}
              <span className="text-[#0094D9]">Compliance</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We operate according to HACCP, CFIA, and ISO 22000 standards,
              maintaining detailed inspection reports and documentation for
              every project.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              Our compliance-focused approach ensures your facility is always
              audit-ready, clean, and fully safe for operation.
            </p>

            <div className="space-y-4">
              {complianceData.map((item, index) => (
                <div
                  key={index}
                  className="group border rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg bg-[#0094D9]/10 flex items-center justify-center flex-shrink-0 
                        group-hover:bg-[#0094D9] group-hover:scale-110 transition-all duration-300"
                      >
                        {React.cloneElement(item.icon, {
                          className:
                            "w-6 h-6 text-[#0094D9] group-hover:text-white transition-colors",
                        })}
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#0094D9] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Expandable Details */}
                        <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100">
                          <div className="pt-4 border-t border-gray-200">
                            <div className="grid gap-2">
                              {item.items.map((text, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <CircleCheck className="w-4 h-4 text-[#0094D9] flex-shrink-0" />
                                  <span className="text-gray-700">{text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ===== End Right ===== */}
        </div>
      </div>
    </section>
  );
}
