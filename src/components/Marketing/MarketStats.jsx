"use client";
import React from "react";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FBFD]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Stat 1 */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-[#0094D9]">
              99.9%
            </div>
            <div className="text-sm sm:text-base text-[#1C3B45]/70">
              On-time completion rate
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-[#0094D9]">
              24/7
            </div>
            <div className="text-sm sm:text-base text-[#1C3B45]/70">
              Client support access
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-[#0094D9]">
              Custom
            </div>
            <div className="text-sm sm:text-base text-[#1C3B45]/70">
              In-house software platform
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-[#0094D9]">
              500+
            </div>
            <div className="text-sm sm:text-base text-[#1C3B45]/70">
              Happy clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}