import React, { useState } from 'react';
import { 
  Droplets, 
  Building2, 
  Briefcase, 
  UtensilsCrossed, 
  Hammer, 
  Sparkles, 
  Wind, 
  Zap,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Food Plant Sanitation',
      description: 'Professional sanitation solutions tailored for food processing facilities',
      icon: UtensilsCrossed,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning services for businesses and commercial spaces',
      icon: Building2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Office Cleaning',
      description: 'Maintain a clean and productive workspace with our office solutions',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Restaurant Cleaning',
      description: 'Specialized cleaning to ensure health and safety standards compliance',
      icon: UtensilsCrossed,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Construction Cleaning',
      description: 'Post-construction debris removal and site cleaning expertise',
      icon: Hammer,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Strip and Wax',
      description: 'Professional floor stripping and waxing for lasting shine',
      icon: Sparkles,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 7,
      title: 'Deep/Steam Cleaning',
      description: 'Intensive deep cleaning and steam treatment for stubborn dirt',
      icon: Droplets,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 8,
      title: 'Powerwash',
      description: 'High-pressure cleaning for exterior surfaces and tough grime',
      icon: Wind,
      color: 'from-sky-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins scroll-m-10" id="services">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 bg-[#a2dcf7] text-black rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#0094D9] text-center mb-6">
          Key benefits that set us apart from other cleaning services
        </h2>
        <p className="text-center text-black text-lg max-w-2xl mx-auto">
          Choose from our comprehensive range of professional cleaning solutions designed to meet every need
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-full"
              >
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 blur-xl`}
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-gray-200 flex flex-col">
                  {/* Icon Container */}
                  <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
                    backgroundImage: hoveredIndex === index ? `linear-gradient(135deg, var(--color-from), var(--color-to))` : 'none'
                  }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <button className={`mt-6 inline-flex items-center text-sm font-semibold transition-all duration-300 group/btn`}>
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover/btn:text-transparent`}>
                      Learn More
                    </span>
                    <ArrowRight className={`ml-2 w-4 h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover/btn:translate-x-1 transition-transform duration-300`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="mt-16 text-center">
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
          <span>Get Started Today</span>
          <Zap className="ml-2 w-5 h-5" />
        </button>
      </div> */}
    </div>
  );
}