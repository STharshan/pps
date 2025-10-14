import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Food Plant Sanitation',
      description: 'Professional sanitation solutions tailored for food processing facilities',
      image: '/s1.jpg', // Replace with your image path
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning services for businesses and commercial spaces',
      image: '/s2.jpg', // Replace with your image path
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Office Cleaning',
      description: 'Maintain a clean and productive workspace with our office solutions',
      image: '/s3.jpg', // Replace with your image path
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Restaurant Cleaning',
      description: 'Specialized cleaning to ensure health and safety standards compliance',
      image: '/s4.jpg', // Replace with your image path
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Construction Cleaning',
      description: 'Post-construction debris removal and site cleaning expertise',
      image: '/s5.jpg', // Replace with your image path
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Strip and Wax',
      description: 'Professional floor stripping and waxing for lasting shine',
      image: '/s6.jpg', // Replace with your image path
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 7,
      title: 'Deep/Steam Cleaning',
      description: 'Intensive deep cleaning and steam treatment for stubborn dirt',
      image: '/s7.jpg', // Replace with your image path
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 8,
      title: 'Powerwash',
      description: 'High-pressure cleaning for exterior surfaces and tough grime',
      image: '/s8.jpg', // Replace with your image path
      color: 'from-sky-500 to-blue-500',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins scroll-m-10" id="services">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-4">
          <h2 className="text-[#0094D9] font-bold text-lg tracking-widest uppercase mb-2">
            • Our Services
          </h2>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-6 max-w-3xl mx-auto">
          Key benefits that set us apart from other cleaning services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
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
                  {/* Image Container */}
                  <div className="mb-6 flex items-center justify-center w-full h-52 md:h-64 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
                    backgroundImage: hoveredIndex === index ? `linear-gradient(135deg, var(--color-from), var(--color-to))` : 'none'
                  }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <button className={`mt-6 inline-flex items-center text-sm font-semibold transition-all duration-300 group/btn`}>
                     <button className="bg-[#0094D9] hover:bg-[#36afe7] text-white px-6 py-2 items-center justify-center mx-auto rounded-md uppercase tracking-widest text-sm font-semibold transition">
            Learn More 
          </button>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
